import Card from "../../components/Card/Card";
import { IconContext } from "react-icons";
import { cardData } from "../../components/Card/CardData";
import { skills } from "../../utils/data";
import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <div className="aboutpage">
      {/* Todo: Add an image here */}
      <h2 className="aboutpage__title">About Me</h2>
      <label className="aboutpage__description">
        Hello, I'm Sérgio Santos, a web developer based in Portugal. I have rich
        experience in web site design & development. I'm also well versed in
      </label>
      <div className="aboutpage__skills">
        {skills.map((skill, index) => (
          <label key={index} className="aboutpage__skill">
            {skill}
          </label>
        ))}
      </div>

      <div className="aboutpage__info">
        <h2 className="aboutpage__info__subtitle">What I do</h2>
        <div className="aboutpage__info__cards">
          {cardData.map((card, index) => (
            <Card key={index} title={card.title} description={card.description}>
              <IconContext.Provider
                value={{
                  size: "2.2em",
                  color: card.iconColor,
                }}
              >
                {card.icon}
              </IconContext.Provider>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
