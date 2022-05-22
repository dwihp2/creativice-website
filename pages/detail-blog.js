import React from 'react'
import Head from 'next/head'

import Header from '../components/header'

const DetailBlog = (props) => {
  return (
    <>
      <div className="detail-blog-container">
        <Head>
          <title>Detail Blog - Creativice Mockup Website</title>
          <meta
            property="og:title"
            content="Detail Blog - Creativice Mockup Website"
          />
        </Head>
        <Header></Header>
        <div className="detail-blog-main-container"></div>
      </div>
      <style jsx>
        {`
          .detail-blog-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .detail-blog-main-container {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            max-width: 1400px;
            overflow-y: auto;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            flex-direction: row;
            scroll-behavior: auto;
          }
          @media (max-width: 767px) {
            .detail-blog-main-container {
              padding-left: 32px;
              padding-right: 32px;
            }
          }
          @media (max-width: 479px) {
            .detail-blog-main-container {
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

export default DetailBlog
