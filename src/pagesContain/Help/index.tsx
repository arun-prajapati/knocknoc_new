import HelpAccordion from "@/components/help_accordion/HelpAccordion";
import ProfilePagesWrapper from "@/components/ProfilePagesWrapper";

const Help = () => {
  return (
    <div className="help_action_page">
      <ProfilePagesWrapper heading="Help">
        <HelpAccordion />
      </ProfilePagesWrapper>
    </div>
  );
};

export default Help;
