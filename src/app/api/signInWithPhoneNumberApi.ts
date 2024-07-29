import { auth } from "@/firebase/firebaseConfig";
import { signInWithPhoneNumber } from "firebase/auth";

const signInWithPhoneNumberAPi = (phoneNumber: string): Promise<{ success: boolean; message: string, verificationId: string }> => {

    return new Promise((resolve, reject) => {
        const appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                resolve({ success: true, message: "OTP sent successfully", verificationId: confirmationResult.verificationId });
            })
            .catch((error) => {
                reject({ success: false, message: error.message ?? "OTP not sent", verificationId: "null" });
            });
    });
};

export default signInWithPhoneNumberAPi;
