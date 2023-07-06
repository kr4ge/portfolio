/**
 * @typedef {Object} Position
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Datagen Facilities, OPC',
    position: 'Web Developer',
    url: 'https://datagenf.com',
    startDate: '2023-07-03',
    summary: 'Datagen Facilities, OPC is continuously upgrading its infrastructure and manpower resources to provide valuable end to end solutions to global market. Our innovative technology is customizable to accommodate all business back-office support. We dedicate our resources and manpower in all our endeavors to ensure customer satisfaction.',
    highlights: [
      'Create reusable and modular React components to build interactive and responsive user interfaces.',
    ],
  },
  {
    name: 'Northpoint Development Bank',
    position: 'Jr. Programmer',
    url: 'https://northpoint.ph',
    startDate: '2023-01-10',
    endDate: '2023-07-01',
    summary: 'Corporate Profile THE BEGINNINGS OF NORTHPOINT DEVELOPMENT BANK, INC. Northpoint Development Bank, Inc., is a part of the continuously growing businesses of the Ongtenco Family operating in diverse industries; vehicle distributorship, real estate, education, and banking. Its sister companies consist of Motortrade Nationwide Corporation, Bank of Makati, Inc.',
    highlights: [
      'Proficient in developing web applications using PHP, HTML, CSS, JavaScript, and CodeIgniter MVC framework, with a strong understanding of software design patterns and best practices.',
      'Collaborated cross-functionally to enhance the existing banking system, implementing new features and improving user experience, resulting in improved operational efficiency and customer satisfaction.',
      'Provided cross-branch technical support, troubleshooting issues and guiding employees on system use through training and guidance.',
    ],
  },
];

export default work;
