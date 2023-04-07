import React from 'react'
import { hasCookie, setCookie } from "cookies-next";
export default function Cookies() {
    const [showConsent, setShowConsent] = React.useState(true);
  
    React.useEffect(() => {
      setShowConsent(hasCookie("localConsent"));
    }, []);
  
    const acceptCookie = () => {
      setShowConsent(true);
      setCookie("localConsent", "true", {});
    };
  
    if (showConsent) {
      return null;
    }


  return (
 <>
 
 <div className="fixed inset-0 bg-slate-700 bg-opacity-70">
      <div className="fixed  flex-col bottom-0 left-0 right-0 flex justify-center items-center  px-4 py-8 bg-gray-100">
        <span className="text-dark text-xs lg:text-sm ">
          This website uses cookies to improve user experience. By using our website you consent to all cookies in accordance with our Cookie Policy.
        </span>
        <button className="bg-green-500 m-2 lg:py-2 px-8 rounded text-white" onClick={() => acceptCookie()}>
          Accept
        </button>
      
      </div>
    </div>
 
 
 </>
  )
}
