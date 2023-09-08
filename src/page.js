import React from "react";
import Apps from "./apps";


export default function Page({pops, apps, appsAdvanced}) {
  return (
    <main>
      <header>
        <div className="img-container">
          <img alt="ragab-img" src="/ragab.jpg" />
        </div>
        <div className="hero-title">
          <h1>First Apps</h1>
          <p style={{maxWidth:"400px"}}>
            My first apps that i was apply on while learning
          </p>
          <ol>
            <li>React Fundamentals with Pop-zroll</li>
            <li>Advanced React Hooks with John-Smilga</li>
            <li>React-Router-Dom  with John-Smilga</li>
            <li>Advanced React-Router-Dom  with Pop-zroll ! V2;</li>
          </ol>
          <button className="btn hero-btn">Explore now !</button>

        </div>
        
      </header>
      <section>
        <div className="title">
          <h2>First (5)</h2>
          <h5>React Fundamentals with pop-zroll</h5>
        </div>
        <Apps apps={pops} />
      </section>
      <section>
        <div className="title">
          <h2>Fundamental Projects</h2>
          <h5>React-Projects: (React, React-Hooks, React-Router-Dom)</h5>
        </div>
        <Apps apps={apps} />
      </section>
      <section>
        <div className="title">
          <h2>Next Projects</h2>
        </div>
        <Apps apps={appsAdvanced} />
      </section>
    </main>
  )
}
