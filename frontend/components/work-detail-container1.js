import React from 'react'

import PropTypes from 'prop-types'

const WorkDetailContainer1 = (props) => {
  return (
    <>
      <div className="work detail container1-work-detail-container">
        <div className="work detail container1-container-grid">
          <div>
            <h1 className="work detail container1-text">
              <span>Zespri Red Kiwifruit</span>
              <span></span>
            </h1>
            <span className="work detail container1-text03">
              <span>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.
                  Integer in dignissim tortor. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed non volutpat turpis. Mauris
                  luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
            <div className="work detail container1-divider"></div>
            <div className="work detail container1-tags-container">
              <div className="work detail container1-tags">
                <h1 className="work detail container1-text06">{props.Title}</h1>
                <span className="work detail container1-text07">
                  {props.Text}
                </span>
              </div>
              <div className="work detail container1-tags1">
                <h1 className="work detail container1-text08">
                  {props.Title2}
                </h1>
                <span className="work detail container1-text09">
                  {props.Text2}
                </span>
              </div>
              <div className="work detail container1-tags2">
                <h1 className="work detail container1-text10">
                  {props.Title1}
                </h1>
                <span className="work detail container1-text11">
                  {props.Text1}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .work\ detail\ container1-work-detail-container {
            width: 100%;
            display: grid;
            padding: 48px;
            margin-top: 5ch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .work\ detail\ container1-container-grid {
            display: grid;
            grid-template-rows: auto;
            grid-template-columns: 1.5fr 1fr;
          }
          .work\ detail\ container1-text {
            font-size: 2rem;
            text-align: left;
            padding-bottom: 0.6ch;
          }
          .work\ detail\ container1-text03 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            max-width: 1400px;
            margin-top: 32px;
            text-align: left;
          }
          .work\ detail\ container1-divider {
            display: block;
            padding-top: 4ch;
            border-bottom: 0.17ch solid black;
          }
          .work\ detail\ container1-tags-container {
            display: grid;
            margin-top: 2ch;
            grid-template-columns: repeat(3, 1fr);
          }
          .work\ detail\ container1-tags {
            padding-top: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .work\ detail\ container1-text06 {
            font-size: 1rem;
            text-align: left;
          }
          .work\ detail\ container1-text07 {
            color: var(--dl-color-gray-black);
            font-size: 0.8rem;
            text-align: left;
          }
          .work\ detail\ container1-tags1 {
            padding-top: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .work\ detail\ container1-text08 {
            font-size: 1rem;
            text-align: left;
          }
          .work\ detail\ container1-text09 {
            color: var(--dl-color-gray-black);
            font-size: 0.8rem;
            text-align: left;
          }
          .work\ detail\ container1-tags2 {
            padding-top: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .work\ detail\ container1-text10 {
            font-size: 1rem;
            text-align: left;
          }
          .work\ detail\ container1-text11 {
            color: var(--dl-color-gray-black);
            font-size: 0.8rem;
            text-align: left;
          }
          @media (max-width: 991px) {
            .work\ detail\ container1-container-grid {
              grid-template-columns: 1fr;
            }
            .work\ detail\ container1-text03 {
              max-width: 100%;
            }
            .work\ detail\ container1-text07 {
              max-width: 100%;
            }
            .work\ detail\ container1-text09 {
              max-width: 100%;
            }
            .work\ detail\ container1-text11 {
              max-width: 100%;
            }
          }
          @media (max-width: 767px) {
            .work\ detail\ container1-work-detail-container {
              padding-left: 32px;
              padding-right: 32px;
            }
          }
          @media (max-width: 479px) {
            .work\ detail\ container1-work-detail-container {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .work\ detail\ container1-tags-container {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  )
}

WorkDetailContainer1.defaultProps = {
  Title2: 'Title',
  Text: 'Web Development (example)',
  Title1: 'Title',
  Text1: 'Web Development (example)',
  Title: 'Title',
  Text2: 'Web Development (example)',
}

WorkDetailContainer1.propTypes = {
  Title2: PropTypes.string,
  Text: PropTypes.string,
  Title1: PropTypes.string,
  Text1: PropTypes.string,
  Title: PropTypes.string,
  Text2: PropTypes.string,
}

export default WorkDetailContainer1
