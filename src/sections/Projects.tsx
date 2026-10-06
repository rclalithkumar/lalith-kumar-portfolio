import { motion } from "framer-motion";

function Projects() {

  const projects = [
  
  {
    title: "OpsLens",
    type: "AI Incident Investigation Copilot",
    description:
      "An evidence-driven AI copilot that uses RAG, technical runbooks, incident history, and live web search to investigate production incidents and verify conclusions.",
    tech: [
      "Python",
      "Streamlit",
      "FAISS",
      "Sentence Transformers",
      "Groq",
      "RAG"
    ],
    github: "https://github.com/rclalithkumar/opslens",
    liveDemo: "https://opslens-5eaegotcusp7mmahahcd3a.streamlit.app/",
  },
  {
    title: "NexaFlow AI",
    type: "LLM Chatbot",
    description:
      "An AI-powered application focused on intelligent automation and leveraging modern AI technologies to create smarter workflows.",
    tech: ["React", "Node.js", "MongoDB", "Generative AI","Express","Groq API"],
    github: "https://github.com/rclalithkumar/NexaFlow-AI.git",
    liveDemo: "https://nexaflow-ai-chatbot.vercel.app/",
  },

  {
    title: "Prism",
    type: "LLM Based AI Application",
    description:
      "A project exploring Large Language Models and local AI inference using modern AI frameworks to build intelligent interactions.",
    tech: ["Python", "Ollama", "LLMs", "Streamlit", "Mistral"],
    github: "https://github.com/rclalithkumar/prism.git",
    liveDemo: "Coming Soon",
  },

  {
    title: "Biometric Driven Digital Watermarking System",
    type: "AI Security Research",
    description:
      "A security-focused system combining biometric authentication with digital watermarking techniques for secure information protection.",
    tech: ["React", "TypeScript", "Canvas API", "Web Crypto API"],
    github: "https://github.com/rclalithkumar/BioMark.git",
    liveDemo: "https://bio-mark-topaz.vercel.app/",
  },

];


  return (

    <section
      id="projects"
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
            Projects
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Things I{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Build
            </span>
          </h2>
        </motion.div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:border-cyan-400/40"
            >

              <p className="text-sm text-cyan-400">{project.type}</p>

              <h3 className="mt-3 text-2xl font-bold">{project.title}</h3>

              <p className="mt-4 leading-relaxed text-gray-400">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.08 }}
                    className="rounded-full bg-black/30 px-3 py-1 text-xs text-gray-300"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-8 flex gap-4">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"
                >
                  GitHub
                </a>

                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 px-4 py-2 text-sm font-medium text-black transition hover:scale-105"
                >
                  Live Demo
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Projects;