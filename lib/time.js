export const millisToMinutesAndSeconds = (millis) => {
  const minutes = Math.floor(millis / 60000); //352800/60000 = 5.88 ==> 5
  const seconds = ((millis % 60000) / 1000).toFixed(0); //352800%60000 = 52800/1000 ==> 52.8==> 53 seconds

  return seconds == 60
    ? minutes + 1 + ':00'
    : minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};
