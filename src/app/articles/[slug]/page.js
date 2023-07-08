"use client";

import React, { Suspense, useEffect, useState } from "react";
import cosmicConfig from "@/cosmic-config";
import Loading from "@/app/articles/[slug]/loading";
import ArticleContent from "@/components/ArticleContent";
import Head from "next/head";

export default function Article({ params }) {
  const [article, setArticle] = useState(null);

  async function getArticle(slug) {
    const { object: data } = await cosmicConfig.objects
      .findOne({
        type: "posts",
        slug,
      })
      .props("slug,title,metadata")
      .depth(1);
    return data;
  }

  useEffect(() => {
    if (!params?.slug) return;
    getArticle(params?.slug).then((articlesData) => {
      setArticle(articlesData);
    });
  }, [params]);

  return (
    <>
      {article && (
        <Head>
          <title>{article.title} - Mert Uygun</title>
          <meta
            name="description"
            content={article.metadata.description || ""}
          />
          <meta name="robots" content="index, follow" />
          <meta
            property="og:url"
            content={`https://mertuygun.com/articles/${article.slug}`}
          />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={article.title} />
          <meta
            property="og:description"
            content={article.metadata.description || ""}
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={article.title} />
          <meta
            name="twitter:description"
            content={article.metadata.description || ""}
          />
        </Head>
      )}
      <Suspense fallback={<Loading />}>
        {article ? <ArticleContent article={article} /> : null}
      </Suspense>
    </>
  );
}
