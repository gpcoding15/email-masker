const maskEmail = email =>{
    const [ userEmail, domain ] = email.split("@");
    const lenghtSplittedEmail = userEmail.length
    const firstEmailLetter = userEmail.slice(0,1)
    const lastEmailLetter = userEmail.slice(lenghtSplittedEmail - 1, lenghtSplittedEmail)
    const maskedEmail = firstEmailLetter + "*".repeat(lenghtSplittedEmail - 2) + lastEmailLetter + "@" + domain
    return maskedEmail
};

module.exports = {
    maskEmail
}