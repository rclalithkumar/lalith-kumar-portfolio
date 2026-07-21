import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="px-6 py-24"
    >

      <div className="mx-auto max-w-6xl">


        {/* Heading */}

        <div className="mb-12">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>


          <h2 className="mt-4 text-4xl font-bold md:text-5xl">

            Building the Future with{" "}

            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Artificial Intelligence
            </span>

          </h2>

        </div>




        <div className="grid gap-8 lg:grid-cols-2">



          {/* Description */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
            rounded-2xl
            border
            border-white/10
            bg-white/5
            p-8
            backdrop-blur
            "
          >

            <p className="leading-relaxed text-gray-300">

            I am a Computer Science Engineering student at AMC Engineering College
            with a strong interest in Artificial Intelligence, Machine Learning,
            and Generative AI.

            My journey involves building AI-powered applications, exploring
            Large Language Models, and developing software solutions that combine
            intelligence with practical usability.

            </p>


            <p className="mt-5 leading-relaxed text-gray-300">

                I have worked on projects involving AI applications,
                full-stack development, and automation systems.

                I continuously explore emerging technologies such as Generative AI,
                AI agents, and LLM-based applications to build impactful solutions.

            </p>


          </motion.div>






          {/* AI Focus Cards */}

          <div className="grid gap-5">


            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
              rounded-2xl
              border
              border-white/10
              bg-gradient-to-br
              from-cyan-500/10
              to-transparent
              p-6
              "
            >

              <h3 className="text-xl font-semibold">
                🤖 Generative AI
              </h3>


              <p className="mt-2 text-gray-400">
                Exploring LLMs, prompt engineering, RAG systems, and AI agents.
              </p>


            </motion.div>






            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="
              rounded-2xl
              border
              border-white/10
              bg-gradient-to-br
              from-purple-500/10
              to-transparent
              p-6
              "
            >

              <h3 className="text-xl font-semibold">
                🧠 Machine Learning
              </h3>


              <p className="mt-2 text-gray-400">
                Building ML solutions with data-driven approaches.
              </p>


            </motion.div>







            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="
              rounded-2xl
              border
              border-white/10
              bg-gradient-to-br
              from-blue-500/10
              to-transparent
              p-6
              "
            >

              <h3 className="text-xl font-semibold">
                ⚡ AI Engineering
              </h3>


              <p className="mt-2 text-gray-400">
                Creating production-ready AI applications combining models
                and software.
              </p>


            </motion.div>



          </div>



        </div>


      </div>


    </section>
  );
}


export default About;