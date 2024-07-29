type LoginApiDetailsType = {
    firebase_id: string;
    fcm_token?: string;
    phonenumber: string;
};

const loginApi = async (apiDetials: LoginApiDetailsType): Promise<{ success: boolean, message: string, data: any }> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firebase_id: apiDetials.firebase_id,
                fcm_token: apiDetials.fcm_token || "null",
                phonenumber: apiDetials.phonenumber
            })
        });

        if (!response.ok) {
            return { success: false, message: `HTTP error! status: ${response.status}`, data: null }
        }

        const apiData = await response.json();
        return { success: true, message: `login successfull`, data: apiData }
    } catch (error: any) {
        return { success: false, message: error.message ?? `something went wrong`, data: null }
    }
};

export default loginApi