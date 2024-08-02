// import { useState } from "react";
// import { useTranslation } from "react-i18next";
// import { InvestmentInfo } from "../../constants/index";

// const InvestmentSection = () => {
//   const [activeTab, setActiveTab] = useState(0);
//   const { t } = useTranslation();

//   return (
//     <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
//       {/* Title */}
//       <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
//         <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
//           {t(`invesment.title`)}
//         </h2>
//       </div>
//       {/* End Title */}
//       {/* Tab Nav */}
//       <nav
//         className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-y-px sm:gap-y-0 sm:gap-x-4"
//         aria-label="Tabs"
//         role="tablist"
//         aria-orientation="horizontal"
//       >
//         {InvestmentInfo.map((info, index) => (
//           <button
//             key={index}
//             type="button"
//             className={`hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent w-full flex flex-col text-start hover:bg-gray-100 focus:outline-none focus:bg-gray-100 p-3 md:p-5 rounded-xl ${activeTab === index ? 'active' : ''}`}
//             id={`tabs-with-card-item-${index}`}
//             aria-selected={activeTab === index}
//             onClick={() => setActiveTab(index)}
//             aria-controls={`tabs-with-card-${index}`}
//             role="tab"
//           >
//             <svg
//               className="shrink-0 hidden sm:block size-7 hs-tab-active:text-blue-600 text-gray-800"
//               xmlns="http://www.w3.org/2000/svg"
//               width={24}
//               height={24}
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth={2}
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
//               <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
//               <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
//               <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
//               <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
//             </svg>
//             <span className="mt-5">
//               <span className="hs-tab-active:text-blue-600 block font-semibold text-gray-800">
//                 {t(`invesment.items.${index}.title`)}
//               </span>
//               <span className="hidden lg:block mt-2 text-gray-800">
//                 {t(`invesment.items.${index}.description`)}
//               </span>
//             </span>
//           </button>
//         ))}
//       </nav>
//       {/* End Tab Nav */}
//       {/* Tab Content */}
//       <div className="mt-12 md:mt-16">
//         {InvestmentInfo.map((info, index) => (
//           <div
//             key={index}
//             role="tabpanel"
//             aria-labelledby={`tabs-with-card-item-${index}`}
//             hidden={activeTab !== index}
//           >
//             {/* Devices */}
//             <div className="max-w-[1140px] lg:pb-32 relative">
//               {/* Mobile Device */}
//               <figure className="hidden absolute bottom-0 start-0 z-[2] max-w-full w-60 h-auto mb-20 ms-20 lg:block">
//                 <div className="p-1.5 bg-gray-100 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)]">
//                   <img
//                     className="max-w-full rounded-[1.25rem] h-auto"
//                     src={info.img}
//                     alt="Features Image"
//                   />
//                 </div>
//               </figure>
//               {/* End Mobile Device */}
//               {/* Browser Device */}
//               <figure className="ms-auto me-20 relative z-[1] max-w-full w-[50rem] h-auto shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] rounded-b-lg">
//                 <div className="relative flex items-center max-w-[50rem] bg-white border-b border-gray-100 rounded-t-lg py-2 px-24">
//                   <div className="flex gap-x-1 absolute top-2/4 start-4 -translate-y-1">
//                     <span className="size-2 bg-gray-200 rounded-full" />
//                     <span className="size-2 bg-gray-200 rounded-full" />
//                     <span className="size-2 bg-gray-200 rounded-full" />
//                   </div>
//                 </div>
//                 <div className="bg-gray-800 rounded-b-lg">
//                   <img
//                     className="max-w-full h-auto rounded-b-lg"
//                     src={info.img}
//                     alt="Features Image"
//                   />
//                 </div>
//               </figure>
//               {/* End Browser Device */}
//             </div>
//             {/* End Devices */}
//           </div>
//         ))}
//       </div>
//       {/* End Tab Content */}
//     </div>
//   );
// };

