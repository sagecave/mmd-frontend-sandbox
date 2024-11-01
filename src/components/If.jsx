import CookiesConsentPopupCTA from "@/components/CookiesConsentPopupCTA";
const If = ({ children, conditionCookies }) => {
  let content;
  if (conditionCookies == true) {
    content = <CookiesConsentPopupCTA />;
  } else {
  }
  return <div>{content}</div>;
};

export default If;
