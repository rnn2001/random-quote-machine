import { useEffect } from 'react';
import QuoteBox from './components/QuoteBox';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  const fetchQuote = async () => {
    const res = await fetch('https://api.quotable.io/random');
    const data = await res.json();
    dispatch({
      type: 'SET_QUOTE',
      payload: {
        quote: data.content,
        author: data.author,
      },
    });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <QuoteBox onNewQuote={fetchQuote} />
    </div>
  );
};

export default App;
