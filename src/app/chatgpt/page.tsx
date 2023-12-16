//ChatBot
"use client"

import { useState } from 'react';
import axios from 'axios';

const TypewriterEffect = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');

  const typeWriter = async () => {
    for (let i = 0; i < text.length; i++) {
      setDisplayText((prevText) => prevText + text.charAt(i));
      await new Promise((resolve) => setTimeout(resolve, 50)); // Adjust the delay as needed
    }
  };

  return (
    <div>
      <p>{displayText}</p>
      {displayText.length === text.length || (
        <button onClick={typeWriter}>Show Answer</button>
      )}
    </div>
  );
};

const Chatbot = () => {
  const [userQuery, setUserQuery] = useState('');
  const [chatHistory, setChatHistory] = useState<string[]>([]);
  const [answer, setAnswer] = useState('');

  const handleAskQuestion = async () => {
    try {
      if (userQuery.trim() === '') return;

      setChatHistory((prevHistory) => [...prevHistory, `You: ${userQuery}`]);

      const response = await axios.get(`/api/bard?query=${encodeURIComponent(userQuery)}`);
      const ans = response.data.ans || 'No answer found';

      setAnswer(ans);
      setChatHistory((prevHistory) => [...prevHistory, `ChatBot: ${ans}`]);
    } catch (error) {
      console.error('Axios Error:', error);

      if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Response Data:', error.response.data);
        console.error('Response Status:', error.response.status);
        console.error('Response Headers:', error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Request Data:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error Message:', error.message);
      }

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
