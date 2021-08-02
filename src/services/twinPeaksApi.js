const URL = 'https://damp-cove-34137.herokuapp.com/api/quotes/random';

export default async function getQuote() {
  const quote = await fetch(URL);
  const json = await quote.json();
  return json;
}
