

const apihandler = async ({ path, apiConfig = null }: { path: string, apiConfig?: any }) => {

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, apiConfig);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error(`API request failed with status: ${response.status}`);
        }
    } catch (error) {
        return error;
    }

};

export default apihandler;