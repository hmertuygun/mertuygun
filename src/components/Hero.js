import {
  Avatar,
  Box,
  Center,
  Container,
  Heading,
  Highlight,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Technologies from "@/components/Technologies";
import Link from "next/link";

const Hero = () => {
  const direction = useBreakpointValue({ base: "column", md: "row" });
  const alignItems = useBreakpointValue({ base: "center", md: "flex-start" });

  return (
    <>
      <Center>
        <Container
          maxW={{ sm: "100%", md: "75vw" }}
          marginTop={{ sm: "5vh", md: "5vh" }}
        >
          <Stack direction={direction} spacing={8} align="center">
            <Box
              width={{ base: "100%", md: "30%" }}
              display="flex"
              justifyContent={alignItems}
            >
              <Avatar width={250} height={250} src={"profile.jpeg"}></Avatar>
            </Box>
            <Box width={{ base: "100%", md: "70%" }}>
              <Heading>
                <Highlight
                  query={["software developer"]}
                  styles={{
                    px: "2",
                    py: "1",
                    rounded: "full",
                    bg: "teal.100",
                    m: "2",
                  }}
                >
                  👋 I'm Mert Uygun software developer
                </Highlight>
              </Heading>
              <Text mt={5}>
                Good to see you! JavaScript is the wand that I use most
                frequently in my work as an enthusiastic online magic artist.
                Bringing pixels to life on the screen by utilizing JS and all of
                its incredible skills is one of the things that gives me the
                most pleasure. I have devoted numerous hours to exploring with
                new frameworks such as React and Vue, and to tell you the truth,
                it has been quite an exciting experience. My work is a
                reflection of my beliefs, which are that user experiences on the
                web should be clean, attractive, and engaging.
              </Text>
              <Text mt={5}>
                I'm working as Lead Frontend Developer at{" "}
                <Link href="https://coinpanel.com/">
                  <strong>CoinPanel</strong>
                </Link>{" "}
                remotely, from Ankara, Turkey.
              </Text>
              <Technologies />
            </Box>
          </Stack>
        </Container>
      </Center>
    </>
  );
};

export default Hero;
