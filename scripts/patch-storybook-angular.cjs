const fs = require('node:fs');
const path = require('node:path');

const patchFile = ({ filePath, replacements }) => {
  if (!fs.existsSync(filePath)) {
    return false;
  }

  let source = fs.readFileSync(filePath, 'utf8');
  let patchedSource = source;

  for (const [pattern, replacement] of replacements) {
    patchedSource = patchedSource.replace(pattern, replacement);
  }

  if (patchedSource === source) {
    return false;
  }

  fs.writeFileSync(filePath, patchedSource);
  return true;
};

const builderPath = path.join(
  process.cwd(),
  'node_modules',
  '@storybook',
  'angular',
  'dist',
  'builders',
  'start-storybook',
  'index.js',
);

const corePath = path.join(
  process.cwd(),
  'node_modules',
  'storybook',
  'dist',
  'core-server',
  'index.cjs',
);

let didPatch = false;

didPatch =
  patchFile({
    filePath: builderPath,
    replacements: [
      [
        /,operators\.tap\(standaloneOptions=>console\.log\('\[storybook builder debug\] port=', standaloneOptions\.port, "optionsPort=", options\.port\)\)/,
        '',
      ],
      [
        /options\.port\s*=\s*parseInt\(`\$\{options\.port(?:\?\?6006|\|\|6006)?\}`,\s*10\);/,
        'options.port=parseInt(`${options.port||6006}`,10);',
      ],
    ],
  }) || didPatch;

didPatch =
  patchFile({
    filePath: corePath,
    replacements: [
      [
        `  let [a, u] = await Promise.all([
    t7(e.port, { exactPort: e.exactPort }),
    r ? rN(i) : Promise.resolve({ success: !1, cached: !1, data: {}, time: Date.now() })
  ]);`,
        `  let [a, u] = await Promise.all([
    t7(e.port, { exactPort: e.exactPort }),
    r ? rN(i) : Promise.resolve({ success: !1, cached: !1, data: {}, time: Date.now() })
  ]);
  a = a || e.port || 6006;`,
      ],
    ],
  }) || didPatch;

if (didPatch) {
  console.log('[patch-storybook-angular] Applied Storybook Angular port fallback.');
}
