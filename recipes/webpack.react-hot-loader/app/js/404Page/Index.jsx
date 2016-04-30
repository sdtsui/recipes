import React from 'react';

export default class SiteNotFound extends React.Component {
  render() {

    return (
      <div>
        <section className="NotFound__Header">
          <div className="NotFound__Header__TextContainer">
            <h2 className="NotFound__Header__MainText"> 
              Site Not Found
            </h2>
            <div className="NotFound__Header__SubText">
              The site garcinia-example.com does not exist.
            </div>
          </div>
        </section>

        <section className="NotFound__Body">
          <button className="NotFound__Body__Button btn btn-success">
            <span>
            Click here to create
            </span>
            <div>the site</div>
          </button>
        </section>

        <section className="NotFound__Footer">
          <span className="NotFound__Footer__Text">
            blacklight
          </span>
        </section>
      </div>
    );
  }
}
