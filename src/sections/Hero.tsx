import { motion } from "framer-motion";
import Button from "../components/common/Button";
import AIBg from "../components/common/AIBg";

function Hero() {
  return (
    <section
    id="home"
    className="
    relative
    overflow-hidden
    px-6
    py-24
    "
    >
    <AIBg />

      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />


      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">


        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-cyan-400">
            AI Engineer • Generative AI • Machine Learning
          </p>


          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">

            Building

            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {" "}AI Systems
            </span>

            <br />

            That Solve Real-World Problems

          </h1>


          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
            I am a Computer Science Engineering student passionate about
            Artificial Intelligence and Generative AI. I build intelligent
            applications using Machine Learning, Large Language Models,
            and modern software engineering practices.
          </p>



          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

        <a href="#projects">
          <Button>
            View Projects
          </Button>
        </a>


        <a
        href="#contact"
        className="
        rounded-xl
        border
        border-white/20
        px-6
        py-3
        text-sm
        font-medium
        transition
        hover:bg-white/10
        "
        >
        Let's Connect
        </a>


        </div>




          {/* Stats */}

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">


            <div className="rounded-xl border border-white/10 bg-white/5 p-4">

              <h3 className="text-2xl font-bold">
                9.28
              </h3>

              <p className="text-sm text-gray-400">
                CGPA
              </p>

            </div>



            <div className="rounded-xl border border-white/10 bg-white/5 p-4">

              <h3 className="text-2xl font-bold">
                5+
              </h3>

              <p className="text-sm text-gray-400">
                Projects Built
              </p>

            </div>




            <div className="rounded-xl border border-white/10 bg-white/5 p-4">

              <h3 className="text-2xl font-bold">
                2+
              </h3>

              <p className="text-sm text-gray-400">
                AI Research Areas
              </p>

            </div>


          </div>


        </motion.div>





    

        {/* AI Neural Core */}

<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  className="flex justify-center overflow-visible"
>
  <div
    className="
    relative
    flex
    aspect-square
    w-[260px]
    items-center
    justify-center
    sm:w-[320px]
    lg:w-[384px]
    mx-auto
    "
  >
    {/* Outer Rotating Ring */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
      className="
        absolute
        inset-0
        rounded-full
        border
        border-cyan-400/20
      "
    />

    {/* Second Ring */}
    <motion.div
      animate={{ rotate: -360 }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear",
      }}
      className="
        absolute
        h-[80%]
        w-[80%]
        rounded-full
        border
        border-purple-400/20
      "
    />

    {/* Energy Glow */}
    <div
      className="
        absolute
        h-[70%]
        w-[70%]
        rounded-full
        bg-gradient-to-r
        from-cyan-400/20
        to-purple-500/20
        blur-3xl
      "
    />

    {/* Core */}
    <motion.div
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
      }}
      className="
        relative
        flex
        h-[58%]
        w-[58%]
        items-center
        justify-center
        rounded-full
        border
        border-white/20
        bg-white/5
        backdrop-blur-xl
        shadow-2xl
      "
    >
      <div className="text-center">
        <h2
          className="
            text-5xl
            font-bold
            bg-gradient-to-r
            from-cyan-400
            to-purple-500
            bg-clip-text
            text-transparent
            sm:text-6xl
            lg:text-7xl
          "
        >
          AI
        </h2>

        <p className="mt-2 text-xs text-gray-300 sm:text-sm">
          Neural Core
        </p>
      </div>
    </motion.div>

    {/* Floating Nodes */}
    <div className="absolute left-[8%] top-[20%] h-2 w-2 rounded-full bg-cyan-400 animate-ping sm:h-3 sm:w-3" />

    <div className="absolute right-[8%] top-[32%] h-2 w-2 rounded-full bg-purple-400 animate-ping sm:h-3 sm:w-3" />

    <div className="absolute bottom-[18%] left-[24%] h-2 w-2 rounded-full bg-white animate-pulse" />
  </div>
</motion.div>


      </div>


    </section>
  );
}


export default Hero;