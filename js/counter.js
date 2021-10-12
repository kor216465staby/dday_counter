var day = new Date('2022, 01, 27');
var present = new Date();
var alpha = present.getTime() - day.getTime();
var dday = Math.floor(alpha / (1000 * 60 * 60 * 24)) * -1;
if (dday==0) {
  document.getElementById("inday").innerHTML="D-Day";
}
else {
  document.getElementById("inday").innerHTML="D - "+dday;
}
