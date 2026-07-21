import { motion } from "framer-motion";

function Skills() {

  const skillGroups = [
  {
    title: "🤖 Artificial Intelligence",
    skills: [
      "Machine Learning",
      "Generative AI",
      "Large Language Models",
      "Prompt Engineering",
      "AI Agents",
      "RAG Systems",
    ],
  },

  {
    title: "🐍 Programming Languages",
    skills: [
      "Python",
      "Java",
      "JavaScript",
      "SQL",
    ],
  },

  {
    title: "💻 Full Stack Development",
    skills: [
      "React.js",
      "Node.js",
      "REST APIs",
      "Tailwind CSS",
      "MongoDB",
      "PostgreSQL",
    ],
  },

  {
    title: "⚙️ Tools & Technologies",
    skills: [
      "Git & GitHub",
      "VS Code",
      "Oracle Database",
      "Arduino",
      "Ollama",
      "Jupyter Notebook",
    ],
  },
];


  return (
    <section
      id="skills"
      className="px-6 py-24"
    >

      <div className="mx-auto max-w-6xl">



        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Skills
          </p>


          <h2 className="mt-4 text-4xl font-bold md:text-5xl">

            My{" "}

            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Technical
            </span>{" "}

            Toolkit

          </h2>


        </motion.div>





        {/* Skill Cards */}

        <div className="grid gap-6 md:grid-cols-2">


          {skillGroups.map((group, index) => (

            <motion.div

              key={group.title}

              initial={{ 
                opacity: 0,
                y: 50
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              viewport={{
                once: true
              }}

              transition={{
                duration: 0.5,
                delay: index * 0.15
              }}

              whileHover={{
                y: -8
              }}

              className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-6
              backdrop-blur
              transition
              hover:border-cyan-400/40
              "

            >


              <h3 className="text-xl font-semibold">
                {group.title}
              </h3>




              <div className="mt-5 flex flex-wrap gap-3">


                {group.skills.map((skill) => (

                  <motion.span

                    key={skill}

                    whileHover={{
                      scale: 1.08
                    }}

                    className="
                    rounded-full
                    border
                    border-white/10
                    bg-black/20
                    px-4
                    py-2
                    text-sm
                    text-gray-300
                    "

                  >

                    {skill}

                  </motion.span>


                ))}


              </div>



            </motion.div>


          ))}


        </div>



      </div>


    </section>
  );
}


export default Skills;