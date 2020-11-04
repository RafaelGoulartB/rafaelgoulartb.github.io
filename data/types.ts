import { IconType } from "react-icons/lib";

export interface AboutInterface {
  /**
   * Name of the owner of portfolio.
   */
  name: string
  /**
   * About main text: Describe yourself and your work.
   */
  description: string
  /**
   * Contact email.
   */
  email: string
}

export interface ProjectsInterface {
  name: string
  description: string
  imgSource: string
  skills: any
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
