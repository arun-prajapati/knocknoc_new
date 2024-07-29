import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HelpAccordion = () => {
  return (
    <div className="content">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left">
            What types of home services do you offer?
          </AccordionTrigger>
          <AccordionContent>
            We offer a wide range of home services to cater to your needs. This
            includes home cleaning services in Singapore, maintenance, repairs,
            and more. Our dedicated providers ensure your home is always clean,
            comfortable, and well-maintained.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left">
            How can I book a car service or car servicing in Singapore through
            KnocKnoc?
          </AccordionTrigger>
          <AccordionContent>
            Booking a car service or car servicing in Singapore with KnocKnoc is
            easy. Simply download the KnocKnoc app from the Apple App Store or
            Google Play Store, and select the car services option. You can
            choose from a variety of maintenance, repair, and detailing services
            to keep your vehicle in top condition.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left">
            What digital services are available on KnocKnoc?
          </AccordionTrigger>
          <AccordionContent>
            Our digital services are designed to meet your online needs
            efficiently and effectively. We offer tech support, digital
            marketing, website development, and more to help you stay connected
            and enhance your digital presence.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-left">
            Do you provide clinic skin care services?
          </AccordionTrigger>
          <AccordionContent>
            Yes, we provide professional clinic skin care services through our
            network of experts. Visit our skin clinic in Singapore for a range
            of treatments designed to keep your skin healthy and glowing. Our
            services include facials, acne treatment, anti-aging treatments, and
            more.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-left">
            Can KnocKnoc help with wedding planning?
          </AccordionTrigger>
          <AccordionContent>
            Absolutely! As a top wedding planner in Singapore, KnocKnoc offers
            comprehensive wedding services to make your special day
            unforgettable. From planning and coordination to makeup and
            photography, our experienced team ensures every detail is perfect.
            We also offer pampering services such as pedicures to help you look
            and feel you’re best on your big day.{" "}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default HelpAccordion;
