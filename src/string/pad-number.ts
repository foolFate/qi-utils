
/**
 * 数字字符串补零
 * @param numStr 要补充的字符串
 * @param length 目标长度
 */
export const padNumber = (numStr: string, length: number) => {
    return numStr.padStart(length, '0')
}
