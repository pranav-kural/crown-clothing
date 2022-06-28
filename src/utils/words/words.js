export const getRandomWords = async (numOfWords = 10, lang = 'de') => {
  const words = await fetch(
    `https://random-word-api.herokuapp.com/word?number=${numOfWords}&lang=${lang}`
  ).then((response) => response.json());
  return words.join(' ');
};
