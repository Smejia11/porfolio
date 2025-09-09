"use client";
import { NavItem } from "@/app/hooks/useNavbar";
import useScroll from "@/app/hooks/useScroll";
import { Typography } from "@material-tailwind/react";

export function FooterWithLogo() {
  const { scrollToRef } = useScroll();
  const listFooter: Array<NavItem> = [
    { ref: "home", value: "Sobre nosotros" },
    { ref: "contactUs", value: "contactenos" },
  ];

  return (
    <footer className="w-full  bg-beige p-8">
      
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-beige text-center md:justify-between">
        <img src="/img/logo-ct-dark.png" alt="logo-ct" className="w-10" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          {listFooter.map(({ ref, value }) => (
            <Typography
              as="li"
              key={ref}
              color="brown"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              <div
                key={ref}
                onClick={() => scrollToRef(ref)}
                style={{ cursor: "pointer", textDecoration: "underline" }}
              >
                {value}
              </div>
            </Typography>
          ))}
        </ul>
      </div>
      <hr className="my-9 border-brown " />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy;{" "}
        {`${new Date().toLocaleDateString(undefined, {
          year: "numeric",
        })} Sandra Milena Loaiza todos los derechos reservados.`}
      </Typography>
    </footer>
  );
}
