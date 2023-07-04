"use client";

import { Box, Text } from "@chakra-ui/react";

const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    mt={10}
    p={5}
    textAlign="center"
    color="purple.200"
  >
    <Text fontSize="md">
      Made by Mert. Feel free to use the contents, but at least inform me :)
    </Text>
  </Box>
);

export default Footer;
