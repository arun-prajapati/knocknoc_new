import Image from "next/image";
import React from "react";
import TypographyH4 from "../typography/TypographyH4";
import Link from "next/link";

import Logo from "../../../public/assets/knoc_knoc_footer_logo.png";
import Google from "../../../public/assets/googleplayfooter.webp";
import Apple from "../../../public/assets/applestorefooter.webp";

const MainFooter = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row  lg:my-auto lg:pt-[2rem]  lg:pr-[1rem]   border-b">
      {/* left_container */}
      <div className="lg:w-[40%] grid items-center p-5 lg:p-0">
        <div className="relative w-[160px] lg:w-[260px] h-[100px]  min-h-full flex justify-center lg:justify-start lg:items-end  m-auto lg:m-0">
          <Image
            src={Logo}
            alt="knocknoc footer logo"
            fill
            sizes="(min-width: 1280px) 240px, (min-width: 780px) 208px, 160px"
          />
        </div>
      </div>

      {/* right_container */}
      <div className="w-full lg:w-[60%] text-white pb-2 pt-5 lg:pt-0">
        <div className="grid lg:grid-cols-3 gap-3">
          <div className="lg:border-r">
            <div className="heading flex gap-2 items-center justify-center lg:justify-start w-full">
              <div className="img relative  w-[20px] h-[20px]">
                <Image
                  src="/assets/paw_image_small.png"
                  alt="logo"
                  fill
                  sizes="50px"
                />
              </div>
              <TypographyH4 text="Quick Links" />
            </div>
            <ul className="lg:pt-2 pt-2 space-y-2 lg:space-y-0 lg:text-lg  text-center lg:text-left lg:list-disc lg:pl-[20%]">
              <li className="underline">
                <Link href="/profile/help">Get Help</Link>
              </li>
              <li className="underline">
                <Link href="/profile/cat-provider">Cat Provider</Link>
              </li>
              <li className="underline">
                <Link href="/profile/about">About Knoc Knoc</Link>
              </li>
              <li className="underline">
                <Link href="/profile/terms-and-conditions">
                  Terms & Condition
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center flex-col w-full pb-[1rem] pt-3 lg:pt-0 lg:border-r">
            <div className="heading flex gap-2 items-center justify-center w-full">
              <div className="img relative  w-[20px] h-[20px]">
                <Image
                  src="/assets/paw_image_small.png"
                  alt="logo"
                  fill
                  sizes="50px"
                />
              </div>
              <TypographyH4 text="Social Media Links" />
            </div>

            <div className="icons grid grid-cols-2 gap-[1.3rem] pt-2">
              <span className="flex items-center justify-center p-1 w-[35px] rounded-[5px] border-2">
                <a
                  href="https://wa.me/7339928167"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: "white", width: "100%" }}
                  >
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"></path>
                  </svg>
                </a>
              </span>
              <span className="flex items-center justify-center p-1 w-[35px] rounded-[5px] border-2">
                <a
                  href="https://www.instagram.com/knocknoc_sg/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="InstagramIcon"
                    style={{ color: "white", width: "100%" }}
                  >
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                  </svg>
                </a>
              </span>
              <span className="flex items-center justify-center p-1 w-[35px] rounded-[5px] border-2">
                <a
                  href="https://www.facebook.com/profile.php?id=100085595374675"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="FacebookIcon"
                    style={{ color: "white", width: "100%" }}
                    stroke="currentColor"
                    fill="currentColor"
                  >
                    <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
          <div className="flex flex-col teaxt-center justify-center items-center gap-[1rem] lg:justify-normal pb-5 lg:pb-0 lg:mr-10">
            <span>
              <a
                href="https://play.google.com/store/apps/details?id=com.Liuxiaomao.knocknoc"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={Google}
                  alt="get-it-on-google-play-badge"
                  className="sm:w-[200px] w-[100px]"
                />
              </a>
            </span>
            <span>
              <a
                href="https://apps.apple.com/us/app/knoc-knoc-sg/id6445861760"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={Apple}
                  alt="appstore"
                  className="sm:w-[200px] w-[100px]"
                />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
