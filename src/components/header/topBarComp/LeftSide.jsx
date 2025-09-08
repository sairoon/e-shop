import React from "react";
import { FiPhone } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";
import { Link } from "react-router-dom";

const LeftSide = () => {
  return (
    <div className="flex justify-start">
      <Link
        to="https://maps.app.goo.gl/kEN29ufudjj5bD1D7"
        target="_blank"
        className="flex items-center gap-2 mr-8 "
      >
        <LuMapPin />
        123 Main Street, Anytown USA
      </Link>
      <Link
        to="tel:1234567890"
        className="flex items-center gap-2 before:w-[1px] before:h-8 before:bg-secondary/25 before:block before:mr-6"
      >
        <FiPhone />
        (123) 456-7890
      </Link>
    </div>
  );
};

export default LeftSide;
