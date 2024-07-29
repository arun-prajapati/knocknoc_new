
import axios from 'axios'
// --
type ApiParameterTypes = { extension: string, file: File };

// Function to convert file to base64
const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = error => reject(error);
    });
};

type ApiResponse = {
    success: boolean;
    data?: any;
    error?: any;
};
// --
const base64Api = async (data: ApiParameterTypes): Promise<ApiResponse> => {
    try {
        const base64File = await fileToBase64(data.file);
        // --get file data--
        const fileData = data.extension === "png" ? base64File.split("data:image/png;base64,").map((item) => item.trim()) : base64File.split("data:image/jpeg;base64,").map((item) => item.trim())

        // --
        const response =

            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/base64`, {
                extension: `.${data.extension}`,
                file: fileData[1]
            },
            )

        return {
            success: true,
            data: response.data
        };
    } catch (error: any) {
        return {
            success: false,
            error: error?.message || 'An error occurred'
        };
    }
};

export default base64Api;
