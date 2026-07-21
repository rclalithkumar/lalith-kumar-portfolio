import { motion } from "framer-motion";

function Loader() {

  return (

    <motion.div

      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}

      transition={{
        duration: 0.8
      }}

      className="
      fixed
      inset-0
      z-[9999]
      flex
      items-center
      justify-center
      bg-[#06070B]
      "

    >


      <div className="text-center">


        {/* Logo */}

        <motion.div

          initial={{
            scale:0.5,
            opacity:0
          }}

          animate={{
            scale:1,
            opacity:1
          }}

          transition={{
            duration:0.8
          }}

          className="
          mx-auto
          flex
          h-28
          w-28
          items-center
          justify-center
          rounded-3xl
          bg-gradient-to-r
          from-cyan-400
          to-purple-500
          text-5xl
          font-bold
          text-black
          "

        >

          LK

        </motion.div>





        <motion.h1

          initial={{
            opacity:0,
            y:20
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            delay:0.5
          }}

          className="
          mt-8
          text-3xl
          font-bold
          text-white
          "

        >

          R C Lalith Kumar

        </motion.h1>





        <motion.p

          initial={{
            opacity:0
          }}

          animate={{
            opacity:1
          }}

          transition={{
            delay:0.8
          }}

          className="
          mt-3
          text-sm
          tracking-widest
          text-cyan-400
          "

        >

          AI • GENERATIVE AI • MACHINE LEARNING

        </motion.p>





        <motion.p

          animate={{
            opacity:[0.3,1,0.3]
          }}

          transition={{
            duration:1.5,
            repeat:Infinity
          }}

          className="
          mt-8
          text-gray-400
          "

        >

          Initializing Intelligence...

        </motion.p>


      </div>


    </motion.div>

  );

}


export default Loader;