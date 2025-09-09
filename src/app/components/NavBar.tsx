import {
  Navbar,
  Avatar,
  IconButton,
  Collapse,
  Typography,
  Badge,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavList from "./NavList";
import { useNavbar } from "@/app/hooks/useNavbar";
import { ReactNode } from "react";
import { aboundMe } from "../data/info";

export function NavbarSimple(): ReactNode {
  const { openNav, setOpenNav, listNav } = useNavbar();
  return (
    <Navbar className="mx-auto max-w-screen-xl w-full">
      <div
        className="flex items-center justify-between text-blue-gray-900"
        color="white"
      >
        <div className="flex items-center gap-4">
          <Badge
            placement="top-end"
            overlap="circular"
            color="green"
            withBorder
          >
            <Avatar src={aboundMe.srcImage} alt="avatar" size="md" />
          </Badge>
          <div>
            <Typography variant="h6">{aboundMe.name}</Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {aboundMe.title}
            </Typography>
          </div>
        </div>
        <div className="hidden lg:block">
          <NavList listNav={listNav} />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden block"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList listNav={listNav} />
      </Collapse>
    </Navbar>
  );
}
