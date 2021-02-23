import {baseHrefRewrite} from '@scullyio/scully-plugin-base-href-rewrite';
import {ScullyConfig, setPluginConfig} from '@scullyio/scully';

const {FixStaticLinks} = require('./scully/plugins/fixStaticLinks');

const defaultPostRenderers = [baseHrefRewrite, FixStaticLinks];
setPluginConfig(baseHrefRewrite, {href: `/${process.env.LOCALE}/`});

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'rive-test-project',
  distFolder: `./dist/rive-test-project/${process.env.LOCALE}`,
  outDir: `./dist/static/${process.env.LOCALE}`,
  puppeteerLaunchOptions: {args: ['--no-sandbox', '--disable-setuid-sandbox']},
  defaultPostRenderers,
  routes: {}
};
