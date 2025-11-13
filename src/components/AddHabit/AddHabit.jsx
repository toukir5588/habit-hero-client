import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import useAxiosSecure from "../../useAxiosSecure/useAxiosSecure";

const AddHabit = () => {
  const { user } = useContext(AuthContext);

  const axiosIntens = useAxiosSecure();
  const handleAddHabit = (e) => {
    e.preventDefault();
    const title = e.target.habitTitle.value;
    const category = e.target.category.value;
    const reminderTime = e.target.reminderTime.value;
    const image = e.target.imageURL.value;
    const description = e.target.description.value;
    const userName = e.target.name.value;
    const userEmail = e.target.email.value;
    console.log(
      title,
      category,
      reminderTime,
      userName,
      userEmail,
      description
    );

    const newHabit = {
      title,
      category,
      reminderTime,
      userName,
      image,
      description,
      email: user.email,
    };

    axiosIntens
      .post("/habits", newHabit)
      .then((res) => {
        toast.success("Habit successfully added!");
      })
      .catch((error) => {
        toast.error(error.message);
      });

    // setHabitTitle("");
    // setDescription("");
    // setCategory("");
    // setReminderTime("");
    // setImage(null);
    // setPreview("");
    // setUploadedImageUrl("");
    // setUploadStatus("");
    // setUploadError("");
  };

  return (
    <div className="max-w-11/12 mx-auto my-20 flex items-center justify-center">
      <div className="card  from-indigo-50 to-white w-[600px] shrink-0 shadow-2xl">
        <div className="card-body w-full">
          <h1 className="text-2xl font-bold text-center mb-2">Add Habit</h1>
          <form onSubmit={handleAddHabit}>
            <fieldset className="fieldset  space-y-2">
              <div className="flex w-full gap-3">
                <div className="flex-1">
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

              <div className="flex w-full gap-3 justify-between">
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
                    required
                  />
                </div>
              </div>

              <label className="label">Description</label>
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

              <button className="btn btn-neutral mt-4 w-full">Add Habit</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddHabit;
