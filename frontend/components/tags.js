import React from 'react'

import PropTypes from 'prop-types'

const Tags = (props) => {
  return (
    <>
      <div className="tags-tags">
        <h1 className="tags-text">{props.Title}</h1>
        <span className="tags-text1">{props.Text}</span>
      </div>
      <style jsx>
        {`
          .tags-tags {
            padding-top: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .tags-text {
            font-size: 1rem;
            text-align: left;
          }
          .tags-text1 {
            color: var(--dl-color-gray-black);
            font-size: 0.8rem;
            text-align: left;
          }
          @media (max-width: 991px) {
            .tags-text1 {
              max-width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Tags.defaultProps = {
  Text: 'Web Development (example)',
  Title: 'Title',
}

Tags.propTypes = {
  Text: PropTypes.string,
  Title: PropTypes.string,
}

export default Tags
