import React from "react";
import Container from "../layouts/Container";
import { MdOutlineShoppingCart } from "react-icons/md";
import { PiUser } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const MiddleBar = () => {
  return (
    <Container>
      <div className="flex justify-between items-center my-6 text-secondary">
        <Link to="/" className="font-Poppins text-[32px] font-bold">
          e-shop<span className="text-primary">.</span>
        </Link>
        <div className="flex justify-between items-center font-Montserrat">
          <div className="relative">
            <input
              className="border border-solid border-secondary/50 placeholder:text-secondary/75 rounded-[10px] w-[332px] pl-6 py-[18px] mr-12"
              placeholder="Search Products ..."
              type="search"
            />
            <IoSearchOutline className="absolute top-5 right-20 text-2xl" />
          </div>
          <Link to="/cart" className="flex items-center gap-6">
            <MdOutlineShoppingCart className="text-2xl" />
            <div className="font-normal mr-10">
              <h6 className=" text-base capitalize">cart</h6>
              <span className="font-bold">$ 150,00</span>
            </div>
          </Link>
          <div className="flex items-center gap-6 before:w-[1px] before:h-8 before:bg-secondary/25 before:block before:mr-6">
            <PiUser className="text-2xl" />
            <div className="font-normal mr-10">
              <h6 className=" text-base capitalize">user</h6>
              <span className="font-bold">account</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MiddleBar;
