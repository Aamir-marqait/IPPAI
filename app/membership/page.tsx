import React from "react";
import HeroSection from "./hero-section";
import MembershipTabs from "./membership";
import MemberPrivileges from "./MemberPrivileges";
import JoinMembershipBanner from "./JoinMembershipBanner";

function page() {
  return (
    <div>
      <HeroSection />
      <MembershipTabs />
      <MemberPrivileges />
      <JoinMembershipBanner />
    </div>
  );
}

export default page;
