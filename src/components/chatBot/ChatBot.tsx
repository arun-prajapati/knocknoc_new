// @ts-nocheck
"use client";
import Script from "next/script";
import "./ChatBot.css";
export const ChatBotFun = () => {
  const agent_id = `${process.env.NEXT_PUBLIC_DIALOGFLOW_AGENT_ID}`;

  return (
    <div className="df-messenger-box">
      <df-messenger
        intent="WELCOME"
        chat-icon="/assets/chatBot_icon.png"
        chat-title="KnocKnoc"
        agent-id={agent_id}
        language-code="en"
      ></df-messenger>
      {/* <!-- -----chat box cdn----- --> */}
      <Script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></Script>
    </div>
  );
};
