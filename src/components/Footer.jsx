import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-darkBackground text-white">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">Sitron</h1>
          <p className=" text-sm">
            With Sitron Investments you can experience the value of cutting edge
            products and services.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Services</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              IT Solutions
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Stationery & Printing
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Construction
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Products</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Corporate Wear
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Furniture
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Tools & Hardware
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Follow Us</h1>
          <nav className=" flex flex-col md:items-center gap-2">
            <BsFacebook
              size={25}
              className="hover:text-brightColor transition-all cursor-pointer"
            />
            <RiTwitterXFill
              size={25}
              className=" hover:text-brightColor transition-all cursor-pointer"
            />
            <BsInstagram
              size={25}
              className=" hover:text-brightColor transition-all cursor-pointer"
            />
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center py-4">
            @copyright
            <span className=" text-brightColor"> sitron investments</span> | All
            rights reserved
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
