import { ExperienceCardModel } from "./ExperienceCard";
import EverywhereLogo from "../../assets/logos/everywhere-logo.svg";
import SmartMedLogo from "../../assets/logos/smartmed-logo.svg";

export const experienceCardData: ExperienceCardModel[] = [
  {
    companyName: "_Everywhere",
    companyLogo: EverywhereLogo,
    jobPosition: "Front-End Developer Intern",
    jobDescription:
      "Development of the company's website based on the design made in Figma, with the help of libraries such as React, Styled-Components and SASS",
    startDateAndStopDate: "2022-02 - 2022-05",
  },
  {
    companyName: "SmartMed B.V.",
    companyLogo: SmartMedLogo,
    jobPosition: "Software Engineer",
    jobDescription:
      "Development and implementation of solutions for a pharmacy app, leveraging my expertise in Angular2, TypeScript, SCSS and RxJS",
    startDateAndStopDate: "2022-07 - Present",
  },
];
