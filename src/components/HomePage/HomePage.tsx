import Button from "../shared/Button/Button";
import Resume from "../../assets/SergioSantos_Resume.pdf";
import { FaDownload } from "react-icons/fa";
import { IconContext } from "react-icons";
import "./HomePage.scss";

const HomePage = () => {
  const onButtonClick = () => {
    fetch(Resume).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = fileURL;
        link.download = "SergioSantos_Resume.pdf";
        link.click();
      });
    });
  };

  return (
    <main className="homepage">
      <div className="homepage__container">
        <div className="homepage__info">
          <label className="homepage__info__intro">Hello I'm</label>
          <label className="homepage__info__name">Sérgio Santos</label>
          <label className="homepage__info__title">Front-End Developer</label>
          <div className="homepage__btn">
            <Button text="Download CV" onClick={onButtonClick}>
              <IconContext.Provider
                value={{ className: "homepage__info__svg" }}
              >
                <FaDownload />
              </IconContext.Provider>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
