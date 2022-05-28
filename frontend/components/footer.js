import React from 'react'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <footer className={`footer-footer ${props.rootClassName} `}>
        <div className="footer-container">
          <div className="footer-container1">
            <div className="footer-social-media-container-flex">
              <a
                href="https://www.instagram.com/creativice.id/"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="footer-icon"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/creativice.id"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link1"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="footer-icon2"
                >
                  <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                </svg>
              </a>
              <a
                href="https://mailto:hi.creativice@gmail.com?Subject=Hello%20world!"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link2"
              >
                <svg viewBox="0 0 1024 1024" className="footer-icon4">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
              </a>
            </div>
            <span className="footer-text">
              Ansley View Tahap 2 Blok F No 22 A, Belian, Kec. Batam Kota, Kota
              Batam, Kepulauan Riau 29464
            </span>
            <div className="footer-copyright-container">
              <span className="footer-text1">
                © 2022 by
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <a
                href="https://creativice.digital"
                target="_blank"
                rel="noreferrer noopener"
              >
                {props.text}
              </a>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/waves-white.svg"
          className="footer-image"
        />
      </footer>
      <style jsx>
        {`
          .footer-footer {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-image: linear-gradient(
              225deg,
              rgb(255, 202, 17) 0%,
              rgba(206, 200, 30, 0.8) 23%,
              rgba(96, 180, 82, 0.8) 55%,
              rgba(0, 110, 121, 0.8) 86%
            );
          }
          .footer-container {
            color: var(--dl-color-gray-white);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            z-index: 1;
            max-width: 1320px;
            justify-content: space-between;
          }
          .footer-container1 {
            width: 40%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-social-media-container-flex {
            width: 100%;
            height: auto;
            display: flex;
            justify-content: space-around;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .footer-link {
            display: contents;
          }
          .footer-icon {
            fill: var(--dl-color-gray-white);
            width: 3rem;
            height: 3rem;
            display: flex;
            text-decoration: none;
          }
          .footer-link1 {
            display: contents;
          }
          .footer-icon2 {
            fill: white;
            width: 3rem;
            height: 3rem;
            text-decoration: none;
          }
          .footer-link2 {
            display: contents;
          }
          .footer-icon4 {
            fill: white;
            width: 3rem;
            height: 3rem;
            text-decoration: none;
          }
          .footer-text {
            text-align: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .footer-copyright-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .footer-text1 {
            padding-right: 0.3rem;
          }
          .footer-image {
            top: 0px;
            left: auto;
            right: 0px;
            width: 100%;
            height: 100%;
            opacity: 0.7;
            position: absolute;
            object-fit: cover;
          }

          @media (max-width: 991px) {
            .footer-container {
              padding: var(--dl-space-space-doubleunit);
            }
            .footer-container1 {
              margin-right: var(--dl-space-space-halfunit);
            }
          }
          @media (max-width: 767px) {
            .footer-container {
              flex-direction: column;
            }
            .footer-container1 {
              width: 100%;
              align-self: center;
              align-items: center;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .footer-text {
              width: auto;
              align-self: center;
              text-align: center;
            }
            .footer-text1 {
              width: auto;
              align-self: center;
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .footer-container1 {
              width: 100%;
              align-self: center;
            }
            .footer-social-media-container-flex {
              justify-content: space-evenly;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  text: 'Creativice Digital',
  link_text: 'https://example.com',
  rootClassName: '',
}

Footer.propTypes = {
  text: PropTypes.string,
  link_text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Footer
