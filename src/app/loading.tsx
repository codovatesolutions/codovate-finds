import { BookOpen } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4 px-4 text-center">
      <div className="w-12 h-12 rounded-2xl bg-blue-950 border border-blue-800 flex items-center justify-center text-blue-400 animate-pulse shadow-lg">
        <BookOpen className="w-6 h-6" />
      </div>
      <div className="space-y-1">
        <h3 className="text-base font-bold text-white">Loading Codovate Finds...</h3>
        <p className="text-xs text-slate-400">Preparing setup guides and buying recommendations</p>
      </div>
    </div>
  );
}
