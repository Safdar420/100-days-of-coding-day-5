// Q no 13
var Favouritetransports = ["CIVICS CAR", "ODI CAR", "PRADO CAR", "LANCRUSOR", "DOUBLRDOOR", "MURSADIES"];
for (var i = 0; i < Favouritetransports.length; i++) {
    console.log("I would like to my own ".concat(Favouritetransports[i]));
}
// Q no 14
var GuestList = ["WAKEEL-TAREEN", "AMIR", "ADIL", "RAHEEL", "JAWWAD"];
GuestList.forEach(function (element) {
    console.log("".concat(element, " you are coordinali invited on aftar party dinner"));
});
// Q no 15
var unabletoattend = "WAKEEL-TAREEN";
console.log("".concat(unabletoattend, " cant make it to aftar party dinner"));
var Neguest = "ABDULLAH";
GuestList[GuestList.indexOf(unabletoattend)] = Neguest;
GuestList.forEach(function (element) {
    console.log("".concat(element, " you are coordinali invited on aftar party dinner"));
});
