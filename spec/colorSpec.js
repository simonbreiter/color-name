import {
  isHexColor,
  normalizeHex,
  stripHashtag
} from '../src/util/color'

describe('isHexColor', () => {
  it('should return true if string is a valid hex color', () => {
    expect(isHexColor('#eeffee')).toBe(true)
    expect(isHexColor('eeffee')).toBe(true)
    expect(isHexColor('#efe')).toBe(true)
    expect(isHexColor('efe')).toBe(true)
    expect(isHexColor('#EEFFEE')).toBe(true)
    expect(isHexColor('EEFFEE')).toBe(true)
    expect(isHexColor('#EFE')).toBe(true)
    expect(isHexColor('EFE')).toBe(true)
  })
  it('should return false if string is not a valid hex color', () => {
    expect(isHexColor('@effee')).toBe(false)
    expect(isHexColor('')).toBe(false)
    expect(isHexColor('asdf')).toBe(false)
    expect(isHexColor('EFEGZ')).toBe(false)
  })
})

describe('normalizeHex', () => {
  it('should remove hashtag if present and normalize hex length ', () => {
    expect(normalizeHex('#efefef')).toBe('#EFEFEF')
    expect(normalizeHex('efefef')).toBe('#EFEFEF')
    expect(normalizeHex('#afa')).toBe('#AAFFAA')
    expect(normalizeHex('afa')).toBe('#AAFFAA')
  })
})

describe('stripHastag', () => {
  it('should remove hashtag if present', () => {
    expect(stripHashtag('###efefef')).toBe('efefef')
    expect(stripHashtag('##efefef')).toBe('efefef')
    expect(stripHashtag('#efefef')).toBe('efefef')
    expect(stripHashtag('#efefefefef')).toBe('efefefefef')
    expect(stripHashtag('afa')).toBe('afa')
    expect(stripHashtag('#afa')).toBe('afa')
    expect(stripHashtag('##afa')).toBe('afa')
  })
})
