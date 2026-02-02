import { useState } from "react";
import { Github, Sparkles, ChevronDown, ChevronUp } from "lucide-react";

type AiSuggestionProp = {
  suggestion: {
    commitMessage: string;
    suggestion: string;
    createdAt: Date;
  };
};

const AiSuggestionCard = ({ suggestion }: AiSuggestionProp) => {
  const [expanded, setExpanded] = useState(false);

  const shortText = suggestion.suggestion.slice(0, 300);
  const isLong = suggestion.suggestion.length > 120;

  return (
    <div className=" flex flex-col gap-y-5">
    <div
      className="
        bg-white/10 dark:bg-[#0d0d0d]/40 backdrop-blur-xl 
        border border-black/25 dark:border-white/25
        rounded-2xl p-5 
        transition-all 
        shadow-[0_0_10px_rgba(255,255,255,0.05)]
        hover:shadow-black/30
        dark:shadow-[0_0_10px_rgba(0,0,0,0.4)]
        dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
        scale-98
        hover:scale-100
      "
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <Github size={20} className="text-gray-400 dark:text-gray-300" />
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Commit pushed • {new Date(suggestion.createdAt).toLocaleString()}
        </p>
      </div>

      {/* Commit message */}
      <div className="mb-3">
        <p className="text-gray-500 dark:text-gray-400 text-sm">Commit:</p>

        <p
          className="
            font-semibold 
            bg-gray-200/10 dark:bg-white/5 
            p-2 rounded-lg border 
            border-black/10 dark:border-white/10 
            text-gray-900 dark:text-gray-100
          "
        >
          {suggestion.commitMessage}
        </p>
      </div>

      {/* Suggestion */}
      <div className="flex items-start gap-2">
        <Sparkles className="text-yellow-300 mt-1" size={18} />

        <div>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            {expanded ? suggestion.suggestion : shortText}
            {!expanded && isLong && "..."}
          </p>

          {/* Expand Button */}
          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="
                mt-2 flex items-center gap-1 text-sm 
                text-blue-600 dark:text-blue-400 
                hover:text-blue-500 dark:hover:text-blue-300 
                transition
              "
            >
              {expanded ? (
                <>
                  Show Less <ChevronUp size={16} />
                </>
              ) : (
                <>
                  Show More <ChevronDown size={16} />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
    <div
      className="
        bg-white/10 dark:bg-[#0d0d0d]/40 backdrop-blur-xl 
        border border-black/25 dark:border-white/25
        rounded-2xl p-5 
        transition-all 
        shadow-[0_0_10px_rgba(255,255,255,0.05)]
        hover:shadow-black/30
        dark:shadow-[0_0_10px_rgba(0,0,0,0.4)]
        dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
        scale-98
        hover:scale-100
      "
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <Github size={20} className="text-gray-400 dark:text-gray-300" />
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Commit pushed • {new Date(suggestion.createdAt).toLocaleString()}
        </p>
      </div>

      {/* Commit message */}
      <div className="mb-3">
        <p className="text-gray-500 dark:text-gray-400 text-sm">Commit:</p>

        <p
          className="
            font-semibold 
            bg-gray-200/10 dark:bg-white/5 
            p-2 rounded-lg border 
            border-black/10 dark:border-white/10 
            text-gray-900 dark:text-gray-100
          "
        >
          {suggestion.commitMessage}
        </p>
      </div>

      {/* Suggestion */}
      <div className="flex items-start gap-2">
        <Sparkles className="text-yellow-300 mt-1" size={18} />

        <div>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            {expanded ? suggestion.suggestion : shortText}
            {!expanded && isLong && "..."}
          </p>

          {/* Expand Button */}
          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="
                mt-2 flex items-center gap-1 text-sm 
                text-blue-600 dark:text-blue-400 
                hover:text-blue-500 dark:hover:text-blue-300 
                transition
              "
            >
              {expanded ? (
                <>
                  Show Less <ChevronUp size={16} />
                </>
              ) : (
                <>
                  Show More <ChevronDown size={16} />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
    <div
      className="
        bg-white/10 dark:bg-[#0d0d0d]/40 backdrop-blur-xl 
        border border-black/25 dark:border-white/25
        rounded-2xl p-5 
        transition-all 
        shadow-[0_0_10px_rgba(255,255,255,0.05)]
        hover:shadow-black/30
        dark:shadow-[0_0_10px_rgba(0,0,0,0.4)]
        dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
        scale-98
        hover:scale-100
      "
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <Github size={20} className="text-gray-400 dark:text-gray-300" />
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Commit pushed • {new Date(suggestion.createdAt).toLocaleString()}
        </p>
      </div>

      {/* Commit message */}
      <div className="mb-3">
        <p className="text-gray-500 dark:text-gray-400 text-sm">Commit:</p>

        <p
          className="
            font-semibold 
            bg-gray-200/10 dark:bg-white/5 
            p-2 rounded-lg border 
            border-black/10 dark:border-white/10 
            text-gray-900 dark:text-gray-100
          "
        >
          {suggestion.commitMessage}
        </p>
      </div>

      {/* Suggestion */}
      <div className="flex items-start gap-2">
        <Sparkles className="text-yellow-300 mt-1" size={18} />

        <div>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            {expanded ? suggestion.suggestion : shortText}
            {!expanded && isLong && "..."}
          </p>

          {/* Expand Button */}
          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="
                mt-2 flex items-center gap-1 text-sm 
                text-blue-600 dark:text-blue-400 
                hover:text-blue-500 dark:hover:text-blue-300 
                transition
              "
            >
              {expanded ? (
                <>
                  Show Less <ChevronUp size={16} />
                </>
              ) : (
                <>
                  Show More <ChevronDown size={16} />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default AiSuggestionCard;
