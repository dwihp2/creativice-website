import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import GalleryCard36 from '../components/gallery-card36'
import Footer from '../components/footer'

const Works = (props) => {
  return (
    <>
      <div className="works-container">
        <Head>
          <title>Works - Creativice Mockup Website</title>
          <meta
            property="og:title"
            content="Works - Creativice Mockup Website"
          />
        </Head>
        <Header></Header>
        <div className="works-gallery">
          <h1 className="works-text">Our portfolio</h1>
          <span className="works-text1">
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <br></br>
            <span>
              <span>
                Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </span>
          <div className="works-container1">
            <GalleryCard36 rootClassName="gallery-card36-root-class-name"></GalleryCard36>
            <GalleryCard36
              image_src="https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="gallery-card36-root-class-name1"
            ></GalleryCard36>
            <GalleryCard36
              image_src="https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="gallery-card36-root-class-name3"
            ></GalleryCard36>
            <GalleryCard36
              image_src="https://images.unsplash.com/photo-1531829039722-d3fb3e705a4b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="gallery-card36-root-class-name2"
            ></GalleryCard36>
            <GalleryCard36
              image_src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxtaW5pbWFsaXNtfGVufDB8fHx8MTYyNjQ0NTY1Nw&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="gallery-card36-root-class-name4"
            ></GalleryCard36>
            <GalleryCard36
              image_src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fG1pbmltYWxpc218ZW58MHx8fHwxNjI2NDQ1NjU3&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="gallery-card36-root-class-name5"
            ></GalleryCard36>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .works-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .works-gallery {
            width: 100%;
            display: flex;
            max-width: 1400px;
            align-items: center;
            padding-top: 8ch;
            padding-left: 48px;
            padding-right: 48px;
            flex-direction: column;
            padding-bottom: 32px;
          }
          .works-text {
            font-size: 5ch;
            text-align: center;
            padding-top: 0.5ch;
            padding-bottom: 1ch;
          }
          .works-text1 {
            color: var(--dl-color-gray-700);
            display: none;
            margin-top: 32px;
            text-align: center;
            padding-left: 48px;
            margin-bottom: 32px;
            padding-right: 48px;
          }
          .works-container1 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-unit);
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          @media (max-width: 991px) {
            .works-text1 {
              text-align: center;
            }
            .works-container1 {
              grid-template-columns: 1fr 1fr 1fr;
            }
          }
          @media (max-width: 767px) {
            .works-gallery {
              padding-left: 32px;
              padding-right: 32px;
            }
            .works-text1 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .works-container1 {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 479px) {
            .works-gallery {
              padding: var(--dl-space-space-unit);
              padding-top: 8ch;
            }
            .works-container1 {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  )
}

export default Works
