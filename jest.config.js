// // const {defaults} = require("jest-config");
// const config = {
//     verbose: true,
//   };
// module.exports = config;
// module.exports =  {
//     // transform: {
//     //     ".+\\.(css|scss|png|jpg|svg|webp)$": "jest-transform-stub",
//     // },
//     transform: {},
//     testPathIgnorePatterns: ['/node_modules/'],
//     moduleFileExtensions: [ 'ts', 'tsx'],
//     testEnvironment: "node",
// }

export default {
    transform: {},
    testPathIgnorePatterns: ['/node_modules/'],
    moduleFileExtensions: ['js','jsx'],
    testEnvironment: "jest-environment-node",
    verbose: true,
}