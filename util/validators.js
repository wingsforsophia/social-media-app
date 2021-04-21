module.exports.validateRegisterInput = (
    username,
    email, 
    password, 
    confirmPassword 
) => {
    const errors = {}
    if(username.trim()  === ''){
        errors.username = 'Username must not be empty'
    }  
    if(email.trim()  === ''){
        errors.username = 'Email must not be empty'
    } else {
        const regEx = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
        if(!email.match(regEx)){
            errors.email = 'Email must be a valid email address'
        }
    }
    if(password === ''){
        errors.password = 'Password must not be empty'
    } else if(password !== confirmPassword){
        errors.confirmPassword = 'Password must match'
    } 

    return {
        errors, 
        valid: Object.keys(errors).length < 1
    }
}