import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import BlogPostCard3 from '../components/blog-post-card3'

const Blog = (props) => {
  return (
    <>
      <div className="blog-container">
        <Head>
          <title>Blog - Creativice Mockup Website</title>
          <meta
            property="og:title"
            content="Blog - Creativice Mockup Website"
          />
        </Head>
        <Header></Header>
        <div className="blog-blog">
          <div className="blog-container1">
            <BlogPostCard3 rootClassName="blog-post-card3-root-class-name1"></BlogPostCard3>
          </div>
          <div className="blog-container2">
            <BlogPostCard3
              image_src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fHdvcmt8ZW58MHx8fHwxNjI2NDUwNzky&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="blog-post-card3-root-class-name2"
            ></BlogPostCard3>
          </div>
          <BlogPostCard3
            image_src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHx3b3JrJTIwb2ZmaWNlfGVufDB8fHx8MTYyNjQ1MDgzMQ&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="blog-post-card3-root-class-name"
          ></BlogPostCard3>
        </div>
      </div>
      <style jsx>
        {`
          .blog-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .blog-blog {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            max-width: 1400px;
            overflow-y: auto;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: space-between;
            scroll-behavior: auto;
          }
          .blog-container1 {
            display: flex;
            align-items: center;
            margin-bottom: 32px;
            flex-direction: column;
            justify-content: space-between;
          }
          .blog-container2 {
            display: flex;
            align-items: center;
            margin-bottom: 32px;
            flex-direction: column;
            justify-content: space-between;
          }
          @media (max-width: 767px) {
            .blog-blog {
              padding-left: 32px;
              padding-right: 32px;
            }
          }
          @media (max-width: 479px) {
            .blog-blog {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Blog
