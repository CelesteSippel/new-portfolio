import React, { useEffect, useState } from "react"
import Nav from "./components/nav"
import Profile from "./images/profile.jpg"
import GameStarter from "./images/GameStarter.gif"
import RecipeSearch from "./images/RecipeSearch.gif"
import Resume from "./images/JessicaResume.pdf"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import {
  faDownload,
  faEnvelope,
  faHeart
} from "@fortawesome/free-solid-svg-icons"

const App = () => {
  const linkedIn = <FontAwesomeIcon icon={faLinkedin} />
  const gitHub = <FontAwesomeIcon icon={faGithub} />
  const download = <FontAwesomeIcon icon={faDownload} />
  const envelope = <FontAwesomeIcon icon={faEnvelope} />
  const heart = <FontAwesomeIcon icon={faHeart} />
  const taglines = ["Front-End Developer", "Puzzle-solver", "Cat-Cuddler"]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTagLine = () => {
    setInterval(() => {
      if (currentIndex > taglines.length - 2) {
        setCurrentIndex(0)
      } else {
        setCurrentIndex(currentIndex + 1)
      }
    }, 3000)
  }
  console.log({ currentIndex })

  useEffect(() => {
    const interval = nextTagLine()
    clearInterval(interval)
  }, [currentIndex])

  return (
    <>
      <header>
        <Nav />
        <main>
          <img src={Profile} alt="Jessica" />
          <div className="headline">
            <h2 className="second-font">I'm Jessica Evans</h2>
            <h3>{taglines[currentIndex]}</h3>
          </div>
        </main>
      </header>
      <br />

      <main>
        <section id="about" className="bottom-border">
          <h2>Who I am:</h2>
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

        <section id="skills" className="bottom-border">
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

        <section id="projects" className="bottom-border">
          <h2>What I've done:</h2>
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
          <h2>Let's Connect!</h2>

          <div className="social-media">
            <div>
              <a href="mailto:jevansdev@gmail.com">{envelope}</a>
            </div>
            <div>
              <a href="https://github.com/jessicaevans17">{gitHub}</a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/jessica-marie-evans/">
                {linkedIn}
              </a>
            </div>
          </div>
          <p>
            <a href={Resume} download>
              {" "}
              {download} Resume
            </a>
          </p>
        </section>
      </main>

      <footer>
        <p>
          Made with <span className="red">{heart} </span> by Jessica Evans
        </p>
      </footer>
    </>
  )
}

export default App
