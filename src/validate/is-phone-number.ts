
/**
 * 判断一段字符串是否是手机号
 * @param str 
 * @returns 
 */
export const isPhoneNumber = (str: string): boolean => {
    return /^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(str);
}
