import React from 'react'

import Tags from './tags'

const WorkDetailContainer = (props) => {
  return (
    <>
      <div className="work detail container-work-detail-container">
        <div className="work detail container-container-grid">
          <div>
            <h1 className="work detail container-text">
              <span>Zespri Red Kiwifruit</span>
              <span></span>
            </h1>
            <span className="work detail container-text3">
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
            <div className="work detail container-divider"></div>
            <div className="work detail container-tags-container">
              <Tags></Tags>
              <Tags Text="PT Karya Makmur (example)" Title="Client"></Tags>
              <Tags Title="Year"></Tags>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .work\ detail\ container-work-detail-container {
            width: 100%;
            display: grid;
            padding: 48px;
            margin-top: 5ch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .work\ detail\ container-container-grid {
            display: grid;
            grid-template-rows: auto;
            grid-template-columns: 1.5fr 1fr;
          }
          .work\ detail\ container-text {
            font-size: 2rem;
            text-align: left;
            padding-bottom: 0.6ch;
          }
          .work\ detail\ container-text3 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            max-width: 1400px;
            margin-top: 32px;
            text-align: left;
          }
          .work\ detail\ container-divider {
            display: block;
            padding-top: 4ch;
            border-bottom: 0.17ch solid black;
          }
          .work\ detail\ container-tags-container {
            display: grid;
            margin-top: 2ch;
            grid-template-columns: repeat(3, 1fr);
          }
          @media (max-width: 991px) {
            .work\ detail\ container-container-grid {
              grid-template-columns: 1fr;
            }
            .work\ detail\ container-text3 {
              max-width: 100%;
            }
          }
          @media (max-width: 767px) {
            .work\ detail\ container-work-detail-container {
              padding-left: 32px;
              padding-right: 32px;
            }
          }
          @media (max-width: 479px) {
            .work\ detail\ container-work-detail-container {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .work\ detail\ container-tags-container {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  )
}

export default WorkDetailContainer
