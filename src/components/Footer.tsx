
import logo from "../assets/logo-text.png";

const Footer = () => {
  const groups = {
    Product: ["Home", "Technologies", "Projects"],
    Company: ["About", "Contact", "Careers"],
    Legal: ["Privacy Policy", "Terms of service"],
  };

  return (
    <footer className="mt-20 border-t border-slate-200 bg-white text-black-300">
      <div className="container mx-auto grid gap-10 py-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="" className="flex items-center gap-2 font-bold">
            <img src={logo} className="flex items-center" alt="" />
          </a>
          <p className="mt-4 max-w-xs text-sm leading-6 text-black">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="mt-5 flex gap-4 text-sm text-shadow-black">
            <a href="#github" className="hover:text-[#DB2777]">GitHub</a>
            <a href="#twitter" className="hover:text-[#DB2777]">Twitter</a>
            <a href="#linkedin" className="hover:text-[#DB2777]">LinkedIn</a>
          </div>
        </div>

        {Object.entries(groups).map(([title, items]) => (
          <div key={title}>
            <h3 className="font-semibold text-black">{title}</h3>
            <div className="mt-4 space-y-3">
              {items.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-sm text-shadow-black hover:text-[#DB2777]"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-300">
        <div className="container mx-auto flex flex-col gap-3 py-5 text-xs text-shadow-black sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#privacy" className="hover:text-[#DB2777]">Privacy</a>
            <a href="#terms" className="hover:text-[#DB2777]">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;