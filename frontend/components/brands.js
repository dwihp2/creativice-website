import React from 'react'

import PropTypes from 'prop-types'

const Brands = (props) => {
  return (
    <>
      <div className="brands-brands">
        <div className="brands-brand-logo-container">
          <div className="brands-text-container">
            <span className="brands-text">
              <span>
                Trusted by 30,000 world-class brands and organizations of all
                sizes
              </span>
              <span></span>
            </span>
            <span className="brands-text3">
              <span>
                Sprout customers are industry leaders who embrace social media
                as a vital part of their overall business strategies—and the key
                to making deeper connections with their audience.
              </span>
              <span></span>
            </span>
          </div>
          <div className="brands-logo-container">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="brands-image"
            />
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className="brands-image01"
            />
            <img
              alt={props.image_alt2}
              src={props.image_src2}
              className="brands-image02"
            />
            <img
              alt={props.image_alt3}
              src={props.image_src3}
              className="brands-image03"
            />
            <img
              alt={props.image_alt4}
              src={props.image_src4}
              className="brands-image04"
            />
            <img
              alt={props.image_alt5}
              src={props.image_src5}
              className="brands-image05"
            />
            <img
              alt={props.image_alt6}
              src={props.image_src6}
              className="brands-image06"
            />
            <img
              alt={props.image_alt7}
              src={props.image_src7}
              className="brands-image07"
            />
            <img
              alt={props.image_alt8}
              src={props.image_src8}
              className="brands-image08"
            />
            <img
              alt={props.image_alt9}
              src={props.image_src9}
              className="brands-image09"
            />
            <img
              alt={props.image_alt10}
              src={props.image_src10}
              className="brands-image10"
            />
            <img
              alt={props.image_alt11}
              src={props.image_src11}
              className="brands-image11"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .brands-brands {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            flex-direction: column;
          }
          .brands-brand-logo-container {
            display: grid;
            align-items: flex-start;
            grid-template-columns: 1fr 1fr;
          }
          .brands-text-container {
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .brands-text {
            font-size: 2rem;
            font-style: normal;
            font-family: Merriweather;
            font-weight: 700;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .brands-text3 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: Merriweather;
            font-weight: 300;
          }
          .brands-logo-container {
            width: 100%;
            display: grid;
            grid-gap: 1rem;
            justify-items: center;
            grid-template-columns: repeat(3, minmax(0, 300px));
          }
          .brands-image {
            width: 100px;
            object-fit: cover;
          }
          .brands-image01 {
            width: 100px;
            object-fit: cover;
          }
          .brands-image02 {
            width: 100px;
            object-fit: cover;
          }
          .brands-image03 {
            width: 100px;
            object-fit: cover;
          }
          .brands-image04 {
            width: 100px;
            object-fit: cover;
          }
          .brands-image05 {
            width: 100px;
            object-fit: cover;
          }
          .brands-image06 {
            width: 100px;
            object-fit: cover;
          }
          .brands-image07 {
            width: 100px;
            object-fit: cover;
          }
          .brands-image08 {
            width: 100px;
            object-fit: cover;
          }
          .brands-image09 {
            width: 100px;
            object-fit: cover;
          }
          .brands-image10 {
            width: 100px;
            object-fit: cover;
          }
          .brands-image11 {
            width: 100px;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .brands-logo-container {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 767px) {
            .brands-brands {
              padding-left: 32px;
              padding-right: 32px;
            }
          }
          @media (max-width: 479px) {
            .brands-brands {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .brands-logo-container {
              grid-gap: var(--dl-space-space-halfunit);
            }
          }
        `}
      </style>
    </>
  )
}

Brands.defaultProps = {
  image_alt7: 'image',
  image_src4: '/playground_assets/credit%20card1.svg',
  image_alt: 'image',
  image_alt9: 'image',
  image_alt4: 'image',
  image_src3: '/playground_assets/credit%20card1.svg',
  image_src8: '/playground_assets/curved6-200w.jpg',
  image_src9: '/playground_assets/credit%20card1.svg',
  image_src11: '/playground_assets/credit%20card1.svg',
  image_alt5: 'image',
  image_alt1: 'image',
  image_src2: '/playground_assets/credit%20card1.svg',
  image_src6: '/playground_assets/credit%20card1.svg',
  image_alt10: 'image',
  image_alt11: 'image',
  image_alt8: 'image',
  image_src: '/playground_assets/credit%20card1.svg',
  image_src5: '/playground_assets/curved6-200w.jpg',
  image_src10: '/playground_assets/credit%20card1.svg',
  image_alt6: 'image',
  image_alt2: 'image',
  image_src7: '/playground_assets/credit%20card1.svg',
  image_alt3: 'image',
  image_src1: '/playground_assets/credit%20card1.svg',
}

Brands.propTypes = {
  image_alt7: PropTypes.string,
  image_src4: PropTypes.string,
  image_alt: PropTypes.string,
  image_alt9: PropTypes.string,
  image_alt4: PropTypes.string,
  image_src3: PropTypes.string,
  image_src8: PropTypes.string,
  image_src9: PropTypes.string,
  image_src11: PropTypes.string,
  image_alt5: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src2: PropTypes.string,
  image_src6: PropTypes.string,
  image_alt10: PropTypes.string,
  image_alt11: PropTypes.string,
  image_alt8: PropTypes.string,
  image_src: PropTypes.string,
  image_src5: PropTypes.string,
  image_src10: PropTypes.string,
  image_alt6: PropTypes.string,
  image_alt2: PropTypes.string,
  image_src7: PropTypes.string,
  image_alt3: PropTypes.string,
  image_src1: PropTypes.string,
}

export default Brands
