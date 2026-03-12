"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { MessageCircle, X, Send, Bot, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

interface Message {
  id: string;
  role: "bot" | "user";
  text: string;
  timestamp: Date;
  /** Optional quick-reply buttons rendered below the message */
  quickReplies?: QuickReply[];
  /** Optional clickable option chips (used in the booking flow) */
  options?: string[];
  /** Optional CTA link button */
  cta?: { label: string; href: string };
}

interface QuickReply {
  label: string;
  value: string;
}

/* ------------------------------------------------------------------ */
/* Booking flow state                                                  */
/* ------------------------------------------------------------------ */

type BookingStep = "idle" | "shipment_type" | "origin" | "destination" | "summary";

interface BookingState {
  step: BookingStep;
  shipmentType?: string;
  origin?: string;
  destination?: string;
}

/* ------------------------------------------------------------------ */
/* Constants                                                           */
/* ------------------------------------------------------------------ */

const INITIAL_MESSAGE: Message = {
  id: "init",
  role: "bot",
  text: "Hi there! I'm Fairway's virtual assistant. How can I help you today? You can ask about our services, get a quote, track a shipment, or learn about our coverage areas.",
  timestamp: new Date(),
  quickReplies: [
    { label: "Get a Quote", value: "get a quote" },
    { label: "Track Shipment", value: "track shipment" },
    { label: "Service Areas", value: "service areas" },
    { label: "Contact Us", value: "contact us" },
  ],
};

const SHIPMENT_TYPES = ["FTL (Full Truckload)", "Drayage", "LTL", "Flatbed", "Warehousing", "Import/Export"];

/* ------------------------------------------------------------------ */
/* Response engine                                                     */
/* ------------------------------------------------------------------ */

