import { Box, Flex, Icon, IconButton } from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const SocialMediaButtons = () => (
  <Flex align="center" justify="center" my={5}>
    <Box mx={2}>
      <IconButton
        as={Link}
        target={"_blank"}
        href="https://www.linkedin.com/in/hmertuygun"
        icon={<Icon as={FaLinkedin} />}
        colorScheme="linkedin"
        variant="solid"
      ></IconButton>
    </Box>
    <Box mx={2}>
      <IconButton
        as={Link}
        target={"_blank"}
        href="https://twitter.com/hmertuygun"
        icon={<Icon as={FaTwitter} />}
        colorScheme="twitter"
        variant="solid"
      ></IconButton>
    </Box>
    <Box mx={2}>
      <IconButton
        as={Link}
        target={"_blank"}
        href="https://github.com/hmertuygun"
        icon={<Icon as={FaGithub} />}
        colorScheme="blackAlpha"
        variant="solid"
      ></IconButton>
    </Box>
    <Box mx={2}>
      <IconButton
        as={Link}
        target={"_blank"}
        href="mailto:uygun.hmert@gmail.com"
        icon={<Icon as={FaEnvelope} />}
        colorScheme="green"
        variant="solid"
      ></IconButton>
    </Box>
  </Flex>
);

export default SocialMediaButtons;
