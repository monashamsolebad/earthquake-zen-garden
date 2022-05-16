module.exports = {
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
    'Src/(.*)': '<rootDir>/src/$1',
    'Pages/(.*)': '<rootDir>/src/pages/$1',
    'Components/(.*)': '<rootDir>/src/components/$1',
  },
  //   moduleNameMapper: {
  //     'Components/(.*)': path.resolve(__dirname, 'src/components/'),
  //     'Pages/(.*)': path.resolve(__dirname, 'src/pages/'),
  //     'Src/(.*)': path.resolve(__dirname, 'src/'),
  //   },
}

// extensions: ['.js', '.jsx', '.json', '.ts'],
//     alias: {
//       Components: path.resolve(__dirname, 'src/components/'),
//       Pages: path.resolve(__dirname, 'src/pages/'),
//       Src: path.resolve(__dirname, 'src/'),
//     },
