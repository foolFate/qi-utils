/**
 * 获取一年有多少周
 * @param year
 * @returns
 */
export const getYearWeeks = (year: number): number => {
  // 当前年的一月一日是周几 (2025年是周三)
  const day = new Date(year, 0, 1).getDay();
  let dayOfYearNew = 0;

  // 当前年有多少天
  const daysOfYear = Math.floor(
    (new Date(year, 11, 31).getTime() - new Date(year, 0, 0).getTime()) /
      (24 * 60 * 60 * 1000),
  );

  // 当前年份的1月1日是今年的第几天(去除去年的天数(如果今年1月1日不是从周日开始的话))
  if (day === 0) {
    dayOfYearNew = daysOfYear;
  } else {
    dayOfYearNew = daysOfYear - (7 - day);
  }

  const weeksOfYear = Math.ceil(dayOfYearNew / 7);
  return weeksOfYear;
};
