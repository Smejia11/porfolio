import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { aboundMe } from "../data/info";

export function ProfileCard() {
  return (
    <Card className="w-96 md:w-80 lg:w-96 shadow-lg">
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
    </Card>
  );
}
