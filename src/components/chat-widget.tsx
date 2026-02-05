"use client";

import { useEffect, useRef } from "react";

export const ChatWidget = () => {
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;

    // Load CSS
    const link = document.createElement("link");
    link.href = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Load Chat Script
    const script = document.createElement("script");
    script.type = "module";
    script.innerHTML = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      
      createChat({
        webhookUrl: 'https://n8n.srv945929.hstgr.cloud/webhook/37d5bee8-3752-4002-bc02-8651618f71d9/chat',
        mode: 'window',
        target: '#n8n-chat',
        showWelcomeScreen: true,
        initialMessages: [
          'Hello! 👋',
          'How can I help you with your marketing automation today?'
        ],
        i18n: {
          en: {
            title: 'Strohm Media AI',
            subtitle: 'AI-Driven Support Agent',
            footer: 'Powered by Strohm Media AI',
            getStarted: 'New Conversation',
            inputPlaceholder: 'Type your message...',
          },
        },
        style: {
          width: '400px',
          height: '600px',
          position: 'fixed',
          right: '20px',
          bottom: '20px',
          zIndex: 9999,
          '--chat--color--primary': '#02deed',
          '--chat--color--primary-shade-50': '#02b8c5',
          '--chat--color--primary--shade-100': '#02929d',
          '--chat--color--secondary': '#f08205',
          '--chat--color-secondary-shade-50': '#d07004',
          '--chat--color-dark': '#1a1a1a',
          '--chat--color-light': '#ffffff',
          '--chat--color-white': '#ffffff',
          '--chat--header--background': '#02deed',
          '--chat--header--color': '#000000',
          '--chat--toggle--background': '#02deed',
          '--chat--toggle--hover--background': '#02b8c5',
          '--chat--toggle--active--background': '#02929d',
          '--chat--toggle--color': '#000000',
          '--chat--message--user--background': '#02deed',
          '--chat--message--user--color': '#000000',
          '--chat--message--bot--background': '#f4f4f5',
          '--chat--message--bot--color': '#1a1a1a',
        },
      });
    `;
    document.body.appendChild(script);

    return () => {
      // Optional cleanup
      // document.body.removeChild(script);
    };
  }, []);

  return <div id="n8n-chat" />;
};
