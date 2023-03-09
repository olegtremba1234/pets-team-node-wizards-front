function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

export default function transormDate(dateString) {
  const birthDate = new Date(dateString);
  const day = birthDate.getDate();
  const monthNumber = birthDate.getMonth();
  const year = birthDate.getFullYear();

  const monthFormated = addLeadingZero(monthNumber + 1);

  const totalDate = `${day}.${monthFormated}.${year}`;
  return totalDate;
}
