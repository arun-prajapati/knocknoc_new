import { auth, provider } from "@/firebase/firebaseConfig";
import { UserCredential, signInWithPopup } from "firebase/auth";


const signInWithPopupFun = async (): Promise<UserCredential | Error> => {
    try {
        const data: UserCredential = await signInWithPopup(auth, provider);
        return data;
    } catch (error) {
        return error as Error;
    }
}
export default signInWithPopupFun