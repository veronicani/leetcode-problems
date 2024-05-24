const longToShort = {};
const shortToLong = {};
const BASE_URL = 'https://tinyurl.com/';


/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    const slug = Object.keys(longToShort).length + 1;
    longToShort[longUrl] = slug;
    shortToLong[slug] = longUrl;
    const tinyUrl = `${BASE_URL}${slug}`;
    return tinyUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    let idx;
    for (idx = shortUrl.length - 1; idx >= 0; idx--) {
        if (shortUrl[idx] === '/') break;
    }
    const slug = shortUrl.slice(idx + 1);
    const longUrl = shortToLong[slug];
    return longUrl;
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */