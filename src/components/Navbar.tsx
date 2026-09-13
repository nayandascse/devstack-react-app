
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/logo-text.png";

const Navbar = () => {

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <nav className="container mx-auto flex h-16 items-center justify-between gap-4">


        {/* Mobile left hamburger */}

        <div className="flex md:hidden items-center ">
          <RxHamburgerMenu />
        </div>

        {/* Desktop left + mobile center */}
        <a href="" className="flex items-center gap-2 font-bold">
          <img src={logo} className="flex items-center" alt="" />
        </a>

        <div>
          <ul className="hidden md:flex gap-4 items-center ">
            <li className="hover:text-[#DB2777]">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-[#DB2777]">
              <a href="/">Technologies</a>
            </li>
            <li className="hover:text-[#DB2777]">
              <a href="/">Projects</a>
            </li>
            <li className="hover:text-[#DB2777]">
              <a href="/">About</a>
            </li>
            <li className="hover:text-[#DB2777]">
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <a href="#signin" className="px-2 py-2 text-sm font-semibold text-slate-700">
            Sign In
          </a>
          <a
            href="#signup"
            className="rounded-full px-4 py-2 text-sm font-semibold text-white brand-gradient-bg"
          >
            Sign Up
          </a>
        </div>

      </nav>

    </header>
  );
}

export default Navbar;