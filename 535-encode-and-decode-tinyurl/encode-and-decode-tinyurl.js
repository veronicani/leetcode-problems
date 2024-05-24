const urlStore = {};

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    let slugChars = (
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
        );
    let initIdx = longUrl.length % slugChars.length;
    let idx = initIdx;
    let slug = "";
    for (let i = 0; i < 7; i++) {
        slug += slugChars[idx];
        idx += initIdx;
        if (idx >= slugChars.length) {
            idx = 0;
            initIdx --;
        }
    }
    urlStore[slug] = longUrl;
    const tinyUrl = `https://tiny.com/${slug}`;
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
    const longUrl = urlStore[slug];
    if (!longUrl) throw new Error('Invalid shortUrl');
    return longUrl;
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

//  class Solution {
//     constructor() {
//         this.urlStore = {};
//     }

//     _hashUrl(longUrl) {
//         let slugChars = (
//         "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
//         );
//         let initIdx = longUrl.length % slugChars.length;
//         let idx = initIdx;
//         let slug = "";
//         for (let i = 0; i < 7; i++) {
//             slug += slugChars[idx];
//             idx += initIdx;
//             if (idx >= slugChars.length) {
//                 idx = 0;
//                 initIdx --;
//             }
//         }
//         return slug;
//     }

//     encode(longUrl) {
//         const slug = this._hashUrl(longUrl);
//         this.urlStore[slug] = longUrl;
//         const tinyUrl = `https://tiny.com/${slug}`;
//         return tinyUrl;
//     }

//     decode(shortUrl) {
//         let idx;
//         for (idx = shortUrl.length - 1; idx >= 0; idx--) {
//             if (shortUrl[idx] === '/') break;
//         }
//         const slug = shortUrl.slice(idx + 1);
//         const longUrl = this.urlStore[slug];
//         if (!longUrl) throw new Error('Invalid shortUrl');
//         return longUrl;
//     }
// }