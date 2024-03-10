import "./About.scss";
import github from "../../Images/github-mark-white.png";
import linkedin from "../../Images/LI.png";
import gmail from "../../Images/Gmail.jpg";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
const About = ({ projects }) => {
  return (
    <>
      <section className="about">
        <div className="about__content">
          <h1>Hello, I'm James Lindsay</h1>
          <p>
            I am a dynamic and self-motivated software engineering enthusiast
            with a strong foundation acquired through intensive bootcamp
            training. Eager to embark on a fulfilling career in software
            engineering, leveraging proficiency in HTML, CSS, JavaScript, and
            REACT to drive innovation and contribute effectively to dynamic
            development teams. Seeking opportunities to apply acquired skills
            and knowledge in a professional setting, with a passion for
            continuous learning and immediate availability to contribute to
            impactful projects.
          </p>
        </div>
      </section>
      <div className="contact__container">
        <section className="contact">
          <a href="https://github.com/james-lindsay">
            <img className="contact__icon" src={github} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/james-lindsay1/">
            <img className="contact__icon" src={linkedin} alt="LinkedIn" />
          </a>
          <a href="mailto:jameslindsay2220@gmail.com">
            <img className="contact__icon" src={gmail} alt="Gmail" />
          </a>
        </section>
      </div>
      <Skills />
      <Projects projects={projects} />
    </>
  );
};

export default About;
