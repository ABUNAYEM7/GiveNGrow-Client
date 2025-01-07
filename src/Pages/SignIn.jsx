import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const SignIn = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate()
  const { signInWithGoogle,userLogIn } = useContext(AuthContext);
  const {state} = useLocation()

  const submitHandler =(e)=>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const pass = form.pass.value;

    userLogIn(email,pass)
    .then((user)=>{
      if(user){
        form.reset()
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Registration successful",
          showConfirmButton: false,
          timer: 1500,
        })
        if(state){
          navigate(state)
        }else{
          navigate('/')
        }
      }
    }) 
    .catch(err=>{
      const errorMessage = err.message.split('/')[1].split(')')[0];
      Swal.fire({
        position: "center",
        icon: "error",
        title: errorMessage,
        showConfirmButton: false,
        timer: 1500,
      })
    })
  }

  const googleClickHandler = () => {
    signInWithGoogle()
      .then((user) => {
        if (user) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "LogIn successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          if (state) {
            navigate(state)
          } else {
            navigate("/")
          };
        }
      })
      .catch((err) => setError(err.message || err.code));
  };

  return (
    <div className="hero flex items-center justify-center  min-h-[510px]">
      <Helmet>
        <meta charSet="utf-8" />
        <title>G&G || SiGN IN</title>
      </Helmet>
      <div className="hero-content w-full  justify-around flex-col lg:flex-row-reverse">
        <div className="w-full lg:w-2/4  text-center">
          <h1 className="text-5xl font-bold">Login now </h1>
          <h3 className="w-11/12 text-center text-3xl  font-bold text-primary mt-3 md:ml-10">
            <TypeAnimation
              sequence={[
                "Join hands in making ",
                1000,
                "a lasting",
                1000,
                "Impact with",
                1000,
                "every contribution",
                1000,
                "Support campaigns, ",
                1000,
                "fund causes,",
                1000,
                "And help us",
                1000,
                "grow together",
                2000,
              ]}
              wrapper="p"
              cursor={true}
              repeat={Infinity}
            />
          </h3>
        </div>
        <div className="card bg-base-100 w-11/12 md:w-1/2 lg:w-2/5 shadow-2xl">
          <form 
          onSubmit={submitHandler}
          className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="pass"
                type={show ? "text" : "password"}
                placeholder="password"
                className="input input-bordered"
                required
              />

              <button
                onClick={() => setShow(!show)}
                className="absolute top-12 right-3"
                type="button"
              >
                {show ? <FaRegEye size={22} /> : <FaEyeSlash size={22} />}
              </button>

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6 space-y-5">
              <button className="btn bg-primary text-white hover:text-primary">
                Login
              </button>
              <button
                onClick={googleClickHandler}
                type="button"
                className="btn bg-secondary text-white hover:text-secondary"
              >
                LogIn With Google
              </button>
            </div>
            <h3 className="text-lg font-medium my-3 text-center">
              Don't Have Any Account ?
              <Link state={state} to={"/Register"} className="text-primary font-bold">
                Register
              </Link>
            </h3>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
