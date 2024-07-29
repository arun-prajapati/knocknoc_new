import apihandler from "@/lib/apihandler";
import { AdditionalServiceType, AddressesDataFormTypes } from "@/types/types";
// --
type ApiPeramterTypes = { services_id: string }

// --
const additional_service_get = async (data: ApiPeramterTypes): Promise<{ data: AdditionalServiceType[] }> => {

    const userData: { data: AdditionalServiceType[], message: string; status: number } =
        await apihandler({
            path: "/additional_service_get",
            apiConfig: {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ sr_id: data.services_id }),
            },

        });
    // -
    return userData

}
export default additional_service_get
