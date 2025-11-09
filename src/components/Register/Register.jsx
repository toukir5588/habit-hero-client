import { use, useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthContext";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [eye, setEye] = useState(false);
  const navigate = useNavigate();


  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      return toast.error("Your password must be at least 6 characters long.");
    }
    if (!/[A-Z]/.test(password)) {
      return toast.error(
        "Your password must contain at least one uppercase letter."
      );
    }
    if (!/[a-z]/.test(password)) {
      return toast.error(
        "Your password must contain at least one lowercase letter."
      );
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const newUser = {
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL,
        };

        // create user in the database
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("data after user save", data);
          });

        toast.success("your account is success");
        navigate("/");
      })
      
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
        // ..
      });
  };

  const handleEye = () => {
    // console.log("onclick");
    setEye(!eye);
  };

  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-2xl font-bold text-center">
            Create Your account
          </h1>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset md:w-80">
              {/* name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Your Name"
                required
              />
              {/* photoURL */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photoURL"
                className="input"
                placeholder="Photo URL"
                required
              />
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />
              {/* password */}
              <div className="relative">
                <label className="label">Password</label>
                <button
                  type="button"
                  onClick={handleEye}
                  className="btn bg-transparent outline-0 border-0 absolute top-[20px] right-[0px] z-10"
                >
                  
                  {eye ? <FaEye size={20} />: <FaEyeSlash size={20} />}
                </button>
                <input
                  type={eye ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="Password"
                />
              </div>
              <div></div>
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </form>

          <p className="text-lg font-medium text-center">
            You hav a Already account pleas{" "}
            <Link className="text-blue-700 hover:underline" to="/auth/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
