// Get the arguments (after the first two default node args)
const args = process.argv.slice(2);

const first = args[0];
const second = args[1];

console.log(`${first} is ${second}`);
