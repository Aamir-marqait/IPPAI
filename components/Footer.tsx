import { Mail, Phone, MapPin } from "lucide-react"; // or your icon set
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1F2022] text-[#ddd] pt-10 pb-6">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between gap-14">
          {/* Logo & About */}
          <div className="flex-1 min-w-[220px]">
            <Image
              src="/header/logo.png"
              alt="IPPAI Logo"
              width={100}
              height={48}
              className="mb-3"
            />
            <p className="text-sm xl:text-sm font-normal leading-none text-white font-['Poppins']">
              Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex-1 min-w-[200px]">
            <h4 className="text-lg md:text-xl xl:text-2xl font-bold mb-2 pb-3 leading-none text-white font-['Red_Hat_Display'] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-0.5 after:bg-[#D3363B]">
              Contact Info
            </h4>
            <ul className="text-sm xl:text-sm font-normal leading-none font-['Poppins'] space-y-3 mt-2">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#D3363B] flex-shrink-0" />
                <span>Email: info@ippai.org</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#D3363B] flex-shrink-0" />
                <span>Phone: +91-11-41635700</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin
                  size={16}
                  className="text-[#D3363B] flex-shrink-0 mt-0.5"
                />
                <span>
                  Diamond House, 2nd Floor, 11, Primrose Road, Bengaluru –
                  560025
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex-1 min-w-[120px]">
            <h4 className="text-lg md:text-xl xl:text-2xl font-bold mb-2 pb-3 leading-none text-white font-['Red_Hat_Display'] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-0.5 after:bg-[#D3363B]">
              Quick Links
            </h4>
            <ul className="text-sm xl:text-sm font-normal leading-none font-['Poppins'] space-y-2 mt-2">
              <li>
                <Link href="#" className="hover:underline">
                  Latest News
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Membership
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="flex-1 min-w-[120px]">
            <h4 className="text-lg md:text-xl xl:text-2xl font-bold mb-2 pb-3 leading-none text-white font-['Red_Hat_Display'] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-0.5 after:bg-[#D3363B]">
              About IPPAI
            </h4>
            <ul className="text-sm xl:text-sm font-normal leading-none font-['Poppins'] space-y-2 mt-2">
              <li>
                <Link href="#" className="hover:underline">
                  Mission & Vision
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Lorem ipsum
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  History
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex-1 min-w-[100px]">
            <h4 className="text-lg md:text-xl xl:text-2xl font-bold mb-2 pb-3 leading-none text-white font-['Red_Hat_Display'] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/4 after:h-0.5 after:bg-[#D3363B]">
              Legal
            </h4>
            <ul className="text-sm xl:text-sm font-normal leading-none font-['Poppins'] space-y-2 mt-2">
              <li>
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Terms Of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#444] my-8"></div>

        {/* Newsletter */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-1">
            <div className="text-sm xl:text-sm font-semibold leading-5 tracking-[0.05em] uppercase text-[#9CA3AF] mb-1 font-['Red_Hat_Display']">
              SUBSCRIBE TO OUR NEWSLETTER
            </div>
            <div className="text-sm md:text-base xl:text-base font-normal leading-6 text-[#D1D5DB] mb-2 font-['Poppins']">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </div>
          </div>
          <form className="flex gap-2 w-full md:w-[420px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded px-3 py-2 text-sm md:text-base xl:text-base font-normal leading-6 bg-white text-black border border-white focus:outline-none focus:border-white transition font-poppins"
            />
            <button
              type="submit"
              className="bg-[#D3363B] hover:bg-[#B8303A] text-white rounded px-5 py-2 text-sm md:text-base xl:text-base font-medium leading-6 transition font-poppins"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Divider */}
        <div className="border-t border-[#444] my-8"></div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="text-sm md:text-base xl:text-base font-normal leading-6 text-[#9CA3AF] font-poppins">
            &copy; 2025, IPPAI Inc. All rights reserved.
          </div>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a
              href="#"
              className="w-[35px] h-[35px] flex items-center justify-center rounded-3xl bg-[#EFEFEF] hover:bg-[#D3363B] text-black hover:text-white transition"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="#"
              className="w-[35px] h-[35px] flex items-center justify-center rounded-3xl bg-[#EFEFEF] hover:bg-[#D3363B] text-black hover:text-white transition"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="#"
              className="w-[35px] h-[35px] flex items-center justify-center rounded-3xl bg-[#EFEFEF] hover:bg-[#D3363B] text-black hover:text-white transition"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              className="w-[35px] h-[35px] flex items-center justify-center rounded-3xl bg-[#EFEFEF] hover:bg-[#D3363B] text-black hover:text-white transition"
            >
              <FaYoutube size={18} />
            </a>
            <a
              href="#"
              className="w-[35px] h-[35px] flex items-center justify-center rounded-3xl bg-[#EFEFEF] hover:bg-[#D3363B] text-black hover:text-white transition"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
