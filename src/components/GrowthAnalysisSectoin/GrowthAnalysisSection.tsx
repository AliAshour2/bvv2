import { GrouthAnalysisInfo } from "../../constants/index";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";

interface GrowthAnalysisItem {
  title: string;
  description: string;
  img: string;
}

const GrowthAnalysisSection = () => {
  const { t, i18n } = useTranslation();
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isRtl = i18n.dir() === "rtl";

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const growthAnalysisItems: GrowthAnalysisItem[] = t('growthAnalysis.items', { returnObjects: true });

  return (
    <>
      {/* Desktop View */}
      <div
        id="growth-analysis"
        className={
          isMobile
            ? "hidden"
            : `max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ${isRtl ? 'rtl' : ''}`
        }
        style={{ direction: isRtl ? 'rtl' : 'ltr' }}
      >
        {/* Title */}
        <div className={`max-w-2xl text-center mx-auto mb-10 lg:mb-14 `}>
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
            {t("growthAnalysis.title")}
          </h2>
          <p className="mt-1 text-gray-600">
            {t("growthAnalysis.description")}
          </p>
        </div>
        {/* End Title */}

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-14">
          {growthAnalysisItems.map((item, index) => (
            <a
              key={index}
              className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition"
              href="#"
            >
              <div className="h-56 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-t-xl"
                  src={GrouthAnalysisInfo[index].img}
                  alt={item.title}
                />
              </div>
              <div className={`p-4 md:p-5 ${isRtl ? 'text-right' : ''}`}>
                <p className="mt-2 text-xs uppercase text-gray-600">
                  {item.title}
                </p>
                <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600">
                  {item.description}
                </h3>
              </div>
            </a>
          ))}
        </div>
        {/* End Grid */}
      </div>

      {/* Mobile View */}
      <div
        id="growth-analysis"
        className={isMobile ? `slider-container mt-20 px-6 gap-5 ${isRtl ? 'rtl' : ''}` : "hidden"}
        style={{ direction: isRtl ? 'rtl' : 'ltr' }}
      >
        <div className={`max-w-2xl text-center mx-auto mb-10 lg:mb-14 `}>
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
            {t("growthAnalysis.title")}
          </h2>
          <p className="mt-1 text-gray-600">
            {t("growthAnalysis.description")}
          </p>
        </div>
        <Slider {...sliderSettings}>
          {growthAnalysisItems.map((item, index) => (
            <div key={index} className="p-2">
              <a
                className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition"
                href="#"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    className="w-full h-full object-cover rounded-t-xl"
                    src={GrouthAnalysisInfo[index].img}
                    alt={item.title}
                  />
                </div>
                <div className={`p-4 md:p-5 ${isRtl ? 'text-right' : ''}`}>
                  <p className="mt-2 text-xs uppercase text-gray-600">
                    {item.title}
                  </p>
                  <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600">
                    {item.description}
                  </h3>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default GrowthAnalysisSection; 