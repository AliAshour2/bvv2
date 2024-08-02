import { useTranslation } from "react-i18next";
import { HeroImages } from "../../constants/index";

const HeroSection = () => {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === "ar"; // Check if the current language is Arabic

  return (
    <>
      {/* Hero */}
      <div
        id="home"
        className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-28"
      >
        {/* Grid */}
        <div
          className={`grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center ${isArabic ? "text-right" : ""}`}
          dir={isArabic ? "rtl" : "ltr"}
        >
          {/* Image on the left */}
          <div className="relative ms-4">
            <img
              className="w-full rounded-md"
              src={HeroImages.HeroImg1}
              alt="Hero Image"
            />
            <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6" />
            {/* SVG */}
            <div className="absolute bottom-0 start-0">
              <svg
                className="w-2/3 ms-auto h-auto text-white"
                width={630}
                height={451}
                viewBox="0 0 630 451"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x={531}
                  y={352}
                  width={99}
                  height={99}
                  fill="currentColor"
                />
                <rect
                  x={140}
                  y={352}
                  width={106}
                  height={99}
                  fill="currentColor"
                />
                <rect
                  x={482}
                  y={402}
                  width={64}
                  height={49}
                  fill="currentColor"
                />
                <rect
                  x={433}
                  y={402}
                  width={63}
                  height={49}
                  fill="currentColor"
                />
                <rect
                  x={384}
                  y={352}
                  width={49}
                  height={50}
                  fill="currentColor"
                />
                <rect
                  x={531}
                  y={328}
                  width={50}
                  height={50}
                  fill="currentColor"
                />
                <rect
                  x={99}
                  y={303}
                  width={49}
                  height={58}
                  fill="currentColor"
                />
                <rect
                  x={99}
                  y={352}
                  width={49}
                  height={50}
                  fill="currentColor"
                />
                <rect
                  x={99}
                  y={392}
                  width={49}
                  height={59}
                  fill="currentColor"
                />
                <rect
                  x={44}
                  y={402}
                  width={66}
                  height={49}
                  fill="currentColor"
                />
                <rect
                  x={234}
                  y={402}
                  width={62}
                  height={49}
                  fill="currentColor"
                />
                <rect
                  x={334}
                  y={303}
                  width={50}
                  height={49}
                  fill="currentColor"
                />
                <rect x={581} width={49} height={49} fill="currentColor" />
                <rect x={581} width={49} height={64} fill="currentColor" />
                <rect
                  x={482}
                  y={123}
                  width={49}
                  height={49}
                  fill="currentColor"
                />
                <rect
                  x={507}
                  y={124}
                  width={49}
                  height={24}
                  fill="currentColor"
                />
                <rect
                  x={531}
                  y={49}
                  width={99}
                  height={99}
                  fill="currentColor"
                />
              </svg>
            </div>
            {/* End SVG */}
          </div>
          {/* End Image on the left */}

          {/* Text on the right */}
          <div>
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight">
              {t(`hero.heroTitle`)} <span className="text-blue-600">BVV</span>
            </h1>
            <p className="mt-3 text-lg text-gray-800">
              {t(`hero.heroDescription`)}
            </p>
            {/* Buttons */}
            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              <a
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                {t(`hero.buttonText1`)}
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
              </a>
              <a
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                {t(`hero.buttonText2`)}
              </a>
            </div>
            {/* End Buttons */}
            {/* Review */}
            <div className="mt-6 lg:mt-10 grid grid-cols-2 gap-x-5"></div>
            {/* End Review */}
          </div>
          {/* End Text on the right */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Hero */}
    </>
  );
};

export default HeroSection;
