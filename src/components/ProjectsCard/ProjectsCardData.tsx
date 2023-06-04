import { ProjectModel } from "./PortfolioCard";
import CosmicExodusImg from "../../assets/website/cosmic-exodus.png";
import ColoredSquares from "../../assets/website/colored-squares.png";
import SafeTravels from "../../assets/website/safetravels.png";

export const projects: ProjectModel[] = [
  {
    name: "Safe Travels",
    image: SafeTravels,
    githubRepo: "https://github.com/sergiosantos96/safetravels",
  },
  {
    name: "Cosmic Exodus",
    image: CosmicExodusImg,
    githubRepo: "https://github.com/sergiosantos96/Cosmic-Exodus",
  },
  {
    name: "Colored Squares",
    image: ColoredSquares,
    githubRepo: "https://github.com/sergiosantos96/Colored-Squares",
  },
];
