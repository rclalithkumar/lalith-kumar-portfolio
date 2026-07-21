import { motion } from "framer-motion";

function AIBg() {

  const particles = Array.from({ length: 20 });


  return (

    <div className="pointer-events-none absolute inset-0 overflow-hidden">


      {/* Glow */}

      <div
        className="
        absolute
        left-1/2
        top-1/2
        h-[500px]
        w-[500px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-cyan-400/10
        blur-[120px]
        "
      />



      {/* Floating particles */}

      {particles.map((_, index) => (

        <motion.div

          key={index}

          animate={{
            y: [0, -40, 0],
            opacity: [0.3, 1, 0.3],
          }}

          transition={{
            duration: 4 + index,
            repeat: Infinity,
            delay: index * 0.2,
          }}

          className="
          absolute
          h-1.5
          w-1.5
          rounded-full
          bg-cyan-400
          "

          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}

        />

      ))}


    </div>

  );

}


export default AIBg;