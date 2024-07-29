import { auth } from "@/firebase/firebaseConfig";
import { signOut } from "firebase/auth";
const logout = () => {
    return new Promise((resolve, reject) => {
        signOut(auth).then(() => {
            resolve({ success: true, message: "Logout Successfull" })
        }).catch((error) => {
            reject({ success: true, message: error.message ?? "Logout Unsuccessfull" })
        })
    })
}

export default logout