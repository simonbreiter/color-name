const convertBase = (num, baseFrom, baseTo) => parseInt(num, baseFrom).toString(baseTo)
const hex2dec = num => convertBase(num, 16, 10)

export { hex2dec }
