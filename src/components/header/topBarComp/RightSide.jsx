import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const RightSide = () => {
  // const languages = [
  //   { name: "English", flag: "https://flagcdn.com/w20/gb.png", code: "en" },
  //   { name: "Arabic", flag: "https://flagcdn.com/w20/ar.png", code: "ar" },
  //   { name: "French", flag: "https://flagcdn.com/w20/fr.png", code: "fr" },
  //   { name: "Spanish", flag: "https://flagcdn.com/w20/es.png", code: "es" },
  // ];
  const [selectedCountry, setSelectedCountry] = React.useState(null);

  const countries = [
    {
      name: "United States",
      code: "US",
      flag: "https://flagcdn.com/16x12/us.png",
    },
    { name: "Canada", code: "CA", flag: "https://flagcdn.com/16x12/ca.png" },
    {
      name: "United Kingdom",
      code: "GB",
      flag: "https://flagcdn.com/16x12/gb.png",
    },
    { name: "Australia", code: "AU", flag: "https://flagcdn.com/16x12/au.png" },
    { name: "Germany", code: "DE", flag: "https://flagcdn.com/16x12/de.png" },
    { name: "France", code: "FR", flag: "https://flagcdn.com/16x12/fr.png" },
  ];

  return (
    <div className="flex justify-end items-center gap-2">
      <div className="uppercase">usd</div>
      <div className="flex items-center before:w-[1px] before:h-8 before:bg-black before:opacity-25 before:block before:mx-6 after:w-[1px] after:h-8 after:bg-black after:opacity-25 after:block after:mx-6">
        {/* <div className="flex items-center">
          <img
            src="https://flagcdn.com/w20/gb.png"
            className="mr-2 h-4 w-7"
            alt=""
          />
          English
        </div> */}
        <img src="https://flagcdn.com/w20/gb.png" alt="flag" />
        <select
          name="country"
          className="outline-none hidden"
          value={selectedCountry?.value || ""}
          onChange={(e)=>{const country = countries.find((item) => item.code === e.target.value); setSelectedCountry(country)}}
        >
          {countries.map((country) => (
            <option value={country.code}>{country.name}</option>
          ))}
        </select>
      </div>
      <div className="flex items-center gap-2 scale-110">
        <FaFacebookF /> <FaTwitter />
        <FaInstagram />
      </div>
    </div>
  );
};

export default RightSide;
