"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import DesktopNav from "./desktop-menu";
import MobileNav from "./mobile-menu";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Sections", href: "/sections" },
  { name: "Support", href: "/support" },
];

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className=" border-b ">
      {isMobile ? (
        <MobileNav navigation={navigation} pathname={pathname} />
      ) : (
        <DesktopNav navigation={navigation} pathname={pathname} />
      )}
    </header>
  );
}
