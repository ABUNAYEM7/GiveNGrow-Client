import { Link } from "react-router";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { useContext, useState,useNavigate } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'

const Register = () => {
  const [show,setShow] = useState(false)
  const [error,setError] = useState('')
  const navigate =useNavigate()

  const {registerUser} = useContext(AuthContext)

  const submitHandler =(e)=>{
    e.preventDefault()
    setError('')
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const pass = form.pass.value;

    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!regex.test(pass)) {
      setError("Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.");
      return;
    }

    registerUser(email,pass)
    .then(user=>{
      if(user){
        form.reset()
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Registration successful",
          showConfirmButton: false,
          timer: 1500,
          navigate('/')
        });
      }
    })
    .catch(err=>setError(err.message || err.code))
    
  }


  return (
    <div className="hero flex items-center justify-center  min-h-[510px]">
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
        <form 
        onSubmit={submitHandler}
        className="card-body">
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

            {
              error && <label className="label">
              <p className='text-lg font-bold text-red-600'>{error}</p>
            </label>
            }
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-primary text-white hover:text-primary">Login</button>
          </div>
          <h3 className="text-lg font-medium my-3 text-center">Don't Have Any Account ? <Link 
          className="text-primary font-bold" 
          to={'/UserRegistration'}>LogIn</Link></h3>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Register
