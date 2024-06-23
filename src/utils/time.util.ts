type NumStr = number | string;

export const formatDecimal = (num: number): string =>
  num < 10 ? `0${num}` : `${num}`;

export const formatDate = (
  date: string,
  option?: {
    decimal?: boolean;
  },
): `${NumStr}.${NumStr}.${NumStr}` => {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear() % 100;
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();

  const result: {
    year: NumStr;
    month: NumStr;
    day: NumStr;
  } = {
    year,
    month,
    day,
  };

  if (option?.decimal) {
    result.year = formatDecimal(year);
    result.month = formatDecimal(month);
    result.day = formatDecimal(day);
  }

  return `${result.year}.${result.month}.${result.day}`;
};
