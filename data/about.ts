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

const about: AboutInterface = {
  name: 'Rafael Goulart',
  description: `Hello, I'm Rafael. Frontend Developer passionate about the open-source world and developing solutions using technology, focused on solving problems in the areas of Web and Mobile. Currently working with React, Next.js, React Native and Node.js in Freelance projects. If there is an opportunity for me to do it. I am ready!`,
  email: 'rafagoulartb@gmail.com'
}


export default about
