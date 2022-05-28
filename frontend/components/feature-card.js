import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard = (props) => {
  return (
    <>
      <div className={`feature-card-container ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="feature-card-image"
        />
        <h5 className="feature-card-text headingThree">{props.title}</h5>
        <span className="feature-card-text1">{props.text}</span>
      </div>
      <style jsx>
        {`
          .feature-card-container {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            margin-top: var(--dl-space-space-triplequarterunit);
            align-items: center;
            border-color: rgba(128, 128, 128, 0.62);
            border-style: solid;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius5);
            flex-direction: column;
            border-top-left-radius: var(--dl-radius-radius-radius75);
          }
          .feature-card-image {
            width: 100%;
            margin-bottom: var(--dl-space-space-unitandahalfunit);
          }
          .feature-card-text {
            color: var(--dl-color-secondary-600);
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .feature-card-text1 {
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }

          @media (max-width: 767px) {
            .feature-card-container {
              width: 50%;
            }
          }
          @media (max-width: 479px) {
            .feature-card-container {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard.defaultProps = {
  image_src: '',
  image_alt: 'image',
  rootClassName: '',
  text: 'Get the latest design ideas and turn it into reality.',
  title: 'Design',
}

FeatureCard.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard
