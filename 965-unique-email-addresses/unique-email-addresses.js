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

    const [local, domain] = email.split('@');
    let forwardLocal = '';
    for (char of local) {
        if (char === '+') break;
        if (char !== '.') forwardLocal += char;
    }
    return forwardLocal + '@' + domain;
}