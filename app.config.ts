export default defineAppConfig({
  docus: {
    title: 'Mockgee',
    description: 'Lets mock API.',
    socials: {
      twitter: 'mockgee',
      // linkedin: {
      //   label: 'linkedin',
      //   icon: 'mdi:linkedin',
      //   href: 'https://www.linkedin.com/company/mockgee'
      // }
    },
    aside: {
      level: 0,
      exclude: []
    },
    header: {
      logo: true,
      // showLinkIcon: true,
      // exclude: [],
      // title: 'Mockgee'
    },
    footer: {
      iconLinks: [
        {
          icon: 'mdi:linkedin',
          href: 'https://www.linkedin.com/company/mockgee'
        },
        {
          icon: 'mingcute:youtube-fill',
          href: 'https://www.youtube.com/@mockgee'
        },
        {
          icon: 'ic:baseline-facebook',
          href: 'https://www.facebook.com/api.mockgee'
        }
      ],
      credits: {
        icon: 'mdi:alpha-m-box',
        text: 'Powered by Mockgee',
        href: 'https://mockgee.com',
      },
    }
  }
})