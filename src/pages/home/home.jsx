import React from "react";
import BlogPostCard from "../../organism/blogpostcard/blogPostCard";
import BlogPostResult from "../../organism/blogpostresult/blogPostResult";
import { PageContainer } from "./home.styles";

function Home() {
  return (
    <>
      <PageContainer>
        <BlogPostCard />
        <BlogPostResult />;
      </PageContainer>
    </>
  );
}

export default Home;
