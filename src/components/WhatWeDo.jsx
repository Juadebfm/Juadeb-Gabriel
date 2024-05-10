import React from "react";
import { CgWebsite } from "react-icons/cg";
import { GiTeacher } from "react-icons/gi";
import { MdOutlineBrandingWatermark } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { TbDeviceMobileCode } from "react-icons/tb";
import { GrCloudSoftware } from "react-icons/gr";
import { FaCode } from "react-icons/fa";

const WhatWeDo = () => {
  return (
    <div className="h-screen bg-mainGoldGray px-24 py-24">
      <h2 className="text-[44px] leading-normal mb-3 font-bold text-center text-black">
        What We Do{" "}
      </h2>
      <p className="text-center w-[75%] mx-auto text-[20px] leading-normal mt-3">
        We design and create awesome digital experiences that exceeds our
        client's needs and expectations. Our capabilities cover, but are not
        limited to the following areas:
      </p>

      <div className="mt-16 grid grid-cols-3 place-items-center place-content-center gap-y-10">
        <div className="flex items-center justify-center flex-col gap-3 hover:bg-[#FFE7C0] duration-150 cursor-pointer p-8 rounded-md hover:shadow-lg shadow-mainBlack h-[320px]">
          <FaCode className="text-3xl" />
          <h3 className="text-[20px] font-bold">Website Development</h3>
          <p className="text-center">
            We develop highly customized, mobile responsive and SEO optimized
            websites which will help you to create a strong online footprint.
          </p>
        </div>
        <div className="flex items-center justify-center flex-col gap-3 hover:bg-[#FFE7C0] duration-150 cursor-pointer p-8 rounded-md hover:shadow-lg shadow-mainBlack h-[320px]">
          <GrCloudSoftware className="text-3xl" />
          <h3 className="text-[20px] font-bold">Software Development</h3>
          <p className="text-center">
            We serve small, medium and large sized companies with high quality
            CRM, ERP and system management software services that foster growth.
          </p>
        </div>
        <div className="flex items-center justify-center flex-col gap-3 hover:bg-[#FFE7C0] duration-150 cursor-pointer p-8 rounded-md hover:shadow-lg shadow-mainBlack h-[320px]">
          <TbDeviceMobileCode className="text-3xl" />
          <h3 className="text-[20px] font-bold">Mobile Apps Development</h3>
          <p className="text-center">
            Give wings to your business venture with our advanced mobile and
            on-demand app development services for your business.
          </p>
        </div>
        <div className="flex items-center justify-center flex-col gap-3 hover:bg-[#FFE7C0] duration-150 cursor-pointer p-8 rounded-md hover:shadow-lg shadow-mainBlack h-[320px]">
          <AiFillProduct className="text-3xl" />
          <h3 className="text-[20px] font-bold">UI/UX Designs</h3>
          <p className="text-center">
            We create with the user as the principal focus. We understand the
            impact of beautiful designs. Our designs express brand values.
          </p>
        </div>
        <div className="flex items-center justify-center flex-col gap-3 hover:bg-[#FFE7C0] duration-150 cursor-pointer p-8 rounded-md hover:shadow-lg shadow-mainBlack h-[320px]">
          <MdOutlineBrandingWatermark className="text-3xl" />
          <h3 className="text-[20px] font-bold">Brand Identity Designs</h3>
          <p className="text-center">
            We help businesses gain confidence and position them as brands that
            clients can trust in an already saturated market.
          </p>
        </div>
        <div className="flex items-center justify-center flex-col gap-3 hover:bg-[#FFE7C0] duration-150 cursor-pointer p-8 rounded-md hover:shadow-lg shadow-mainBlack h-[320px]">
          <GiTeacher className="text-3xl" />
          <h3 className="text-[20px] font-bold">IT Trainings</h3>
          <p className="text-center">
            We offer training programmes to individuals or groups either through
            our regular, online or on-demand corporate classes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
