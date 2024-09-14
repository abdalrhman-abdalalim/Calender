const currentDate=new Date();
const currentDay=currentDate.getDate();
const currentDayWeek = currentDate.getDay();
const currentYear=currentDate.getFullYear();
const currentMonth = currentDate.getMonth();

console.log(currentDayWeek)

const DayofWeek = Object.freeze({
  SUNDAY: 0,
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6,
});

var months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
months[12];

function getKeybyValue(obj,val){
    return Object.keys(DayofWeek).find(key=>DayofWeek[key]==val);
}

const displayDay=document.getElementsByTagName('h1')[0];
const displayDayWeek = document.getElementsByTagName("h5")[0];
const displayMonthYear = document.getElementsByTagName("p")[0];

displayDay.innerText=`${currentDay}`;
displayDayWeek.innerText=`${getKeybyValue(DayofWeek,currentDayWeek)}`
displayMonthYear.innerText = `${months[currentMonth]} ${currentYear}`;