export const getFullYear = () => {
  return new Date().getFullYear();
};

export const formatDate = (dateStr: string) => {
  const [year, month, day] = dateStr.split("-");
  return `${day}.${month}.${year}`;
};

export const getRatingColor = (rating: number) => {
  if (rating >= 4) return "green";
  if (rating >= 3) return "orange";
  return "red";
};
