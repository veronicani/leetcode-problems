/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    //make set for unique forwards
    //iterate over emails
        //convert email to forwarded address
        //add result to a set
    //return length of the set

    const unique = new Set();
    for (e of emails) {
        unique.add(convertToForwardingAddress(e));
    }
    return unique.size;
};

var convertToForwardingAddress = function(email) {
    //split e -> local @ domain
    //fowardLocal = ''
    //loop over local
        //if + -> break
        //if char -> push to forwardLocal
    //return forwardLocal + domain

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