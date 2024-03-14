// Q no 13
let Favouritetransports :string[] =["CIVICS CAR","ODI CAR","PRADO CAR","LANCRUSOR","DOUBLRDOOR","MURSADIES"];

for (let i = 0; i <    Favouritetransports.length; i++) {
    console.log(`I would like to my own ${Favouritetransports[i]}`);
}

// Q no 14

let GuestList :string[] =["WAKEEL-TAREEN","AMIR","ADIL","RAHEEL","JAWWAD"];
GuestList.forEach(element => {
   console.log(`${element} you are coordinali invited on aftar party dinner`);
    
});

// Q no 15

let unabletoattend :string ="WAKEEL-TAREEN";
console.log(`${unabletoattend} cant make it to aftar party dinner`);

let Neguest :string ="ABDULLAH";
GuestList[GuestList.indexOf(unabletoattend)]=Neguest;

GuestList.forEach(element => {  
    console.log(`${element} you are coordinali invited on aftar party dinner`);
});
