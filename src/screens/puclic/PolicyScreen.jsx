//External Lib Import
import { useEffect } from "react";

//Internal Lib Import
import NavMenuDesktop from "../../components/Common/NavMenuDesktop";
import NavMenuMobile from "../../components/Common/NavMenuMobile";
import FooterDesktop from "../../components/Common/FooterDesktop";
import FooterMobile from "../../components/Common/FooterMobile";
import Policy from "../../components/Others/Policy";

const PolicyScreen = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div className="Desktop">
        <NavMenuDesktop />
      </div>

      <div className="Mobile">
        <NavMenuMobile />
      </div>

      <Policy />

      <div className="Desktop">
        <FooterDesktop />
      </div>
      <div className="Mobile">
        <FooterMobile />
      </div>
    </>
  );
};

export default PolicyScreen;
