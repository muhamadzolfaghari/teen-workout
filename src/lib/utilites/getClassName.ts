const getClassName = (...classList: any[]) =>
  classList.filter((className) => className).join(' ');

export default getClassName;
