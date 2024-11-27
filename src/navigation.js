import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'User Group',
      links: [
        {
          text: 'About the user group',
          href: getPermalink('/usergroup'),
        },
        {
          text: 'Next event',
          href: getPermalink('/nextevent'),
        },
        {
          text: 'Scheduled events',
          href: getPermalink('/usergroup/#scheduledevents'),
        },
      ],
    },
    {
      text: 'Conference',
      href: getPermalink('/conference'),
    },
    {
      text: 'Speakers',
      href: getPermalink('/speakers'),
    },
    {
      text: 'Sponsors',
      href: getPermalink('/sponsors'),
    },
    {
      text: 'More',
      links: [
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Experts Live global',
          href: getPermalink('https://www.expertslive.org'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'User Group',
      links: [
        {
          text: 'About the user group',
          href: getPermalink('/usergroup'),
        },
        {
          text: 'Call for Speakers',
          href: getPermalink('https://sessionize.com/ExpertsLiveUK/'),
        },
      ],
    },
    {
      title: 'Conference',
      links: [
        {
          text: 'The Conference',
          href: getPermalink('/conference'),
        },
      ],
    },
    {
      title: 'Sponsors',
      links: [
        {
          text: 'The Sponsors',
          href: getPermalink('/sponsors'),
        },
      ],
    },
    {
      title: 'More',
      links: [
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/ExpertsLiveUK' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/expertliveuk' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 rounded-sm"></span>
    Experts Live · All rights reserved 2024.
  `,
};
