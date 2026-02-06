"use client";

import React, { useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { cn } from "@/lib/utils";

type ChatMessage = {
  sender: "user" | "bot";
  text: string;
};

const faqPairs = [
  {
    q: "how does it soften",
    a: "E-SOFT conditions hard water using a programmed electromagnetic signal. It keeps calcium and magnesium in suspension so scale cannot stick, without removing minerals.",
  },
  {
    q: "salt" ,
    a: "No salt or resin is required. There is no brine discharge or backwash water waste.",
  },
  {
    q: "maintenance",
    a: "There are no consumables. The controller is solid-state and only needs basic electrical protection. We recommend a quick check each 6 months.",
  },
  {
    q: "installation",
    a: "The coil wraps on the existing pipe-no cutting. Typical install takes under 60 minutes with power nearby.",
  },
  {
    q: "industrial",
    a: "For boilers, chillers, and heat exchangers we size by flow and hardness. The system reduces fouling so heat transfer stays efficient.",
  },
  {
    q: "residential",
    a: "Homes get soft-water feel without salt. Fixtures, glass, and tiles stay cleaner; TDS and minerals stay in the water.",
  },
  {
    q: "sizing",
    a: "Share inlet TDS/hardness, peak flow, and pipe size. We respond with model, coil turns, and install notes.",
  },
  {
    q: "power",
    a: "Controllers consume under 15W. A standard 230V outlet is sufficient.",
  },
];

function findAnswer(input: string): string {
  const text = input.toLowerCase();
  const match = faqPairs.find(({ q }) => text.includes(q));
  if (match) return match.a;
  return "I can help with sizing, installation, and performance. Share your water hardness, flow, and application, and I will route this to the team.";
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: "bot", text: "Hi! Ask me about hard water, installation, or sizing. I can also take your contact to arrange a call." },
  ]);
  const listRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const reply = findAnswer(trimmed);
    setMessages((prev) => [...prev, { sender: "user", text: trimmed }, { sender: "bot", text: reply }]);
    setInput("");
    queueMicrotask(() => listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" }));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  const isOpen = open;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-neon to-neon-bright px-4 py-2 text-sm font-semibold text-white shadow-soft-glow transition hover:translate-y-[-1px] hover:shadow-lg"
          onClick={() => setOpen(true)}
          aria-label="Open chat"
        >
          <MessageCircle className="h-4 w-4" />
          Ask DIGIGO
        </button>
      )}

      {isOpen && (
        <div className="w-80 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl backdrop-blur">
          <div className="flex items-center justify-between border-b border-slate-200 bg-surface-3 px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-slate-900">DIGIGO Assistant</p>
              <p className="text-xs text-slate-600">Water softener queries answered</p>
            </div>
            <button
              className="text-slate-500 transition hover:text-slate-800"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div ref={listRef} className="flex max-h-80 flex-col gap-3 overflow-y-auto px-4 py-3 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={cn(
                  "max-w-[90%] rounded-2xl px-3 py-2 leading-snug",
                  m.sender === "bot"
                    ? "self-start bg-surface-3 text-slate-700"
                    : "self-end bg-neon/10 text-neon border border-neon/30"
                )}
              >
                {m.text}
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 px-3 py-2">
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2">
              <input
                className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
                placeholder="Ask about salt, sizing, install..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                className="rounded-full bg-gradient-to-r from-neon to-neon-bright px-2 py-2 text-white transition hover:translate-y-[-1px] hover:shadow-soft-glow"
                onClick={handleSend}
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="pt-1 text-[11px] text-slate-500">Need a quote? Type your city, flow, and phone.</p>
          </div>
        </div>
      )}
    </div>
  );
}
