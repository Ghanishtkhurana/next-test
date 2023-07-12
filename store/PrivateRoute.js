"use client";
import { usePathname, useRouter } from "next/navigation";
import { getCookie } from "cookies-next";

const PrivateRoute = ({ children }) => {
  const path = usePathname();
  console.log("path", path);
  const cokyname = getCookie("cooky");
  const router = useRouter();
  console.log(cokyname);
  if ((path !== "/" || path !== "/other") && cokyname) {
    console.log("first");
   return children
  }
  else if(path === "/" || path === "/home" || path == "/other"){
    console.log("second");
    return children
    
  } 
  else{
    alert("login first")
    
    router.push("/other");
  }
};

export default PrivateRoute;
