import { TypeAnimation } from "react-type-animation"
import logo from "../assets/logo.PNG"
import { Link } from "react-router"
import { useContext } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider"
import Swal from "sweetalert2"

const Footer = () => {
  const {user} = useContext(AuthContext)

  return (
    <footer className="footer justify-items-center bg-base-200 text-base-content p-10">
  <nav className="w-24 h-40 ">
    <img 
    className="w-20 h-20 rounded-xl"
    src={logo} alt="Logo" />
    <h3 className="w-11/12  text-xl  font-medium text-primary mt-3">
            <TypeAnimation
              sequence={[
                "Let's Grow",
                2000,
                "With GiveNGrow",
                2000,
              ]}
              wrapper="p"
              cursor={true}
              repeat={Infinity}
            />
          </h3>
  </nav>
  <nav>
    <h6 className="footer-title opacity-90 text-primary">Company</h6>
    <Link className="link link-hover">About us</Link>
    <Link className="link link-hover">Contact</Link>
    <Link className="link link-hover">Press Info</Link>
  </nav>
  <nav>
    <h6 className="footer-title opacity-90 text-primary">Your Rights</h6>
    <Link className="link link-hover">Terms of use</Link>
    <Link className="link link-hover">Privacy policy</Link>
    <Link className="link link-hover">cookie policy</Link>
  </nav>
  <form>
    <h6 className="w-[300px] footer-title opacity-90 text-primary  text-center">Join Us</h6>
    <fieldset className="form-control">
      <div className="join">
        {user?.email ?
         <h3 className="w-11/12  text-xl  font-medium text-primary mt-3 ">
         <TypeAnimation
           sequence={[
             `${user?.email?.split('@')[0]}`,
             2000,
             "Thank For Join us",
             2000,
           ]}
           wrapper="p"
           cursor={true}
           repeat={Infinity}
         />
       </h3>
         : 
        <div className="flex flex-col md:flex-row md:gap-0 gap-3">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered  md:join-item" />
        <button 
        className="btn bg-secondary text-white md:join-item">JoinUs</button>
        </div>}
      </div>
    </fieldset>
  </form>
</footer>
  )
}

export default Footer
