import { CommonPaginations } from "@/components/common/CommonPaginations";
import NoData from "@/components/common/NoData";
import TypographyH4 from "@/components/typography/TypographyH4";
import TypographyP from "@/components/typography/TypographyP";
import apihandler from "@/lib/apihandler";
import { getClient_token } from "@/lib/clientCookie";
import { cn } from "@/lib/utils";
import { OrderDataType, PaginateDataType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const OrdersShow = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  // --
  const currentPage = searchParams["page"] || 1;
  // --
  const get_order_api_Res: {
    data: OrderDataType[];
    paginate_data: PaginateDataType;
  } = await apihandler({
    path: "/get_order",
    apiConfig: {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        page_no: currentPage?.toString(),
        user_firebase_id: getClient_token() || "",
      }),
    },
  });

  return (
    <>
      {!get_order_api_Res.data ? (
        <NoData text="Orders not found" />
      ) : get_order_api_Res.data.length < 1 ? (
        <NoData text="Orders not created" />
      ) : (
        <div className="min-h-[70vh]">
          <div className="orders_list  py-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4">
            {get_order_api_Res.data.map((e) => (
              <div
                className="order_card border p-2 flex gap-2 rounded-md"
                key={`${e.id}_order_item`}
              >
                <div className="image_box relative w-full max-w-[120px] sm:max-w-[150px] max-h-24 sm:max-h-full aspect-square rounded-md overflow-hidden">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL_STORAGE}/${e.ser_image}`}
                    alt={e.ser_name}
                    fill
                  />
                </div>
                <div className="content w-full flex  flex-col">
                  <TypographyH4 text={e.ser_name} css="line-clamp-1" />
                  <TypographyP text={e.ser_description} css=" line-clamp-3" />
                  <div className="flex-grow" />
                  <div className="order_status flex flex-col-reverse sm:flex-row  items-start mt-2 sm:items-center justify-between gap-2  ">
                    <Link
                      href={`/orders/${e.id}?page=${currentPage}`}
                      className="py-2 px-6 bg-primary text-primary-foreground rounded-lg"
                    >
                      View
                    </Link>
                    <div className="status text-sm sm:text-base font-medium">
                      <span className="whitespace-nowrap text-gray-500">
                        Order Status :
                      </span>
                      <span
                        className={cn(
                          "capitalize",
                          e.payment_status === "success"
                            ? "text-green-600"
                            : "text-red-600"
                        )}
                      >
                        {" "}
                        {e.payment_status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* --pagination-- */}
      <div className="flex justify-center py-10 w-full ">
        <CommonPaginations
          currentPage={Number(currentPage)}
          pages={get_order_api_Res?.paginate_data?.total_pages || 1}
          url="/orders"
        />
      </div>
    </>
  );
};

export default OrdersShow;
