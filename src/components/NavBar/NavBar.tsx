// import { useState } from "react";
// import Scrollspy from "react-scrollspy";
// import { useTranslation } from 'react-i18next';

// const NavBar = () => {
//   const { t, i18n } = useTranslation();
//   const [currentLanguage, setCurrentLanguage] = useState('en');

//   const toggleLanguage = () => {
//     const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
//     i18n.changeLanguage(newLanguage);
//     setCurrentLanguage(newLanguage);
//   };

//   // Determine if the current language is Arabic
//   const isArabic = currentLanguage === 'ar';

//   return (
//     <>
//       <header className={`fixed top-0 left-0 z-50 flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 ${isArabic ? 'rtl' : ''}`}>
//         <nav className={`py-5 max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between`}>
//           <div className="flex items-center justify-between">
//             <a
//               className="flex-none text-xl font-semibold focus:outline-none focus:opacity-80"
//               href="#"
//               aria-label="Brand"
//             >
//               Brand
//             </a>
//             <div className="sm:hidden">
//               <button
//                 type="button"
//                 className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
//                 id="hs-navbar-example-collapse"
//                 aria-expanded="false"
//                 aria-controls="hs-navbar-example"
//                 aria-label="Toggle navigation"
//                 data-hs-collapse="#hs-navbar-example"
//               >
//                 <svg
//                   className="hs-collapse-open:hidden shrink-0 size-4"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width={24}
//                   height={24}
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <line x1={3} x2={21} y1={6} y2={6} />
//                   <line x1={3} x2={21} y1={12} y2={12} />
//                   <line x1={3} x2={21} y1={18} y2={18} />
//                 </svg>
//                 <svg
//                   className="hs-collapse-open:block hidden shrink-0 size-4"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width={24}
//                   height={24}
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M18 6 6 18" />
//                   <path d="m6 6 12 12" />
//                 </svg>
//                 <span className="sr-only">Toggle navigation</span>
//               </button>
//             </div>
//           </div>
//           <div
//             id="hs-navbar-example"
//             className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
//             aria-labelledby="hs-navbar-example-collapse"
//           >
//             <Scrollspy
//               items={[
//                 "consulting",
//                 "growth-analysis",
//                 "venture-funds",
//                 "contact-us",
//               ]}
//               currentClassName="text-blue-500"
//               className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5"
//               offset={-400} // Adjust the offset as needed for your header height
//             >
//               <a
//                 className={`font-medium focus:outline-none text-gray-600 hover:text-gray-400 ${isArabic ? 'text-right' : 'text-left'}`}
//                 href="#Home"
//               >
//                 {t('navbar.home')}
//               </a>

//               <a
//                 className={`font-medium focus:outline-none text-gray-600 hover:text-gray-400 ${isArabic ? 'text-right' : 'text-left'}`}
//                 href="#consulting"
//               >
//                 {t('navbar.consulting')}
//               </a>
//               <a
//                 className={`font-medium focus:outline-none text-gray-600 hover:text-gray-400 ${isArabic ? 'text-right' : 'text-left'}`}
//                 href="#growth-analysis"
//               >
//                 {t('navbar.growthAnalysis')}
//               </a>
//               <a
//                 className={`font-medium focus:outline-none text-gray-600 hover:text-gray-400 ${isArabic ? 'text-right' : 'text-left'}`}
//                 href="#venture-funds"
//               >
//                 {t('navbar.ventureFunds')}
//               </a>
//               <a
//                 className={`font-medium focus:outline-none text-gray-600 hover:text-gray-400 ${isArabic ? 'text-right' : 'text-left'}`}
//                 href="#contact-us"
//               >
//                 {t('navbar.contactUs')}
//               </a>

//               <button
//                 type="button"
//                 onClick={toggleLanguage}
//                 className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:text-blue-500 dark:focus:border-blue-600"
//               >
//                 {currentLanguage.toUpperCase()}
//               </button>
//             </Scrollspy>
//           </div>
//         </nav>
//       </header>
//     </>
//   );
// };

// export default NavBar;







import { useState } from "react";
import Scrollspy from "react-scrollspy";
import { useTranslation } from 'react-i18next';

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  // Determine if the current language is Arabic
  const isArabic = currentLanguage === 'ar';

  const navItems = [
    { href: "#home", label: t('navbar.home') },
    { href: "#consulting", label: t('navbar.consulting') },
    { href: "#growth-analysis", label: t('navbar.growthAnalysis') },
    { href: "#venture-funds", label: t('navbar.ventureFunds') },
    { href: "#contact-us", label: t('navbar.contactUs') },
  ];

  const renderedNavItems = isArabic ? navItems.slice().reverse() : navItems;

  return (
    <>
      <header className={`fixed top-0 left-0 z-50 flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 ${isArabic ? 'rtl' : ''}`}>
        <nav className={`py-5 max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between`}>
          <div className="flex items-center justify-between">
            <a
              className="flex-none text-xl font-semibold focus:outline-none focus:opacity-80"
              href="#"
              aria-label="Brand"
            >
              Brand
            </a>
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                id="hs-navbar-example-collapse"
                aria-expanded="false"
                aria-controls="hs-navbar-example"
                aria-label="Toggle navigation"
                data-hs-collapse="#hs-navbar-example"
              >
                <svg
                  className="hs-collapse-open:hidden shrink-0 size-4"
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
                  <line x1={3} x2={21} y1={6} y2={6} />
                  <line x1={3} x2={21} y1={12} y2={12} />
                  <line x1={3} x2={21} y1={18} y2={18} />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden shrink-0 size-4"
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
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                <span className="sr-only">Toggle navigation</span>
              </button>
            </div>
          </div>
          <div
            id="hs-navbar-example"
            className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
            aria-labelledby="hs-navbar-example-collapse"
          >
            <Scrollspy
              items={[
                "consulting",
                "growth-analysis",
                "venture-funds",
                "contact-us",
              ]}
              currentClassName="text-blue-500"
              className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5"
              offset={-400} // Adjust the offset as needed for your header height
            >
              {renderedNavItems.map((item, index) => (
                <a
                  key={index}
                  className={`font-medium focus:outline-none text-gray-600 hover:text-gray-400 ${isArabic ? 'text-right' : 'text-left'}`}
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}

              <button
                type="button"
                onClick={toggleLanguage}
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:text-blue-500 dark:focus:border-blue-600"
              >
                {currentLanguage.toUpperCase()}
              </button>
            </Scrollspy>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
