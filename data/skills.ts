import { FaReact, FaNodeJs, FaHtml5, FaCss3 } from 'react-icons/fa'
import { SiNextDotJs, SiGraphql, SiTypescript } from 'react-icons/si'
import { ImGit } from 'react-icons/im'

export interface SkillsInterface {
  name: string
  description: string
  icon?: any
}

const skills: SkillsInterface[] = [
  {
    name: 'React.js',
    description: '2 years experience',
    icon: FaReact
  },
  {
    name: 'Next.js',
    description: '1 years experience',
    icon: SiNextDotJs
  },
  {
    name: 'Node.js',
    description: '2 years experience',
    icon: FaNodeJs
  },
  {
    name: 'GraphQL',
    description: '6 months experience',
    icon: SiGraphql
  },
  {
    name: 'React Native',
    description: '2 years experience',
    icon: FaReact
  },
  {
    name: 'Git',
    description: '3 years experience',
    icon: ImGit
  },
  {
    name: 'Typescript',
    description: '2 years experience',
    icon: SiTypescript
  },
  {
    name: 'HTML',
    description: '3 years experience',
    icon: FaHtml5
  },
  {
    name: 'CSS',
    description: '3 years experience',
    icon: FaCss3
  },
]


export default skills
