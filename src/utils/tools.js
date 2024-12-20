import _ from 'lodash'

// 千位小数
export const wFormatInt = num => {
    return num ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : num
}


// 生成唯一ID
export const getUuid = () => {
    const s = []
    const hexDigits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (let i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
    }
    s[14] = '4'
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1)
    s[8] = s[13] = s[18] = s[23] = '-'
    const uuid = s.join('')
    return uuid
}
