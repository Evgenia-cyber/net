export const required = (value) => {
  if (value) return undefined;
  return "Это поле обязательно для заполнения";
};
export const maxLength = (maxLength) => (value) => {
  if (value && value.length > maxLength)
    return `Максимальное количество символов: ${maxLength}`;
  return undefined;
};
