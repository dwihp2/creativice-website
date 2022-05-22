import React from 'react'

import Tags from './tags'

const ContainerGrid = (props) => {
  return (
    <>
      <div className="container (grid)-container-grid">
        <div>
          <h1 className="container (grid)-text">
            <span>Zespri Red Kiwifruit</span>
            <span></span>
          </h1>
          <span className="container (grid)-text3">
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
                dignissim tortor. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum
                mi ut rhoncus. Integer in dignissim tortor.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </span>
          <div className="container (grid)-divider"></div>
          <div className="container (grid)-tags-container">
            <Tags></Tags>
            <Tags Text="PT Karya Makmur (example)" Title="Client"></Tags>
            <Tags Title="Year"></Tags>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container\ \(grid\)-container-grid {
            display: grid;
            grid-template-rows: auto;
            grid-template-columns: 1.5fr 1fr;
          }
          .container\ \(grid\)-text {
            font-size: 2rem;
            text-align: left;
            padding-bottom: 0.6ch;
          }
          .container\ \(grid\)-text3 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            max-width: 1400px;
            margin-top: 32px;
            text-align: left;
          }
          .container\ \(grid\)-divider {
            display: block;
            padding-top: 4ch;
            border-bottom: 0.17ch solid black;
          }
          .container\ \(grid\)-tags-container {
            display: grid;
            margin-top: 2ch;
            grid-template-columns: repeat(3, 1fr);
          }
          @media (max-width: 991px) {
            .container\ \(grid\)-container-grid {
              grid-template-columns: 1fr;
            }
            .container\ \(grid\)-text3 {
              max-width: 100%;
            }
          }
          @media (max-width: 479px) {
            .container\ \(grid\)-tags-container {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  )
}

export default ContainerGrid
