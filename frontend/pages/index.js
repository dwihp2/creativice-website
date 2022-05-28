import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import FeatureCard from '../components/feature-card'
import GalleryCard3 from '../components/gallery-card3'
import OutlineBlackButton from '../components/outline-black-button'
import ListItem from '../components/list-item'
import GalleryCard33 from '../components/gallery-card33'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Creativice Mockup Website</title>
          <meta property="og:title" content="Creativice Mockup Website" />
        </Head>
        <Header></Header>
        <div className="home-hero">
          <div className="home-container01">
            <img
              alt="image"
              src="/playground_assets/02_nj_openview-1400w.gif"
              className="home-image"
            />
          </div>
        </div>
        <section className="home-features">
          <FeatureCard
            text="We help businesses designing their brand identity needs such as logo, name card, x-banner, catalog, website, etc"
            title="Branding"
            image_src="/playground_assets/design-process-3.svg"
            rootClassName="feature-card-root-class-name"
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
        <div className="home-brands">
          <div className="home-gallery">
            <h1 className="home-text">Our portfolio</h1>
            <span className="home-text01">
              <span>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non volutpat turpis.
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
                  Mauris luctus rutrum mi ut rhoncus. Integer in dignissim
                  tortor.
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
            <div className="home-container02">
              <GalleryCard3 rootClassName="gallery-card3-root-class-name"></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
                rootClassName="gallery-card3-root-class-name1"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
                rootClassName="gallery-card3-root-class-name3"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1531829039722-d3fb3e705a4b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
                rootClassName="gallery-card3-root-class-name2"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxtaW5pbWFsaXNtfGVufDB8fHx8MTYyNjQ0NTY1Nw&amp;ixlib=rb-1.2.1&amp;h=1000"
                rootClassName="gallery-card3-root-class-name4"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fG1pbmltYWxpc218ZW58MHx8fHwxNjI2NDQ1NjU3&amp;ixlib=rb-1.2.1&amp;h=1000"
                rootClassName="gallery-card3-root-class-name5"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1504198458649-3128b932f49e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
                rootClassName="gallery-card3-root-class-name6"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
                rootClassName="gallery-card3-root-class-name7"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
                rootClassName="gallery-card3-root-class-name8"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1510172951991-856a654063f9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
                rootClassName="gallery-card3-root-class-name9"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG1pbmltYWxpc218ZW58MHx8fHwxNjI2NDQ1NjU3&amp;ixlib=rb-1.2.1&amp;h=1000"
                rootClassName="gallery-card3-root-class-name10"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1472157510410-64a053cbc39f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
                rootClassName="gallery-card3-root-class-name11"
              ></GalleryCard3>
            </div>
          </div>
          <div className="home-brand-logo-container">
            <div className="home-text-container">
              <span className="home-text08">
                <span>
                  Trusted by 30,000 world-class brands and organizations of all
                  sizes
                </span>
                <span></span>
              </span>
              <span className="home-text11">
                <span>
                  Sprout customers are industry leaders who embrace social media
                  as a vital part of their overall business strategies—and the
                  key to making deeper connections with their audience.
                </span>
                <span></span>
              </span>
            </div>
            <div className="home-logo-container">
              <img
                alt="image"
                src="/playground_assets/credit%20card1.svg"
                className="home-image01"
              />
              <img
                alt="image"
                src="/playground_assets/credit%20card1.svg"
                className="home-image02"
              />
              <img
                alt="image"
                src="/playground_assets/credit%20card1.svg"
                className="home-image03"
              />
              <img
                alt="image"
                src="/playground_assets/credit%20card1.svg"
                className="home-image04"
              />
              <img
                alt="image"
                src="/playground_assets/credit%20card1.svg"
                className="home-image05"
              />
              <img
                alt="image"
                src="/playground_assets/curved6-200w.jpg"
                className="home-image06"
              />
              <img
                alt="image"
                src="/playground_assets/credit%20card1.svg"
                className="home-image07"
              />
              <img
                alt="image"
                src="/playground_assets/credit%20card1.svg"
                className="home-image08"
              />
              <img
                alt="image"
                src="/playground_assets/curved6-200w.jpg"
                className="home-image09"
              />
              <img
                alt="image"
                src="/playground_assets/credit%20card1.svg"
                className="home-image10"
              />
              <img
                alt="image"
                src="/playground_assets/credit%20card1.svg"
                className="home-image11"
              />
              <img
                alt="image"
                src="/playground_assets/credit%20card1.svg"
                className="home-image12"
              />
            </div>
          </div>
        </div>
        <section className="home-container03">
          <div className="home-container04">
            <h1 className="home-text14 headingOne">
              <span className="home-text15">From nothing to something</span>
            </h1>
            <span className="home-text16">
              <span className="home-text17">
                The highest status people in human history are those that asked
                for nothing and gave everything
              </span>
            </span>
          </div>
          <div className="home-container05">
            <div className="home-container06">
              <img
                alt="image"
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/laptop.jpg"
                className="home-image13"
              />
              <span className="home-text18 small">
                <span className="home-text19">
                  &quot;Over the span of the satellite record, Arctic sea ice
                  has been declining significantly, while sea ice in the
                  Antarctichas increased very slightly&quot;
                </span>
                <br></br>
                <span className="home-text21">-NOAA</span>
              </span>
              <div className="home-container07">
                <img
                  alt="image"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/coding.jpg"
                  className="home-image14"
                />
              </div>
            </div>
            <div className="home-container08">
              <img
                alt="image"
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/tasks.jpg"
                className="home-image15"
              />
              <div className="home-container09">
                <h3 className="headingTwo">
                  <span className="home-text23">
                    So what does the new record for the lowest level of winter
                    ice actually mean
                  </span>
                </h3>
                <p>
                  <br></br>
                  <span className="home-text25">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens with climate change. Even if the
                    Arctic continues to be one of the fastest-warming regions of
                    the world, it will always be plunged into bitterly cold
                    polar dark every winter. And year-by-year, for all kinds of
                    natural reasons, there’s huge variety of the state of the
                    ice.
                  </span>
                  <br></br>
                  <span></span>
                  <br></br>
                  <span className="home-text28">
                    For a start, it does not automatically follow that a record
                    amount of ice will melt this summer. More important for
                    determining the size of the annual thaw is the state of the
                    weather as the midnight sun approaches and temperatures
                    rise. But over the more than 30 years of satellite records,
                    scientists have observed a clear pattern of decline,
                    decade-by-decade.
                  </span>
                  <br></br>
                  <span></span>
                  <br></br>
                  <span className="home-text31">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens with climate change. Even if the
                    Arctic continues to be one of the fastest-warming regions of
                    the world, it will always be plunged into bitterly cold
                    polar dark every winter. And year-by-year, for all kinds of
                    natural reasons, there’s huge variety of the state of the
                    ice.
                  </span>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="home-testimonials">
          <div className="home-container10">
            <div className="home-container11">
              <div className="home-container12">
                <h2 className="home-text32 headingOne">Work with us</h2>
                <p className="home-text33 lead">
                  <span className="home-text34">
                    Whatever your qualification is - we got you!
                  </span>
                </p>
                <p className="home-text35 body">
                  <span className="home-text36">
                    &quot;Take up one idea. Make that one idea your life - think
                    of it, dream of it, live on that idea. Let the brain,
                    muscles, nerves, every part of your body, be full of that
                    idea, and just leave every other idea alone. This is the way
                    to success. A single rose can be my garden... a single
                    friend, my world.&quot;
                  </span>
                </p>
                <p className="home-text37">Mark Jojansen</p>
                <p className="home-text38 small">Project manager, Atlassian</p>
                <div className="home-container13">
                  <img
                    alt="image"
                    src="/playground_assets/team-4-200h.jpg"
                    className="home-image16"
                  />
                  <div className="home-container14"></div>
                  <img
                    alt="image"
                    src="/playground_assets/team-3-200h.jpg"
                    className="home-image17"
                  />
                  <div className="home-container15"></div>
                  <img
                    alt="image"
                    src="/playground_assets/team-2-200h.jpg"
                    className="home-image18"
                  />
                </div>
              </div>
            </div>
            <div className="home-logos">
              <div className="home-container16">
                <div className="home-container17">
                  <div className="home-container18">
                    <img
                      alt="image"
                      src="/playground_assets/logo-asana.svg"
                      className="home-image19"
                    />
                  </div>
                  <div className="home-container19">
                    <img
                      alt="image"
                      src="/playground_assets/logo-slack.svg"
                      className="home-image20"
                    />
                  </div>
                  <div className="home-container20">
                    <img
                      alt="image"
                      src="/playground_assets/logo-google-drive.svg"
                      className="home-image21"
                    />
                  </div>
                </div>
                <div className="home-container21">
                  <div className="home-container22">
                    <img
                      alt="image"
                      src="/playground_assets/logo-shopify.svg"
                      className="home-image22"
                    />
                  </div>
                  <div className="home-container23">
                    <img
                      alt="image"
                      src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-apple.svg"
                      className="home-image23"
                    />
                  </div>
                  <div className="home-container24">
                    <img
                      alt="image"
                      src="/playground_assets/logo-invision.svg"
                      className="home-image24"
                    />
                  </div>
                </div>
                <div className="home-container25">
                  <div className="home-container26">
                    <img
                      alt="image"
                      src="/playground_assets/logo-attlasian.svg"
                      className="home-image25"
                    />
                  </div>
                  <div className="home-container27">
                    <img
                      alt="image"
                      src="/playground_assets/logo-weave.svg"
                      className="home-image26"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            alt="image"
            src="/playground_assets/bottom.svg"
            className="home-bottom-wave-image"
          />
          <img
            alt="image"
            src="/playground_assets/waves-white.svg"
            className="home-image27"
          />
          <img
            alt="image"
            src="/playground_assets/top.svg"
            className="home-top-wave-image"
          />
        </section>
        <section className="home-contaier">
          <div className="home-container28">
            <div className="home-container29">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M363.722 722.052l41.298-57.816-45.254-45.256-57.818 41.296c-10.722-5.994-22.204-10.774-34.266-14.192l-11.682-70.084h-64l-11.68 70.086c-12.062 3.418-23.544 8.198-34.266 14.192l-57.818-41.298-45.256 45.256 41.298 57.816c-5.994 10.72-10.774 22.206-14.192 34.266l-70.086 11.682v64l70.086 11.682c3.418 12.060 8.198 23.544 14.192 34.266l-41.298 57.816 45.254 45.256 57.818-41.296c10.722 5.994 22.204 10.774 34.266 14.192l11.682 70.084h64l11.68-70.086c12.062-3.418 23.544-8.198 34.266-14.192l57.818 41.296 45.254-45.256-41.298-57.816c5.994-10.72 10.774-22.206 14.192-34.266l70.088-11.68v-64l-70.086-11.682c-3.418-12.060-8.198-23.544-14.192-34.266zM224 864c-35.348 0-64-28.654-64-64s28.652-64 64-64 64 28.654 64 64-28.652 64-64 64zM1024 384v-64l-67.382-12.25c-1.242-8.046-2.832-15.978-4.724-23.79l57.558-37.1-24.492-59.128-66.944 14.468c-4.214-6.91-8.726-13.62-13.492-20.13l39.006-56.342-45.256-45.254-56.342 39.006c-6.512-4.766-13.22-9.276-20.13-13.494l14.468-66.944-59.128-24.494-37.1 57.558c-7.812-1.892-15.744-3.482-23.79-4.724l-12.252-67.382h-64l-12.252 67.382c-8.046 1.242-15.976 2.832-23.79 4.724l-37.098-57.558-59.128 24.492 14.468 66.944c-6.91 4.216-13.62 8.728-20.13 13.494l-56.342-39.006-45.254 45.254 39.006 56.342c-4.766 6.51-9.278 13.22-13.494 20.13l-66.944-14.468-24.492 59.128 57.558 37.1c-1.892 7.812-3.482 15.742-4.724 23.79l-67.384 12.252v64l67.382 12.25c1.242 8.046 2.832 15.978 4.724 23.79l-57.558 37.1 24.492 59.128 66.944-14.468c4.216 6.91 8.728 13.618 13.494 20.13l-39.006 56.342 45.254 45.256 56.342-39.006c6.51 4.766 13.22 9.276 20.13 13.492l-14.468 66.944 59.128 24.492 37.102-57.558c7.81 1.892 15.742 3.482 23.788 4.724l12.252 67.384h64l12.252-67.382c8.044-1.242 15.976-2.832 23.79-4.724l37.1 57.558 59.128-24.492-14.468-66.944c6.91-4.216 13.62-8.726 20.13-13.492l56.342 39.006 45.256-45.256-39.006-56.342c4.766-6.512 9.276-13.22 13.492-20.13l66.944 14.468 24.492-59.13-57.558-37.1c1.892-7.812 3.482-15.742 4.724-23.79l67.382-12.25zM672 491.2c-76.878 0-139.2-62.322-139.2-139.2s62.32-139.2 139.2-139.2 139.2 62.322 139.2 139.2c0 76.878-62.32 139.2-139.2 139.2z"></path>
              </svg>
            </div>
            <h2 className="home-text39 headingTwo">
              <span className="home-text40">Beware The Components</span>
            </h2>
            <h3 className="home-text41 headingTwo">
              <span className="home-text42">How To Handle Them</span>
              <br></br>
            </h3>
            <span className="home-text43">
              <span className="home-text44">
                We’re constantly trying to express ourselves and actualize our
                dreams. Don&apos;t stop.
              </span>
            </span>
          </div>
          <div className="home-container30">
            <div className="home-container31">
              <div className="home-container32"></div>
              <div className="home-container33">
                <svg
                  viewBox="0 0 987.4285714285713 1024"
                  className="home-icon2"
                >
                  <path d="M438.857 508.571l312 312c-79.429 80.571-190.286 130.286-312 130.286-242.286 0-438.857-196.571-438.857-438.857s196.571-438.857 438.857-438.857v435.429zM545.714 512h441.714c0 121.714-49.714 232.571-130.286 312zM950.857 438.857h-438.857v-438.857c242.286 0 438.857 196.571 438.857 438.857z"></path>
                </svg>
                <h1 className="home-text45 headingOne">Search and Discover!</h1>
                <span className="home-text46">
                  <span>Website visitors</span>
                  <span></span>
                </span>
                <OutlineBlackButton button="get started"></OutlineBlackButton>
              </div>
            </div>
            <div className="home-container34">
              <ListItem></ListItem>
              <ListItem
                title="2. Performance Analyze"
                description="Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports."
              ></ListItem>
              <ListItem
                title="3. Social Conversions"
                description="Track actions taken on your website that originated from social, and understand the impact on your bottom line."
              ></ListItem>
            </div>
          </div>
          <div className="home-divider"></div>
          <div className="home-container35">
            <div className="home-container36">
              <ListItem
                title="1. Always in Sync"
                description="No matter where you are, Trello stays in sync across all of your devices."
              ></ListItem>
              <ListItem
                title="2. Work With Any Team"
                description="Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports."
              ></ListItem>
              <ListItem
                title="3. A Productivity Platform"
                description="Integrate the apps your team already uses directly into your workflow."
              ></ListItem>
            </div>
            <div className="home-container37">
              <div className="home-container38"></div>
              <div className="home-container39">
                <svg viewBox="0 0 1152 1024" className="home-icon4">
                  <path d="M1088 901.166c0 45.5 26.028 84.908 64 104.184v15.938c-10.626 1.454-21.472 2.224-32.5 2.224-68.008 0-129.348-28.528-172.722-74.264-26.222 6.982-54.002 10.752-82.778 10.752-159.058 0-288-114.616-288-256s128.942-256 288-256c159.058 0 288 114.616 288 256 0 55.348-19.764 106.592-53.356 148.466-6.824 14.824-10.644 31.312-10.644 48.7zM512 0c278.458 0 504.992 180.614 511.836 405.52-49.182-21.92-103.586-33.52-159.836-33.52-95.56 0-185.816 33.446-254.138 94.178-70.846 62.972-109.862 147.434-109.862 237.822 0 44.672 9.544 87.888 27.736 127.788-5.228 0.126-10.468 0.212-15.736 0.212-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z"></path>
                </svg>
                <h1 className="home-text49 headingOne">Talk and Meet!</h1>
                <span className="home-text50">
                  <span>Website visitors</span>
                  <span></span>
                </span>
                <OutlineBlackButton button="get started"></OutlineBlackButton>
              </div>
            </div>
          </div>
        </section>
        <div className="home-gallery1">
          <h1 className="home-text53">Our portfolio</h1>
          <span className="home-text54">
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
          <div className="home-container40">
            <GalleryCard33
              image_src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxtaW5pbWFsaXNtfGVufDB8fHx8MTYyNjQ0NTY1Nw&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="gallery-card33-root-class-name4"
            ></GalleryCard33>
            <GalleryCard33
              image_src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fG1pbmltYWxpc218ZW58MHx8fHwxNjI2NDQ1NjU3&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="gallery-card33-root-class-name5"
            ></GalleryCard33>
            <GalleryCard33
              image_src="https://images.unsplash.com/photo-1504198458649-3128b932f49e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="gallery-card33-root-class-name6"
            ></GalleryCard33>
            <GalleryCard33
              image_src="https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="gallery-card33-root-class-name7"
            ></GalleryCard33>
            <GalleryCard33
              image_src="https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="gallery-card33-root-class-name8"
            ></GalleryCard33>
            <GalleryCard33
              image_src="https://images.unsplash.com/photo-1510172951991-856a654063f9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="gallery-card33-root-class-name9"
            ></GalleryCard33>
            <GalleryCard33
              image_src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG1pbmltYWxpc218ZW58MHx8fHwxNjI2NDQ1NjU3&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="gallery-card33-root-class-name10"
            ></GalleryCard33>
            <GalleryCard33
              image_src="https://images.unsplash.com/photo-1472157510410-64a053cbc39f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="gallery-card33-root-class-name11"
            ></GalleryCard33>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-hero {
            width: 100%;
            height: auto;
            display: flex;
            max-width: 1400px;
            align-items: center;
            padding-top: var(--dl-space-space-triplequarterunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
          }
          .home-container01 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-triplequarterunit);
          }
          .home-image {
            width: 100%;
            object-fit: cover;
          }
          .home-features {
            width: 100%;
            display: grid;
            padding: var(--dl-space-space-fourunits);
            grid-gap: 2rem;
            max-width: 1320px;
            justify-content: space-between;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .home-brands {
            width: 100%;
            display: none;
            padding: 48px;
            max-width: 1400px;
            flex-direction: column;
          }
          .home-gallery {
            width: 100%;
            display: flex;
            max-width: 1400px;
            align-items: center;
            padding-top: 32px;
            padding-left: 48px;
            padding-right: 48px;
            flex-direction: column;
            padding-bottom: 32px;
          }
          .home-text {
            font-size: 3rem;
            text-align: center;
          }
          .home-text01 {
            color: var(--dl-color-gray-700);
            margin-top: 32px;
            text-align: center;
            padding-left: 48px;
            margin-bottom: 32px;
            padding-right: 48px;
          }
          .home-container02 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-unit);
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .home-brand-logo-container {
            display: grid;
            align-items: flex-start;
            grid-template-columns: 1fr 1fr;
          }
          .home-text-container {
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text08 {
            font-size: 2rem;
            font-style: normal;
            font-family: Merriweather;
            font-weight: 700;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-text11 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Merriweather;
            font-weight: 300;
          }
          .home-logo-container {
            width: 100%;
            display: grid;
            grid-gap: 1rem;
            justify-items: center;
            grid-template-columns: repeat(3, minmax(0, 300px));
          }
          .home-image01 {
            width: 100px;
            object-fit: cover;
          }
          .home-image02 {
            width: 100px;
            object-fit: cover;
          }
          .home-image03 {
            width: 100px;
            object-fit: cover;
          }
          .home-image04 {
            width: 100px;
            object-fit: cover;
          }
          .home-image05 {
            width: 100px;
            object-fit: cover;
          }
          .home-image06 {
            width: 100px;
            object-fit: cover;
          }
          .home-image07 {
            width: 100px;
            object-fit: cover;
          }
          .home-image08 {
            width: 100px;
            object-fit: cover;
          }
          .home-image09 {
            width: 100px;
            object-fit: cover;
          }
          .home-image10 {
            width: 100px;
            object-fit: cover;
          }
          .home-image11 {
            width: 100px;
            object-fit: cover;
          }
          .home-image12 {
            width: 100px;
            object-fit: cover;
          }
          .home-container03 {
            flex: 0 0 auto;
            width: 100%;
            display: none;
            max-width: 1320px;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .home-container04 {
            display: flex;
            align-items: center;
            margin-left: auto;
            margin-right: auto;
            flex-direction: column;
          }
          .home-text14 {
            margin-bottom: var(--dl-space-space-halfunit);
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .home-text15 {
            color: rgb(203, 12, 159);
            white-space: normal;
            text-decoration: none;
          }
          .home-text16 {
            max-width: 600px;
            text-align: center;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text17 {
            color: rgb(103, 116, 142);
            display: inline;
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .home-container05 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unitandahalfunit);
            margin-right: var(--dl-space-space-unitandahalfunit);
            flex-direction: row;
          }
          .home-container06 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image13 {
            width: 100%;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            object-fit: cover;
            margin-left: 3rem;
            margin-right: -3rem;
            border-radius: var(--dl-radius-radius-radius75);
          }
          .home-text18 {
            flex: 0 0 auto;
            width: 40%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: flex-end;
            margin-top: var(--dl-space-space-unitandahalfunit);
            align-items: flex-start;
            border-color: #cb0c9f;
            border-style: solid;
            border-width: 1px;
            border-radius: 0.25rem;
            margin-bottom: 8rem;
            flex-direction: column;
          }
          .home-text19 {
            color: rgb(203, 12, 159);
            display: inline;
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .home-text21 {
            color: rgb(203, 12, 159);
            font-weight: 400;
            background-color: rgb(255, 255, 255);
          }
          .home-container07 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image14 {
            top: 0px;
            left: auto;
            width: 90%;
            bottom: auto;
            display: block;
            position: absolute;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: -1.5rem;
            object-fit: cover;
            margin-left: 2rem;
            border-radius: var(--dl-radius-radius-radius75);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-container08 {
            flex: 0 0 auto;
            width: 40%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-left: var(--dl-space-space-triplequarterunit);
            padding-right: var(--dl-space-space-triplequarterunit);
            flex-direction: column;
          }
          .home-image15 {
            width: 100%;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: 8rem;
            object-fit: cover;
            margin-left: -1.5rem;
            border-radius: var(--dl-radius-radius-radius75);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-container09 {
            width: 90%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text23 {
            color: rgb(37, 47, 64);
            font-weight: 700;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .home-text25 {
            color: rgb(103, 116, 142);
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .home-text28 {
            color: rgb(103, 116, 142);
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .home-text31 {
            color: rgb(103, 116, 142);
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .home-testimonials {
            flex: 0 0 auto;
            width: 100%;
            display: none;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
          }
          .home-container10 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            z-index: 1;
            max-width: 1320px;
            align-items: flex-start;
            padding-top: 15rem;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: 15rem;
            justify-content: space-between;
          }
          .home-container11 {
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .home-container12 {
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            margin-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .home-text32 {
            color: var(--dl-color-gray-white);
          }
          .home-text33 {
            color: var(--dl-color-gray-white);
            opacity: 0.8;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .home-text34 {
            display: inline;
            font-weight: 400;
            white-space: normal;
          }
          .home-text35 {
            color: var(--dl-color-gray-white);
            opacity: 0.8;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .home-text36 {
            display: inline;
            font-weight: 600;
            white-space: normal;
          }
          .home-text37 {
            color: var(--dl-color-gray-white);
          }
          .home-text38 {
            color: var(--dl-color-gray-white);
            opacity: 0.8;
          }
          .home-container13 {
            flex: 0 0 auto;
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image16 {
            width: 40px;
            opacity: 0.5;
            object-fit: cover;
            transition: 0.3;
            border-radius: var(--dl-radius-radius-radius75);
          }
          .home-image16:hover {
            transform: scale(1.2);
          }
          .home-container14 {
            flex: 0 0 auto;
            width: 1px;
            height: 25px;
            display: flex;
            opacity: 0.8;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .home-image17 {
            width: 40px;
            opacity: 0.5;
            object-fit: cover;
            transition: 0.3;
            border-radius: var(--dl-radius-radius-radius75);
          }
          .home-image17:hover {
            transform: scale(1.2);
          }
          .home-container15 {
            flex: 0 0 auto;
            width: 1px;
            height: 25px;
            display: flex;
            opacity: 0.8;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .home-image18 {
            width: 40px;
            object-fit: cover;
            transition: 0.3;
            border-radius: var(--dl-radius-radius-radius75);
          }
          .home-image18:hover {
            transform: scale(1.2);
          }
          .home-logos {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container16 {
            flex: 0 0 auto;
            display: flex;
            min-width: 400px;
            align-items: flex-start;
            padding-left: var(--dl-space-space-triplequarterunit);
            flex-direction: column;
          }
          .home-container17 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container18 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            align-self: flex-end;
            object-fit: cover;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image19 {
            width: 100%;
          }
          .home-container19 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image20 {
            width: 100%;
          }
          .home-container20 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            align-self: flex-end;
            object-fit: cover;
            margin-right: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image21 {
            width: 100%;
          }
          .home-container21 {
            flex: 0 0 auto;
            width: 100%;
            height: 70px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container22 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image22 {
            width: 100%;
            object-fit: cover;
          }
          .home-container23 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            align-self: center;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image23 {
            width: 100%;
          }
          .home-container24 {
            width: 58px;
            padding: var(--dl-space-space-unit);
            align-self: flex-end;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image24 {
            width: 100%;
          }
          .home-container25 {
            flex: 0 0 auto;
            width: 50%;
            height: 70px;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container26 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image25 {
            width: 100%;
          }
          .home-container27 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            align-self: flex-end;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image26 {
            width: 100%;
            object-fit: cover;
          }
          .home-bottom-wave-image {
            top: auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: -5px;
            position: absolute;
            object-fit: cover;
          }
          .home-image27 {
            top: auto;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .home-top-wave-image {
            top: -5px;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-contaier {
            flex: 0 0 auto;
            width: 100%;
            display: none;
            max-width: 1320px;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .home-container28 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container29 {
            flex: 0 0 auto;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius75);
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
          }
          .home-icon {
            fill: var(--dl-color-gray-800);
            width: 24px;
            height: 24px;
          }
          .home-text39 {
            margin-top: var(--dl-space-space-unitandahalfunit);
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .home-text40 {
            color: rgb(203, 12, 159);
            white-space: normal;
            text-decoration: none;
          }
          .home-text41 {
            color: var(--dl-color-secondary-600);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text42 {
            font-weight: 700;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .home-text44 {
            color: rgb(103, 116, 142);
            display: inline;
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .home-container30 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-container31 {
            display: flex;
            position: relative;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sixunits);
            border-radius: var(--dl-radius-radius-radius1);
            padding-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-size: cover;
            justify-content: center;
            background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/team-working.jpg');
            background-position: center;
          }
          .home-container31:hover {
            transform: scale(1.04);
          }
          .home-container32 {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            background: rgba(0, 0, 0, 0.4);
            border-radius: var(--dl-radius-radius-radius1);
          }
          .home-container33 {
            display: flex;
            z-index: 1;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-icon2 {
            fill: var(--dl-color-gray-900);
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text45 {
            color: var(--dl-color-gray-white);
            max-width: 200px;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text46 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-container34 {
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-divider {
            flex: 0 0 auto;
            width: 90%;
            height: 1px;
            display: flex;
            opacity: 0.25;
            margin-top: 4rem;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius75);
            margin-bottom: 4rem;
            flex-direction: column;
            background-color: var(--dl-color-gray-700);
          }
          .home-container35 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-container36 {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-container37 {
            display: flex;
            position: relative;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sixunits);
            border-radius: var(--dl-radius-radius-radius1);
            padding-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-size: cover;
            justify-content: center;
            background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/coffee-shop.jpg');
            background-position: center;
          }
          .home-container37:hover {
            transform: scale(1.04);
          }
          .home-container38 {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            background: rgba(0, 0, 0, 0.4);
            border-radius: var(--dl-radius-radius-radius1);
          }
          .home-container39 {
            display: flex;
            z-index: 1;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-icon4 {
            fill: var(--dl-color-gray-900);
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text49 {
            color: var(--dl-color-gray-white);
            max-width: 200px;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text50 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-gallery1 {
            width: 100%;
            display: flex;
            max-width: 1400px;
            align-items: center;
            padding-top: 32px;
            padding-left: 48px;
            padding-right: 48px;
            flex-direction: column;
            padding-bottom: 32px;
          }
          .home-text53 {
            font-size: 3rem;
            text-align: center;
          }
          .home-text54 {
            color: var(--dl-color-gray-700);
            margin-top: 32px;
            text-align: center;
            padding-left: 48px;
            margin-bottom: 32px;
            padding-right: 48px;
          }
          .home-container40 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-unit);
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          @media (max-width: 991px) {
            .home-hero {
              flex-direction: column;
            }
            .home-features {
              max-width: 960px;
              grid-template-columns: 1fr;
            }
            .home-text01 {
              text-align: center;
            }
            .home-container02 {
              grid-template-columns: 1fr 1fr 1fr;
            }
            .home-logo-container {
              grid-template-columns: 1fr 1fr;
            }
            .home-container03 {
              max-width: 960px;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-container04 {
              max-width: 80%;
            }
            .home-text16 {
              text-align: center;
            }
            .home-text18 {
              width: 50%;
            }
            .home-container10 {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
              justify-content: center;
            }
            .home-container11 {
              align-items: center;
            }
            .home-container12 {
              margin-right: 0px;
            }
            .home-logos {
              display: none;
            }
            .home-contaier {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-container34 {
              width: 45%;
              margin-left: var(--dl-space-space-unit);
            }
            .home-container36 {
              width: 45%;
              margin-right: var(--dl-space-space-unit);
            }
            .home-text54 {
              text-align: center;
            }
            .home-container40 {
              grid-template-columns: 1fr 1fr 1fr;
            }
          }
          @media (max-width: 767px) {
            .home-hero {
              padding-left: 32px;
              padding-right: 32px;
            }
            .home-image {
              width: 100%;
              height: auto;
            }
            .home-features {
              width: 100%;
              justify-items: center;
              grid-template-columns: 1fr;
            }
            .home-brands {
              padding-left: 32px;
              padding-right: 32px;
            }
            .home-gallery {
              padding-left: 32px;
              padding-right: 32px;
            }
            .home-text01 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container02 {
              grid-template-columns: 1fr 1fr;
            }
            .home-container03 {
              max-width: 720px;
            }
            .home-container05 {
              align-items: center;
              flex-direction: column;
            }
            .home-container06 {
              width: 80%;
            }
            .home-image13 {
              margin-left: 0px;
              margin-right: 0px;
            }
            .home-text18 {
              width: 70%;
              align-self: center;
              margin-top: var(--dl-space-space-tripleunit);
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-image14 {
              display: none;
            }
            .home-container08 {
              width: 80%;
            }
            .home-image15 {
              display: none;
            }
            .home-container10 {
              padding-top: 12rem;
              padding-bottom: 12rem;
            }
            .home-container28 {
              width: 80%;
            }
            .home-text43 {
              text-align: center;
            }
            .home-container30 {
              flex-direction: column;
            }
            .home-container34 {
              width: 80%;
              margin-top: var(--dl-space-space-fourunits);
              align-items: center;
              margin-left: 0px;
            }
            .home-divider {
              margin-top: var(--dl-space-space-doubleunit);
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .home-container35 {
              margin-top: 0px;
              flex-direction: column;
            }
            .home-container36 {
              width: 80%;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .home-gallery1 {
              padding-left: 32px;
              padding-right: 32px;
            }
            .home-text54 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container40 {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 479px) {
            .home-hero {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .home-image {
              width: 100%;
              object-fit: scale-down;
            }
            .home-features {
              width: 100%;
              justify-items: center;
              grid-template-columns: 1fr;
            }
            .home-brands {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .home-gallery {
              padding: var(--dl-space-space-unit);
            }
            .home-container02 {
              grid-template-columns: 1fr;
            }
            .home-logo-container {
              grid-gap: var(--dl-space-space-halfunit);
            }
            .home-container10 {
              padding-top: var(--dl-space-space-sixunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-text43 {
              text-align: center;
            }
            .home-gallery1 {
              padding: var(--dl-space-space-unit);
            }
            .home-container40 {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
