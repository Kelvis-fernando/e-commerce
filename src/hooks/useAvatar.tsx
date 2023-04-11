const useAvatar = (name: string) => {
  const getInitialLettersFromName = () => {
    const splitName = name.split(" ");
    const separetedLetters = splitName.map((name: string) => name.slice(0, 1));
    return separetedLetters;
  };
  return { getInitialLettersFromName };
};

export default useAvatar;
