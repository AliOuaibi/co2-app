import sliderImg1 from "../../assets/images/slider/banner.jpg";
import useIsMobile from "../../hooks/useIsMobile";

const HomeSlider = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <div className="react-slider-part">
        <div className="home-sliders home2">
            <div className="single-slide">
              <div className="slider-img">
                <img className="desktop" src={sliderImg1} alt="banniere du site"/>
                <img className="mobile" src={sliderImg1} alt="banniere du site"/>
              </div>
              <div className="container">
                <div className="slider-content">
                  <div className="content-part">
                    <span className="slider-pretitle wow animate__fadeInUp" data-wow-duration="1s" style={{fontSize: isMobile ? "50%": "250%"}}>
                      Votre atout Formation
                    </span>
                    <h3
                      className="slider-title wow animate__fadeInUp"
                      data-wow-duration="1s"
                      style={{ color: `${isMobile ? "#000" : "#8c52ff"} `, WebkitTextStroke: `${isMobile ? "0.5px" : "2px"} white`, fontSize: isMobile ? "110%": "250%"}}
                    >
                      Retrouvez toutes nos solutions et formations adaptées à vos besoins et vos envies.{isMobile ? <br/> : ""}
                      Formations au catalogue ou sur-mesure
                    </h3>
                  </div>
                </div>

              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default HomeSlider;