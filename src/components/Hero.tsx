
import heroImage from "../assets/banner-stack.png";


const Hero = () => {
  return (
    <section className=" container mx-auto section-anchor">
      <div className="container-page grid min-h-127 items-center gap-10 py-14 md:grid-cols-2 md:py-20">
        <div>
          <h1 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl">
            Build Your Ideal <br />
            <span className="brand-gradient ">Development Stack</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            Explore modern technologies, compare your options, and create a
            personalized development stack for your next project.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#technologies"
              className="rounded-full px-5 py-3 text-sm font-bold text-white shadow-lg shadow-pink-200 brand-gradient-bg"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={heroImage}
            alt="Colorful 3D development technology illustration"
            className="w-full max-w-120 object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;