function getResponse(input: string): Omit<Message, "id" | "timestamp"> {
  const lower = input.toLowerCase().trim();

  // Greetings
  if (/^(hi|hello|hey|howdy|good morning|good afternoon|good evening|greetings|sup|yo)\b/.test(lower)) {
    return {
      role: "bot",
      text: "Hello! Welcome to Fairway Logistics. How can I assist you today?",
      quickReplies: [
        { label: "Get a Quote", value: "get a quote" },
        { label: "Track Shipment", value: "track shipment" },
        { label: "Our Services", value: "services" },
        { label: "Contact Us", value: "contact us" },
      ],
    };
  }

  // Quote / booking
  if (/quote|pricing|price|cost|rate|book|booking|ship something|need to ship/.test(lower)) {
    return {
      role: "bot",
      text: "I'd love to help you get a quote! We offer free, no-obligation quotes. You can start a quick quote flow right here, visit our quote page, or call us directly at (251) 725-1929.\n\nLet's get started — what type of shipment do you need?",
      options: SHIPMENT_TYPES,
    };
  }

  // Tracking
  if (/track|tracking|shipment status|where is|pro\s?#|bol\s?#|pro number|bol number/.test(lower)) {
    return {
      role: "bot",
      text: "You can track your shipment using our tracking widget on the website! Simply enter your PRO# or BOL# (Bill of Lading number) to get real-time updates on your freight.\n\nIf you need help locating your tracking number, call us at (251) 725-1929 and our team will look it up for you.",
    };
  }

  // Services
  if (/service|what do you|do you offer|capabilities|solutions/.test(lower)) {
    return {
      role: "bot",
      text: "Fairway Logistics offers a full suite of freight and logistics services:\n\n• Full Truckload (FTL) — Dedicated trucks for your freight\n• Container Drayage — Port of Mobile container hauling\n• Warehousing & Distribution — Secure storage solutions\n• Freight Brokerage — Access to our carrier network\n• Import/Export Logistics — International freight coordination\n• Flatbed & Specialized Hauling — Oversized & heavy loads\n\nWould you like more details on any of these services?",
      quickReplies: [
        { label: "Get a Quote", value: "get a quote" },
        { label: "Service Areas", value: "service areas" },
      ],
    };
  }

  // Coverage / areas
  if (/area|coverage|where|location|region|serve|gulf coast|mobile|baldwin|pensacola|biloxi|gulfport|new orleans/.test(lower)) {
    return {
      role: "bot",
      text: "We serve the entire Gulf Coast region! Our primary coverage areas include:\n\n• Mobile, AL (headquarters)\n• Baldwin County, AL\n• Pensacola, FL\n• Biloxi, MS\n• Gulfport, MS\n• New Orleans, LA\n\nWe also handle long-haul freight across the Southeast and nationwide through our brokerage network.",
      quickReplies: [
        { label: "Get a Quote", value: "get a quote" },
        { label: "Our Services", value: "services" },
      ],
    };
  }

  // Pricing details
  if (/how much|expensive|cheap|afford|budget|pricing detail|factors/.test(lower)) {
    return {
      role: "bot",
      text: "We offer free, no-obligation quotes! Pricing depends on several factors:\n\n• Shipment type (FTL, drayage, LTL, etc.)\n• Distance and route\n• Cargo weight and dimensions\n• Special handling requirements\n• Timeline and urgency\n\nGet a personalized quote — it only takes a minute!",
      quickReplies: [{ label: "Get a Quote", value: "get a quote" }],
      cta: { label: "Request a Quote", href: "/request-quote" },
    };
  }

  // Hours
  if (/hour|open|close|when are you|availability|24|schedule/.test(lower)) {
    return {
      role: "bot",
      text: "Fairway Logistics operates 24/7! Our dispatch and operations teams are available around the clock to handle your freight needs. Whether it's a weekday, weekend, or holiday — we're here for you.\n\nCall us anytime at (251) 725-1929.",
    };
  }

  // Contact
  if (/contact|phone|email|call|reach|talk to|speak|human|agent|representative/.test(lower)) {
    return {
      role: "bot",
      text: "You can reach our team anytime:\n\n📞 Phone: (251) 725-1929\n📧 Email: info@fairwaylogisticsllc.com\n\nWe operate 24/7 and are always happy to help!",
      cta: { label: "Visit Contact Page", href: "/contact" },
    };
  }

  // Drayage specific
  if (/drayage|container|port|import|export/.test(lower)) {
    return {
      role: "bot",
      text: "We specialize in container drayage at the Port of Mobile! Our services include:\n\n• Container pick-up & delivery\n• Chassis management\n• Import/export coordination\n• Customs documentation support\n\nAs an asset-based carrier, we own our trucks — meaning better reliability and competitive rates.",
      quickReplies: [{ label: "Get a Quote", value: "get a quote" }],
    };
  }

  // FTL specific
  if (/ftl|full truckload|full load|dedicated/.test(lower)) {
    return {
      role: "bot",
      text: "Our Full Truckload (FTL) service provides dedicated trucks for your shipments. Benefits include:\n\n• Faster transit times\n• No freight mixing — your cargo only\n• Real-time tracking\n• Professional, vetted drivers\n\nWe serve the Gulf Coast and beyond with our own fleet!",
      quickReplies: [{ label: "Get a Quote", value: "get a quote" }],
    };
  }

  // Thank you
  if (/thank|thanks|appreciate/.test(lower)) {
    return {
      role: "bot",
      text: "You're welcome! If you need anything else, I'm right here. You can also reach us at (251) 725-1929 or info@fairwaylogisticsllc.com anytime. Have a great day!",
    };
  }

  // Fallback
  return {
    role: "bot",
    text: "I can help with quotes, tracking, services, and coverage areas. For specific questions, call (251) 725-1929 or email info@fairwaylogisticsllc.com",
    quickReplies: [
      { label: "Get a Quote", value: "get a quote" },
      { label: "Track Shipment", value: "track shipment" },
      { label: "Our Services", value: "services" },
      { label: "Contact Us", value: "contact us" },
    ],
  };
}

/* ------------------------------------------------------------------ */
/* Helper: unique ID                                                   */
/* ------------------------------------------------------------------ */
let _id = 0;
function uid() {
  _id += 1;
  return `msg-${_id}-${Date.now()}`;
}

