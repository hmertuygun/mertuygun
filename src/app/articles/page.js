"use client";

import ArticleList from "@/components/HomeBlog/ArticleList";
import { Button, Container, Heading, Tag } from "@chakra-ui/react";
import Link from "next/link";
import cosmicConfig from "@/cosmic-config";
import { Suspense, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Articles() {
  const params = useSearchParams();
  const [articles, setArticles] = useState(null);

  const getArticles = useCallback(async () => {
    if (params.get("tag")) {
      const { objects: data } = await cosmicConfig.objects
        .find({ type: "posts", "metadata.tags": { $in: [params.get("tag")] } })
        .props("slug,title,metadata,published_at")
        .depth(1);
      return data;
    } else {
      const { objects: data } = await cosmicConfig.objects
        .find({ type: "posts" })
        .props("slug,title,metadata,published_at")
        .depth(1);
      return data;
    }
  }, [params]);

  useEffect(() => {
    getArticles().then((articlesData) => {
      setArticles(articlesData);
    });
  }, [getArticles]);

  return (
    <Container maxW={"4xl"} mt={5}>
      <Button as={Link} href="/" colorScheme="red" size="sm" mb={4}>
        Go Home
      </Button>
      <Heading as="h1" size="xl" mb={4}>
        Articles by me. happy reading!{" "}
        {params.get("tag") && (
          <Tag size={"xl"} p={1}>
            #{params.get("tag")}
          </Tag>
        )}
      </Heading>
      <Suspense fallback={<div>Loading...</div>}>
        {articles ? <ArticleList articles={articles} /> : null}
      </Suspense>
    </Container>
  );
}
