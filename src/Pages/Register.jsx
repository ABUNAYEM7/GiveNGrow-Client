import { Link, useLocation } from "react-router";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet";

const Register = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();
  const { registerUser, updateUserProfile, signInWithGoogle } =
    useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const pass = form.pass.value;

    if (!/[a-z]/.test(pass)) {
      setError("Password must contain at least one lowercase letter.");
      return false;
    }
  
    // Check for uppercase letter
    if (!/[A-Z]/.test(pass)) {
      setError("Password must contain at least one uppercase letter.");
      return false;
    }
  
    // Check for length (at least 6 characters)
    if (pass.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }
  
    registerUser(email, pass)
      .then((user) => {
        if (user) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Registration successful",
            showConfirmButton: false,
            timer: 1500,
          });
          const updatedData = {
            displayName: name,
            photoURL: photo,
          };
          updateUserProfile(updatedData);
          form.reset();
          if (state) {
            navigate(state);
          } else {
            navigate("/");
          }
        }
      })
      .catch((err) =>
        setError(err.message.split("/")[1].split(")")[0] || err.code)
      );
  };

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
            navigate(state);
          } else {
            navigate("/");
          }
        }
      })
      .catch((err) => setError(err.message || err.code));
  };

  return (
    <div className="hero flex items-center justify-center  min-h-[510px]">
      <Helmet>
        <meta charSet="utf-8" />
        <title>G&G || SIGN UP </title>
      </Helmet>
      <div className="hero-content w-full  justify-around flex-col lg:flex-row-reverse">
        <div className="w-full lg:w-2/4 min-h-36 text-center">
          <h1 className="text-5xl font-bold">Register now </h1>
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
          <form onSubmit={submitHandler} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
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

              {error && (
                <label className="label">
                  <p className="text-lg font-bold text-red-600">{error}</p>
                </label>
              )}
            </div>
            <div className="form-control mt-6 space-y-5">
              <button className="btn bg-primary text-white hover:text-primary">
                Register
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
              Don't Have Any Account ?{" "}
              <Link className="text-primary font-bold" to={"/SignIn"}>
                LogIn
              </Link>
            </h3>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
