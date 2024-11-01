import { FaCookieBite } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import Button from "./Button";
const CookiesConsentPopupCTA = () => {
  return (
    <div className="bg-black p-8 flex gap-8 flex-col w-1/4 rounded-lg ">
      <div className="flex justify-end">
        <IoIosAdd className="rotate-45 text-white text-3xl " />
      </div>
      <div className="flex gap-2 flex-col ">
        <FaCookieBite className="text-white text-5xl" />
        <p className="text-white mt-10 ">We use cookies to improve your user experience.</p>
        <Button buttonTekst="Cookies yay!" />
      </div>
    </div>
  );
};

export default CookiesConsentPopupCTA;
