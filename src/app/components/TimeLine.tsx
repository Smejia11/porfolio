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
}

export function DefaultTimeline({
  title,
  company,
  description,
  date,
  items,
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
            <Typography
              variant="small"
              color="gray"
              className="font-normal text-gray-600"
            >
              {date}
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
