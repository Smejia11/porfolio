import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react";
import { memo } from "react";
import Image from "next/image";

interface HorizontalCardProps {
  img: string;
  title: string;
  description: string;
  business: string;
  readMore: string;
  technologies: string[];
  typeProject: string;
  isPrivate: boolean;
}

function HorizontalCard({
  img,
  title,
  business,
  description,
  technologies,
  typeProject,
  readMore,
  isPrivate,
}: HorizontalCardProps) {
  const privateProject = isPrivate ? (
    <div className="flex gap-2 mb-4">
      <Chip color="red" value="Privado" />
    </div>
  ) : null;

  return (
    <Card className="max-w-[30rem]  shadow-lg p-4">
      <CardHeader color="blue-gray" className="relative h-52">
        <Image
          src={img}
          alt={`card-image-horizontal key-${title}`}
          fill
          loading="lazy"
          className="object-cover rounded-lg"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          {business}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-0.6">
          {title}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          {description}
        </Typography>
        <div className="flex gap-1 mb-1 ">
          <Chip color="blue" value={typeProject} />
        </div>
        {isPrivate && privateProject}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
          {technologies?.map((tech) => (
            <Chip
              key={tech}
              variant="outlined"
              className="w-fit"
              value={tech}
              size="sm"
            />
          ))}
        </div>
        <a href="#" className="inline-block p-3">
          <Button
            variant="text"
            className="flex items-center gap-2 "
            onClick={() => {
              window.open(readMore, "_blank");
            }}
          >
            Leer más
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardBody>
    </Card>
  );
}

export default memo(HorizontalCard);