// export default InvestmentSection;



import { useState } from "react";
import { useTranslation } from "react-i18next";
import { InvestmentInfo } from "../../constants/index";

const InvestmentSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { t, i18n } = useTranslation();

  // Check if the current language is RTL
  const isRtl = i18n.dir() === "rtl";

  return (
    <div className={`max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ${isRtl ? 'rtl' : ''}`}>
      {/* Title */}
      <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
          {t(`invesment.title`)}
        </h2>
      </div>
      {/* End Title */}
      {/* Tab Nav */}
      <nav
        className={`max-w-6xl mx-auto flex flex-col sm:flex-row gap-y-px sm:gap-y-0 sm:gap-x-4 ${isRtl ? 'rtl' : ''}`}
        aria-label="Tabs"
        role="tablist"
        aria-orientation="horizontal"
      >
        {InvestmentInfo.map((info, index) => (
          <button
            key={index}
            type="button"
            className={`hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent w-full flex flex-col ${isRtl ? 'text-end' : 'text-start'} hover:bg-gray-100 focus:outline-none focus:bg-gray-100 p-3 md:p-5 rounded-xl ${activeTab === index ? 'active' : ''}`}
            id={`tabs-with-card-item-${index}`}
            aria-selected={activeTab === index}
            onClick={() => setActiveTab(index)}
            aria-controls={`tabs-with-card-${index}`}
            role="tab"
          >
            <svg
              className="shrink-0 hidden sm:block size-7 hs-tab-active:text-blue-600 text-gray-800"
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
              <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
              <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
              <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
              <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
              <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
            </svg>
            <span className="mt-5">
              <span className="hs-tab-active:text-blue-600 block font-semibold text-gray-800">
                {t(`invesment.items.${index}.title`)}
              </span>
              <span className="hidden lg:block mt-2 text-gray-800">
                {t(`invesment.items.${index}.description`)}
              </span>
            </span>
          </button>
        ))}
      </nav>
      {/* End Tab Nav */}
      {/* Tab Content */}
      <div className="mt-12 md:mt-16">
        {InvestmentInfo.map((info, index) => (
          <div
            key={index}
            role="tabpanel"
            aria-labelledby={`tabs-with-card-item-${index}`}
            hidden={activeTab !== index}
          >
            {/* Devices */}
            <div className="max-w-[1140px] lg:pb-32 relative">
              {/* Mobile Device */}
              <figure className={`hidden absolute bottom-0 ${isRtl ? 'end-0 me-20' : 'start-0 ms-20'} z-[2] max-w-full w-60 h-auto mb-20 lg:block`}>
                <div className="p-1.5 bg-gray-100 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)]">
                  <img
                    className="max-w-full rounded-[1.25rem] h-auto"
                    src={info.img}
                    alt="Features Image"
                  />
                </div>
              </figure>
              {/* End Mobile Device */}
              {/* Browser Device */}
              <figure className={`ms-auto ${isRtl ? 'me-20' : 'me-20'} relative z-[1] max-w-full w-[50rem] h-auto shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] rounded-b-lg`}>
                <div className="relative flex items-center max-w-[50rem] bg-white border-b border-gray-100 rounded-t-lg py-2 px-24">
                  <div className="flex gap-x-1 absolute top-2/4 start-4 -translate-y-1">
                    <span className="size-2 bg-gray-200 rounded-full" />
                    <span className="size-2 bg-gray-200 rounded-full" />
                    <span className="size-2 bg-gray-200 rounded-full" />
                  </div>
                </div>
                <div className="bg-gray-800 rounded-b-lg">
                  <img
                    className="max-w-full h-auto rounded-b-lg"
                    src={info.img}
                    alt="Features Image"
                  />
                </div>
              </figure>
              {/* End Browser Device */}
            </div>
            {/* End Devices */}
          </div>
        ))}
      </div>
      {/* End Tab Content */}
    </div>
  );
};

export default InvestmentSection;