/* ------------------------------------------------------------------ */
/* Format timestamp                                                    */
/* ------------------------------------------------------------------ */
function formatTime(d: Date) {
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

/* ------------------------------------------------------------------ */
/* ChatBot Component                                                   */
/* ------------------------------------------------------------------ */

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [booking, setBooking] = useState<BookingState>({ step: "idle" });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /* Auto-scroll to bottom */
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  /* Focus input when chat opens */
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  /* Show initial message when first opened */
  const handleOpen = () => {
    if (!hasOpened) {
      setMessages([{ ...INITIAL_MESSAGE, timestamp: new Date() }]);
      setHasOpened(true);
    }
    setIsOpen(true);
  };

  /* Push a bot message with simulated typing delay */
  const pushBotMessage = useCallback((msg: Omit<Message, "id" | "timestamp">) => {
    setIsTyping(true);
    const delay = 600 + Math.random() * 800;
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { ...msg, id: uid(), timestamp: new Date() },
      ]);
    }, delay);
  }, []);

  /* Handle booking flow steps */
  const handleBookingStep = useCallback(
    (userText: string) => {
      if (booking.step === "shipment_type") {
        const newBooking = { ...booking, shipmentType: userText, step: "origin" as BookingStep };
        setBooking(newBooking);
        pushBotMessage({
          role: "bot",
          text: `Great choice — ${userText}! Now, what is the origin city (pick-up location)?`,
        });
        return true;
      }

      if (booking.step === "origin") {
        const newBooking = { ...booking, origin: userText, step: "destination" as BookingStep };
        setBooking(newBooking);
        pushBotMessage({
          role: "bot",
          text: `Got it — picking up from ${userText}. And where is the destination (delivery city)?`,
        });
        return true;
      }

      if (booking.step === "destination") {
        const newBooking = { ...booking, destination: userText, step: "summary" as BookingStep };
        setBooking(newBooking);
        pushBotMessage({
          role: "bot",
          text: `Here's your shipment summary:\n\n• Type: ${newBooking.shipmentType}\n• Origin: ${newBooking.origin}\n• Destination: ${userText}\n\nTo finalize your quote with exact pricing, complete the full form on our quote page. Our team will respond within the hour!`,
          cta: { label: "Complete Your Quote", href: "/request-quote" },
        });
        // Reset booking flow
        setTimeout(() => setBooking({ step: "idle" }), 100);
        return true;
      }

      return false;
    },
    [booking, pushBotMessage],
  );

  /* Handle an option chip click (booking shipment type) */
  const handleOptionClick = (option: string) => {
    // Add user message
    setMessages((prev) => [
      ...prev,
      { id: uid(), role: "user", text: option, timestamp: new Date() },
    ]);

    // If we detect it's a shipment type selection, start the booking flow
    if (SHIPMENT_TYPES.includes(option)) {
      setBooking({ step: "shipment_type" });
      // Process immediately as if user typed the shipment type
      setIsTyping(true);
      const delay = 600 + Math.random() * 800;
      setTimeout(() => {
        setIsTyping(false);
        const newBooking: BookingState = { step: "origin", shipmentType: option };
        setBooking(newBooking);
        setMessages((prev) => [
          ...prev,
          {
            id: uid(),
            role: "bot",
            text: `Great choice — ${option}! Now, what is the origin city (pick-up location)?`,
            timestamp: new Date(),
          },
        ]);
      }, delay);
      return;
    }
  };

  /* Send a message */
  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    // Add user message
    const userMsg: Message = {
      id: uid(),
      role: "user",
      text: trimmed,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Check if we're in a booking flow
    if (booking.step !== "idle" && booking.step !== "summary") {
      handleBookingStep(trimmed);
      return;
    }

    // Check if the response triggers a booking flow
    const response = getResponse(trimmed);
    if (response.options) {
      // This is a quote-related response — start booking flow
      setBooking({ step: "shipment_type" });
    }
    pushBotMessage(response);
  };

  /* Handle quick reply clicks */
  const handleQuickReply = (value: string) => {
    setInput("");
    // Add user message
    setMessages((prev) => [
      ...prev,
      { id: uid(), role: "user", text: value, timestamp: new Date() },
    ]);

    // Check if it triggers quote flow
    const response = getResponse(value);
    if (response.options) {
      setBooking({ step: "shipment_type" });
    }
    pushBotMessage(response);
  };

  /* Handle Enter key */
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* ============================================================ */}
      {/* Floating Chat Button                                         */}
      {/* ============================================================ */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={handleOpen}
            aria-label="Open chat"
            className="fixed bottom-20 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-yellow-600 text-navy-950 shadow-lg shadow-gold-400/25 hover:shadow-gold-400/40 transition-shadow duration-300 cursor-pointer"
          >
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-gold-400/30 animate-ping" />
            <MessageCircle className="relative h-6 w-6" />

            {/* Notification badge */}
            {!hasOpened && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[11px] font-bold text-white">
                1
              </span>
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* ============================================================ */}
      {/* Chat Panel                                                    */}
      {/* ============================================================ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 right-0 z-50 flex flex-col
                       w-full h-full
                       sm:bottom-4 sm:right-4 sm:w-[380px] sm:h-[550px] sm:rounded-2xl
                       bg-navy-950 border border-navy-700/50 shadow-2xl shadow-black/40 overflow-hidden"
          >
            {/* ---- Header ---- */}
            <div className="flex items-center justify-between gap-3 px-4 py-3 bg-navy-900 border-b border-navy-700/50">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-yellow-600">
                  <Bot className="h-5 w-5 text-navy-950" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Fairway Logistics</h3>
                  <p className="text-xs text-gold-400">Virtual Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-navy-800 transition-colors text-navy-400 hover:text-white cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* ---- Messages ---- */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
                >
                  {/* Bubble */}
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                      msg.role === "bot"
                        ? "bg-navy-800 text-navy-100 border-l-2 border-gold-400"
                        : "bg-gold-400/20 text-white"
                    }`}
                  >
                    {msg.text}
                  </div>

                  {/* Timestamp */}
                  <span className="mt-1 text-[10px] text-navy-400">
                    {formatTime(msg.timestamp)}
                  </span>

                  {/* CTA Button */}
                  {msg.cta && (
                    <Link
                      href={msg.cta.href}
                      className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-gold-400 to-yellow-600 px-4 py-2 text-sm font-semibold text-navy-950 hover:brightness-110 transition"
                    >
                      {msg.cta.label}
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  )}

                  {/* Option chips (booking flow) */}
                  {msg.options && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {msg.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleOptionClick(opt)}
                          className="rounded-lg border border-gold-400/30 bg-navy-800 px-3 py-1.5 text-xs font-medium text-gold-400 hover:bg-gold-400/10 hover:border-gold-400/60 transition-colors cursor-pointer"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Quick replies */}
                  {msg.quickReplies && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {msg.quickReplies.map((qr) => (
                        <button
                          key={qr.value}
                          onClick={() => handleQuickReply(qr.value)}
                          className="rounded-full border border-navy-600 bg-navy-800/50 px-3 py-1.5 text-xs font-medium text-navy-300 hover:border-gold-400/50 hover:text-gold-400 transition-colors cursor-pointer"
                        >
                          {qr.label}
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start"
                >
                  <div className="flex items-center gap-1 rounded-2xl bg-navy-800 border-l-2 border-gold-400 px-4 py-3">
                    <span className="h-2 w-2 rounded-full bg-gold-400/60 animate-bounce [animation-delay:0ms]" />
                    <span className="h-2 w-2 rounded-full bg-gold-400/60 animate-bounce [animation-delay:150ms]" />
                    <span className="h-2 w-2 rounded-full bg-gold-400/60 animate-bounce [animation-delay:300ms]" />
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* ---- Input ---- */}
            <div className="border-t border-navy-700/50 bg-navy-900 px-3 py-3">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="flex-1 rounded-xl border border-navy-700 bg-navy-800 px-4 py-2.5 text-sm text-white placeholder-navy-400 outline-none focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/20 transition"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  aria-label="Send message"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-yellow-600 text-navy-950 disabled:opacity-40 disabled:cursor-not-allowed hover:brightness-110 transition cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-2 text-center text-[10px] text-navy-500">
                Powered by Fairway Logistics
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
