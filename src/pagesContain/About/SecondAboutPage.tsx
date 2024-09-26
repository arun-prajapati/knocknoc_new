import TypographyH3 from "@/components/typography/TypographyH3";
import TypographyH4 from "@/components/typography/TypographyH4";
import Link from "next/link";
import React from "react";

const SecondAboutPage = () => {
  return (
    <div className="SecondAboutPage_action_page">
      <TypographyH3 text="About Us" css="text-center mb-3" />
      <div className="content">
        <TypographyH4
          text="General info on brand and services."
          css="text-center mb-3"
        />
        <p className="text-sm sm:text-base mb-2 text-center">
          <Link className="text-primary" href="https://knocknoc.sg/">
            KnocKnoc
          </Link>{" "}
          is the super app that caters to the diverse needs of 21st-century
          women. We provide a comprehensive range of curated and
          service-oriented offerings through our network of caring cat
          providers. Whether you need wedding services, essential services,
          indulgence services, mummy and kiddy services, car workshop services,
          charity and volunteer services, or ride hailing services, KnocKnoc has
          got you covered. Our goal is to be the first and only super app you
          need, available at all times of the day.
        </p>

        <TypographyH4 text="What is KnocKnoc?" css="mt-3 mb-2 text-center" />
        <p className="text-sm sm:text-base mb-2 text-center">
          Founded in 2022, KnocKnoc is designed to simplify and enhance the
          lives of women by providing a myriad of services. We collaborate with
          over 600 cat providers to offer the best and most affordable care and
          pampering. With a variety of payment options, including buy now, pay
          later and installment plans, you can choose your preferred mode of
          payment while earning cashback and rebates.
        </p>
        <p className="text-sm sm:text-base mb-2 text-center">
          To book a service, simply download KnocKnoc from the Apple App Store
          or Google Play Store, or contact our Happy Cat via WhatsApp at
          <a
            href="whatsapp://send?abid=87713358&amp;text=Hello Cat"
            className="text-primary underline ps-2"
            target="_blank"
            rel="noreferrer"
          >
            87713358
          </a>
        </p>
      </div>
    </div>
  );
};

export default SecondAboutPage;
