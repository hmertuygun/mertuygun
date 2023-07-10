import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { useCallback } from "react";

const ArticleContent = ({ article }) => {
  const calculateReadingTime = useCallback((text) => {
    const words = text.split(" ");

    const minutes = words.length / 200;
    const readingTimeMinutes = Math.floor(minutes);
    const readingTimeSeconds = Math.floor((minutes - readingTimeMinutes) * 60);
    return (
      readingTimeMinutes + " minute(s) and " + readingTimeSeconds + " second(s)"
    );
  }, []);

  return (
    <Container maxW={{ sm: "90%", md: "7xl" }} mt={{ base: 4, md: 10 }}>
      <Box mb={4} display={{ md: "flex" }}>
        <Box flexShrink={0}>
          <Image
            borderRadius="lg"
            width={{ md: 60 }}
            src={article.metadata?.image?.url}
            alt={article.title}
          />
          <HStack spacing={2} mt={2}>
            {article.metadata.tags.map((tag) => (
              <Link href={`/articles?tag=${tag}`} key={tag}>
                <Tag
                  size={"md"}
                  colorScheme={"orange"}
                  cursor={"pointer"}
                  _hover={{ opacity: 0.8 }}
                >
                  {tag}
                </Tag>
              </Link>
            ))}
          </HStack>
          <Link href={"/articles"}>
            <Button my={5} colorScheme={"blue"}>
              See all blog posts
            </Button>
          </Link>
          <Text
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.200")}
            mt={2}
          >
            {calculateReadingTime(article.metadata.content)}
          </Text>
        </Box>
        <Box
          my={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          maxW={{ base: "100%", md: "7xl" }}
        >
          <Heading mb={5} as="h1">
            {article.title}
          </Heading>
          <Box w={{ base: "100%", md: "80%" }}>
            <Text
              as={"strong"}
              my={5}
              w={{ base: "100%", md: "80%" }}
              color={useColorModeValue("gray.600", "gray.200")}
            >
              {article.metadata.description}
            </Text>
          </Box>

          <Box
            mt={2}
            my={5}
            w={{ base: "100%", md: "80%" }}
            color={useColorModeValue("black.600", "black.200")}
          >
            <ReactMarkdown
              components={ChakraUIRenderer()}
              rehypePlugins={[rehypeHighlight]}
              remarkPlugins={[remarkGfm]}
            >
              {article.metadata.content}
            </ReactMarkdown>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ArticleContent;
