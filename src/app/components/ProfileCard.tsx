import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { aboundMe, infoData } from "../data/info";
import { CardFooter } from "@material-tailwind/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export function ProfileCard() {
  return (
    <Card className="w-full max-w-sm md:max-w-md lg:max-w-lg shadow-lg rounded-xl p-4">
      <CardHeader floated={false} className="h-80">
        <img src={aboundMe.srcImage} alt="profile-picture" loading="lazy" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {aboundMe.name}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          {aboundMe.title}
        </Typography>
        <Typography color="blue-gray" className="font-medium">
          {aboundMe.description}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        {/* LinkedIn */}
        <a
          href={infoData.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 text-2xl hover:scale-110 transition-transform"
        >
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a
          href={infoData.gitHub}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 text-2xl hover:scale-110 transition-transform"
        >
          <FaGithub />
        </a>
      </CardFooter>
    </Card>
  );
}
