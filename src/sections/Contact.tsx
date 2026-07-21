import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-24"
    >

      <div className="mx-auto max-w-5xl">


        <motion.div

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
            duration: 0.7
          }}

          className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-10
          text-center
          backdrop-blur
          "

        >



          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>




          <h2 className="mt-5 text-4xl font-bold md:text-5xl">

            Let's Connect and Build the{" "}

            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Future of AI
            </span>

          </h2>





          <p className="mx-auto mt-5 max-w-2xl text-gray-400">

            I am always interested in discussing Artificial Intelligence,
            Generative AI, software projects, and opportunities to learn,
            collaborate, and build impactful solutions.

          </p>






          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">


            {/* Email */}

            <motion.a

              whileHover={{
                scale: 1.05
              }}

              href="mailto:rclalith.kumar@gmail.com"

              className="
              rounded-xl
              bg-gradient-to-r
              from-cyan-400
              to-purple-500
              px-8
              py-3
              font-medium
              text-black
              "

            >

              Email Me

            </motion.a>






            {/* LinkedIn */}

            <motion.a

              whileHover={{
                scale: 1.05
              }}

              href="https://www.linkedin.com/in/r-c-lalith-kumar-997743333/"
              target="_blank"
              rel="noopener noreferrer"
              className="
              rounded-xl
              border
              border-white/20
              px-8
              py-3
              transition
              hover:bg-white/10
              "

            >

              LinkedIn

            </motion.a>







            {/* GitHub */}

            <motion.a

              whileHover={{
                scale: 1.05
              }}

              href="https://github.com/rclalithkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="
              rounded-xl
              border
              border-white/20
              px-8
              py-3
              transition
              hover:bg-white/10
              "

            >

              GitHub

            </motion.a>



          </div>



        </motion.div>


      </div>


    </section>
  );
}


export default Contact;