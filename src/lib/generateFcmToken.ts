import { messaging } from "@/firebase/firebaseConfig";
import { getToken, isSupported } from "firebase/messaging";

const generateFcmToken = async (): Promise<{ success: boolean, token: string }> => {
    try {
        if (typeof window !== "undefined" && (await isSupported())) {
            const permission = await Notification.requestPermission();

            if (permission === "granted") {
                const currentToken: string | null = await getToken(messaging!, { vapidKey: 'BO9qCw3lV3QtZ6zX3L9CGJhLwvsVpRMSxRmoxejSbWAuv-GUeviOfjngNkm1I0o25k_-ISaRbAq0LMG9Nwgmy3U' });
                if (currentToken) {
                    return { success: true, token: currentToken };
                } else {
                    return { success: false, token: "null" };
                }
            } else {
                return { success: false, token: "null" };
            }
        } else {
            return { success: false, token: "null" };
        }
    } catch (err) {
        return { success: false, token: "null" };
    }
}

export default generateFcmToken;
