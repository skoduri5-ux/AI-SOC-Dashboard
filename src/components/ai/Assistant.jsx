import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { askAI } from "../../services/ai";

function Assistant() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleAsk() {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const reply = await askAI(question);
      setAnswer(reply);
    } catch (err) {
      if (err.response?.data?.error) {
        setAnswer(`❌ ${err.response.data.error}`);
      } else {
        setAnswer("❌ Unable to contact AI.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-8">

      <h2 className="text-2xl font-bold text-white">
        🤖 AI SOC Assistant
      </h2>

      <p className="text-gray-400 mt-2">
        Ask anything related to alerts, logs, attacks or cybersecurity.
      </p>

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Example: Explain SQL Injection..."
        className="w-full mt-5 h-44 bg-slate-800 border border-slate-700 rounded-xl p-4 text-white outline-none resize-none"
      />

      <button
        onClick={handleAsk}
        disabled={loading}
        className="mt-5 bg-cyan-600 hover:bg-cyan-700 disabled:bg-slate-700 px-6 py-3 rounded-xl font-semibold transition"
      >
        {loading ? "Analyzing..." : "Ask AI"}
      </button>

      {loading && (
        <div className="flex items-center gap-3 mt-6">

          <div className="h-5 w-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>

          <span className="text-gray-300">
            AI is analyzing your request...
          </span>

        </div>
      )}

      {!loading && answer && (
        <div className="mt-6 bg-slate-800 border border-slate-700 rounded-xl p-6 h-[500px] overflow-y-auto">

          <div className="prose prose-invert max-w-none break-words">

            <ReactMarkdown>
              {answer}
            </ReactMarkdown>

          </div>

        </div>
      )}

    </div>
  );
}

export default Assistant;