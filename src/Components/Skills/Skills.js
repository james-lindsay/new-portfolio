import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import "./Skills.scss";

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref}>
      <h1 className="skills__header">My Skills</h1>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transision={{ duration: 1, delay: 1 }}
      >
        <div className="container">
          <div className="skill-box">
            <p>React</p>
          </div>
          <div className="skill-box">
            <p>JavaScript</p>
          </div>
          <div className="skill-box">
            <p>CSS</p>
          </div>
          <div className="skill-box">
            <p>HTML</p>
          </div>
          <div className="skill-box">
            <p>NodeJS</p>
          </div>
          <div className="skill-box">
            <p>MySQL</p>
          </div>
          <div className="skill-box">
            <p>API's</p>
          </div>
          <div className="skill-box">
            <p>MongoDB</p>
          </div>
          <div className="skill-box">
            <p>Firebase</p>
          </div>
          <div className="skill-box">
            <p>Github</p>
          </div>
          <div className="skill-box">
            <p>Teamwork</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Skills;
