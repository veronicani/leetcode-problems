/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {

    const unique = new Set();
    for (e of emails) {
        unique.add(convertToForwardingAddress(e));
    }
    return unique.size;
};

var convertToForwardingAddress = function(email) {

    let forwardLocal = '';
    for (let i = 0; i < email.length; i++) {
        if (email[i] === '+' || email[i] === '@') break;
        if (email[i] !== '.') forwardLocal += email[i];
    }

    let domain = '';
    for (let j = email.length - 1; j >= 0; j--) {
        if (email[j] === '@') break;
        domain = email[j] + domain;
    }

    return forwardLocal + '@' + domain;
}