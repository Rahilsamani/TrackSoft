// calculate total work
exports.calculateTotalWork = (inTime, outTime) => {
  const [inHours, inMinutes, inSeconds] = inTime.split(":").map(Number);
  const [outHours, outMinutes, outSeconds] = outTime.split(":").map(Number);

  const inDate = new Date();
  inDate.setHours(inHours, inMinutes, inSeconds);

  const outDate = new Date();
  outDate.setHours(outHours, outMinutes, outSeconds);

  const totalMilliseconds = outDate - inDate;
  const totalSeconds = Math.floor(totalMilliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};
