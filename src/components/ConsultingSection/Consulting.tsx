import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';
import { ConsultingInfo } from "../../constants/index";

interface ConsultingItem {
  title: string;
  description: string;
  img: string;
}

const ConsultingSection = () => {
  const { t, i18n } = useTranslation();
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isRtl = i18n.dir() === 'rtl';

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
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 707,
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

  const consultingItems: ConsultingItem[] = t('consulting.items', { returnObjects: true });

  return (
    <>
      {/* Desktop View */}
      <div
        id="consulting"
        className={
          isMobile ? "hidden" : "max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
        }
        style={{ direction: isRtl ? 'rtl' : 'ltr' }}
      >
        {/* Title */}
        <div className={`max-w-2xl text-center mx-auto mb-10 lg:mb-14 `}>
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">{t('consulting.title')}</h2>
          <p className="mt-1 text-gray-600">
            {t('consulting.description')}
          </p>
        </div>
        {/* End Title */}

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-14">
          {consultingItems.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition"
              
            >
              <div className="h-56 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-t-xl"
                  src={ConsultingInfo[index].img}
                  alt={item.title}
                />
              </div>
              <div className="p-4 md:p-5">
                <p className="mt-2 text-xs uppercase text-gray-600">{item.title}</p>
                <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600">
                  {item.description}
                </h3>
              </div>
            </div>
          ))}
        </div>
        {/* End Grid */}

        {/* Card */}
        <div className="text-center">
          <div className="inline-block bg-white border shadow-sm rounded-full">
            <div className="py-3 px-4 flex items-center gap-x-2">
              <p className="text-gray-600">{t('consulting.readMore')}</p>
              <div
                className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium"
               
              >
                {t('consulting.goHere')}
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* End Card */}
      </div>

      {/* Mobile View */}
      <div className={isMobile ? "slider-container mt-20 px-6 gap-5" : "hidden"} style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
        {/* Title */}
        <div className={`max-w-2xl text-center mx-auto mb-10 lg:mb-14 `}>
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">{t('consulting.title')}</h2>
          <p className="mt-1 text-gray-600">
            {t('consulting.description')}
          </p>
        </div>
        {/* End Title */}
        <Slider {...sliderSettings}>
          {consultingItems.map((item, index) => (
            <div key={index} className="p-2">
              <div
                className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition"
                
              >
                <div className="h-56 overflow-hidden">
                  <img
                    className="w-full h-full object-cover rounded-t-xl"
                    src={ConsultingInfo[index].img}
                    alt={item.title}
                  />
                </div>
                <div className="p-4 md:p-5">
                  <p className="mt-2 text-xs uppercase text-gray-600">{item.title}</p>
                  <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600">
                    {item.description}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ConsultingSection;
