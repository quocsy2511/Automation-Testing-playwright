const common = `
--require setup/assertions.js
--require setup/hook.js
--require step-definitions/**/*.step.js
`
module.exports = {
  default: `${common} features/**/*.feature`,
}
