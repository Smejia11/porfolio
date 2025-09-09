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
  title: string;
  description: string;
  date: string;
}

export function DefaultTimeline({
  title,
  description,
  date,
}: DefaultTimelineProps) {
  return (
    <div className="w-full max-w-[32rem] mx-auto px-6 overflow-x-hidden">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-6">
            <TimelineIcon />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              {title}
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-6">
            <Typography
              variant="small"
              className="font-normal text-gray-600"
            >
              {description}
            </Typography>
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
