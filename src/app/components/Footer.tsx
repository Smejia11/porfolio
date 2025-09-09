import { Typography } from "@material-tailwind/react";
import { infoData } from "../data/info";


export function FooterWithLogo() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-white p-9">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img src="/sm.svg" alt="logo-ct" className="w-12" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Sobre mí
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href={infoData.gitHub}
              target="_blank"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribuir
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; {currentYear} Santiago Mejia Oquendo.
      </Typography>
    </footer>
  );
}
