"use client";

import { useEffect, useRef, useState, KeyboardEvent } from "react";
import Image from "next/image";
import { AutosizeTextarea } from "./components/ui/autosize-textarea";
import { Button } from "./components/ui/button";
import { ScrollArea } from "./components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { CustomButton } from "./components/ui/CustomButton";
import { GlassCard } from "./components/ui/GlassCard";
import { ChatBot } from "./api/api";
import WelcomeMessage from "./components/WelcomeMessage"; // Adjust path as needed

interface Message {
  message: string;
  type: "bot" | "user";
}

export default function Chat() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [userInput, setUserInput] = useState("");
  const [conversation, setConversation] = useState<Message[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Hide the 3D model and navbar
  useEffect(() => {
    // Function to hide the 3D model and navbar
    const hideElements = () => {
      // Hide the 3D Bot model at the bottom right
      const botModels = document.querySelectorAll('canvas');
      botModels.forEach(model => {
        if (model.parentElement && 
            (model.parentElement.classList.contains('_bot-container') || 
             model.parentElement.tagName === 'DIV')) {
          model.parentElement.style.display = 'none';
        }
      });
      
      // Hide the navbar if it exists
      const navbar = document.querySelector('nav');
      if (navbar) {
        navbar.style.display = 'none';
      }
    };

    // Call once on mount
    hideElements();
    
    // Set up a small delay to ensure elements are loaded
    const timer = setTimeout(hideElements, 500);
    
    // Cleanup
    return () => {
      clearTimeout(timer);
      
      // Restore visibility when navigating away
      const botModels = document.querySelectorAll('canvas');
      botModels.forEach(model => {
        if (model.parentElement) {
          model.parentElement.style.display = '';
        }
      });
      
      const navbar = document.querySelector('nav');
      if (navbar) {
        navbar.style.display = '';
      }
    };
  }, []);

  // Scroll to the top when messages update
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [conversation]);

  const addMessage = (message: Message) => {
    setConversation((prev) => [...prev, message]);
  };

  const sendMessage = async () => {
    if (userInput.trim()) {
      addMessage({ message: userInput, type: "user" });
      setUserInput("");

      try {
        const response = await ChatBot(userInput);
        addMessage({
          message: response || "",
          type: "bot",
        });
      } catch (error) {
        console.error("Error getting chat completion:", error);
      }
    }
  };

  const handleEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <main className="h-screen flex flex-col bg-muted/50">
      {/* Chat Header - Simplified with home button */}
      <div className="p-3 relative">
        <Image
          src="/chatUI/rise_digital_logo.png"
          width={256}
          height={64}
          className="w-64 mx-auto"
          alt="Chat Logo"
        />
        
        {/* Home button - more stylish and elegant */}
        <div className="absolute top-4 right-4">
          <a 
            href="/home"
            className="flex items-center justify-center w-12 h-12 rounded-full 
                    bg-gradient-to-br from-purple-500/30 to-blue-500/30 backdrop-blur-md
                    border border-white/20 text-white shadow-[0_0_15px_rgba(147,154,255,0.5)]
                    transition-all duration-300 hover:shadow-[0_0_20px_rgba(147,154,255,0.8)]
                    hover:border-white/40 hover:scale-105 group"
            aria-label="Go to home page"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" 
              viewBox="0 0 24 24" 
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </a>
        </div>
      </div>

      <div className="shrink-0 bg-border h-[1px] w-full"></div>

      {/* Chat Messages Container */}
      <div className="flex-1 flex justify-center overflow-hidden">
        <div className="w-full sm:w-3/5 flex flex-col">
          <ScrollArea ref={scrollRef} className="flex-1 overflow-y-auto">
            <div className="flex flex-col gap-2 p-4">
              {conversation.map((msg, i) => (
                <div
                  key={i}
                  className={`flex items-end gap-2 ${
                    msg.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.type === "bot" && (
                    <Avatar className="w-8 h-8 bg-gray-200">
                      <AvatarImage src="/avatar/02.png" />
                      <AvatarFallback>.ˍ.</AvatarFallback>
                    </Avatar>
                  )}
                  <div className="max-w-[65%] px-4 py-2 rounded-lg text-white text-lg bg-transparent">
                    {msg.message.split(" ").map((word, index) =>
                      word.startsWith("**") && word.endsWith("**") ? (
                        <strong key={index}>{word.slice(2, -2)} </strong>
                      ) : (
                        <span key={index}>{word} </span>
                      )
                    )}
                  </div>
                  {msg.type === "user" && (
                    <Avatar className="w-8 h-8 bg-gray-200">
                      <AvatarImage src="/avatar/02.png" />
                      <AvatarFallback>.ˍ.</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Display prompt content if conversation is empty */}
          {conversation.length === 0 && (
            <>
              {/* Welcome Message Component */}
              <WelcomeMessage />

              <div className="flex flex-col sm:flex-row gap-4 p-4 justify-center items-center">
                {isMobile ? (
                  // Mobile: Render three small buttons in one row with related icons
                  <div className="flex flex-row gap-3 items-center justify-center">
                    <button
                      className="flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-white/10 text-white hover:bg-white/20 transition"
                      onClick={() =>
                        setUserInput("Tell me more about AI Agents.")
                      }
                    >
                      {/* AI Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.1 0-2 .9-2 2 0 .22.03.43.08.63l-.71.71A3 3 0 009 13h6a3 3 0 00-1.67-2.66l-.71-.71c.05-.2.08-.41.08-.63 0-1.1-.9-2-2-2zM12 3v2m0 14v2m9-9h-2M5 12H3"
                        />
                      </svg>
                      AI Agents
                    </button>
                    <button
                      className="flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-white/10 text-white hover:bg-white/20 transition"
                      onClick={() =>
                        setUserInput("Tell me more about Smart Tech Platforms.")
                      }
                    >
                      {/* Platform Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 10h4v11H3zM9 3h4v18H9zM15 14h4v7h-4z"
                        />
                      </svg>
                      Tech
                    </button>
                    <button
                      className="flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-white/10 text-white hover:bg-white/20 transition"
                      onClick={() =>
                        setUserInput("Tell me more about AI-Powered Marketing.")
                      }
                    >
                      {/* Marketing Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 18l6-6-6-6M8 6l-6 6 6 6"
                        />
                      </svg>
                      Marketing
                    </button>
                  </div>
                ) : (
                  // Desktop: Render GlassCards
                  <>
                    <GlassCard
                      title="AI Agents"
                      description="More than bots—your new digital team. Scalable, trainable, context-aware. They listen, learn, act—and evolve."
                      className="w-full sm:w-1/3 hover:shadow-[0_0_20px_rgba(165,94,234,0.7)] transition-shadow duration-300"
                      onClick={() =>
                        setUserInput("Tell me more about AI Agents.")
                      }
                    />
                    <GlassCard
                      title="Smart Tech Platforms"
                      description="Invisible infrastructure, built with instinct. Seamless backend-to-frontend experiences. Built for performance, scaled with AI."
                      className="w-full sm:w-1/3 hover:shadow-[0_0_20px_rgba(165,94,234,0.7)] transition-shadow duration-300"
                      onClick={() =>
                        setUserInput("Tell me more about Smart Tech Platforms.")
                      }
                    />
                    <GlassCard
                      title="AI-Powered Marketing"
                      description="Marketing that doesn't shout—it understands. Real-time engagement strategies. Campaigns that listen before they speak."
                      className="w-full sm:w-1/3 hover:shadow-[0_0_20px_rgba(165,94,234,0.7)] transition-shadow duration-300"
                      onClick={() =>
                        setUserInput("Tell me more about AI-Powered Marketing.")
                      }
                    />
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Bottom Chat Bar */}
      <div className="flex justify-center">
        <div className="w-full sm:w-3/5">
          <div className="bg-transparent">
            <div className="p-4">
              <div
                className="flex items-center h-14 gap-3 p-4 rounded-full bg-white/10 backdrop-blur-md shadow-md transition-all 
                  hover:border-purple-500/70 hover:ring-2 hover:ring-purple-500/50 hover:shadow-purple-500/50 hover:shadow-lg"
              >
                {/* Input Field */}
                <AutosizeTextarea
                  className="flex-1 pl-4 outline-none border-0 bg-transparent placeholder:text-white/60 text-white text-base"
                  placeholder="Type a message..."
                  minHeight={25}
                  maxHeight={55}
                  rows={1}
                  onKeyDown={handleEnter}
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                />
                {/* Send Button with Custom SVG Icon */}
                <Button
                  onClick={sendMessage}
                  className="h-10 w-10 p-0 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white 
                  rounded-full flex items-center justify-center transition-all transform hover:scale-110 shadow-lg hover:shadow-xl"
                >
                  <Image
                    src="/chatUI/send-icon.svg"
                    alt="Send"
                    width={32}
                    height={32}
                    className="h-8 w-8"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
