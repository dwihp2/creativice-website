import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import FeatureCard from '../components/feature-card'

const Services = (props) => {
  return (
    <>
      <div className="services-container">
        <Head>
          <title>Services - Creativice Mockup Website</title>
          <meta
            property="og:title"
            content="Services - Creativice Mockup Website"
          />
        </Head>
        <Header></Header>
        <div className="services-main-container">
          <h1 className="services-text">OUR SERVICES</h1>
          <section className="services-features">
            <FeatureCard
              text="We help businesses designing their brand identity needs such as logo, name card, x-banner, catalog, website, etc"
              title="Branding"
              image_src="/playground_assets/design-process-3.svg"
              rootClassName="feature-card-root-class-name1"
            ></FeatureCard>
            <FeatureCard
              text="We offer service to plan and design content for your social media account, with caption and hashtag research"
              title="Content Marketing"
              image_src="/playground_assets/mobile-marketing-3.svg"
            ></FeatureCard>
            <FeatureCard
              text="We provide service for setting up advertisement on various advertisement platform such as Facebook, Instagram, and Google"
              title="Social Media Ads"
              image_src="/playground_assets/mobile-marketing-1.svg"
            ></FeatureCard>
          </section>
          <section className="services-features1">
            <FeatureCard
              text="We help businesses designing their brand identity needs such as logo, name card, x-banner, catalog, website, etc"
              title="Branding"
              image_src="/playground_assets/design-process-3.svg"
              rootClassName="feature-card-root-class-name2"
            ></FeatureCard>
            <FeatureCard
              text="We offer service to plan and design content for your social media account, with caption and hashtag research"
              title="Content Marketing"
              image_src="/playground_assets/mobile-marketing-3.svg"
            ></FeatureCard>
            <FeatureCard
              text="We provide service for setting up advertisement on various advertisement platform such as Facebook, Instagram, and Google"
              title="Social Media Ads"
              image_src="/playground_assets/mobile-marketing-1.svg"
            ></FeatureCard>
          </section>
        </div>
      </div>
      <style jsx>
        {`
          .services-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .services-main-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-fourunits);
            align-items: center;
            flex-direction: column;
          }
          .services-text {
            padding-top: var(--dl-space-space-doubleunit);
          }
          .services-features {
            width: 100%;
            display: grid;
            padding: var(--dl-space-space-fourunits);
            grid-gap: 2rem;
            max-width: 1320px;
            justify-content: space-between;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .services-features1 {
            width: 100%;
            display: grid;
            padding: var(--dl-space-space-fourunits);
            grid-gap: 2rem;
            max-width: 1320px;
            justify-content: space-between;
            grid-template-columns: 1fr 1fr 1fr;
          }
          @media (max-width: 991px) {
            .services-features {
              max-width: 960px;
              grid-template-columns: 1fr;
            }
            .services-features1 {
              max-width: 960px;
              grid-template-columns: 1fr;
            }
          }
          @media (max-width: 767px) {
            .services-features {
              width: 100%;
              justify-items: center;
              grid-template-columns: 1fr;
            }
            .services-features1 {
              width: 100%;
              justify-items: center;
              grid-template-columns: 1fr;
            }
          }
          @media (max-width: 479px) {
            .services-features {
              width: 100%;
              justify-items: center;
              grid-template-columns: 1fr;
            }
            .services-features1 {
              width: 100%;
              justify-items: center;
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  )
}

export default Services
