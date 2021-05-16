/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'csquare.ai',
  tagline: 'MLOps Purpose-Built for Sustainability & Performance',
  url: 'https://docs.csquare.run',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'csquare.ai', // Usually your GitHub org/user name.
  projectName: 'docs.csquare.run', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'csquare.ai',
      logo: {
        alt: 'csquare logo',
        src: 'img/csquare-symbol.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/csquare-ai',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/csquare',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/csquareAI',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/csquareAI',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
            {
              label: 'LinkedIn',
              href: 'https://github.com/csquare-ai/',
            },
          ],
        },
      ],
      copyright: `© Copyright ${new Date().getFullYear()} csquare.ai - All rights reserved - Made in Switzerland`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/csquare-ai/docs.csquare.run/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
