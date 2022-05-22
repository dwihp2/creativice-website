import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const About = (props) => {
  return (
    <>
      <div className="about-container">
        <Head>
          <title>About - Creativice Mockup Website</title>
          <meta
            property="og:title"
            content="About - Creativice Mockup Website"
          />
        </Head>
        <Header></Header>
        <div className="about-main-container">
          <div className="about-who-we-are">
            <h1 className="about-heading">WHO WE ARE</h1>
            <span className="about-text">
              <span>
                Heilo is an integrated creative agency that creates tailored
                strategies and experiences that well suits your brand. From
                branding, content strategy, communications, events, integrated
                marketing campaigns to graphic design. We have a team of gifted
                and passionate individuals who are great at their crafts; who
                would love to work with you to create the impossible. Heilo is
                always evolving, always challenging and always seeking to
                champion campaigns with you in excellence.
              </span>
              <br></br>
              <span></span>
            </span>
          </div>
          <div className="about-team">
            <div className="about-container1">
              <h1>MEET THE TEAM</h1>
            </div>
            <div className="about-team-grid-1">
              <div className="about-testimonial-card">
                <div className="about-testimonial">
                  <span className="about-text04">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    lorem lorem, malesuada in metus vitae, scelerisque accumsan
                    ipsum. Nam pellentesque nulla leo, sagittis vehicula sem
                    commodo nec.
                  </span>
                  <span className="about-text05">Jane Doe</span>
                  <span className="about-text06">SOFTWARE ENGINEER</span>
                  <img
                    alt="profile"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;w=200"
                    className="about-image"
                  />
                </div>
              </div>
              <div className="about-testimonial-card1">
                <div className="about-testimonial1">
                  <span className="about-text07">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    lorem lorem, malesuada in metus vitae, scelerisque accumsan
                    ipsum. Nam pellentesque nulla leo, sagittis vehicula sem
                    commodo nec.
                  </span>
                  <span className="about-text08">Jane Doe</span>
                  <span className="about-text09">SOFTWARE ENGINEER</span>
                  <img
                    alt="profile"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;w=200"
                    className="about-image1"
                  />
                </div>
              </div>
            </div>
            <div className="about-team-grid-2">
              <div className="about-testimonial-card2">
                <div className="about-testimonial2">
                  <span className="about-text10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    lorem lorem, malesuada in metus vitae, scelerisque accumsan
                    ipsum. Nam pellentesque nulla leo, sagittis vehicula sem
                    commodo nec.
                  </span>
                  <span className="about-text11">Jane Doe</span>
                  <span className="about-text12">SOFTWARE ENGINEER</span>
                  <img
                    alt="profile"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;w=200"
                    className="about-image2"
                  />
                </div>
              </div>
              <div className="about-testimonial-card3">
                <div className="about-testimonial3">
                  <span className="about-text13">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    lorem lorem, malesuada in metus vitae, scelerisque accumsan
                    ipsum. Nam pellentesque nulla leo, sagittis vehicula sem
                    commodo nec.
                  </span>
                  <span className="about-text14">Jane Doe</span>
                  <span className="about-text15">SOFTWARE ENGINEER</span>
                  <img
                    alt="profile"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;w=200"
                    className="about-image3"
                  />
                </div>
              </div>
              <div className="about-testimonial-card4">
                <div className="about-testimonial4">
                  <span className="about-text16">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    lorem lorem, malesuada in metus vitae, scelerisque accumsan
                    ipsum. Nam pellentesque nulla leo, sagittis vehicula sem
                    commodo nec.
                  </span>
                  <span className="about-text17">Jane Doe</span>
                  <span className="about-text18">SOFTWARE ENGINEER</span>
                  <img
                    alt="profile"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;w=200"
                    className="about-image4"
                  />
                </div>
              </div>
            </div>
            <div className="about-team-grid-3">
              <div className="about-testimonial-card5">
                <div className="about-testimonial5">
                  <span className="about-text19">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    lorem lorem, malesuada in metus vitae, scelerisque accumsan
                    ipsum. Nam pellentesque nulla leo, sagittis vehicula sem
                    commodo nec.
                  </span>
                  <span className="about-text20">Jane Doe</span>
                  <span className="about-text21">SOFTWARE ENGINEER</span>
                  <img
                    alt="profile"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;w=200"
                    className="about-image5"
                  />
                </div>
              </div>
              <div className="about-testimonial-card6">
                <div className="about-testimonial6">
                  <span className="about-text22">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    lorem lorem, malesuada in metus vitae, scelerisque accumsan
                    ipsum. Nam pellentesque nulla leo, sagittis vehicula sem
                    commodo nec.
                  </span>
                  <span className="about-text23">Jane Doe</span>
                  <span className="about-text24">SOFTWARE ENGINEER</span>
                  <img
                    alt="profile"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;w=200"
                    className="about-image6"
                  />
                </div>
              </div>
              <div className="about-testimonial-card7">
                <div className="about-testimonial7">
                  <span className="about-text25">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    lorem lorem, malesuada in metus vitae, scelerisque accumsan
                    ipsum. Nam pellentesque nulla leo, sagittis vehicula sem
                    commodo nec.
                  </span>
                  <span className="about-text26">Jane Doe</span>
                  <span className="about-text27">SOFTWARE ENGINEER</span>
                  <img
                    alt="profile"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;w=200"
                    className="about-image7"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .about-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .about-main-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-who-we-are {
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            margin-top: var(--dl-space-space-fourunits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .about-heading {
            text-align: left;
          }
          .about-text {
            font-size: 2rem;
            font-family: Montserrat;
          }
          .about-team {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            align-items: flex-start;
            flex-direction: column;
          }
          .about-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .about-team-grid-1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: grid;
            align-items: flex-start;
            grid-template-columns: 1fr 1fr;
          }
          .about-testimonial-card {
            width: 100%;
            display: flex;
            padding: 32px;
            max-width: 1400px;
            background: #fff;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .about-testimonial {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .about-text04 {
            color: var(--dl-color-gray-500);
            text-align: center;
            margin-bottom: 48px;
          }
          .about-text05 {
            font-size: 1.5rem;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .about-text06 {
            color: var(--dl-color-gray-500);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
          }
          .about-image {
            width: 96px;
            height: 96px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .about-testimonial-card1 {
            width: 100%;
            display: flex;
            padding: 32px;
            max-width: 1400px;
            background: #fff;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .about-testimonial1 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .about-text07 {
            color: var(--dl-color-gray-500);
            text-align: center;
            margin-bottom: 48px;
          }
          .about-text08 {
            font-size: 1.5rem;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .about-text09 {
            color: var(--dl-color-gray-500);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
          }
          .about-image1 {
            width: 96px;
            height: 96px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .about-team-grid-2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: grid;
            align-items: flex-start;
            grid-template-columns: repeat(3, 1fr);
          }
          .about-testimonial-card2 {
            width: 100%;
            display: flex;
            padding: 32px;
            max-width: 1400px;
            background: #fff;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .about-testimonial2 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .about-text10 {
            color: var(--dl-color-gray-500);
            text-align: center;
            margin-bottom: 48px;
          }
          .about-text11 {
            font-size: 1.5rem;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .about-text12 {
            color: var(--dl-color-gray-500);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
          }
          .about-image2 {
            width: 96px;
            height: 96px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .about-testimonial-card3 {
            width: 100%;
            display: flex;
            padding: 32px;
            max-width: 1400px;
            background: #fff;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .about-testimonial3 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .about-text13 {
            color: var(--dl-color-gray-500);
            text-align: center;
            margin-bottom: 48px;
          }
          .about-text14 {
            font-size: 1.5rem;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .about-text15 {
            color: var(--dl-color-gray-500);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
          }
          .about-image3 {
            width: 96px;
            height: 96px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .about-testimonial-card4 {
            width: 100%;
            display: flex;
            padding: 32px;
            max-width: 1400px;
            background: #fff;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .about-testimonial4 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .about-text16 {
            color: var(--dl-color-gray-500);
            text-align: center;
            margin-bottom: 48px;
          }
          .about-text17 {
            font-size: 1.5rem;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .about-text18 {
            color: var(--dl-color-gray-500);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
          }
          .about-image4 {
            width: 96px;
            height: 96px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .about-team-grid-3 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: grid;
            align-items: flex-start;
            grid-template-columns: repeat(3, 1fr);
          }
          .about-testimonial-card5 {
            width: 100%;
            display: flex;
            padding: 32px;
            max-width: 1400px;
            background: #fff;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .about-testimonial5 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .about-text19 {
            color: var(--dl-color-gray-500);
            text-align: center;
            margin-bottom: 48px;
          }
          .about-text20 {
            font-size: 1.5rem;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .about-text21 {
            color: var(--dl-color-gray-500);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
          }
          .about-image5 {
            width: 96px;
            height: 96px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .about-testimonial-card6 {
            width: 100%;
            display: flex;
            padding: 32px;
            max-width: 1400px;
            background: #fff;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .about-testimonial6 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .about-text22 {
            color: var(--dl-color-gray-500);
            text-align: center;
            margin-bottom: 48px;
          }
          .about-text23 {
            font-size: 1.5rem;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .about-text24 {
            color: var(--dl-color-gray-500);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
          }
          .about-image6 {
            width: 96px;
            height: 96px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .about-testimonial-card7 {
            width: 100%;
            display: flex;
            padding: 32px;
            max-width: 1400px;
            background: #fff;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .about-testimonial7 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .about-text25 {
            color: var(--dl-color-gray-500);
            text-align: center;
            margin-bottom: 48px;
          }
          .about-text26 {
            font-size: 1.5rem;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .about-text27 {
            color: var(--dl-color-gray-500);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
          }
          .about-image7 {
            width: 96px;
            height: 96px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          @media (max-width: 991px) {
            .about-text06 {
              align-self: center;
            }
            .about-text09 {
              align-self: center;
            }
            .about-text12 {
              align-self: center;
            }
            .about-text15 {
              align-self: center;
            }
            .about-text18 {
              align-self: center;
            }
            .about-text21 {
              align-self: center;
            }
            .about-text24 {
              align-self: center;
            }
            .about-text27 {
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .about-testimonial-card {
              padding-left: 32px;
              padding-right: 32px;
            }
            .about-testimonial-card1 {
              padding-left: 32px;
              padding-right: 32px;
            }
            .about-testimonial-card2 {
              padding-left: 32px;
              padding-right: 32px;
            }
            .about-testimonial-card3 {
              padding-left: 32px;
              padding-right: 32px;
            }
            .about-testimonial-card4 {
              padding-left: 32px;
              padding-right: 32px;
            }
            .about-testimonial-card5 {
              padding-left: 32px;
              padding-right: 32px;
            }
            .about-testimonial-card6 {
              padding-left: 32px;
              padding-right: 32px;
            }
            .about-testimonial-card7 {
              padding-left: 32px;
              padding-right: 32px;
            }
          }
          @media (max-width: 479px) {
            .about-testimonial-card {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .about-text04 {
              margin-bottom: 32px;
            }
            .about-text05 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .about-text06 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .about-testimonial-card1 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .about-text07 {
              margin-bottom: 32px;
            }
            .about-text08 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .about-text09 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .about-testimonial-card2 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .about-text10 {
              margin-bottom: 32px;
            }
            .about-text11 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .about-text12 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .about-testimonial-card3 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .about-text13 {
              margin-bottom: 32px;
            }
            .about-text14 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .about-text15 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .about-testimonial-card4 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .about-text16 {
              margin-bottom: 32px;
            }
            .about-text17 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .about-text18 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .about-testimonial-card5 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .about-text19 {
              margin-bottom: 32px;
            }
            .about-text20 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .about-text21 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .about-testimonial-card6 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .about-text22 {
              margin-bottom: 32px;
            }
            .about-text23 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .about-text24 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .about-testimonial-card7 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .about-text25 {
              margin-bottom: 32px;
            }
            .about-text26 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .about-text27 {
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default About
