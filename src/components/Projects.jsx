import { PROJECTS } from "../constants"

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => {
          // Projects without a public link (e.g. private research repos) render as plain cards.
          const Wrapper = project.url ? "a" : "div"
          const linkProps = project.url
            ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
            : {}
          return (
            <Wrapper key={index} {...linkProps}>
              <div className="mb-8 flex flex-wrap md:justify-center items-center  text-center lg:text-start hover:scale-105 transition-all ease-in-out duration-300">
                <div className="w-full  lg:w-1/4 mr-4  flex justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={300}
                    className="mb-6 rounded"
                  />
                </div>
                <div className="w-full max-w-xl lg:w-3/4">
                  <h6 className="mb-2 font-semibold">{project.title}</h6>
                  <p className="mb-4 text-neutral-400">{project.description}</p>
                  <span className="flex flex-wrap">
                    {project.technologies.map((tech, ind) => (
                      <span
                        key={ind}
                        className="mr-2 mt-4 bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </span>
                </div>
              </div>
            </Wrapper>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
