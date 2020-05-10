var monthNum   = document.getElementById('month'),
    monthName  = document.getElementById('name-month'),
    year       = document.getElementById('year'),
    daynum     = document.getElementById('day'),
    dayname    = document.getElementById('name-day'),
    numDay     = document.getElementById('num-day'),
    TotalDays  = document.getElementById('total-days'),
    newdate    = new Date(),
    month = 
            [   "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ],
    days =  
            ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

      // Get Date(Year, Month, Day)
    var getMonthName  = month[newdate.getMonth()],
        getYear       = newdate.getFullYear(),
        getdayName    = days[newdate.getDay()],
        getMonthNum   = newdate.getMonth() + 1;

      // Function For Get Number Day
    function getNumberOfDay(){
        a = new Date();
        d = a.getDate();
        return d;
    }
      // Function For Get A Number Days In Month
    function getTotalDays(m, y){
        return new Date(y, m, 0).getDate();
    }

    var getDayNum = getNumberOfDay(),
        TotalDaysValue = '/ ' + getTotalDays(getMonthNum, getYear);


    if (getMonthNum < 10){
        getMonthNum = '0' + getMonthNum;
    }else if (getDayNum < 10){
        getDayNum = '0' + getDayNum;
        
    }

    monthName.innerHTML  = getMonthName;
    monthNum.innerHTML   = getMonthNum;
    year.innerHTML       = getYear;
    dayname.innerHTML    = getdayName;
    daynum.innerHTML     = getDayNum;
    numDay.innerHTML     = getDayNum;
    TotalDays.innerHTML  = TotalDaysValue;
