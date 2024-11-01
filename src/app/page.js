// import Image from "next/image";

import BlueBox from "@/components/BlueBox";
import Box from "@/components/Box";
import Button from "@/components/Button";
import CookiesConsentPopupCTA from "@/components/CookiesConsentPopupCTA";
import If from "@/components/If";

export default function Home() {
  const test = true;
  return (
    <div>
      <If conditionCookies={test}></If>
    </div>
  );
}
