import type { Technology } from "../types/technology";

type Props = {
    stack: Technology[];
    onRemove: (id: string) => void;
    onRemoveAll: () => void;
};

const StackSidebar = ({ stack, onRemove, onRemoveAll }: Props) => {
    return (
        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
            <div className="flex items-center justify-between gap-3">
                <div>
                    <h2 className="text-xl font-bold text-slate-950">Your Stack</h2>
                    <p className="mt-1 text-xs text-slate-500">
                        {stack.length} Technology{stack.length === 1 ? "" : "ies"} Selected
                    </p>
                </div>
                {stack.length > 0 && (
                    <button
                        onClick={onRemoveAll}
                        className="text-xs font-bold text-rose-500 hover:text-rose-700"
                    >
                        Remove All
                    </button>
                )}
            </div>

            {stack.length === 0 ? (
                <div className="mt-6 rounded-xl bg-slate-50 p-6 text-center">
                    <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-white text-xl shadow-sm">
                        +
                    </div>
                    <p className="mt-3 text-sm font-semibold text-slate-700">
                        Your stack is empty
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                        Add technologies from the list to build your stack.
                    </p>
                </div>
            ) : (
                <div className="mt-5 space-y-3">
                    {stack.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center gap-3 rounded-xl border border-slate-100 p-3"
                        >
                            <img src={item.icon} alt="" className="h-9 w-9 object-contain" />
                            <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-bold text-slate-800">
                                    {item.name}
                                </p>
                                <p className="text-xs text-slate-500">{item.category}</p>
                            </div>
                            <button
                                onClick={() => onRemove(item.id)}
                                aria-label={`Remove ${item.name}`}
                                className="grid h-8 w-8 place-items-center rounded-full text-slate-400 hover:bg-rose-50 hover:text-rose-500"
                            >
                                ×
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </aside>
    );
}

export default StackSidebar;