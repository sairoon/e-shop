import React from "react";
import Container from "../layouts/Container";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const BottomBar = () => {
  return (
    <div className="bg-[#FF624C] font-Montserrat text-base text-white font-bold py-6">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center gap-20 capitalize">
            <div className="flex items-center gap-4">
              <RxHamburgerMenu className="text-2xl" />
              all categories
            </div>
            <Link to="#">products</Link>
            <Link to="#">blog</Link>
            <Link to="#">contact</Link>
          </div>
          <div className="flex justify-end items-center gap-20">
            <Link to="#" className="uppercase">limited sale</Link>
            <Link to="#" className="capitalize">best seller</Link>
            <Link to="#" className="capitalize">new arrivals</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BottomBar;
