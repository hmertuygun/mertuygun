import React, { useMemo } from "react";
import { Box, Button, Container } from "@chakra-ui/react";
import ArticleItem from "@/components/HomeBlog/ArticleItem";
import { usePathname } from "next/navigation";
import Link from "next/link";

const ArticleList = ({ articles }) => {
  const pathname = usePathname();

  const sortedArticles = useMemo(() => {
    if (!articles) return [];
    const sorted = articles.sort((a, b) => {
      let sorted = new Date(a.published_at) - new Date(b.published_at);
    });
    if (pathname === "/articles") return sorted;
    return sorted.splice(0, 3);
  }, [articles, pathname]);

  return (
    <Container maxW={"4xl"} mt={5}>
      {sortedArticles.map((_, i) => (
        <Link href={`/articles/${_.slug}`} key={i}>
          <Box mt={10}>
            <ArticleItem meta={_} />
          </Box>
        </Link>
      ))}
      {pathname !== "/articles" && (
        <Button
          mt={10}
          as={Link}
          colorScheme="teal"
          variant="outline"
          size="lg"
          width="100%"
          href="/articles"
        >
          View All Articles
        </Button>
      )}
    </Container>
  );
};

export default ArticleList;
