// process.stdout.write('prompt > ');
// process.stdin.on('data', (data) => {
//   const cmd = data.toString().trim();

//   process.stdout.write('You typed: ' + cmd);
//   process.stdout.write('\nprompt > ');

// });

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  if (cmd === "pwd") {
    require("./pwd.js");
  } else if (cmd === "ls") {
    require("./ls.js");
  }
  //   process.stdout.write("\nprompt > ");
});

/*
PROBLEMS WE'RE HAVING
- an extra blank space when pwd is run first time
- pwd not clearing (hit enter, still pwd output)
- ls list beginning on prompt line ("prompt>.git")
    - only fixed if ls run first (before pwd)
- ls can only run one time

*/
