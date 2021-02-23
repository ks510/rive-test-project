const {registerPlugin} = require('@scullyio/scully');

const FixStaticLinksPlugin = 'fixStaticLinks';

const fixStaticLinksPlugin = async (html) => {
  const regex = new RegExp('(<a[^>]* href="\/)([^"]*)"', 'gmi');
  html = html.replace(regex, `$1${process.env.LOCALE}/$2"`);

  return Promise.resolve(html);
};


registerPlugin('router', 'fixStaticLinks', fixStaticLinksPlugin);
exports.FixStaticLinksPlugin = FixStaticLinksPlugin;
