"use client";

import dynamic from "next/dynamic";

export function ChatWidgetWrapper() {
  const ChatWidget = dynamic(
    () => import("@/components/chat-widget").then((mod) => mod.ChatWidget),
    {
      loading: () => null,
      ssr: false,
    }
  );

  return <ChatWidget />;
}