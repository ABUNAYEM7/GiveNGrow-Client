import React, { useState } from "react";
import { Link } from "react-router";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const SignIn = () => {
  const [show,setShow] = useState(false)
  return (
    <div className="hero flex items-center justify-center  min-h-[510px]">
      <div className="hero-content w-full  justify-around flex-col lg:flex-row-reverse">
        <div className="w-full lg:w-2/4  text-center">
          <h1 className="text-5xl font-bold">Login now </h1>
          <h3 className="w-11/12 text-center text-3xl  font-bold text-primary mt-3">
              <TypeAnimation
                sequence={[
                  "Join hands in making  a lasting",
                  2000,
                  "Impact with every contribution",
                  2000,
                  "Support campaigns, fund causes,",
                  2000,
                  "And help us grow together",
                  2000,
                ]}
                wrapper="p"
                cursor={true}
                repeat={Infinity}
              />
            </h3>
        </div>
        <div className="card bg-base-100 w-11/12 md:w-1/2 lg:w-2/5 shadow-2xl">
          <form className="card-body">
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
                type={show ? 'text' :"password"}
                placeholder="password"
                className="input input-bordered"
                required
              />

              <button 
              onClick={()=>setShow(!show)}
              className="absolute top-12 right-3"
              type="button">{show? 
              <FaRegEye size={22}/> 
              : 
              <FaEyeSlash size={22}/>}
              </button>

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-primary text-white hover:text-primary">Login</button>
            </div>
            <h3 className="text-lg font-medium my-3 text-center">Don't Have Any Account ? <Link className="text-primary font-bold" to={'/UserRegistration/Register'}>Register</Link></h3>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
