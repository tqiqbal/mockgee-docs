export default defineAppConfig({
  docus: {
    title: 'Mockgee',
    description: 'Lets mock API.',
    // image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      twitter: 'mockgee',
      linkedin: {
        label: 'linkedin',
        icon: 'mdi:linkedin',
        href: 'https://www.linkedin.com/company/mockgee'
      }
    },
    aside: {
      level: 0,
      exclude: []
    },
    header: {
      // logo: true,
      showLinkIcon: true,
      exclude: []
    },
    // footer: {
    //   iconLinks: [
    //     {
    //       href: 'https://nuxt.com',
    //       icon: 'IconNuxtLabs'
    //     }
    //   ]
    // }
  }
})