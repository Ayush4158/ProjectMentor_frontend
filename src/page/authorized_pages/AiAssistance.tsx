// import  { useState } from "react";
// import ReactMarkdown from "react-markdown";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// const AiAssistance = () => {
//   const [message, setMessage] = useState<string>("");
//   const [response, setResponse] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(false);
//   const [finalResponse, setFinalResponse] = useState<string>("");

//   const handleSubmit = async () => {
//     setResponse("");
//     setFinalResponse("");
//     setLoading(true);

//     try {
//       const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/ai_assistance/intellio`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message }),
//         credentials: "include",
//       });

//       if (!res.ok || !res.body) throw new Error("No response body from server");

//       const reader = res.body.getReader();
//       const decoder = new TextDecoder("utf-8");
//       let fullText = "";

//       while (true) {
//         const { done, value } = await reader.read();
//         if (done) break;

//         const chunk = decoder.decode(value);
//         const lines = chunk.split("\n").filter(Boolean);

//         for (const line of lines) {
//           if (line === "data: [DONE]") {
//             setFinalResponse(fullText);
//             return;
//           }

//           if (line.startsWith("data: ")) {
//             const content = line.replace("data: ", "");
//             fullText += content;
//             setResponse((prev) => prev + content);
//           }
//         }
//       }

//       setFinalResponse(fullText);
//     } catch (error) {
//       console.error("Stream error:", error);
//       setResponse("⚠️ Error fetching response.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       style={{
//         padding: "30px",
//         maxWidth: 800,
//         margin: "auto",
//         background: "#ffffff",
//         borderRadius: "12px",
//         boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//       }}
//     >
//       <h2 style={{ textAlign: "center", marginBottom: 20 }}>🤖 AI Assistance</h2>

//       <textarea
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         rows={4}
//         placeholder="Ask your question..."
//         style={{
//           width: "100%",
//           padding: "12px",
//           fontSize: "1rem",
//           borderRadius: "8px",
//           border: "1px solid #ccc",
//           resize: "vertical",
//           outline: "none",
//         }}
//       />

//       <button
//         onClick={handleSubmit}
//         disabled={loading}
//         style={{
//           marginTop: "15px",
//           width: "100%",
//           padding: "12px",
//           fontSize: "1rem",
//           backgroundColor: loading ? "#6c757d" : "#007bff",
//           color: "white",
//           border: "none",
//           borderRadius: "6px",
//           cursor: loading ? "not-allowed" : "pointer",
//           transition: "background 0.3s ease",
//         }}
//       >
//         {loading ? "Thinking..." : "Ask Intellio"}
//       </button>

//       <div
//         style={{
//           marginTop: "25px",
//           padding: "20px",
//           background: "#f8f9fa",
//           borderRadius: "10px",
//           whiteSpace: "pre-wrap",
//           lineHeight: 1.6,
//           color: "#212529",
//           overflowY: "auto",
//           maxHeight: "450px",
//         }}
//       >
//         {loading ? (
//           <p style={{ color: "#555" }}>{response}</p>
//         ) : finalResponse ? (
//           <ReactMarkdown
//             components={{
//               code({ className, children, ...props }) {
//                 const match = /language-(\w+)/.exec(className || "");
//                 return match ? (
//                   <div
//                     style={{
//                       position: "relative",
//                       background: "#0d1117",
//                       borderRadius: "10px",
//                       margin: "16px 0",
//                       overflow: "hidden",
//                       border: "1px solid #30363d",
//                       boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//                     }}
//                   >
//                     <div
//                       style={{
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "space-between",
//                         background: "#161b22",
//                         padding: "8px 12px",
//                         borderBottom: "1px solid #30363d",
//                         fontSize: "0.9rem",
//                         color: "#c9d1d9",
//                         fontFamily: "monospace",
//                       }}
//                     >
//                       <span>🧠 {match[1].toUpperCase()}</span>
//                       <button
//                         onClick={() =>
//                           navigator.clipboard.writeText(String(children))
//                         }
//                         style={{
//                           fontSize: "0.8rem",
//                           padding: "4px 8px",
//                           border: "none",
//                           borderRadius: "4px",
//                           cursor: "pointer",
//                           backgroundColor: "#238636",
//                           color: "#fff",
//                         }}
//                       >
//                         Copy
//                       </button>
//                     </div>
//                     <div style={{ fontSize: "0.95rem" }}>
//                       <SyntaxHighlighter
//                         style={oneDark}
//                         language={match[1]}
//                         PreTag="div"
//                         customStyle={{
//                           margin: 0,
//                           background: "transparent",
//                           padding: "12px 16px",
//                         }}
//                         showLineNumbers
//                         wrapLongLines
//                       >
//                         {String(children).replace(/\n$/, "")}
//                       </SyntaxHighlighter>
//                     </div>
//                   </div>
//                 ) : (
//                   <code
//                     style={{
//                       backgroundColor: "#eee",
//                       borderRadius: "5px",
//                       padding: "2px 5px",
//                       fontFamily: "monospace",
//                     }}
//                     {...props}
//                   >
//                     {children}
//                   </code>
//                 );
//               },
//             }}
//           >
//             {finalResponse}
//           </ReactMarkdown>
//         ) : (
//           <i>Ask a question to get started...</i>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AiAssistance;






