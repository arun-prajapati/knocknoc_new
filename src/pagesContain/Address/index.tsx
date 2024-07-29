import AddressList from "./components/AddressList";
import ProfilePagesWrapper from "@/components/ProfilePagesWrapper";
import Link from "next/link";

const Address = () => {
  return (
    <div className="address_page">
      <ProfilePagesWrapper
        heading="Address"
        headerContent={
          <Link
            href="/profile/addresses/address-action"
            className="bg-primary py-2 px-6 text-primary-foreground rounded-lg focus:scale-90"
          >
            Add
          </Link>
        }
      >
        <div className="addresses_list">
          <AddressList />
        </div>
      </ProfilePagesWrapper>
    </div>
  );
};

export default Address;
