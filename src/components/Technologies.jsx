import { motion } from "framer-motion"
import { FaJava, FaNodeJs, FaPython } from "react-icons/fa"
import { RiReactjsLine } from "react-icons/ri"
import {
  SiDatadog,
  SiDocker,
  SiGithubactions,
  SiHuggingface,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiPostgresql,
  SiPytorch,
  SiRedis,
  SiScikitlearn,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"

const iconVariantsDuration = (initial, duration) => ({
  initial: { y: initial },
  animate: {
    y: [-10, 10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
})

// Each icon floats with its own start offset and speed, so they drift out of sync.
const TECH_GROUPS = [
  {
    title: "Backend",
    items: [
      { name: "Java", Icon: FaJava, color: "text-orange-400", href: "https://dev.java/", y: 5, d: 4.31 },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "text-sky-400", href: "https://www.postgresql.org/", y: -9, d: 2.2 },
      { name: "Redis", Icon: SiRedis, color: "text-red-500", href: "https://redis.io/", y: 6, d: 3 },
      { name: "Node.js", Icon: FaNodeJs, color: "text-green-400", href: "https://nodejs.org/", y: -5, d: 5.5 },
      { name: "MongoDB", Icon: SiMongodb, color: "text-green-400", href: "https://www.mongodb.com/", y: 0, d: 2.34 },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "TypeScript", Icon: SiTypescript, color: "text-blue-500", href: "https://www.typescriptlang.org/", y: 4, d: 3.6 },
      { name: "JavaScript", Icon: SiJavascript, color: "text-amber-400", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", y: -7, d: 2.8 },
      { name: "React", Icon: RiReactjsLine, color: "text-cyan-400", href: "https://react.dev/", y: 8, d: 4.9 },
      { name: "Next.js", Icon: TbBrandNextjs, color: "text-white", href: "https://nextjs.org/", y: -2, d: 2.5 },
    ],
  },
  {
    title: "DevOps",
    items: [
      { name: "Docker", Icon: SiDocker, color: "text-sky-500", href: "https://www.docker.com/", y: -6, d: 3.3 },
      { name: "Kubernetes", Icon: SiKubernetes, color: "text-blue-400", href: "https://kubernetes.io/", y: 7, d: 5.1 },
      { name: "GitHub Actions", Icon: SiGithubactions, color: "text-blue-300", href: "https://github.com/features/actions", y: -3, d: 2.6 },
      { name: "Datadog", Icon: SiDatadog, color: "text-purple-400", href: "https://www.datadoghq.com/", y: 3, d: 4.4 },
    ],
  },
  {
    title: "Machine Learning",
    items: [
      { name: "Python", Icon: FaPython, color: "text-amber-300", href: "https://www.python.org/", y: 10, d: 2.0 },
      { name: "PyTorch", Icon: SiPytorch, color: "text-red-500", href: "https://pytorch.org/", y: 5, d: 3 },
      { name: "TensorFlow", Icon: SiTensorflow, color: "text-orange-400", href: "https://www.tensorflow.org/", y: -3, d: 6.5 },
      { name: "scikit-learn", Icon: SiScikitlearn, color: "text-amber-400", href: "https://scikit-learn.org/", y: 2, d: 4 },
      { name: "Hugging Face", Icon: SiHuggingface, color: "text-amber-200", href: "https://huggingface.co/", y: -4, d: 5.9 },
    ],
  },
]

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-5xl">Technologies</h1>
      {TECH_GROUPS.map((group) => (
        <div key={group.title}>
          <h2 className="mt-10 mb-5 text-center text-2xl">{group.title}</h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {group.items.map(({ name, Icon, color, href, y, d }) => (
              <motion.div
                key={name}
                variants={iconVariantsDuration(y, d)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={name}
                >
                  <Icon className={`text-6xl ${color}`} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Technologies
