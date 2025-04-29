"use client";

import React from "react";
import dynamic from "next/dynamic";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import ClientOnly from "./components/ClientOnly";

// Dynamically import the Chat component with SSR disabled
const Chat = dynamic(() => import('./chat/page'), { ssr: false });

// Dynamically import the Model component with SSR disabled
const Model = dynamic(
  () => import("./components/Bot/Bot").then((mod) => mod.Model),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <div className="">
        <div className="relative z-50">
          <div className="absolute"></div>
        </div>
        <div>
          <div className="overflow-hidden">
            <div className="hero-section px-3">
              <ClientOnly>
                <Chat />
              </ClientOnly>
            </div>
          </div>
        </div>
      </div>
      <div
        className="fixed bottom-4 right-4 z-50 pointer-events-none"
        onClick={() => (window.location.href = "/")}
      >
        <ClientOnly>
          <Model />
        </ClientOnly>
      </div>
    </>
  );
}
