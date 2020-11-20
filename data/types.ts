import { IconType } from "react-icons/lib";

export interface ProjectsInterface {
  name: string
  description: string
  imgSource: string
  skills: string[]
  githubUrl?: string
  websiteUrl?: string
  playStoreUrl?: string
}

export interface ServicesInterface {
  name: string
  description: string
  icon?: IconType
}

export interface SkillsInterface {
  name: string
  expTime: () => string
  icon?: IconType
}
