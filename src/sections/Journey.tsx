import { motion } from "framer-motion";

function Journey() {

  const journey = [
    {
      year: "2023 - 2027",
      title: "B.E Computer Science Engineering",
      place: "AMC Engineering College, Bengaluru",
      description:
        "Pursuing Computer Science Engineering with a strong foundation in programming, software development, databases, and emerging technologies.",
    },

    {
      year: "2024 - 2025",
      title: "Exploring Artificial Intelligence",
      place: "Machine Learning & Generative AI",
      description:
        "Started exploring Machine Learning, Artificial Intelligence, and Generative AI through projects, certifications, and hands-on experimentation.",
    },

    {
      year: "2025",
      title: "AI & Full Stack Projects",
      place: "Building Real-World Applications",
      description:
        "Developed AI-based applications, full-stack projects, and automation solutions by combining intelligent models with practical software systems.",
    },

    {
      year: "2025",
      title: "NPTEL Certifications",
      place: "Machine Learning & Compiler Design",
      description:
        "Completed NPTEL certifications in Machine Learning and Compiler Design to strengthen technical knowledge and computer science fundamentals.",
    },

    {
      year: "Future Goal",
      title: "AI Engineer Goal",
      place: "Generative AI & Intelligent Systems",
      description:
        "Focused on building scalable AI applications, exploring LLMs, AI agents, and creating impactful AI-driven solutions.",
    },
  ];


  return (

    <section
      id="journey"
      className="px-6 py-24"
    >

      <div className="mx-auto max-w-5xl">


        {/* Heading */}

        <motion.div

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.6,
          }}

          className="mb-12"

        >

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Journey
          </p>


          <h2 className="mt-4 text-4xl font-bold md:text-5xl">

            My{" "}

            <span className="
              bg-gradient-to-r
              from-cyan-400
              to-purple-500
              bg-clip-text
              text-transparent
            ">
              Growth Path
            </span>

          </h2>


        </motion.div>





        {/* Timeline */}

        <div className="relative border-l border-white/20 pl-8">


          {journey.map((item, index) => (

            <motion.div

              key={item.title}

              initial={{
                opacity: 0,
                x: -40,
              }}

              whileInView={{
                opacity: 1,
                x: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}

              className="relative mb-12"

            >



              {/* Timeline Dot */}

              <motion.div

                animate={{
                  scale: [1, 1.2, 1],
                }}

                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}

                className="
                  absolute
                  -left-[42px]
                  top-2
                  h-5
                  w-5
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-400
                  to-purple-500
                "

              />





              {/* Timeline Card */}

              <div

                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-6
                  backdrop-blur
                  transition
                  hover:border-cyan-400/30
                "

              >


                <p className="text-sm text-cyan-400">
                  {item.year}
                </p>



                <h3 className="mt-2 text-2xl font-bold">
                  {item.title}
                </h3>



                <p className="mt-1 text-gray-400">
                  {item.place}
                </p>



                <p className="mt-4 leading-relaxed text-gray-400">
                  {item.description}
                </p>


              </div>


            </motion.div>


          ))}


        </div>


      </div>


    </section>

  );
}


export default Journey;