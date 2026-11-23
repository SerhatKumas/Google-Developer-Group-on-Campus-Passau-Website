import fs from "fs";
import path from "path";
import { ROOT_DIR, pass, fail, section } from "./utils.mjs";

export function runTeamAudit() {
  section("Module 03: Team Member Cards & Social Links Protocol");

  const teamDataPath = path.join(ROOT_DIR, "src", "data", "team.ts");
  if (fs.existsSync(teamDataPath)) {
    const teamContent = fs.readFileSync(teamDataPath, "utf8");

    const hasLinkedIn = teamContent.includes("linkedin: \"https://www.linkedin.com/") || teamContent.includes("linkedin: 'https://www.linkedin.com/");
    const hasInstagram = teamContent.includes("instagram: \"https://www.instagram.com/") || teamContent.includes("instagram: 'https://www.instagram.com/");

    if (hasLinkedIn && hasInstagram) {
      pass("Team Members Social Data", "team.ts includes valid LinkedIn and Instagram URLs for members.");
    } else {
      fail("Team Members Social Data", "team.ts missing required LinkedIn or Instagram URLs.");
    }
  } else {
    fail("Team Data File", "src/data/team.ts not found.");
  }

  const memberCardPath = path.join(ROOT_DIR, "src", "components", "cards", "MemberCard.tsx");
  if (fs.existsSync(memberCardPath)) {
    const memberCardContent = fs.readFileSync(memberCardPath, "utf8");
    if (memberCardContent.includes("rel=\"noopener noreferrer\"") && memberCardContent.includes("LinkedInIcon") && memberCardContent.includes("InstagramIcon")) {
      pass("MemberCard Protocol", "MemberCard.tsx renders secure LinkedIn and Instagram buttons with rel='noopener noreferrer'.");
    } else {
      fail("MemberCard Protocol", "MemberCard.tsx is missing required social buttons or rel='noopener noreferrer'.");
    }
  } else {
    fail("MemberCard Component", "src/components/cards/MemberCard.tsx not found.");
  }
}
