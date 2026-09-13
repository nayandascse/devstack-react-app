import { useEffect, useMemo, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechnologyCard from './components/TechnologyCard'
import StackSidebar from "./components/StackSidebar";
import type { Technology } from "./types/technology";
import Footer from "./components/Footer";


function App() {

  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const loadTechnologies = async () => {
    try {
      const response = await fetch("/public/technologies.json");

      if (!response.ok) {
        throw new Error("Failed to load technologies");
      }

      const data: Technology[] = await response.json();

     
      setTimeout(() => {
        setTechnologies(data);
        setLoading(false);
      }, 1000);

    } catch {
      toast.error("Could not load technology data.");
      setLoading(false);
    }
  };

  loadTechnologies();
}, []);

  const stackIds = useMemo(() => new Set(stack.map((item) => item.id)), [stack]);

  const addToStack = (technology: Technology) => {
    if (stackIds.has(technology.id)) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setStack((current) => [...current, technology]);
    toast.success(`${technology.name} added to your stack.`);
  };

  const removeFromStack = (id: string) => {
    const removed = stack.find((item) => item.id === id);
    setStack((current) => current.filter((item) => item.id !== id));

    if (removed) {
      toast.info(`${removed.name} removed from your stack.`);
    }
  };

  const removeAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.info("All technologies removed from your stack.");
  };

  return (
    <>
      <Navbar />
      <Hero />
      <main id="technologies" className="container mx-auto section-anchor container-page py-12 ">
        <div className="mb-8">
          <h2 className="mt-2 text-3xl font-extrabold">
            Explore the<span className="mt-2 font-extrabold brand-gradient "> Technologies</span>
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Pick the tools you want in your development stack.
          </p>
        </div>

        {loading ? (
          <div className="flex min-h-64 items-center justify-center rounded-2xl border border-slate-200 bg-white">
            <div className="flex items-center gap-3 text-sm font-semibold text-slate-600">
              <span className="h-5 w-5 animate-spin rounded-full border-2 border-slate-200 border-t-pink-500" />
              Loading technologies...
            </div>
          </div>
        ) : (
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isAdded={stackIds.has(technology.id)}
                  onAdd={addToStack}
                />
              ))}
            </div>
            <StackSidebar
              stack={stack}
              onRemove={removeFromStack}
              onRemoveAll={removeAll}
            />

          </div>
        )}
      </main>

      <Footer />
      <ToastContainer position="bottom-right" autoClose={2200} theme="light" />

    </>
  )
}

export default App
