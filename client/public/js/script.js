// const moment = require('moment')

// const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

// const currentTime = moment().tz(timezone).format();

// console.log(currentTime);

// $('.date').click(function(){
//     console.log(currentTime);
// })
var values = []

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


$('.date').each(function(){

    $(this).find(':input').each(function(){
        values.push($(this).val())
    })

    var index = $('.date').index(this)

    var convertDate = convertUTCDateToLocalDate(new Date(values[index]))

    var month = months[convertDate.getMonth()]
    
    var day = convertDate.getDate()

    var year = convertDate.getFullYear()

    $(this).find('.showDate').text(new Date(values[index]).toLocaleString())

    // console.log(new Date(values[index]));
    // console.log(index);
    // console.log(convertUTCDateToLocalDate(new Date(values[index])));
})

var d = new Date("2021-06-05T17:01:20.247Z")
console.log(d);
console.log(convertUTCDateToLocalDate(d));
function convertUTCDateToLocalDate(date) {
    var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);

    var offset = date.getTimezoneOffset() / 60;
    var hours = date.getHours();

    newDate.setHours(hours - offset);

    return newDate;   
}

$('.editItem').mouseover(function () {
    $(this).css('color', "blue")
}).mouseout(function () {
    $(this).css('color', '#b7bdc5')
})