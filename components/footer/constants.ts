import { IconType } from "react-icons/lib";

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

export interface footerSocialLinksProps {
  label: string
  link: string,
  icon: IconType
}

export const footerSocialLinks: footerSocialLinksProps[] = [
  {
    label: 'Github Profile',
    link: 'https://www.github.com/RafaelGoulartB',
    icon: FaGithub
  },
  {
    label: 'Linkedin Profile',
    link: 'https://www.linkedin.com/in/rafael-goulartb/',
    icon: FaLinkedin
  },
  {
    label: 'Mail Me',
    link: 'mailto:rafagoulartb@gmail.com',
    icon: SiGmail
  },
]
