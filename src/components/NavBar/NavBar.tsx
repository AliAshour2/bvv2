import { useState} from "react";
import Scrollspy from "react-scrollspy";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import NavBarIcon from "../../assets/images/bvvFavicon.png"
interface NavItem {
  href: string;
  label: string;
}

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'ar'>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const isArabic = currentLanguage === 'ar';

  const navItems: NavItem[] = [
    { href: "/", label: t('navbar.home') },
    { href: "/consulting", label: t('navbar.consulting') },
    { href: "/growth-analysis", label: t('navbar.growthAnalysis') },
    { href: "/venture-funds", label: t('navbar.ventureFunds') },
    { href: "/contact-us", label: t('navbar.contactUs') },
  ];

  const renderedNavItems = isArabic ? [...navItems].reverse() : navItems;

  return (
    <>
      <header className={`fixed top-0 left-0 z-50 flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 ${isArabic ? 'rtl' : ''}`}>
        <nav className="py-5 max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center justify-between">
             <img className="w-40" src={NavBarIcon} alt="favicon" />
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                onClick={toggleMenu}
                aria-expanded={isMenuOpen}
                aria-controls="hs-navbar-example"
                aria-label="Toggle navigation"
              >
                <svg
                  className={`hs-collapse-open:hidden shrink-0 size-4 ${isMenuOpen ? 'hidden' : ''}`}
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
                  className={`hs-collapse-open:block hidden shrink-0 size-4 ${!isMenuOpen ? 'hidden' : ''}`}
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
            className={`overflow-hidden transition-all duration-300 basis-full grow ${isMenuOpen ? 'block' : 'hidden'} sm:block`}
            aria-labelledby="hs-navbar-example-collapse"
          >
            <Scrollspy
              items={navItems.map(item => item.href.replace('#', ''))}
              currentClassName="text-blue-500"
              className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5"
              offset={-400}
            >
              {renderedNavItems.map((item, index) => (
                <Link
                  key={index}
                  className={`font-medium focus:outline-none text-gray-600 hover:text-gray-400 ${isArabic ? 'text-right' : 'text-left'}`}
                  to={item.href}
                >
                  {item.label}
                </Link>
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
