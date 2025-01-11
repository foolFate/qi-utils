/**
 * 获取给定日期是当前年的第几天
 * @param date
 * @returns
 */
export const getDayOfYear = (date: Date = new Date()) => {
  const currentDayOfYear = Math.floor(
    (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) /
      (24 * 60 * 60 * 1000),
  );

  return currentDayOfYear;
};
