import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Stars from "./Stars";

const Landing = () => {
  return (
    <main>
      <section className="section dark text-white">
        <div className="col-5 text-center py-5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="mt-3 h-100">
              xTh86 helps you to{" "}
              <p>
                <Typewriter
                  words={[
                    "start your web development journey.",
                    "build your portfolio online.",
                    "develop productive skills",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </p>
            </h2>
          </motion.div>
          <button className="btn btn-lg btn-outline-light rounded-5 mt-5">
            Start Journey
          </button>

          <p className="text-muted mt-3">
            <small>Click here to continue with xTh86</small>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Landing;
