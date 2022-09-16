export const validFiledInput = (string:string) => {
    let regex = new RegExp("^[a-zA-Z ]+$");
    return regex.test(string);
};