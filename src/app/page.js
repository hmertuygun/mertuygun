"use client";

import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ArticleList from "@/components/HomeBlog/ArticleList";
import cosmicConfig from "@/cosmic-config";
import { Suspense, useEffect, useState } from "react";
import SocialMediaButtons from "@/components/SocialMediaButtons";

export default function Home() {
  const [articles, setArticles] = useState(null);

  async function getArticles() {
    const { objects: data } = await cosmicConfig.objects
      .find({ type: "posts" })
      .props("slug,title,metadata,published_at")
      .depth(1);

    return data.slice(0, 2);
  }

  useEffect(() => {
    getArticles().then((articlesData) => {
      setArticles(articlesData);
    });
  }, [getArticles]);

  return (
    <div>
      <SocialMediaButtons />
      <Hero />
      <Projects />
      <Suspense fallback={<div>Loading...</div>}>
        {articles ? <ArticleList articles={articles} /> : null}
      </Suspense>
    </div>
  );
}
