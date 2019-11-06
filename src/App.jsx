import React, { useState } from "react"
import Backsplash from "./images/backsplash.jpg"
import Nav from "./components/nav"
import Profile from "./images/profile.jpg"
import GameStarter from "./images/GameStarter.gif"
import RecipeSearch from "./images/RecipeSearch.gif"

const App = () => {
  return (
    <>
      <header
        style={{
          backgroundImage: `url(${Backsplash})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <Nav />
        <main>
          <h3 className="second-font">
            {" "}
            Hi! I'm Jessica, a front-end developer living in beautiful St.Pete,
            FL!{" "}
          </h3>

          <img src={Profile} alt="Jessica" />
        </main>
      </header>
      <br />

      <main>
        <section id="about">
          <h2>About Me</h2>
          <p className="second-font">
            I'm a language nerd at heart. In college, my idea of a fun Saturday
            night was pouring over French textbooks to try mastering the proper
            use of definite and indefinite articles.{" "}
          </p>
          <p className="second-font">
            After getting an M.A. in Linguistics and teaching English as Second
            Language for a couple of years, I decided that I wanted something
            more creatively challenging, which is why I decided to enroll in the
            Suncoast Developer's Guild, a three-month immersive full-stack web
            development program in St. Pete, Florida. Through this program, I've
            been able to channel my love for language, learning, syntax,
            problem-solving, organization, and attention to detail into
            developing creative and useful applications.{" "}
          </p>
          <p className="second-font">
            TLDR: I'm a language-obssessed gal who decided to change her career
            and try her hand at web development.
          </p>
        </section>

        <br />

        <section id="skills">
          <h2>I have experience with: </h2>
          <ul className="second-font">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>C#</li>
            <li>.NET Core</li>
            <li>ASP.NET</li>
            <li>Sass</li>
            <li>Git / GitHub</li>
            <li>Responsive Web Design</li>
            <li>Figma</li>
          </ul>
        </section>

        <br />

        <section id="projects">
          <h2>Projects</h2>
          <div className="project-container">
            <div className="project-item">
              <h3>GameStarter</h3>
              <p className="second-font">
                GameStarter is a full-stack application made using React on the
                client side and C# , ASP.NET, and .NET Core on the back-end. The
                app utilizes a third-party API to allow users to select a board
                game they want to play and create a meetup event. If the event
                receives enough players 24 hours before the event date, it
                happens; however, if there are not enough players, the event
                gets cancelled.
              </p>
              <p>
                <strong>Source Code: </strong>{" "}
                <a
                  className="second-font"
                  href="https://github.com/jessicaevans17/capstone-project"
                >
                  https://github.com/jessicaevans17/capstone-project
                </a>
              </p>
              <p>
                <strong>Live Site: </strong>{" "}
                <a
                  className="second-font"
                  href="https://capstone-project-jessicaevans.netlify.com/"
                >
                  https://capstone-project-jessicaevans.netlify.com/
                </a>
              </p>

              <img src={GameStarter} alt="" />
            </div>
            <div className="project-item">
              <h3>Recipe Search</h3>
              <p className="second-font">
                A responsive web application built using React hooks that
                provides a simple UI for an external Meal database API to help
                users browse for recipes.
              </p>
              <p>
                <strong>Source Code: </strong>{" "}
                <a
                  className="second-font"
                  href="https://github.com/jessicaevans17/recipe-search"
                >
                  https://github.com/jessicaevans17/recipe-search
                </a>
              </p>
              <p>
                <strong>Live Site: </strong>{" "}
                <a
                  className="second-font"
                  href="https://recipe-search-jessicaevans.netlify.com/"
                >
                  https://recipe-search-jessicaevans.netlify.com/
                </a>
              </p>
              <img src={RecipeSearch} alt="" />
            </div>
          </div>
        </section>
        <br />

        <section id="contact">
          <h2>Contact</h2>
        </section>
      </main>

      <footer>
        <p>Made with hearts by Jessica Evans</p>
      </footer>
    </>
  )
}

export default App
