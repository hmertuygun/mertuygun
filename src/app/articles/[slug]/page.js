"use client";
import React, { Suspense, useEffect, useState } from "react";
import cosmicConfig from "@/cosmic-config";
import Loading from "@/app/articles/[slug]/loading";
import ArticleContent from "@/components/ArticleContent";

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
    console.log(data);
    return data;
  }

  useEffect(() => {
    if (!params?.slug) return;
    getArticle(params?.slug).then((articlesData) => {
      setArticle(articlesData);
    });
  }, [params]);

  return (
    <Suspense fallback={<Loading />}>
      {article ? <ArticleContent article={article} /> : null}
    </Suspense>
  );
}
