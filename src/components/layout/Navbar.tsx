import { useEffect, useState } from "react";

function Navbar() {

  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);


  const links = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Journey",
      href: "#journey",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];



  useEffect(() => {

    const sections = document.querySelectorAll("section");


    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }

        });

      },

      {
        rootMargin: "-40% 0px -40% 0px",
      }

    );


    sections.forEach((section) => {
      observer.observe(section);
    });


    return () => {

      sections.forEach((section) => {
        observer.unobserve(section);
      });

    };


  }, []);




  return (

    <nav
      className="
      fixed
      top-0
      z-50
      w-full
      border-b
      border-white/10
      bg-[#06070B]/70
      backdrop-blur-xl
      "
    >

      <div
        className="
        mx-auto
        flex
        max-w-7xl
        items-center
        justify-between
        px-6
        py-4
        "
      >


        {/* Logo */}

        <a
          href="#home"
          className="
          text-2xl
          font-bold
          bg-gradient-to-r
          from-cyan-400
          to-purple-500
          bg-clip-text
          text-transparent
          "
        >
          LK
        </a>



        {/* Desktop Links */}

        <div className="hidden gap-8 md:flex">

          {links.map((link)=> (

            <a

              key={link.name}

              href={link.href}

              className={`
              relative text-sm transition

              ${
                active === link.href.substring(1)
                ? "text-cyan-400"
                : "text-gray-400 hover:text-white"
              }

              `}

            >

              {link.name}


              {active === link.href.substring(1) && (

                <span
                  className="
                  absolute
                  -bottom-2
                  left-0
                  h-[2px]
                  w-full
                  bg-gradient-to-r
                  from-cyan-400
                  to-purple-500
                  "
                />

              )}

            </a>

          ))}

        </div>




        {/* Desktop Resume */}

        <a
          href="/resume.pdf"
          download
          className="
          hidden
          rounded-xl
          bg-gradient-to-r
          from-cyan-400
          to-purple-500
          px-5
          py-2
          text-sm
          font-medium
          text-black
          md:block
          "
        >
          Resume
        </a>





        {/* Mobile Menu Button */}

        <button

          onClick={() => setOpen(!open)}

          className="
          text-2xl
          md:hidden
          "

        >

          {open ? "✕" : "☰"}

        </button>



      </div>





      {/* Mobile Menu */}

      {open && (

        <div
          className="
          flex
          flex-col
          gap-5
          border-t
          border-white/10
          bg-[#06070B]
          px-6
          py-6
          md:hidden
          "
        >


          {links.map((link)=>(

            <a

              key={link.name}

              href={link.href}

              onClick={() => setOpen(false)}

              className={`
              text-sm

              ${
                active === link.href.substring(1)
                ? "text-cyan-400"
                : "text-gray-400"
              }

              `}
            >

              {link.name}

            </a>

          ))}




          <a
            href="/resume.pdf"
            download
            className="
            rounded-xl
            bg-gradient-to-r
            from-cyan-400
            to-purple-500
            px-5
            py-2
            text-center
            font-medium
            text-black
            "
          >
            Resume
          </a>



        </div>

      )}



    </nav>

  );

}


export default Navbar;