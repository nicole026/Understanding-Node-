// process.stdout.write("prompt > ");

module.exports = process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  process.stdout.write(process.cwd());

  process.stdout.write("\nprompt > ");
});

// MOST RECENT ATTEMPT -- gives opposite of problem #1
// module.exports = process.stdout.write(process.cwd());

// FULLSTACK'S GIVEN CODE
/*
process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();
  
    process.stdout.write('You typed' + cmd);
    process.stdout.write("\nprompt > ");
  });
  
  */
