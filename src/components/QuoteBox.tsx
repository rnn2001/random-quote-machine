import React from 'react';
import { useSelector } from 'react-redux';

interface QuoteBoxProps {
  onNewQuote: () => void;
}

const QuoteBox: React.FC<QuoteBoxProps> = ({ onNewQuote }) => {
  const quote = useSelector((state: any) => state.quote);
  const author = useSelector((state: any) => state.author);

  return (
    <div id="quote-box">
  <p id="text">"{quote}"</p>
  <p id="author">- {author}</p>
  <div>
    <a
      id="tweet-quote"
      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${quote} - ${author}`)}`}
      target="_blank"
      rel="noreferrer"
    >
      Tweet
    </a>
    <button id="new-quote" onClick={onNewQuote}>
      Nova Citação
    </button>
  </div>
</div>

  );
};

export default QuoteBox;
