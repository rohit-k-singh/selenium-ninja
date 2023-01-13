import React from "react";
import LogoVPN from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import Link from "next/link";
const FLink = ({ label, url }) => {
  return <li className={`my-2 hover:text-orange-500 cursor-pointer transition-all whitespace-nowrap after:content-[""] after:w-full hover:after:h-[1.5px] after:bg-orange-500 after:absolute relative after:-bottom-px after:-right-0 after:transition-all`}>
    <Link href={url}>{label}</Link>
  </li>
}
const Footer = () => {
  const socials = [{
    icon:
      <Facebook className="h-6 w-6 " />, url: "https://www.facebook.com", label: 'facebook'
  },
  { icon: <Twitter className="h-6 w-6 " />, url: "https://www.twitter.com", label: 'twitter' },
  { icon: <Instagram className="h-6 w-6 " />, url: "https://www.instagram.com", label: 'instagram' }
  ]
  return (
    <div className="!bg-[#fFFfff] shadow-sm pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <LogoVPN className="h-8 w-auto mb-6" />
          <p className="mb-4">
            <strong className="font-medium">Selenium Ninja</strong>
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            {socials?.map(social => (
              <a href={social.url} target="_blank" aria-label={social.label} className="mx-2 hover:shadow-orange-500 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} - Selenium Ninja</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Links</p>
          <ul className="text-black-500 flex gap-12 flex-col md:flex-row">
            <FLink label={'Tutorials'} url='/tutorials' />
            <FLink label={'Interview Questions'} url='/interview' />
            <FLink label={'Blog'} url='/blog' />
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Footer;
