//ChatBot
import { useState, useEffect } from 'react';

const TypewriterEffect = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');

  const typeWriter = async () => {
    for (let i = 0; i < text.length; i++) {
      setDisplayText((prevText) => prevText + text.charAt(i));
      await new Promise((resolve) => setTimeout(resolve, 50)); // Adjust the delay as needed
    }
  };

  useEffect(() => {
    typeWriter();
  }, []); // Run only once when component mounts

  return <div>{displayText}</div>;
};

const Home = () => {
  const [userQuery, setUserQuery] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAskQuestion = async () => {
    try {
      const response = await fetch(`/api/bard?query=${userQuery}`);
      const data = await response.json();
      const ans = data.ans || 'No answer found';
      setAnswer(ans);
    } catch (error) {
      console.error(error);
      setAnswer('Internal Server Error');
    }
  };

  useEffect(() => {
    if (userQuery !== '') {
      handleAskQuestion();
    }
  }, [userQuery]); // Run when userQuery changes

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Chatbot UI</h1>
      <div className="mb-4">
        <TypewriterEffect text={answer || 'Ask me a question!'} />
      </div>
      <div className="flex">
        <input
          type="text"
          value={userQuery}
          onChange={(e) => setUserQuery(e.target.value)}
          className="border p-2 mr-2"
          placeholder="Ask a question"
        />
        <button onClick={handleAskQuestion} className="bg-blue-500 text-white p-2">
          Ask Question
        </button>
      </div>
    </div>
  );
};

export default Home;
