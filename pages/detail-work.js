import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import GalleryCard36 from '../components/gallery-card36'
import Footer from '../components/footer'

const DetailWork = (props) => {
  return (
    <>
      <div className="detail-work-container">
        <Head>
          <title>Detail Work - Creativice Mockup Website</title>
          <meta
            property="og:title"
            content="Detail Work - Creativice Mockup Website"
          />
        </Head>
        <Header></Header>
        <div className="detail-work-work-detail-container">
          <div className="detail-work-container-grid">
            <div>
              <h1 className="detail-work-text">
                <span>Zespri Red Kiwifruit</span>
                <span></span>
              </h1>
              <span className="detail-work-text03">
                <span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.
                    Integer in dignissim tortor. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sed non volutpat turpis. Mauris
                    luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <div className="detail-work-divider"></div>
              <div className="detail-work-tags-container">
                <div className="detail-work-tags">
                  <h1 className="detail-work-text06">Title</h1>
                  <span className="detail-work-text07">
                    Web Development (example)
                  </span>
                </div>
                <div className="detail-work-tags1">
                  <h1 className="detail-work-text08">Title</h1>
                  <span className="detail-work-text09">
                    Web Development (example)
                  </span>
                </div>
                <div className="detail-work-tags2">
                  <h1 className="detail-work-text10">Title</h1>
                  <span className="detail-work-text11">
                    Web Development (example)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="detail-work-website-project-content-container">
          <div className="detail-work-image-video-container">
            <video
              src
              poster="https://play.teleporthq.io/static/svg/videoposter.svg"
              className="detail-work-video"
            ></video>
          </div>
          <div className="detail-work-details-container1"></div>
        </div>
        <div className="detail-work-more-projects">
          <div className="detail-work-container1">
            <GalleryCard36 rootClassName="gallery-card36-root-class-name11"></GalleryCard36>
          </div>
          <div className="detail-work-container2">
            <GalleryCard36 rootClassName="gallery-card36-root-class-name10"></GalleryCard36>
          </div>
          <div className="detail-work-container3">
            <GalleryCard36 rootClassName="gallery-card36-root-class-name9"></GalleryCard36>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
      <style jsx>
        {`
          .detail-work-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .detail-work-work-detail-container {
            width: 100%;
            display: grid;
            padding: 48px;
            margin-top: 5ch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .detail-work-container-grid {
            display: grid;
            grid-template-rows: auto;
            grid-template-columns: 1.5fr 1fr;
          }
          .detail-work-text {
            font-size: 2rem;
            text-align: left;
            padding-bottom: 0.6ch;
          }
          .detail-work-text03 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            max-width: 1400px;
            margin-top: 32px;
            text-align: left;
          }
          .detail-work-divider {
            display: block;
            padding-top: 4ch;
            border-bottom: 0.17ch solid black;
          }
          .detail-work-tags-container {
            display: grid;
            margin-top: 2ch;
            grid-template-columns: repeat(3, 1fr);
          }
          .detail-work-tags {
            padding-top: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .detail-work-text06 {
            font-size: 1rem;
            text-align: left;
          }
          .detail-work-text07 {
            color: var(--dl-color-gray-black);
            font-size: 0.8rem;
            text-align: left;
          }
          .detail-work-tags1 {
            padding-top: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .detail-work-text08 {
            font-size: 1rem;
            text-align: left;
          }
          .detail-work-text09 {
            color: var(--dl-color-gray-black);
            font-size: 0.8rem;
            text-align: left;
          }
          .detail-work-tags2 {
            padding-top: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .detail-work-text10 {
            font-size: 1rem;
            text-align: left;
          }
          .detail-work-text11 {
            color: var(--dl-color-gray-black);
            font-size: 0.8rem;
            text-align: left;
          }
          .detail-work-website-project-content-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: 48px;
            align-items: flex-start;
            flex-direction: column;
          }
          .detail-work-image-video-container {
            width: calc(100% - var(--padding) * 2);
            margin: 0 auto;
            display: flex;
          }
          .detail-work-video {
            width: 320px;
            height: 180px;
          }
          .detail-work-details-container1 {
            width: 100%;
            height: auto;
            display: flex;
            margin-top: 3ch;
          }
          .detail-work-more-projects {
            width: 100%;
            display: flex;
            padding: 48px;
            overflow: hidden;
            max-width: 1400px;
            box-shadow: 7px 7px 10px 3px #d4d4d4;
            align-items: center;
            justify-content: space-between;
          }
          .detail-work-container1 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-unitandahalfunit);
            justify-content: space-between;
          }
          .detail-work-container2 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-unitandahalfunit);
            justify-content: space-between;
          }
          .detail-work-container3 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-unitandahalfunit);
            justify-content: space-between;
          }
          @media (max-width: 991px) {
            .detail-work-container-grid {
              grid-template-columns: 1fr;
            }
            .detail-work-text03 {
              max-width: 100%;
            }
            .detail-work-text07 {
              max-width: 100%;
            }
            .detail-work-text09 {
              max-width: 100%;
            }
            .detail-work-text11 {
              max-width: 100%;
            }
            .detail-work-more-projects {
              flex-direction: row;
            }
            .detail-work-container1 {
              margin-right: 0px;
              margin-bottom: 48px;
            }
            .detail-work-container2 {
              margin-right: 0px;
              margin-bottom: 48px;
            }
            .detail-work-container3 {
              margin-right: 0px;
              margin-bottom: 48px;
            }
          }
          @media (max-width: 767px) {
            .detail-work-work-detail-container {
              padding-left: 32px;
              padding-right: 32px;
            }
            .detail-work-more-projects {
              padding-left: 32px;
              padding-right: 32px;
            }
          }
          @media (max-width: 479px) {
            .detail-work-work-detail-container {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .detail-work-tags-container {
              grid-template-columns: 1fr;
            }
            .detail-work-more-projects {
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

export default DetailWork
