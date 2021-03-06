import React from 'react';

export default function Article() {
  return (
    <div className="article-page">

      <div className="banner">
        <div className="container">

          <h1>How to build webapps that scale</h1>

          <div className="article-meta">
            <a href=""><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
            <div className="info">
              <a href="" className="author">Eric Simons</a>
              <span className="date">January 20th</span>
            </div>
          </div>

        </div>
      </div>

      <div className="container page">

        <div className="row article-content">
          <div className="col-md-12">
            <p>
            Web development technologies have evolved at an incredible clip over the past few years.
            </p>
            <h2 id="introducing-ionic">Introducing RealWorld.</h2>
            <p>It&aposs a great solution for learning how other frameworks work.</p>
          </div>
        </div>

        <hr />

        <div className="article-actions">
          <div className="article-meta">
            <a href="profile.html"><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
            <div className="info">
              <a href="" className="author">Eric Simons</a>
              <span className="date">January 20th</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}