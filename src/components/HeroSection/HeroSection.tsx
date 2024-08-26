import { useTranslation } from "react-i18next";
import { HeroImages } from "../../constants/index";
import { Link } from "react-router-dom";

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
          className={`grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center ${
            isArabic ? "text-right" : ""
          }`}
          dir={isArabic ? "rtl" : "ltr"}
        >
          {/* Image on the left */}
          <div className="relative ms-4">
            <img
              className="w-full rounded-md"
              src={HeroImages.HeroImg1}
              alt="Hero Image"
              loading="lazy"
            />
            <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6" />
            {/* SVG */}

            {/* End SVG */}
          </div>
          {/* End Image on the left */}

          {/* Text on the right */}
          <div>
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight">
              {t(`hero.heroTitle`)}
            </h1>
            <p className="mt-3 text-lg text-gray-800">
              {t(`hero.heroDescription`)}
            </p>
            {/* Buttons */}
            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              <Link
                to="/consulting"
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
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
              </Link>
              <Link
                to="/contact-us"
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              >
                {t(`hero.buttonText2`)}
              </Link>
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
