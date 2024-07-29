import wallet_amount_get from "@/app/api/swr/wallet_amount_get";
import TypographyP from "@/components/typography/TypographyP";
import TypographySmall from "@/components/typography/TypographySmall";
import { Skeleton } from "@/components/ui/skeleton";
import { CurrentUserContext } from "@/context/CurrentUser";
import React, { useContext } from "react";
import useSWR from "swr";

const WalletAmount = () => {
  // --
  const currentUser = useContext(CurrentUserContext);

  // --
  const fetcher = () =>
    wallet_amount_get({ user_firebase_id: currentUser?.user_token ?? "" });

  // --
  const { data, isLoading } = useSWR("/wallet_amount_get", fetcher);

  if (isLoading) return <Skeleton className="w-full h-20" />;

  return (
    <div className="wallet_amount border-2 rounded-lg p-2 sm:p-3">
      <TypographySmall text="Wallet Amount" css="opacity-70" />
      <TypographyP text={`$${data?.amount ?? 0}`} css="font-semibold" />
      <TypographySmall text="*insufficient balance" />
    </div>
  );
};

export default WalletAmount;
