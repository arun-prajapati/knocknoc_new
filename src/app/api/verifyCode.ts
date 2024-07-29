import { auth } from "@/firebase/firebaseConfig";
import { PhoneAuthProvider, signInWithCredential } from "firebase/auth";

const verifyCode = (otp: string, verificationId: string): Promise<{ success: boolean, message: string, data: any }> => {
    return new Promise((resolve, reject) => {
        if (!verificationId) {
            reject({ success: false, message: "Verification ID is required. Please provide a valid verification ID.", data: null });
            return;
        }

        const credential = PhoneAuthProvider.credential(verificationId, otp);

        signInWithCredential(auth, credential)
            .then((result: any) => {
                resolve({ success: true, message: "OTP verified successfully", data: result });
            })
            .catch((error: any) => {
                reject({ success: false, message: error.message ?? "OTP not verified", data: null });
            });
    });
};

export default verifyCode;
