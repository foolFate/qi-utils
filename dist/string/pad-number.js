/**
 * 数字字符串补零
 * @param numStr 要补充的字符串
 * @param length 目标长度
 */
export const padNumber = (numStr, length) => {
    return numStr.padStart(length, '0');
};
