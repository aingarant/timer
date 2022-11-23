let times = process.argv.splice(2);
times = times.filter(time => !isNaN(time)).filter(time => time >= 0).sort((a, b) => a - b);
times.map((time) => {
  setTimeout(() => {
    console.log("\007");
    console.log(`ding at ${time} seconds`);
  }, time * 1000);
});