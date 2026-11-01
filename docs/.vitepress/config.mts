import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "HKML-X Docs",
  description: "Complete beginner-friendly documentation for HKML-X - a Telegram mirroring and leeching bot",
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Start Here', link: '/getting-started' },
      { text: 'Cheat Sheet', link: '/cheatsheet' },
      { text: 'How To', link: '/how-to/leech' },
      { text: 'Reference', link: '/configuration' },
      { text: 'Help', link: '/faq' },
    ],
    sidebar: [
      {
        text: 'Start Here',
        items: [
          { text: 'What is HKML-X?', link: '/getting-started' },
          { text: 'Quick Start (10 min)', link: '/quick-start' },
          { text: 'Cheat Sheet', link: '/cheatsheet' },
          { text: 'Word List', link: '/glossary' },
        ],
      },
      {
        text: 'Deployment',
        collapsed: true,
        items: [
          { text: 'Overview & Prerequisites', link: '/deployment/' },
          { text: 'VPS / Docker', link: '/deployment/vps' },
          { text: 'Heroku (WZ-Deploy)', link: '/deployment/heroku' },
          { text: 'Other Options', link: '/deployment/other' },
        ],
      },
      {
        text: 'How To',
        items: [
          { text: 'Send a File to Telegram', link: '/how-to/leech' },
          { text: 'Save Files to Cloud', link: '/how-to/mirror' },
          { text: 'Download from YouTube', link: '/how-to/youtube' },
          { text: 'Download Torrents', link: '/how-to/torrents' },
          { text: 'Upload to File Hosting', link: '/how-to/uphoster' },
          { text: 'Search for Content', link: '/how-to/search' },
          { text: 'Manage Your Downloads', link: '/how-to/manage' },
          { text: 'Process Files', link: '/how-to/process' },
          { text: 'Automate with RSS', link: '/how-to/rss' },
          { text: 'Upload Destinations', link: '/upload-destinations' },
        ],
      },
      {
        text: 'Advanced',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/advanced/' },
          { text: 'Plugin System', link: '/advanced/plugins' },
          { text: 'Multiple Bots & Scaling', link: '/advanced/scaling' },
          { text: 'Web UI', link: '/advanced/web-ui' },
          { text: 'Debrid-Link Integration', link: '/advanced/debrid-link' },
          { text: 'YouTube Upload', link: '/advanced/youtube-upload' },
          { text: 'Telemetry / Crash Reporting', link: '/advanced/telemetry' },
        ],
      },
      {
        text: 'Reference',
        collapsed: true,
        items: [
          { text: 'All Config Settings', link: '/configuration' },
          {
            text: 'Commands',
            items: [
              { text: 'Mirror & Leech', link: '/reference/commands/mirror-leech' },
              { text: 'Admin', link: '/reference/commands/admin' },
              { text: 'Search & Settings', link: '/reference/commands/search-settings' },
              { text: 'Arguments', link: '/reference/commands/arguments' },
            ],
          },
          { text: 'User Settings (/userset)', link: '/settings/user' },
          { text: 'Bot Settings (/botset)', link: '/settings/bot' },
        ],
      },
      {
        text: 'Help',
        collapsed: true,
        items: [
          { text: 'Troubleshooting', link: '/troubleshooting' },
          { text: 'FAQ', link: '/faq' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Imkrishana/HKML-X' },
      { icon: { svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>' }, link: 'https://t.me/HKML_X' },
    ],
    editLink: {
      pattern: 'https://github.com/rjriajul/wz-docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    footer: {
      message: 'Made with ❤️ by <a href="https://github.com/Imkrishana">Imkrishana</a>',
      copyright: 'Docs for <a href="https://github.com/Imkrishana/HKML-X">HKML-X</a>',
    },
    search: {
      provider: 'local',
    },
  },
})
