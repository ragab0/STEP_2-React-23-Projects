import React from "react";
import Apps from "./apps";
import svg from "./assets/hero.svg"

export default function Page({apps, appsAdvanced}) {
  return (
    <main>
      <header>
        <div className="hero-title">
          <h1>React Projects</h1>
          <p>Projects are the most practical way to learn any language, and<span> React </span> is no exception. 
            Solidify your knowledge of React by creating these cool projects.
          </p>
          <button className="btn hero-btn">21 App + 1</button>
        </div>
        <div className="img-container">
          <object data={svg} aria-label="Hero img" />
        </div>
      </header>
      <section>
        <div className="title">
          <h2>Fundamental Projects</h2>
        </div>
        <Apps apps={apps} />
      </section>
      <section>
        <div className="title">
          <h2>Advanced Projects</h2>
        </div>
        <Apps apps={appsAdvanced} />
      </section>
    </main>
  )
}
