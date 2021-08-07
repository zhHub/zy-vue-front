/**
 * 按规定长度 {@param length} 截取字符串 {@param str}，以 ... 结尾
 * @param str 字符串
 * @param length 长度 默认 10
 * @returns {string|string|*} 若未传入字符串，返回空字符串 | 若未传入长度，使用默认长度 10 | 返回截取后的结果
 */
export const interceptString = (str, length) => {
    if (!str) {
        return '';
    }
    if (!length) {
        return interceptString(str, 10);
    }
    if (str.length > length) {
        return str.slice(0, length) + '...'
    }
    return str;
}