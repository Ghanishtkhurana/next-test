"use client";
import { usePathname, useRouter } from "next/navigation";
import { getCookie } from "cookies-next";

const PrivateRoute = ({ children }) => {
  const path = usePathname();
  const cokyname = getCookie("cooky");
  const router = useRouter();
  if ((path !== "/" || path !== "/login") && cokyname) {
   return children
  }
  else if(path === "/" || path === "/home" || path == "/login"){
    console.log("second");
    return children
    
  } 
  else{
    alert("login first")
    
    router.push("/login");
  }
};

export default PrivateRoute;