import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type ThemeType = {
  theme: string;
};

const AiAssistance: React.FC<ThemeType> = ({ theme }) => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [finalResponse, setFinalResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!message.trim()) return;

    setResponse("");
    setFinalResponse("");
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/ai_assistance/intellio`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message }),
          credentials: "include",
        }
      );

      if (!res.ok || !res.body) throw new Error("No response body");

      const reader = res.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let fullText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split("\n").filter(Boolean);

        for (const line of lines) {
          if (line === "data: [DONE]") {
            setFinalResponse(fullText);
            return;
          }

          if (line.startsWith("data: ")) {
            const content = line.replace("data: ", "");
            fullText += content;
            setResponse((prev) => prev + content);
          }
        }
      }

      setFinalResponse(fullText);
    } catch (err) {
      console.error(err);
      setFinalResponse("⚠️ Error fetching response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen w-full flex flex-col transition-all duration-500
        ${
          theme === "dark"
            ? "bg-gradient-to-br from-[#0a0f1e] via-[#111827] to-[#1e293b] text-gray-100"
            : "bg-gradient-to-br from-gray-50 via-indigo-50/20 to-gray-100 text-gray-800"
        }`}
    >
      {/* RESPONSE AREA */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-10 py-8">
        {loading && response && (
          <p className="whitespace-pre-wrap leading-relaxed text-sm sm:text-base">
            {response}
          </p>
        )}

        {!loading && finalResponse && (
          <ReactMarkdown
            components={{
              code({ className, children }) {
                const match = /language-(\w+)/.exec(className || "");
                return match ? (
                  <div className="my-4 rounded-xl overflow-hidden border border-white/10 bg-[#0d1117]">
                    <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] text-xs text-gray-300 font-mono">
                      <span>{match[1].toUpperCase()}</span>
                      <button
                        onClick={() =>
                          navigator.clipboard.writeText(String(children))
                        }
                        className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded text-xs"
                      >
                        Copy
                      </button>
                    </div>
                    <SyntaxHighlighter
                      style={oneDark}
                      language={match[1]}
                      PreTag="div"
                      customStyle={{ margin: 0, background: "transparent" }}
                      wrapLongLines
                      showLineNumbers
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  </div>
                ) : (
                  <code className="px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10">
                    {children}
                  </code>
                );
              },
            }}
          >
            {finalResponse}
          </ReactMarkdown>
        )}

        {!loading && !finalResponse && (
          <p
            className={`italic text-sm ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Ask something to get started 🚀
          </p>
        )}
      </div>

      {/* INPUT BAR */}
      <div
        className={`sticky bottom-0 w-full border-t backdrop-blur-md
          ${
            theme === "dark"
              ? "border-white/10 bg-black/40"
              : "border-gray-200 bg-white/70"
          }`}
      >
        <div className="flex gap-3 px-4 sm:px-6 md:px-10 py-4">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask Intellio..."
            rows={1}
            className={`flex-1 resize-none rounded-xl px-4 py-3 text-sm sm:text-base outline-none
              ${
                theme === "dark"
                  ? "bg-white/5 border border-white/10 text-white placeholder:text-gray-400"
                  : "bg-white border border-gray-300 text-gray-800 placeholder:text-gray-500"
              }`}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit();
              }
            }}
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-xl font-medium transition disabled:opacity-60"
          >
            {loading ? "…" : "Ask"}
          </button>
        </div>

        <p
          className={`text-center text-xs pb-2 ${
            theme === "dark" ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Intellio AI may generate inaccurate information. Verify critical outputs.
        </p>
      </div>
    </div>
  );
};

export default AiAssistance;
