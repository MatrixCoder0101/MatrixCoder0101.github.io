//ChatBot
"use client"

import { useState, useEffect } from 'react';
import axios from 'axios';

const TypewriterEffect = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const typeWriter = async () => {
      for (let i = 0; i < text.length; i++) {
        setDisplayText((prevText) => prevText + text.charAt(i));
        await new Promise((resolve) => setTimeout(resolve, 50)); // Adjust the delay as needed
      }
    };

    typeWriter();
  }, [text]);

  return <p>{displayText}</p>;
};

const Chatbot = () => {
  const [userQuery, setUserQuery] = useState('');
  const [chatHistory, setChatHistory] = useState<string[]>([]);
  const [answer, setAnswer] = useState('');

  const handleAskQuestion = async () => {
    if (userQuery.trim() === '') return;

    try {
      setChatHistory((prevHistory) => [...prevHistory, `You: ${userQuery}`]);
      const response = await axios.get(`../api/bard?query=${userQuery}`);
      const ans = response.data.ans || 'No answer found';
      setAnswer(ans);
      setChatHistory((prevHistory) => [...prevHistory, `ChatBot: ${ans}`]);
    } catch (error) {
      console.error(error);
      setAnswer('Internal Server Error');
      setChatHistory((prevHistory) => [...prevHistory, 'ChatBot: Internal Server Error']);
    }
    setUserQuery('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Chatbot UI</h1>
      <div className="mb-4">
        {chatHistory.map((message, index) => (
          <div key={index} className={index % 2 === 0 ? 'text-left' : 'text-right'}>
            {message}
          </div>
        ))}
        <TypewriterEffect text={answer || 'Ask me a question!'} />
      </div>
      <div className="flex">
        <textarea
          value={userQuery}
          onChange={(e) => setUserQuery(e.target.value)}
          className="border p-2 mr-2"
          placeholder="Type your question"
        />
        <button onClick={handleAskQuestion} className="bg-blue-500 text-white p-2">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;

