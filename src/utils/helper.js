export function validateEmail(email) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
}

export function validateName(yourName) {
    const regex = /^[A-Za-z\s]*$/;
    return regex.test(yourName);
}