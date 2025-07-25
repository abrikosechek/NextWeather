export const textDegrees = (temp: number) => {
  return `${temp === 0 ? '' : Math.sign(temp) > 0 ? '+' : '-'}${Math.round(
    Math.abs(temp),
  )}°`;
};
