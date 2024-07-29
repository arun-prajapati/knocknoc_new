import HelpAccordion from "@/components/help_accordion/HelpAccordion";
import TypographyH3 from "@/components/typography/TypographyH3";
import React from "react";

const HelpSection = () => {
  return (
    <section className="review_section space-y-3 my-10 lg:my-16">
      <TypographyH3 text="Frequently asked questions" />
      <HelpAccordion />
    </section>
  );
};

export default HelpSection;
