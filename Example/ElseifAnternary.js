const status1 = 200;

if(status1 === 200) {
    console.log('OK');
}
else if (status1 === 400) {
    console.log('Error');
}
else{
    console.log('Unknow status');
}

//Ternary
const status2 = 400;

const message = (status2 == 200) ?'OK': 
                (status2 == 400)? 'Error!': 'Unknowstatus';

console.log(message);