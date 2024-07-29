import OrdersShow from "./components/OrdersShow";

const Orders = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <main className="orders_page 2xl:container px-2 min-h-svh">
      <OrdersShow searchParams={searchParams} />
    </main>
  );
};

export default Orders;
