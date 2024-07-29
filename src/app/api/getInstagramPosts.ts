const getInstagramPosts = async (): Promise<{ success: boolean, data: any }> => {

    try {
        const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${process.env.INSTA_TOKEN}`, {
            method: "GET",
        });

        const posts = await response.json();

        if (response.status !== 200) {
            return { success: false, data: null };
        } else {
            return { success: true, data: posts };
        }
    } catch (error) {
        return { success: false, data: null };
    }
}
export default getInstagramPosts;
