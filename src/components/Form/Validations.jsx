
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const validate = (userData) => {
    const errors = {};

    if (userData.username.length >= 1 && !regexEmail.test(userData.username)) {
        errors.username = 'Please type a valid email';
    }
 
    if (userData.password.length >= 1 && !regexPassword.test(userData.password)) {
        errors.password = 'Password must contain: Minimum eight characters, at least one letter and one number ';
    }

    return errors
}
