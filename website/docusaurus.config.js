// Docs at https://v2.docusaurus.io/docs/configuration


const projectName = 'Zenith'
const projectSlug = 'zenith'
// Replace 'FINOS' with {name of copyright owner}
const copyrightOwner = 'FINOS'

module.exports = {
  title: `${projectName}`,
  tagline: `FINOS Emerging Technologies`, 
  url: 'https://zenith.finos.org',
  baseUrl: '/',
  favicon: 'img/favicon/favicon-zenith.ico',
  projectName: `FINOS ${projectName}`,
  organizationName: 'FINOS',
  customFields: {
    repoUrl: `https://github.com/finos/${projectSlug}`,
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  stylesheets: ['https://fonts.googleapis.com/css?family=Overpass:400,400i,700'],
  themeConfig: {
    navbar: {
      title: `${projectName}`,
      logo: {
        alt: 'FINOS Logo',
        src: 'img/zenith/Zenith_Logo_White.svg',
      },
      items: [
        {to: 'docs/home', label: 'Getting Started', position: 'right'},
        {to: 'docs/team', label: 'Team', position: 'right'},
        {
          href: 'https://github.com/finos/zenith',
          label: 'GitHub',
          position: 'right',
        },
        {to: 'blog', label: 'Blog', position: 'right'}
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} ${projectName} - ${copyrightOwner}`,
      logo: {
        alt: 'FINOS Logo',
        src: 'img/favicon/favicon-finos.ico',
        href: 'https://finos.org'
      },
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/home',
            },
            {
              label: 'Team',
              to: 'docs/team',
            },
            {
              label: 'Meetings',
              to: 'docs/meetings',
            },
            {
              label: 'About FINOS',
              to: 'docs/about-finos',
            }
          ]
        },
        {
          title: 'FINOS',
          items: [
            {
              label: 'FINOS Website',
              to: 'https://www.finos.org/',
            },
            {
              label: 'Community Handbook',
              to: 'https://community.finos.org/',
            },
            {
              label: 'Community Governance',
              to: 'https://community.finos.org/docs/governance/#community-governance',
            }
          ]
        },
        {
          title: 'About FINOS',
          items: [
            {
              label: 'FINOS Projects on GitHub',
              to: 'https://github.com/finos',
            },
            {
              label: 'Engage the FINOS Community',
              to: 'https://www.finos.org/engage-with-our-community',
            },
            {
              label: 'FINOS News and Events',
              to: 'https://www.finos.org/news-and-events',
            }
          ]
        },
      ]
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        gtag: {
          trackingID: 'G-H36K1GKY2H',
          anonymizeIP: true,
        },
        docs: {
          path: '../docs',
          editUrl:
            'https://github.com/finos/zenith/edit/main/website/',
          sidebarPath: require.resolve('./sidebars.json')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'primers',
        path: '../primers',
        //routeBasePath: 'primers',
        sidebarPath: require.resolve('./sidebarsprimers.json'),
        // ... other options
      },
    ],

  ]
};
