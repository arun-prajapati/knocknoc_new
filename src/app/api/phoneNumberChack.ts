const phoneNumberChack = async (phonenumber: string) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkphonenumber`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phonenumber: phonenumber,
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const res = await response.json();

        return res

    } catch (error) {
        return error
    }
};

export default phoneNumberChack
