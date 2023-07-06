import dayjs from 'dayjs';

const data = [
  {
    label: '',
    key: '',
    link: '',
  },
  {
    label: '',
    key: '',
    link: '',
  },
  {
    label: '',
    key: '',
    link: '',
  },
  {
    label: '',
    key: '',
    link: '',
  },
  {
    label: '',
    key: '',
    link: '',
  },
  {
    label: '',
    key: '',
    link: '',
  },
  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: '',
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  },
  {
    // TODO update this with a pre-commit hook
    /* find . | grep ".js" | grep -vE ".min.js|node_modules|.git|.json" |
    xargs -I file cat file | wc -l */
    label: 'Lines of Javascript powering this website',
    value: '2150',
    link: 'https://github.com/kr4ge/portfolio/graphs/contributors',
  },
];

export default data;
