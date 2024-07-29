import apihandler from "@/lib/apihandler";
import { PackagesDataType } from "@/types/types";
// --
type ApiPeramterTypes = { services_id: string }

// --
const packages = async (data: ApiPeramterTypes): Promise<{ data: PackagesDataType[] }> => {

    const packagesData: { data: PackagesDataType[], message: string; status: number } =
        await apihandler({
            path: "/package",
            apiConfig: {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ cat_id: "", sr_id: data.services_id }),
            },

        });
    // -
    return packagesData

}
export default packages
