const yearInWords = [
  'less then year',
  'one year',
  'two years',
  'three years',
  'four years',
  'five years',
  'six years',
  'seven years',
  'eight years',
  'nine years',
  'ten years',
  'eleven years',
  'twelve years',
  'thirteen years',
  'fourteen years',
  'fifteen years',
  'sixteen years',
  'seventeen years',
  'eighteen years',
  'nineteen years',
  'twenty years',
];

export default function transormDateToAge(incomeDate) {
  const today = new Date();
  const birthDate = new Date(incomeDate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  if (age >= 19) {
    let ageInWords = 'press "learn more"';
    return ageInWords;
  }
  let ageInWords = yearInWords[age];

  return ageInWords;
}
