let a;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString(undefined, options);
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('time').innerHTML = time + "<br>on " + date;
}, 1000);

let a1;
// let date1;
// const option = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a1 = new Date();
    // date1 = a1.toLocaleDateString(undefined, option);
    la = a1.toLocaleString('en-US', { timeZone: 'Europe/London' },);
    document.getElementById('time2').innerHTML = la;
}, 1000);
let a2;
// let date1;
// const option = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a2 = new Date();
    // date1 = a1.toLocaleDateString(undefined, option);
    la = a2.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' },);
    document.getElementById('time1').innerHTML = la;
}, 1000);
let a3;
// let date1;
// const option = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a3 = new Date();
    // date1 = a1.toLocaleDateString(undefined, option);
    la = a3.toLocaleString('en-US', { timeZone: 'Australia/Sydney' },);
    document.getElementById('time3').innerHTML = la;
}, 1000);
let a4;
// let date1;
// const option = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a4 = new Date();
    // date1 = a1.toLocaleDateString(undefined, option);
    la = a4.toLocaleString('en-US', { timeZone: 'America/New_york' },);
    document.getElementById('time4').innerHTML = la;
}, 1000);
