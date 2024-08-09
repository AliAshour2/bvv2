const Footer = () => {
  return (
    <>
      {/* ========== FOOTER ========== */}
      <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
          <div className="col-span-full hidden lg:col-span-1 lg:block">
            <a
              className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80"
              href="#"
              aria-label="Brand"
            >
              Business Vibes OU
            </a>
            <p className="mt-3 text-xs sm:text-sm text-gray-600">© 2024 BVV.</p>
          </div>
          {/* End Col */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase"></h4>
            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="#"
                >
                  Privacy Policy
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="#"
                >
                  Site Map
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="#"
                >
                  Terms & Conditions
                </a>
              </p>
            </div>
          </div>
          {/* End Col */}

          {/* End Col */}

          {/* End Col */}
        </div>
        {/* End Grid */}
        <div className="pt-5 mt-5 border-t border-gray-200">
          <div className="sm:flex sm:justify-between sm:items-center">
            <div className="flex flex-wrap items-center gap-3">
              <div className="space-x-4 text-sm">
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="#"
                >
                  Terms
                </a>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="#"
                >
                  Privacy
                </a>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="#"
                >
                  Status
                </a>
              </div>
            </div>
            <div className="flex flex-wrap justify-between items-center gap-3">
              <div className="mt-3 sm:hidden">
                <a
                  className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80"
                  href="#"
                  aria-label="Brand"
                >
                  Brand
                </a>
                <p className="mt-1 text-xs sm:text-sm text-gray-600">
                  © 2024 Business Vibes OU.
                </p>
              </div>
              {/* Social Brands */}
              <div className="space-x-4">
                
                  <i className="fa-brands fa-linkedin" />
                  <i className="fa-brands fa-facebook" />
               
              </div>
              {/* End Social Brands */}
            </div>
            {/* End Col */}
          </div>
        </div>
      </footer>
      {/* ========== END FOOTER ========== */}
    </>
  );
};

export default Footer;
