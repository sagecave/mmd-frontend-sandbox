import Button from "@/components/Button";
import { FaCookieBite } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";

const Box = () => {

    return (
        
        <div className="bg-black p-8 flex gap-10 flex-col w-1/4 rounded-lg">
            <IoIosAdd className="rotate-45 text-white text-3xl " />
            <div className="flex gap-3 flex-col ">
            <FaCookieBite className="text-white text-5xl"/>
            <p className="text-white mt-10 ">We use cookies to improve your user experience.</p>
            <Button></Button>
            </div>
        </div>
        
    
      );
}
 
export default Box;
