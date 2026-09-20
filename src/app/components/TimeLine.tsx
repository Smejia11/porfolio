import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

interface DefaultTimelineProps {
  company: string;
  title: string;
  description: string;
  date: string;
  items?: string[];
  avatar?: string;
  links?: { label: string; url: string }[];
}

export function DefaultTimeline({
  title,
  company,
  description,
  date,
  items,
  links,
}: DefaultTimelineProps) {
  const itemsExist =
    items && Array.isArray(items)
      ? items.map((text, index) => (
          <Typography
            variant="small"
            key={`${text}-${index}`}
            className="font-normal text-gray-700"
          >
            {text}
          </Typography>
        ))
      : null;
  return (
    <div className="w-full max-w-[34rem] h-full mx-auto px-6 overflow-x-hidden">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-6">
            <TimelineIcon />
            <Typography variant="h5" color="blue-gray" className="leading-none">
              {company}
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-6">
            <Typography variant="h6" color="blue-gray" className="leading-none">
              {title}
            </Typography>
            <Typography variant="small" className="font-normal text-gray-600">
              {description}
            </Typography>
            {itemsExist}
            {links?.length ? (
              <div className="flex flex-wrap gap-2 mt-2">
                {links.map(({ label, url }) => (
                  <a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-blue-gray-100 px-3 py-1 text-xs font-medium text-blue-gray-700 transition-colors hover:border-blue-gray-300 hover:text-blue-gray-900"
                  >
                    <ArrowTopRightOnSquareIcon className="h-3 w-3 shrink-0" />
                    {label}
                  </a>
                ))}
              </div>
            ) : null}
            <Typography
              variant="small"
              color="gray"
              className="font-normal text-gray-600 mt-2"
            >
              {date}
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
