import CryptoJS from "crypto-js";

export const encryptData = (data: string, SECRET_KEY: string) => {
    console.log(data, SECRET_KEY, "data, SECRET_KEY");
    return CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
};

export const decryptData = (cipherText: string, SECRET_KEY: string) => {
    const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
};
