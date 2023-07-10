"use client";

import { useCallback, useEffect, useState } from "react";
import ArticleList from "@/components/HomeBlog/ArticleList";
import { Button, Container, Heading, Tag } from "@chakra-ui/react";
import Link from "next/link";
import cosmicConfig from "@/cosmic-config";
import { useSearchParams } from "next/navigation";
import Head from "next/head"; // Import Head from next.js

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

  const tag = params.get("tag");

  return (
    <Container maxW={"4xl"} mt={5}>
      <Head>
        <title>Articles {tag ? `on ${tag}` : ""} - Mert Uygun</title>
        <meta
          name="description"
          content={`A list of articles written by me ${
            tag ? `on ${tag}` : ""
          }.`}
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content={`Articles ${tag ? `on ${tag}` : ""} - Mert Uygun`}
        />
        <meta
          property="og:description"
          content={`A list of articles written by me ${
            tag ? `on ${tag}` : ""
          }.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mertuygun.com/articles" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Articles ${tag ? `on ${tag}` : ""} - Mert Uygun`}
        />
        <meta
          name="twitter:description"
          content={`A list of articles written by me ${
            tag ? `on ${tag}` : ""
          }.`}
        />
      </Head>
      <Link href={"/"}>
        <Button colorScheme={"red"} mb={4}>
          Back
        </Button>
      </Link>
      <Heading as="h1" size="xl" mb={4}>
        Articles by me. happy reading!{" "}
        {tag && (
          <Tag size={"xl"} p={1}>
            #{tag}
          </Tag>
        )}
      </Heading>
      {articles ? <ArticleList articles={articles} /> : <div>Loading...</div>}
    </Container>
  );
}
