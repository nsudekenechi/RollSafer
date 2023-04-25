import { Section_BrowseCars } from "./Section_BrowseCars";
import { Section_BrowseMake } from "./Section_BrowseMake";
import { Section_Client } from "./Section_Client";
import { Section_Experience } from "./Section_Experience";
import { Section_Hosts } from "./Section_Hosts";

export const Section = () => {
  return (
    <div>
      <Section_BrowseCars />
      <Section_Client />
      <Section_BrowseMake />
      <Section_Experience />
      <Section_Hosts />
    </div>
  );
};
