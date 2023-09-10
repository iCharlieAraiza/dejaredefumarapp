export const calculateDays = (startDate: string, endDate: string) => {
  if(!startDate || !endDate) return 0;
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diff = end.getTime() - start.getTime();
  const days = diff / (1000 * 60 * 60 * 24);
  return days < 0 ? 0 : days;
}
