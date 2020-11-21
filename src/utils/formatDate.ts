const formatDate = (dateToFormat: Date): string => {
  const date = new Date(dateToFormat);

  const dataFormatted = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;

  return dataFormatted;
};

export default formatDate;
