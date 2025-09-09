import { useEffect, useState } from "react";

export type NavItem = {
  ref: string;
  value: string;
};

export const useNavbar = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  const listNav: Array<NavItem> = [
    { ref: "home", value: "Sobre mi" },
    { ref: "experian", value: "Experiencia Laboral" },
    { ref: "projects", value: "Proyectos" },
    { ref: "contactUs", value: "Contacto" },
  ];

  return { openNav, setOpenNav, listNav };
};
