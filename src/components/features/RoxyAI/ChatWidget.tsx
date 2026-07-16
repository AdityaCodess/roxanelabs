"use client";

import { useState, useRef, useEffect } from "react";
import {
  MessageSquare,
  X,
  Send,
  Bot,
  User,
  Sparkles,
  HelpCircle,
  ShieldAlert,
  PackageCheck,
  Headphones,
  CheckCircle2,
} from "lucide-react";

interface Message {
  id: number;
  sender: "bot" | "user";
  text: string | React.ReactNode;
}

// 1. HYBRID QUICK ACTIONS (Sales + Support)
const QUICK_ACTIONS = [
  {
    label: "📦 Track Batch / Order",
    query: "How do I track my batch order status?",
    icon: PackageCheck,
  },
  {
    label: "🆘 Speak to Human Agent",
    query: "I need to talk to a human support agent.",
    icon: Headphones,
  },
  {
    label: "🔧 Login / Dashboard Help",
    query: "I am having trouble logging into the distributor portal.",
    icon: ShieldAlert,
  },
  {
    label: "💊 Product Catalog",
    query: "What are your main manufactured products?",
    icon: HelpCircle,
  },
];

export default function LocalChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "bot",
      text: "Hello! I am Roxy, your Virtual Assistant & Support Agent. Ask me about formulations, or use the tools below to track orders and report issues.",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isOpen]);

  // 2. SUPPORT & FAQ KNOWLEDGE BRAIN
  const getBotResponse = (userQuery: string): React.ReactNode | string => {
    const q = userQuery.toLowerCase().trim();

    // --- SUPPORT WORKFLOW 1: BATCH & ORDER TRACKING ---
    if (
      q.includes("track") ||
      q.includes("status") ||
      q.includes("order") ||
      q.includes("batch")
    ) {
      return (
        <div className="space-y-2">
          <p>
            To check live production or dispatch status, please reply with your
            **Batch ID** or **Order Number**.
          </p>
          <div className="p-2 bg-blue-50 border border-blue-100 rounded-lg text-xs text-pharma-blue">
            💡 **Demo Hint:** Try typing{" "}
            <span
              className="font-mono font-bold underline cursor-pointer"
              onClick={() => handleSend("ROX-2025-LIVE")}
            >
              ROX-2025-LIVE
            </span>{" "}
            to see our live production tracker in action!
          </div>
        </div>
      );
    }

    // --- SUPPORT WORKFLOW 2: SIMULATED LIVE TRACKING RESULT ---
    if (
      q.includes("rox-2025-live") ||
      q.includes("rox-") ||
      q.includes("2025")
    ) {
      return (
        <div className="bg-slate-900 text-white p-3 rounded-xl space-y-2 text-xs border border-slate-700">
          <div className="flex items-center justify-between border-b border-slate-700 pb-2">
            <span className="font-mono font-bold text-pharma-teal">
              BATCH #ROX-2025-LIVE
            </span>
            <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>{" "}
              ACTIVE
            </span>
          </div>
          <p className="text-slate-300">
            **Product:** RoxCip-500 (10x10 Alu-Alu)
          </p>
          <p className="text-slate-300">
            **Current Stage:** Phase 4 — Automated Film Coating
          </p>
          <p className="text-slate-300">**Facility:** Plant 1, Baddi (HP)</p>
          <div className="pt-1 text-pharma-teal font-medium flex items-center gap-1">
            <CheckCircle2 size={14} /> Estimated Dispatch: 48 Hours
          </div>
        </div>
      );
    }

    // --- SUPPORT WORKFLOW 3: HUMAN ESCALATION / TICKETING ---
    if (
      q.includes("human") ||
      q.includes("agent") ||
      q.includes("support") ||
      q.includes("complaint") ||
      q.includes("issue") ||
      q.includes("help") ||
      q.includes("contact")
    ) {
      const randomTicket = Math.floor(1000 + Math.random() * 9000);
      return (
        <div className="space-y-2">
          <p className="font-semibold text-slate-800">
            I have initiated a Priority Support escalation.
          </p>
          <p>
            Your temporary ticket ID is **#SUP-{randomTicket}**. Our QA and
            Sales support team operates 24/7.
          </p>
          <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 space-y-1">
            <p className="font-bold">⚡ Instant escalation channels:</p>
            <p>📞 **Plant Support:** +91 1795-XXXXXX</p>
            <p>📧 **Email:** support@roxane.com</p>
            <p className="text-[10px] text-amber-700 pt-1">
              An agent will review your session history and reply within 2
              hours.
            </p>
          </div>
        </div>
      );
    }

    // --- SUPPORT WORKFLOW 4: TECHNICAL / LOGIN HELP ---
    if (
      q.includes("login") ||
      q.includes("portal") ||
      q.includes("password") ||
      q.includes("dashboard") ||
      q.includes("access") ||
      q.includes("account")
    ) {
      return (
        <div className="space-y-2">
          <p>
            If you are experiencing authentication errors on the **Partner
            Portal**, please verify the following:
          </p>
          <ul className="list-disc pl-4 space-y-1 text-xs text-slate-600">
            <li>
              Distributor accounts require manual KYC activation by our sales
              team.
            </li>
            <li>
              If you forgot your credentials, email **it-support@roxane.com**
              from your registered business email.
            </li>
            <li>
              **For Demo Testing:** You can log into the portal using the
              credentials{" "}
              <code className="bg-slate-200 px-1 py-0.5 rounded font-bold text-slate-800">
                admin
              </code>{" "}
              /{" "}
              <code className="bg-slate-200 px-1 py-0.5 rounded font-bold text-slate-800">
                admin
              </code>
              .
            </li>
          </ul>
        </div>
      );
    }

    // --- SALES / FAQ WORKFLOWS ---
    if (
      q.includes("product") ||
      q.includes("medicine") ||
      q.includes("tablet") ||
      q.includes("syrup") ||
      q.includes("catalog")
    ) {
      return "We manufacture 150+ formulations including Ciprofloxacin 500mg, Paracetamol 650mg ER, and Ambroxol cough syrups. You can click on any card on our 'Products' page to download regulatory dossier data!";
    }
    if (
      q.includes("gmp") ||
      q.includes("who") ||
      q.includes("certif") ||
      q.includes("iso") ||
      q.includes("quality")
    ) {
      return "Zero compromise on quality! Our Baddi facility is WHO-GMP, GLP, and ISO 9001:2015 certified. Every batch undergoes HPLC and microbiological testing before release.";
    }
    if (
      q.includes("distribut") ||
      q.includes("partner") ||
      q.includes("third party") ||
      q.includes("manufacturing") ||
      q.includes("export")
    ) {
      return "We offer monopoly distributorships and third-party contract manufacturing! To apply, navigate to our **Contact Us** page and select 'Distributorship Application' in the form subject.";
    }
    if (
      q.includes("hello") ||
      q.includes("hi") ||
      q.includes("hey") ||
      q.includes("start")
    ) {
      return "Hello! I am Roxy. How can I assist your business today? You can ask about **Order Tracking**, **Login Issues**, **Product Formulations**, or request a **Human Agent**.";
    }

    // Default Fallback
    return "I am a local system assistant. I didn't quite catch that! Please try using the **quick buttons below**, ask to **track an order**, request **portal help**, or type **'agent'** to connect with a human support rep.";
  };

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: Message = { id: Date.now(), sender: "user", text: query };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");

    setIsTyping(true);

    // Simulate agent typing latency (500ms)
    setTimeout(() => {
      const botResponse = getBotResponse(query);
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: "bot", text: botResponse },
      ]);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white w-80 md:w-96 h-[500px] rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-pharma-blue text-white p-4 flex justify-between items-center bg-gradient-to-r from-pharma-blue to-slate-900">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-white/10 rounded-xl relative">
                <Headphones size={20} className="text-pharma-teal" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-pharma-blue rounded-full"></span>
              </div>
              <div>
                <h3 className="font-bold text-sm flex items-center gap-1.5">
                  Roxy Support Desk{" "}
                  <Sparkles
                    size={12}
                    className="text-amber-300 fill-amber-300"
                  />
                </h3>
                <span className="text-[10px] text-slate-300 block">
                  Automated FAQ & Ticketing System
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-white p-1 rounded-lg hover:bg-white/10 transition"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50 text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 max-w-[88%] ${msg.sender === "user" ? "ml-auto flex-row-reverse" : ""}`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-sm ${
                    msg.sender === "user"
                      ? "bg-pharma-teal text-white"
                      : "bg-pharma-blue text-white"
                  }`}
                >
                  {msg.sender === "user" ? (
                    <User size={14} />
                  ) : (
                    <Bot size={14} />
                  )}
                </div>

                <div
                  className={`p-3.5 rounded-2xl ${
                    msg.sender === "user"
                      ? "bg-pharma-blue text-white rounded-tr-none shadow-sm"
                      : "bg-white text-slate-700 border border-slate-200/80 rounded-tl-none shadow-sm leading-relaxed"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-2 max-w-[80%]">
                <div className="w-7 h-7 rounded-full bg-pharma-blue text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Bot size={14} />
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Support Actions (Horizontal Scroll) */}
          <div className="p-2 bg-white border-t border-slate-100 flex gap-1.5 overflow-x-auto no-scrollbar">
            {QUICK_ACTIONS.map((action, idx) => {
              const IconComponent = action.icon;
              return (
                <button
                  key={idx}
                  onClick={() => handleSend(action.query)}
                  className="text-[11px] bg-slate-100 hover:bg-blue-50 hover:text-pharma-blue hover:border-blue-200 text-slate-700 px-3 py-1.5 rounded-full whitespace-nowrap border border-slate-200 transition font-medium flex items-center gap-1.5 shrink-0 shadow-2xs"
                >
                  <IconComponent size={13} className="text-pharma-teal" />
                  {action.label}
                </button>
              );
            })}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-slate-200 flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask for support, track batch, or type 'agent'..."
              className="flex-1 px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-pharma-blue focus:ring-1 focus:ring-pharma-blue bg-slate-50/50"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="bg-pharma-blue text-white p-2.5 rounded-xl hover:bg-blue-900 disabled:opacity-40 disabled:hover:bg-pharma-blue transition flex items-center justify-center shrink-0 shadow-sm"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      ) : (
        /* CLOSED FLOATING BADGE */
        <button
          onClick={() => setIsOpen(true)}
          className="bg-pharma-blue hover:bg-slate-900 text-white px-5 py-3.5 rounded-full shadow-2xl flex items-center gap-3 group hover:scale-105 transition-all duration-300 relative border-2 border-white/20"
        >
          <div className="relative">
            <Headphones size={22} className="text-pharma-teal" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
          </div>
          <span className="font-bold text-sm tracking-wide">Support Desk</span>
        </button>
      )}
    </div>
  );
}
