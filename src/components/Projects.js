import { Button, Flex, Tooltip } from "@chakra-ui/react";
import Link from "next/link";

const colorSchemes = [
  "teal",
  "green",
  "blue",
  "cyan",
  "orange",
  "pink",
  "purple",
  "red",
  "yellow",
];

const projectData = [
  {
    id: 1,
    name: "Truth",
    info: "An algorithm that creates a web consists of the filtered domains. Basically, indexer and searcher for specified subjects. It has its own filters, search and index algorithms.",
    url: "",
  },
  {
    id: 2,
    name: "Movie Searcher",
    info: "Movie browsing web application with Redux.",
    url: "https://github.com/hmertuygun/movie-frontend",
  },
  {
    id: 3,
    name: "For You",
    info: "Tinder Clone that is done with Ionic - Typescript - Angular.",
    url: "https://github.com/hmertuygun/foryou",
  },
  {
    id: 4,
    name: "Vision Alpha",
    info: "Advanced face recognition API with database compatitability and online/ip camera support.",
    url: "https://github.com/hmertuygun/VisionAlpha",
  },
  {
    id: 5,
    name: "Povium",
    info: "Povium is an all-in-one system that delivers live audio broadcast service to mobile application users",
    url: "https://qa.povium.io",
  },
];

const Projects = () => {
  const getColorScheme = () =>
    colorSchemes[Math.floor(Math.random() * colorSchemes.length)];

  return (
    <Flex mt={5} wrap="wrap" direction={"row"} justify="center" align="center">
      {projectData.map((project) => (
        <Link target={"_blank"} href={project.url} key={project.id}>
          <Tooltip
            label={project.info}
            aria-label="A tooltip"
            placement="top"
            key={project.id}
          >
            <Button
              colorScheme={getColorScheme()}
              variant="outline"
              m={2}
              key={project.id}
            >
              {project.name}
            </Button>
          </Tooltip>
        </Link>
      ))}
    </Flex>
  );
};

export default Projects;
