// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

const organizationName = 'chirpwireless';
const projectName = 'docs.chirptoken.io';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Chirp',
  tagline: 'Chirp docs',
  url: 'https://docs.chirptoken.io',
  baseUrl: '/',
  organizationName,
  projectName,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: false,
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],

  ],
  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-EN1MW4P5TB',
        anonymizeIP: true,
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      image: 'img/logo_black.jpg',
      navbar: {
        title: 'Chirp DePIN',
        logo: {
          alt: 'Chirp Logo',
          src: 'img/logo.svg',
          width: '40px',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Mining Wiki',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Client Wiki',
          },
          { to: 'https://chirptoken.io', label: 'Main site', position: 'left' },
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
              { label: 'Twitter', href: 'https://x.com/ChirpDeWi' },
              { label: 'Discord', href: 'https://discord.com/invite/zxAaVQgFvs' },
              { label: 'Telegram', href: 'https://t.me/ChirpIoT' },
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
