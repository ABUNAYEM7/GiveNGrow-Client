import { TypeAnimation } from "react-type-animation"
import logo from "../assets/logo.PNG"
import { Link } from "react-router"
const Footer = () => {
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
    <h6 className="footer-title opacity-90 text-primary">Join Us</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn bg-secondary text-white join-item">JoinUs</button>
      </div>
    </fieldset>
  </form>
</footer>
  )
}

export default Footer
