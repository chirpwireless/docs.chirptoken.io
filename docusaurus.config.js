// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Chirp',
  tagline: 'Chirp docs',
  url: 'https://docs.chirpwireless.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  //organizationName: 'facebook', // Usually your GitHub org/user name.
  //projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Chirpwireless',
        logo: {
          alt: 'Chirpwireless Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          { to: 'https://chirpwireless.io', label: 'Main site', position: 'left' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              { label: 'Medium', href: 'https://chirpiot.medium.com' },
              { label: 'YouTube', href: 'https://www.youtube.com/channel/UClG9ngaNeWJ-3EhQK0tJ5mQ' },
              { label: 'Twitter', href: 'https://twitter.com/ChirpIoT' },
              { label: 'Discord', href: 'https://discord.com/invite/zxAaVQgFvs' },
              { label: 'Telegram', href: 'https://t.me/ChirpIoT' },
              { label: 'Reddit', href: 'https://www.reddit.com/r/ChirpIoT/' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Chirp. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
