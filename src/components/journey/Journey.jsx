import React from "react";
import "./journey.css";
import { BsPatchCheckFill } from "react-icons/bs";
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
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
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
    subtitle: "Start working as a Full-stack Software Engineer at Kandua",
    year: "2021",
    icon: <TerminalIcon />,
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
  console.log("ITEMS: ", timelineItems);
  return (
    <section id="experience">
      {/* <h5>Skills</h5> */}
      <h2>Journey Thus Far...</h2>

      <Timeline position="alternate">
        {timelineItems}
        {/* <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            9:30 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <FastfoodIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Eat
            </Typography>
            <Typography>Because you need strength</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            10:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Code
            </Typography>
            <Typography>Because it&apos;s awesome!</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <HotelIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Sleep
            </Typography>
            <Typography>Because you need rest</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="secondary">
              <RepeatIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Repeat
            </Typography>
            <Typography>Because this is the life you love!</Typography>
          </TimelineContent>
        </TimelineItem> */}
      </Timeline>

      {/* <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Typescript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Journey;
