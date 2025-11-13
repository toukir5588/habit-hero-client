import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import LoadingSpin from "../LoadingSpinar/LoadingSpin";
import useAxiosSecure from "../../useAxiosSecure/useAxiosSecure";

const MyHabits = () => {
  const { user, loading } = useContext(AuthContext);
  const [habits, setHabits] = useState([]);
  const [selectedHabit, setSelectedHabit] = useState(null);
  // console.log(habits);
  const initialAxios = useAxiosSecure();

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://habit-hero-api-server.vercel.app/myHabits?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched habits:", data);
          setHabits(data);
        })
        .catch((err) => console.error("Error fetching habits:", err));
    }
  }, [user]);

  const openUpdateModal = (habits) => {
    setSelectedHabit(habits);
    document.getElementById("my_modal_5").showModal();
    // console.log(habits);
  };
  const handleUpdateHabit = async (e, id) => {
    e.preventDefault();
    const form = e.target;
    // console.log(id);
    const updatedHabit = {
      title: form.habitTitle.value,
      category: form.category.value,
      reminderTime: form.reminderTime.value,
      image: form.imageURL.value,
      description: form.description.value,
    };

    try {
      const res = await initialAxios.patch(
        `https://habit-hero-api-server.vercel.app/habits/${selectedHabit._id}`,
        updatedHabit
      );
      if (res.data.modifiedCount > 0) {
        toast.success(
          "Updated!",
          "Your habit has been updated successfully.",
          "success"
        );

        setHabits((prev) =>
          prev.map((h) =>
            h._id === selectedHabit._id ? { ...h, ...updatedHabit } : h
          )
        );
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to update habit", "error");
    }
    
  };
  const handleDeleteHabit = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://habit-hero-api-server.vercel.app/habits/${_id}`, {
          method: "DELETE",
        })

        
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your habit has been deleted.", "success");
              const remaining = habits.filter((h) => h._id !== _id);
              setHabits(remaining);
            }
          });
      }
    });
  };

  const handleMarkComplete = async (id) => {
    try {
      const res = await initialAxios.patch(`/habits/complete/${id}`);

      if (res.data.modifiedCount > 0) {
        const today = new Date().toISOString().split("T")[0];

        setHabits((prev) =>
          prev.map((h) =>
            h._id === id
              ? {
                  ...h,
                  completionHistory: [...(h.completionHistory || []), today],
                }
              : h
          )
        );

        toast.success("Done!", "Habit marked complete for today 🎉", "success");
      } else {
        toast.info("Oops! Already marked complete for today!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error", "Failed to mark habit complete", "error");
    }
  };

  return (
    <div className="md:max-w-11/12 h-screen md:px-4  mx-auto">
      {loading ? (
        <LoadingSpin></LoadingSpin>
      ) : (
        <div className="  min-h-[400px]">
          <h3 className="text-xl font-bold text-center mt-10 mb-4">
            My Habits: {habits.length}
          </h3>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr className="flex justify-around md:justify-between text-[10px] md:text-lg">
                  <th className="hidden md:block">#</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Reminder Time</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {habits.map((data, index) => (
                  <tr
                    key={data._id}
                    className="flex justify-around md:justify-between text-[10px] text-lg"
                  >
                    <td className="hidden md:block">{index + 1}</td>
                    <td className="flex items-center gap-3">
                      <div>
                        <p className="font-semibold">{data.title}</p>
                      </div>
                    </td>
                    <td>{data.category}</td>
                    <td>{data.reminderTime}</td>
                    <td>
                      <div className="flex gap-2 flex-col md:flex-row ">
                        <button
                          onClick={() => openUpdateModal(data)}
                          className="btn btn-outline  text-[10px] md:text-[12px] text-yellow-700"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => handleDeleteHabit(data._id)}
                          className="btn btn-outline text-[10px] md:text-[12px]  text-red-500"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => handleMarkComplete(data._id)}
                          className="btn btn-outline text-[10px] md:text-[12px]  text-green-500"
                        >
                          Mark Complete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {habits.length === 0 && (
                  <tr>
                    <td colSpan="5" className="text-center py-4">
                      No habits found for this user.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* update modal */}
          <div>
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <div className="card  from-indigo-50 to-white  shrink-0 shadow-2xl">
                  <div className="card-body w-full">
                    <h1 className="text-2xl font-bold text-center mb-2">
                      Update Habit
                    </h1>

                    {selectedHabit && (
                      <form
                        onSubmit={(e) =>
                          handleUpdateHabit(e, selectedHabit._id)
                        }
                      >
                        <fieldset className="fieldset  space-y-2">
                          <div className="flex w-full flex-col md:flex-row gap-3">
                            <div className="flex-1 ">
                              <label className="label">Habit Title</label>
                              <input
                                type="text"
                                name="habitTitle"
                                className="input input-bordered w-full"
                                placeholder="e.g. Read 20 pages"
                                required
                              />
                            </div>

                            <div className="flex-1">
                              <label className="label">Category</label>
                              <select
                                name="category"
                                className="select select-bordered w-full"
                                required
                              >
                                <option value="">Select category</option>
                                <option>Morning</option>
                                <option>Work</option>
                                <option>Fitness</option>
                                <option>Evening</option>
                                <option>Study</option>
                              </select>
                            </div>
                          </div>

                          <div className="flex w-full gap-3 flex-col md:flex-row justify-between">
                            <div className="flex-1">
                              <label className="label">Reminder Time</label>
                              <input
                                type="time"
                                name="reminderTime"
                                className="input input-bordered w-full"
                                required
                              />
                            </div>

                            <div className="flex-1">
                              <label className="label">Upload Image</label>
                              <input
                                type="url"
                                name="imageURL"
                                className="input input-bordered w-full"
                                placeholder="e.g. Read 20 pages"
                              />
                            </div>
                          </div>

                          <label className="label">
                            Description (Optional)
                          </label>
                          <textarea
                            name="description"
                            className="textarea textarea-bordered w-full"
                            placeholder="Short description about the habit"
                          ></textarea>

                          <label className="label mt-4">User Email</label>
                          <input
                            type="email"
                            name="email"
                            defaultValue={user.email}
                            readOnly
                            className="input input-bordered bg-gray-100 w-full"
                          />

                          <label className="label">User Name</label>
                          <input
                            type="text"
                            name="name"
                            readOnly
                            defaultValue={user.displayName}
                            className="input input-bordered bg-gray-100 w-full"
                          />

                          <button className="btn btn-neutral mt-4 w-full">
                            Add Habit
                          </button>
                        </fieldset>
                      </form>
                    )}
                  </div>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
          {/* end update modal */}
        </div>
      )}
    </div>
  );
};

export default MyHabits;
