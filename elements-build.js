const concat = require('concat');
(async function build() {
    const files = ['./dist/primeng-quickstart-cli/runtime.js',
'./dist/primeng-quickstart-cli/polyfills.js',
// './dist/primeng-quickstart-cli/scripts.js',
'./dist/primeng-quickstart-cli/main.js'];
await concat(files, './dist/primeng-quickstart-cli/bundle.js');
await concat(files, './plainHTML/bundle.js');})();