type SocialLoginType = {
    firebase_id: string;
    fcm_token: string;
    firstname: string;
    lastname: string;
    email: string;
    social_type?: string;
};

const socialLogin = async (props: SocialLoginType): Promise<{ success: boolean, message: string, data: any }> => {
    const {
        firebase_id = "",
        fcm_token = "",
        firstname = "",
        lastname = "",
        email = "",
        social_type = "google"
    } = props;

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/social_login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firebase_id,
                fcm_token: fcm_token,
                firstname,
                lastname,
                email,
                social_type
            })
        });

        if (!response.ok) {
            return { success: false, message: `HTTP error! status: ${response.status}`, data: null }
        }

        const resData = await response.json();
        return { success: true, message: `Login Successfull`, data: resData }

    } catch (error: any) {
        return { success: false, message: error.message ?? `Something went wrong`, data: null }
    }
};

export default socialLogin