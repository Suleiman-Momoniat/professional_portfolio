import React from "react";
import "./journey.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import EngineeringIcon from "@mui/icons-material/Engineering";
import TerminalIcon from "@mui/icons-material/Terminal";
import ExplicitIcon from "@mui/icons-material/Explicit";
import SchoolIcon from "@mui/icons-material/School";

const lifeEvents = [
  {
    title: "npm run Suli",
    subtitle: "I begin to wreak havoc on the world",
    year: "1996",
    icon: <ChildCareIcon />,
  },
  {
    title: "Complete Matric year",
    subtitle: "Complete high school with 8 distinctions",
    year: "2014",
    icon: <SchoolIcon />,
  },
  {
    title: "Complete Honours degree",
    subtitle:
      "Get honours degree in Computer Science from University of the Witwatersrand Cum Laude",
    year: "2019",
    icon: <SchoolIcon />,
  },
  {
    title: "Huawei",
    subtitle: "Start Working at Huawei as a Networks Engineer",
    year: "2020",
    icon: <EngineeringIcon />,
  },
  {
    title: "Kandua",
    subtitle: "Start working as a Full-Stack Software Engineer at Kandua",
    year: "2021",
    icon: <TerminalIcon />,
  },
  {
    title: "Entelect",
    subtitle:
      "Began my journey as an Entelectual working as an Intermediate Full-Stack Software Engineer at Entelect",
    year: "2023",
    icon: <ExplicitIcon />,
  },
];

const generateTimelineItems = (lifeEvents) => {
  return lifeEvents.map((event) => {
    return (
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <Typography sx={{ color: "white" }}>{event.year}</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            {event.icon}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            {event.title}
          </Typography>
          <Typography>{event.subtitle}</Typography>
        </TimelineContent>
      </TimelineItem>
    );
  });
};

const Journey = () => {
  const timelineItems = generateTimelineItems(lifeEvents);
  return (
    <section id="journey">
      <h2>Journey Thus Far...</h2>
      <Timeline position="alternate">{timelineItems}</Timeline>
    </section>
  );
};

export default Journey;
