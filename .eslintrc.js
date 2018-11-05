module.exports = {
  extends: ['react-app', 'prettier', 'prettier/react', 'prettier/standard'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'error',
  },
};
