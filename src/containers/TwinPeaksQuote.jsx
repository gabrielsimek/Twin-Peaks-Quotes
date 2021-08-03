import React, { useState } from 'react';
import Quote from '../components/quote/Quote';
import Load from '../components/quote/Load';
import getQuote from '../services/twinPeaksApi';

const TwinPeaksQuote = () => {
  const [quote, setQuote] = useState({});
  const handleClick = () => {
    getQuote()
      .then(quote => setQuote(quote));
  };
  return (
    <>
      <Load onClick={handleClick}/>
      <Quote quote={quote}/>
    </>
  );
};

export default TwinPeaksQuote;
