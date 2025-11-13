import React, { use, useContext, useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthContext";
import AnimationY from "../Animation/AnimationY";
import AnimationLTR from "../Animation/AnimationLTR";
import AnimationRTL from "../Animation/AnimationRTL";

const Login = () => {
  const { signInWithGoogle, signInGoogle, setUser, forgotPasswordFunc } =
    use(AuthContext);
  const [eye, setEye] = useState(false);
  const navigate = useNavigate();
  const emailRef = useRef(null);

  const handleGoogleSignin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("your account is success");
        navigate("/");

        // console.log(user);
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

  const handleEmailSignin = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signInGoogle(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        // console.log(user);

        toast.success("your account is success");
        // console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
        // ..
      });
  };

  const handleForgotPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.error("please giv your email address");
      return;
    }
    forgotPasswordFunc(email)
      .then(() => {
        toast.success("Password reset email sent!");
        // console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
        // ..
      });
  };

  return (
    <div className="w-11/12 mx-auto my-10 flex justify-center items-center text-primary">
     <title>Login</title>
      <AnimationY>
        <div className="card gb-gradient w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <AnimationLTR>
              <h1 className="text-2xl font-bold text-center">
                Login your account
              </h1>
            </AnimationLTR>
            <form onSubmit={handleEmailSignin}>
              <fieldset className="fieldset">
                <AnimationRTL>
                  <div>
                    <label className="label">Email</label>
                    <input
                      ref={emailRef}
                      type="email"
                      name="email"
                      className="input text-[#059669]"
                      placeholder="Email"
                    />
                  </div>
                </AnimationRTL>
                <AnimationRTL>
                  <div className="relative">
                    <label className="label">Password</label>
                    <button
                      type="button"
                      onClick={handleEye}
                      className=" bg-transparent outline-0 border-0 cursor-pointer absolute top-[28px] right-[30px] z-10"
                    >
                      {eye ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                    </button>
                    <input
                      type={eye ? "text" : "password"}
                      name="password"
                      className="input text-[#059669]"
                      placeholder="Password"
                    />
                  </div>
                </AnimationRTL>
                <div>
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="link link-hover"
                  >
                    Forgot password?
                  </button>
                </div>
              </fieldset>
            </form>
      <AnimationLTR>
           <div className="flex flex-col">
               <button className="btn btn-neutral mt-4">Login</button>
            <button
              onClick={handleGoogleSignin}
              className="btn btn-primary mt-4"
            >
              <FcGoogle /> SignUp With Google
            </button>
         </div>
      </AnimationLTR>

            <p className=" font-medium text-center">
              You have a don't account pleas{" "}
              <Link className="text-blue-700 hover:underline" to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </AnimationY>
    </div>
  );
};

export default Login;
