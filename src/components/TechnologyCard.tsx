import type { Technology } from "../types/technology";

type Props = {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
};

const TechnologyCard = ({ technology, isAdded, onAdd }: Props) => {
  return (
    <article className="flex min-h-77 flex-col rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg p-5">
      <div className="flex items-start justify-between gap-3">
        <img
          src={technology.icon}
          alt={`${technology.name} icon`}
          className="h-11 w-11 object-contain"
          loading="lazy"
        />
        <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-600">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-bold text-slate-950">{technology.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
        {technology.description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-6">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          {technology.category}
        </span>
        <span className="text-xs font-medium text-slate-500">
          {technology.difficulty}
        </span>
        <span className="text-sm font-bold text-slate-700 tex">
          <span className="mr-1 text-amber-400">★</span>
          {technology.rating}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
        <button
          disabled={isAdded}
          onClick={() => onAdd(technology)}
          className={`w-full rounded-full  py-4 text-[15px] font-bold transition ${
            isAdded
              ? "cursor-not-allowed bg-slate-100 text-slate-400"
              : "text-white hover:opacity-90 brand-gradient-bg"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </article>
  );
}

export default TechnologyCard;