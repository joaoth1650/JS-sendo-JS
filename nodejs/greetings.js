const getFlags = require('./flags');
// console.log(getFlags)
console.log(`Oi ${getFlags('--name')}. ${getFlags('--greeting')}`)