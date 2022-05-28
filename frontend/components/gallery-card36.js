import React from 'react'

import PropTypes from 'prop-types'

const GalleryCard36 = (props) => {
  return (
    <>
      <div className={`gallery-card36-gallery-card ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="gallery-card36-image"
        />
        <div className="gallery-card36-container">
          <h1 className="gallery-card36-text">{props.title}</h1>
          <span className="gallery-card36-text1">{props.subtitle}</span>
        </div>
      </div>
      <style jsx>
        {`
          .gallery-card36-gallery-card {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .gallery-card36-image {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .gallery-card36-container {
            width: 100%;
            height: 300px;
            display: flex;
            opacity: 0;
            padding: 32px;
            z-index: 1;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.2) 0%,
              rgba(0, 0, 0, 0.9)
            );
          }
          .gallery-card36-container:hover {
            opacity: 1;
          }
          .gallery-card36-text {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: 24px;
          }
          .gallery-card36-text1 {
            color: var(--dl-color-gray-white);
            text-align: center;
          }

          @media (max-width: 479px) {
            .gallery-card36-text {
              align-self: center;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

GalleryCard36.defaultProps = {
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjY0NDg1NTk&ixlib=rb-1.2.1&h=1000',
  title: 'Project Title',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  rootClassName: '',
}

GalleryCard36.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default GalleryCard36
