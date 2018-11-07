export const initialsProvider = (name: string): string => {
  const names = name.split(' ');
  let initials = names[0].substring(0, 1).toUpperCase();

  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  } else if (names[0].length > 1) {
    initials += names[0].substring(1, 2).toUpperCase();
  }
  return initials;
};

export const nameColorProvider: (name: string) => string = (() => {
  const colors = [
    '#EBDD94',
    '#DA8D93',
    '#BA99B8',
    '#D7B8A3',
    '#CD9775',
    '#DB8F5B',
    '#9E5C5D',
    '#CCD0D1',
    '#929093',
    '#A7CCDE',
    '#87A9C5',
    '#255993',
    '#89BFAF',
    '#2EA1B4',
    '#8A8A4C',
    '#587942',
  ];
  const colorNameMap: string[] = [];

  return (name: string) => {
    let index = colorNameMap.indexOf(name);
    if (index < 0) {
      index = colorNameMap.length;
      colorNameMap.push(name);
    }

    index = index % colors.length;
    return colors[index];
  };
})();
