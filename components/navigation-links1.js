import React from 'react'

import PropTypes from 'prop-types'

const NavigationLinks1 = (props) => {
  return (
    <>
      <nav className={`navigation-links1-nav ${props.rootClassName} `}>
        <span className="navigation-links1-text">{props.text}</span>
        <span className="navigation-links1-text1">{props.text1}</span>
        <span className="navigation-links1-text2">{props.text2}</span>
        <span className="navigation-links1-text3">{props.text3}</span>
        <span className="navigation-links1-text4">{props.text4}</span>
      </nav>
      <style jsx>
        {`
          .navigation-links1-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links1-text1 {
            margin-left: 32px;
          }
          .navigation-links1-text2 {
            margin-left: 32px;
          }
          .navigation-links1-text3 {
            margin-left: 32px;
          }
          .navigation-links1-text4 {
            margin-left: 32px;
          }

          @media (max-width: 767px) {
            .navigation-links1-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links1-text {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-text1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-text2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-text3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-text4 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks1.defaultProps = {
  text4: 'Blog',
  rootClassName: '',
  text2: 'Pricing',
  text3: 'Team',
  text1: 'Features',
  text: 'About',
}

NavigationLinks1.propTypes = {
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default NavigationLinks1
