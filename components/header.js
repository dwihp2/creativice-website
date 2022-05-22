import React from 'react'
import Link from 'next/link'

const Header = (props) => {
  return (
    <>
      <div className="header-header">
        <nav className="header-nav">
          <div className="header-container">
            <div className="header-logo-company-name">
              <svg viewBox="0 0 1024 1024" className="header-icon">
                <path d="M928 0h-832c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM746.6 760.8c-177.6 0-239.2-80-272-179.6l-32.8-102.6c-24.6-75-53.4-133.4-143.6-133.4-62.6 0-126.2 45.2-126.2 171.4 0 98.6 50.2 160.2 121.2 160.2 80 0 133.4-59.6 133.4-59.6l32.8 89.2c0 0-55.4 54.4-171.4 54.4-144 0-224-84-224-240 0-162.2 80-257.6 231-257.6 136.6 0 205.2 49.2 248.4 182.6l33.8 102.6c24.6 75 67.8 129.4 171.4 129.4 69.8 0 106.8-15.4 106.8-53.4 0-29.8-17.4-51.4-69.8-63.6l-69.8-16.4c-85.2-20.6-119-64.6-119-134.4 0-111.8 90.4-146.8 182.6-146.8 104.6 0 168.4 38 176.6 130.4l-102.6 12.4c-4.2-44.2-30.8-62.6-80-62.6-45.2 0-72.8 20.6-72.8 55.4 0 30.8 13.4 49.2 58.4 59.6l65.6 14.4c88.2 20.6 135.4 63.6 135.4 146.8 0 102.2-86.2 141.2-213.4 141.2z"></path>
              </svg>
              <Link href="/">
                <a className="header-link large">
                  Logo /
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </a>
              </Link>
            </div>
            <div className="header-menu">
              <Link href="/">
                <a className="header-link1">Home</a>
              </Link>
              <Link href="/works">
                <a className="header-link2">WORKS</a>
              </Link>
              <Link href="/services">
                <a className="header-link3">SERVICES</a>
              </Link>
              <Link href="/blog">
                <a className="header-link4">BLOG</a>
              </Link>
              <Link href="/about">
                <a className="header-link5">ABOUT</a>
              </Link>
            </div>
            <svg viewBox="0 0 1024 1024" className="header-hamburger">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </nav>
      </div>
      <style jsx>
        {`
          .header-header {
            top: 0px;
            left: auto;
            right: auto;
            width: 100%;
            bottom: auto;
            display: flex;
            z-index: 3;
            position: fixed;
            max-width: 1320px;
            justify-content: center;
          }
          .header-nav {
            flex: 0 0 auto;
            color: var(--dl-color-secondary-600);
            width: 100%;
            height: 60px;
            display: flex;
            flex-wrap: wrap;
            box-shadow: 0 0.25rem 0.375rem -0.0625rem hsla(0, 0%, 8%, 0.12),
              0 0.125rem 0.25rem -0.0625rem hsla(0, 0%, 8%, 0.07) !important;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unitandahalfunit);
            border-radius: 0;
            padding-right: var(--dl-space-space-unitandahalfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            backdrop-filter: saturate(200%) blur(30px);
            justify-content: space-between;
            background-color: hsla(0, 0%, 100%, 0.8) !important;
          }
          .header-container {
            color: var(--dl-color-gray-black);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-logo-company-name {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .header-icon {
            width: 24px;
            height: 24px;
          }
          .header-link {
            color: var(--dl-color-secondary-700);
            font-weight: 600;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .header-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .header-link1 {
            font-size: 0.875rem;
            font-style: normal;
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            font-family: Montserrat;
            font-weight: 800;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            letter-spacing: -0.025rem;
            text-transform: uppercase;
            text-decoration: none;
          }
          .header-link1:hover {
            color: #f7bb1d;
          }
          .header-link2 {
            font-size: 0.875rem;
            font-style: normal;
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            font-family: Montserrat;
            font-weight: 800;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            letter-spacing: -0.025rem;
            text-transform: uppercase;
            text-decoration: none;
          }
          .header-link2:hover {
            color: #f7bb1d;
          }
          .header-link3 {
            font-size: 0.875rem;
            font-style: normal;
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            font-family: Montserrat;
            font-weight: 800;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            letter-spacing: -0.025rem;
            text-transform: uppercase;
            text-decoration: none;
          }
          .header-link3:hover {
            color: #f7bb1d;
          }
          .header-link4 {
            font-size: 0.875rem;
            font-style: normal;
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            font-family: Montserrat;
            font-weight: 800;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            letter-spacing: -0.025rem;
            text-transform: uppercase;
            text-decoration: none;
          }
          .header-link4:hover {
            color: #f7bb1d;
          }
          .header-link5 {
            font-size: 0.875rem;
            font-style: normal;
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            font-family: Montserrat;
            font-weight: 800;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            letter-spacing: -0.025rem;
            text-transform: uppercase;
            text-decoration: none;
          }
          .header-link5:hover {
            color: #f7bb1d;
          }
          .header-hamburger {
            width: 24px;
            height: 24px;
            display: none;
            margin-left: var(--dl-space-space-unit);
          }
          @media (max-width: 991px) {
            .header-header {
              align-items: center;
              flex-direction: column;
            }
            .header-nav {
              width: 99%;
              max-width: 100%;
            }
            .header-menu {
              display: none;
            }
            .header-hamburger {
              display: flex;
            }
          }
        `}
      </style>
    </>
  )
}

export default Header
