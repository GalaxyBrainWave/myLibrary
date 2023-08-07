function millisecBreakDown(dateInt) {
  let localToUTC_Difference = 2;
  let millisec = Number(dateInt.toString().split('').slice(-3).join(''));
  let totalSeconds = ( dateInt - millisec ) / 1000;
  let seconds = totalSeconds % 60;
  let totalMinutes = ( totalSeconds - seconds ) / 60;
  let minutes = totalMinutes % 60;
  let totalHours = ( totalMinutes - minutes ) / 60;
  let hours = totalHours % 24;
  hours += localToUTC_Difference;
  let display = hours + ' : ' + minutes + ' : ' + seconds + '.' + millisec
  console.log(display);
}
let date = new Date();
millisecBreakDown(date.getTime());