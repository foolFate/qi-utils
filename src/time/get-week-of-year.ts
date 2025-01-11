/**
 * 计算给定日期是当前年份的第几周（默认周日算做一周的开始）
 * 如果一个日期属于上一年的最后一周，则返回 0
 * @param date
 */
export const getWeekOfYear = (date: Date = new Date()): number => {
  const year = date.getFullYear(); // 当前年

  // 当前日期是一年的第几天
  // Math.floor((当前时间戳 - 一年开始的时间戳) / (24 * 60 * 60 * 1000))
  const currentDayOfYear = Math.floor(
    (date.getTime() - new Date(year, 0, 0).getTime()) / (24 * 60 * 60 * 1000),
  );

  // 当前年的一月一日是周几 (2025年是周三)
  const day = new Date(year, 0, 1).getDay();

  let currentDayOfYearNew = 0;

  // 传入的当前日期是今年的第几天(去除去年的天数(如果今年1月1日不是从周日开始的话))
  if (day === 0) {
    currentDayOfYearNew = currentDayOfYear;
  } else {
    currentDayOfYearNew = currentDayOfYear - (7 - day);
  }

  // 当前日期是当前年的第几周
  let currentWeekOfYear = Math.ceil(currentDayOfYearNew / 7);

  return Math.abs(currentWeekOfYear);
};
