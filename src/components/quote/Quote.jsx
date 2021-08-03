import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quote }) => {
  return (
    <article>
      <h2>Name: {quote.name}</h2>
      <p>Quote: {quote.quoteTextOnly}</p>
    </article>
  );
};

Quote.propTypes = {
  quote: PropTypes.object.isRequired
};

export default Quote;
