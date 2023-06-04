import { CardModel } from "./Card";
import EverywhereLogo from "../../assets/logos/everywhere-logo.png";
import SmartMedLogo from "../../assets/logos/smartmed-logo.png";
import FlagLogo from "../../assets/logos/flag-logo.png";

export const experienceCardData: CardModel[] = [
  {
    name: "_Everywhere",
    logo: EverywhereLogo,
    colorGradient: "linear-gradient(to bottom right, #6c63ff, #a55fff)",
    jobPosition: "Front-End Developer Intern",
    description:
      "Development of the company's website based on the design made in Figma, with the help of libraries such as React, Styled-Components and SASS",
    startDateAndStopDate: "2022-02 - 2022-05",
  },
  {
    name: "SmartMed B.V.",
    logo: SmartMedLogo,
    colorGradient: "linear-gradient(to right, #1a237e, #00bcd4)",
    jobPosition: "Software Engineer",
    description:
      "Development and implementation of solutions for a pharmacy app, leveraging my expertise in Angular2, TypeScript, SCSS and RxJS",
    startDateAndStopDate: "2022-07 - Present",
  },
];

export const educationCardData: CardModel[] = [
  {
    name: "Flag",
    logo: FlagLogo,
    colorGradient: "linear-gradient(to right, #FF512F, #F09819)",
    degree: "Full Stack Web Developer",
    description:
      "I'm a proficient Full Stack Web Developer, having mastered server configurations, data integrations, troubleshooting, and programming languages like HTML5, JavaScript, PHP, CSS, and more through the FLAGProfessional Academy course.",
    startDateAndStopDate: "2021-05 - 2022-05",
  },
];
