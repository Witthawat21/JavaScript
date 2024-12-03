const status1 = 700;

switch(status1){
    case 200:
        console.log('ok==OK!');
        break;
    case 400:
    case 500:
        console.log('Error!');
        break;
    default:
        console.log('Unkniw status');
            
}