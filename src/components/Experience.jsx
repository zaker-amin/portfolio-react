import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Experience</h1>
      <div>
        {EXPERIENCES.map((exp, ind) => (
          <div
            key={ind}
            className="mb-8 flex flex-wrap lg:justify-center mx-auto"
          >
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{exp.year}</p>
            </div>
            <div className="w-full max-w-xl lg:3/4">
              <h6 className="mb-2 font-semibold">
                {exp.role} -{" "}
                <span className="text-sm text-purple-100">{exp.company}</span>
              </h6>
              {/* A description is either a paragraph or a list of bullet points. */}
              {Array.isArray(exp.description) ? (
                <ul className="mb-4 list-disc space-y-1 pl-5 text-neutral-400">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="flex mb-4 text-neutral-400">{exp.description}</p>
              )}
              <span className="flex flex-wrap">
                {exp.technologies.map((tech, ind) => (
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
        ))}
      </div>
    </div>
  );
};

export default Experience;
