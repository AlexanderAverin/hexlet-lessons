var _ = require('lodash');

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
];
// First version
const giveDomain = (email) => email.slice(email.indexOf('@') + 1, email.length);

const getFreeDomainsCount = (emails) => emails
  .filter((email) => freeEmailDomains.indexOf(giveDomain(email)) !== -1)
  .reduce((acc, item) => {
    const host = giveDomain(item);
    const group = acc[host] ?? [];
    return { ...acc, [host]: Number(group + 1) };
  }, {});

// Second version

const getFreeDomainsCount = (emails) => emails
  .filter((email) => {
    const [name, domain] = email.split('@');
    return domain;
  }
  .reduce((acc, item) => {
    const counter = ;
    const group = acc[host] ?? [];
    return { ...acc, [host]: Number(group + 1) };
  }, {});

const emails = [
  'info@gmail.com',
  'info@yandex.ru',
  'info@hotmail.com',
  'mk@host.com',
  'support@hexlet.io',
  'key@yandex.ru',
  'sergey@gmail.com',
  'vovan@gmail.com',
  'vovan@hotmail.com',
  'Sasha@gmail.com',
  'vova@icloud',
];

console.log(getFreeDomainsCount(emails));
