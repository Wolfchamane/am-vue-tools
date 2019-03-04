#!//usr/bin/env node

const path = require('path');
const args = process.argv.slice(2);

const config = require(path.resolve(process.cwd(), 'node_modules', '@am', 'vue-tools', 'config', 'jest', 'config.js'));

args.push('--no-cache');
args.push('--coverage');
args.push(`--config ${JSON.stringify(config)}`);

require('jest').run(args);
