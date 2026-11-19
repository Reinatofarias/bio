import { Container } from "@/components/layout/Container";
import { HeroSection } from "@/components/sections/HeroSection";
import { LinksSection } from "@/components/sections/LinksSection";

import { SocialSection } from "@/components/sections/SocialSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { IntroCTA } from "@/components/sections/IntroCTA";
import { MentorshipCTA } from "@/components/sections/MentorshipCTA";

import config from "@/data/config.json";
import { Config } from "@/data/types";

export default function Home() {
  const data = config as Config;

  return (
    <Container className="flex flex-col items-center justify-center">
      <HeroSection profile={data.profile} />
      <IntroCTA profile={data.profile} />
      <SocialSection socials={data.social} />
      <LinksSection links={data.links} />

      <MentorshipCTA />
      <FooterSection
        footer={data.footer}
        instagram={data.social.find((s) => s.platform === "instagram")?.href}
      />
    </Container>
  );
}
