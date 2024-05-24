const longToShort = {};
const shortToLong = {};
const BASE_URL = 'https://tinyurl.com/';
const slugChars = (
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
    );

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    if (longToShort[longUrl]) return longToShort[longUrl];
    let slug = "";
    for (let i = 0; i < 7; i++) {
        let idx = Math.random() * slugChars.length;
        slug += slugChars[idx];
    }
    const tinyUrl = `${BASE_URL}${slug}`;
    longToShort[longUrl] = tinyUrl;
    shortToLong[tinyUrl] = longUrl;
    return tinyUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    const longUrl = shortToLong[shortUrl];
    return longUrl;
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */