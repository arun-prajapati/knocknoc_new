import React from "react";
import Link from "next/link";
import TypographyP from "../typography/TypographyP";
import { Separator } from "../ui/separator";
import MainFooter from "./MainFooter";
import CopyrightLine from "./CopyrightLine";

const CommonFooter = () => {
  return (
    <>
      <footer className="bg-primary text-primary-foreground border-t pb-5 sm:pb-10">
        <div className=" 2xl:container px-2  space-y-3 md:space-y-6">
          {/* --main footer-- */}
          <MainFooter />

          {/* --about info-- */}
          <div className="about_info space-y-2">
            <TypographyP text="Knoc Knoc" css="font-bold" />
            <TypographyP
              text="Founded in 2022, KnocKnoc is designed to simplify and enhance the lives of women by providing a myriad of services. We collaborate with over 600 cat providers to offer the best and most affordable care and pampering. With a variety of payment options, including buy now, pay later and installment plans, you can choose your preferred mode of payment while earning cashback and rebates.
"
            />
            <TypographyP
              text="To book a service, simply download KnocKnoc from the Apple App Store or Google Play Store, or contact our Happy Cat via WhatsApp at 87713358.
"
            />
          </div>
          <Separator />
          {/* --services inf-- */}
          <div className="services_info">
            <TypographyP text="KnocKnoc is the super app that caters to the diverse needs of 21st-century women. We provide a comprehensive range of curated and service-oriented offerings through our network of caring cat providers. Whether you need wedding services, essential services, indulgence services, mummy and kiddy services, car workshop services, charity and volunteer services, or ride hailing services, KnocKnoc has got you covered. Our goal is to be the first and only super app you need, available at all times of the day." />
          </div>
          <Separator />
          {/* --services-- */}
          <div className="about_info space-y-2">
            <TypographyP text="Our Services" css="font-bold" />
            <div className="item">
              <TypographyP text="Home Services" css="font-semibold" />
              <p className="text-sm md:text-sm xl:text-sm max-w-7xl">
                Our home services include a wide range of offerings such as
                <Link className="underline" href="/home-services">
                  {" "}
                  home cleaning services in Singapore,{" "}
                </Link>
                maintenance, repairs, and more to keep your living space in top
                shape. Our dedicated providers ensure your home is spotless and
                well-maintained.
              </p>
              <p></p>
            </div>
            <div className="item">
              <TypographyP text="Car Services" css="font-semibold" />
              <p className="text-sm md:text-sm xl:text-sm max-w-7xl">
                We provide comprehensive car servicing in Singapore, including
                maintenance, repairs, and detailing. Our
                <Link className="underline" href="/car-services">
                  {" "}
                  car service{" "}
                </Link>{" "}
                ensures your vehicle is always road-ready and running smoothly.
              </p>
            </div>
            <div className="item">
              <TypographyP
                text=" Digital Services
"
                css="font-semibold"
              />
              <p className="text-sm md:text-sm xl:text-sm max-w-7xl">
                From tech support to digital marketing, our
                <Link className="underline" href="/digital-services">
                  {" "}
                  digital services{" "}
                </Link>
                are designed to meet your online needs efficiently and
                effectively. We help you stay connected and enhance your digital
                presence.
              </p>
            </div>

            <div className="item">
              <TypographyP
                text=" Pampering
"
                css="font-semibold"
              />
              <p className="text-sm md:text-sm xl:text-sm max-w-7xl">
                Indulge in our range of
                <Link className="underline" href="/pampering-services">
                  {" "}
                  pampering services,{" "}
                </Link>
                including spa treatments, beauty services, pedicures, and
                wellness sessions to relax and rejuvenate. Experience luxury and
                care at its finest.
              </p>
            </div>

            <div className="item">
              <TypographyP
                text=" Baby Services
"
                css="font-semibold"
              />
              <p className="text-sm md:text-sm xl:text-sm max-w-7xl">
                We offer a variety of services for mothers and their babies,
                including babysitting, early childhood education, and more. Our
                <Link className="underline" href="/baby-services">
                  {" "}
                  baby services{" "}
                </Link>{" "}
                ensure the best care for your little ones.
              </p>
            </div>

            <div className="item">
              <TypographyP
                text=" Wedding Services

"
                css="font-semibold"
              />
              <p className="text-sm md:text-sm xl:text-sm max-w-7xl">
                Our wedding services cover everything from planning and
                coordination to makeup and photography, making your special day
                unforgettable. As a top
                <Link className="underline" href="/wedding-services">
                  {" "}
                  wedding planner in Singapore,{" "}
                </Link>
                we ensure your wedding is flawlessly executed.
              </p>
            </div>

            <div className="item">
              <TypographyP
                text=" Shopping Services


"
                css="font-semibold"
              />
              <p className="text-sm md:text-sm xl:text-sm">
                Enjoy
                <Link className="underline" href="/shopping-services">
                  {" "}
                  personalized shopping{" "}
                </Link>
                experiences with our shopping services, which include personal
                shoppers and curated shopping trips. We make shopping convenient
                and enjoyable.
              </p>
            </div>

            <div className="item">
              <TypographyP
                text=" Business Services



"
                css="font-semibold"
              />
              <p className="text-sm md:text-sm xl:text-sm max-w-7xl">
                Our
                <Link href="/business-services"> business services </Link>
                provide support for your professional needs, including
                administrative assistance, marketing, and consulting. We help
                your business thrive with expert solutions.
              </p>
            </div>
          </div>

          {/* --copyright line-- */}
          <CopyrightLine />
        </div>
      </footer>
    </>
  );
};

export default CommonFooter;
