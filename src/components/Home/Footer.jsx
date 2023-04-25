import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
  IoLogoTwitter,
} from "react-icons/io5";
export const Footer = () => {
  return (
    <footer className="py-10 flex justify-between items-center bg-[#F4F4F4] px-20 rounded-t-[3rem]">
      <ul className="flex items-center gap-5 ">
        <li>
          <a href="" className="text-lg">
            <IoLogoFacebook />
          </a>
        </li>
        <li>
          <a href="" className="text-lg">
            <IoLogoInstagram />
          </a>
        </li>
        <li>
          <a href="" className="text-lg">
            <IoLogoYoutube />
          </a>
        </li>
        <li>
          <a href="" className="text-lg">
            <IoLogoTwitter />
          </a>
        </li>
      </ul>

      <ul className="flex flex-col gap-2">
        <li>
          <p href="" className="mb-5 font-bold">
            Turo
          </p>
        </li>
        <li>
          <a href="" className="text-sm">
            About
          </a>
        </li>
        <li>
          <a href="" className="text-sm">
            Privacy
          </a>
        </li>
        <li>
          <a href="" className="text-sm">
            Careers
          </a>
        </li>
        <li>
          <a href="" className="text-sm">
            Press
          </a>
        </li>
      </ul>

      <ul className="flex flex-col gap-2">
        <li>
          <p href="" className="mb-5 font-bold">
            Locations
          </p>
        </li>
        <li>
          <a href="" className="text-sm">
            USA (EN)
          </a>
        </li>
        <li>
          <a href="" className="text-sm">
            Australia (EN)
          </a>
        </li>
        <li>
          <a href="" className="text-sm">
            Canada (EN)
          </a>
        </li>
        <li>
          <a href="" className="text-sm">
            UK (EN)
          </a>
        </li>
      </ul>

      <ul className="flex flex-col gap-2">
        <li>
          <p href="" className="mb-5 font-bold">
            Explore
          </p>
        </li>
        <li>
          <a href="" className="text-sm">
            Book a car
          </a>
        </li>
        <li>
          <a href="" className="text-sm">
            Weedings
          </a>
        </li>
        <li>
          <a href="" className="text-sm">
            Trust & Safety
          </a>
        </li>
        <li>
          <a href="" className="text-sm">
            Sustainablility
          </a>
        </li>

        <li>
          <a href="" className="text-sm">
            FAQs
          </a>
        </li>
      </ul>
    </footer>
  );
};
