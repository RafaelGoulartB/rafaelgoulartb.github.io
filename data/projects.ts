export interface ProjectsInterface {
  name: string
  description: string
  imgSource: string
  skills: any
  githubUrl?: string
  websiteUrl?: string
  playStoreUrl?: string
}

const projects: ProjectsInterface[] = [
  {
    name: 'Coinbase Website',
    description: 'Cryptocurrency & Giftcard Exchange Website - Landing Page. Made with Next.js | Chakra UI',
    imgSource: '/images/projects/coinbase-web-min.png',
    skills: ['Next.js', 'Chakra UI', 'Typescript'],
    websiteUrl: 'https://coinbase-web.vercel.app/',
    githubUrl: 'https://github.com/RafaelGoulartB/coinbase-web',
  },
  {
    name: 'Quantum E-commerce',
    description: 'E-commerce project that sell tech products, made using Next.js with Apollo and GraphQL.',
    imgSource: '/images/projects/quantum-ecommerce-min.png',
    skills: ['Next.js', 'GraphQL', 'Apollo'],
    websiteUrl: 'https://quantum-ecommerce.now.sh/',
    githubUrl: 'https://github.com/RafaelGoulartB/next.js-ecommerce',
  },
  {
    name: 'Interior Home Design',
    description: 'This a landing page website made for interior home designers - Made using Next.js and Chakra UI.',
    imgSource: '/images/projects/interior-design-min.png',
    skills: ['Next.js', 'Chakra UI', 'Typescript'],
    websiteUrl: 'https://interior-design-website.vercel.app/',
    githubUrl: 'https://github.com/RafaelGoulartB/interior-design-website',
  },
  {
    name: 'RPG Dice Roller, Coin Flip, Number Generator',
    description: '📱 RPG Dice Roller, Coin Flip and Random Number Generator - Made using React-native.',
    imgSource: '/images/projects/ramdomapp-min.png',
    skills: ['React Native', 'Styled-components', 'Typescript'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.rafagoulartb.randomapp',
    githubUrl: 'https://github.com/RafaelGoulartB/rpg-dice-roller',
  },
  {
    name: 'Proffy',
    description: '🚀 Project made to connect teachers to students, made in Next Level Week #2 #NLW @Rocketseat. Made using Node.js, React.js and React Native.',
    imgSource: '/images/projects/proffy-min.png',
    skills: ['React.js', 'React Native', 'Node.js', 'Typescript'],
    websiteUrl: 'https://proffy-rafa.netlify.app/',
    githubUrl: 'https://github.com/RafaelGoulartB/proffy',
  },
  {
    name: 'Instapet',
    description: 'Instapet is a app based on instagram, app developed to learn how to build a social network using React-native and Firebase.',
    imgSource: '/images/projects/instapet-min.png',
    skills: ['React Native', 'Firebase'],
    githubUrl: 'https://github.com/RafaelGoulartB/instapet'
  },
  {
    name: 'Be the Hero',
    description: '🚀 Be the Hero, um projeto que ajuda pessoas que querem contribuir para ONGs - Made using Node.js, React.js and React Native.',
    imgSource: '/images/projects/bethehero-min.png',
    skills: ['React.js', 'React Native', 'Node.js'],
    githubUrl: 'https://github.com/RafaelGoulartB/be-the-hero',
  },
]


export default projects