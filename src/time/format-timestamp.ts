/**
 * 格式化时间戳
 * @param {Number} t 时间戳
 * @param {String} formatStr 格式化字符串（默认 xxxx年xx月xx日 xx时xx分xx秒）
 * @returns {String} 格式化后的时间戳
 */
export function formatTimestamp(t: number, formatStr?: string): string {
  const date = new Date(t);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const seconds = date.getSeconds();
  return `${year}年${month}月${day}日 ${hour}时${minute}分${seconds}秒`;
}
