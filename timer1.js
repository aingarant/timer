let times = process.argv.splice(2);
times = times.sort((a, b) => a - b)
let delay = Number(times[0]);
if (!delay)
{
  return;
}
times.map(interval => {
  let time = Number(interval);
  setTimeout((time) => {
    console.log("\007");
  }, delay)

  delay = delay + time * 1000;
})

// const alarmDing = () => {
//   console.log("\007");
// }

// alarmDing();