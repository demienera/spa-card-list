export const getFullYear = () => {
  return new Date().getFullYear();
};

export const formatDate = (dateStr: string) => {
  const [year, month, day] = dateStr.split("-");
  return `${day}.${month}.${year}`;
};

export const getRatingColor = (rating: number) => {
  if (rating >= 4) return "#10b981";
  if (rating >= 3) return "#f59e0b";
  return "#ef4444";
};
