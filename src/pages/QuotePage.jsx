import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Quote from '../components/Quote';
import { ArrowRightAlt } from '@mui/icons-material';

const QuotePage = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchRandomQuote = async () => {
      try {
        const res = await fetch(`https://api.quotable.io/quotes/random`);
        const data = await res.json();
        if (res.ok) {
          setQuote(data[0]);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchRandomQuote();
  }, []);

  return (
    <div className="container quotePage">
      <Quote> {quote.content} </Quote>
      <div className="quoteAuthor">
        <Link to={`/${quote.authorSlug}`}>
          <div className="btn">
            <div className="btn__info">
              <div className="btn__info__name">{quote.author}</div>
              {quote.tags}
            </div>
            <ArrowRightAlt className="btn__icon" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default QuotePage;
