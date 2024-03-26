import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Quote from '../components/Quote';

const AuthorPage = () => {
  const { authorSlug } = useParams();

  const [authorQuotes, setAuthorQuotes] = useState([]);

  useEffect(() => {
    const fetchAuthorQuotes = async () => {
      try {
        const res = await fetch(
          `https://api.quotable.io/quotes/?author=${authorSlug}`
        );
        const data = await res.json();
        if (res.ok) {
          setAuthorQuotes(data.results);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchAuthorQuotes();
  }, []);

  return (
    <div className="container">
      <div className="author">
        {authorQuotes.length > 0 && authorQuotes[0].author}
      </div>
      {authorQuotes.map((quote) => (
        <Quote>{quote.content}</Quote>
      ))}
    </div>
  );
};

export default AuthorPage;
