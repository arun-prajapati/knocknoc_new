type RegisterDataEntryType = {
    firebase_id: string;
    fcm_token?: string | null;
    firstname: string;
    lastname: string;
    email: string;
    phonenumber: string;
    gender: string;
};
const register = async (values: RegisterDataEntryType): Promise<{ success: boolean, message: string, data: any }> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firebase_id: values.firebase_id,
                fcm_token: values.fcm_token,
                firstname: values.firstname,
                lastname: values.lastname,
                email: values.email,
                phonenumber: values.phonenumber,
                gender: values.gender
            })
        });
        if (!response.ok) {
            return { success: false, message: `HTTP error! status: ${response.status}`, data: null }
        }
        const apiData = await response.json();
        return { success: true, message: `Register successfull`, data: apiData }
    } catch (error: any) {
        return { success: false, message: error.message ?? `Something went wrong`, data: null }
    }
};


export default register