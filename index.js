let data;
let time;
let date;
let day_num;
let day_final;
let month;

setInterval(() => {
    // getting data
    data  = new Date();
    // getting time
    time = data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds();

    // getting date months Year
    month = data.getMonth()
    month++;
    date = data.getDate() + '/' + month + '/' + data.getFullYear();

    // getting the day
    day_num = data.getDay();

    // setting day acc to day number
    switch(day_num){
        case 0:
            day_final = "Sunday";
            break;
        case 1:
            day_final = "Monday";
            break;
        case 2:
            day_final = "Tuesday";
            break;
        case 3:
            day_final = "Wednesday";
            break;
        case 4:
            day_final = "Thursday";
            break;
        case 5:
            day_final = "Friday";
            break;
        case 6:
            day_final = "Saturday";
            break;
        default:
            day_final = null;
    }

    document.getElementById("time").innerHTML = time;
    document.getElementById('date').innerHTML = date;
    document.getElementById('day').innerHTML = day_final;
},1000)

