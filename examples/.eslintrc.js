module.exports = {
  parserOptions: {
    project: './tsconfig.build.json',
  },
  rules: {
    'jest/expect-expect': ['error', { assertFunctionNames: ['expect', 'request.**.expect'] }],
  },
};
