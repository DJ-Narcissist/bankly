function convertTimeToWords(time) {
    const hours = [
        "midnight", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
        "eleven", "twelve"
    ];

    const minutes = [
        "o'clock", "oh one", "oh two", "oh three", "oh four", "oh five", "oh six", "oh seven", "oh eight",
        "oh nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen",
        "eighteen", "nineteen", "twenty", "twenty one", "twenty two", "twenty three", "twenty four",
        "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine"
    ];

    const timeArray = time.split(":");
    const hour = parseInt(timeArray[0]);
    const minute = parseInt(timeArray[1]);

    if (hour === 0 && minute === 0) {
        return hours[0];
    }   else if (hour === 12 && minute === 0) {
        return "noon";
    }   else {
        const ampm = hour < 12 ? "am" : "pm";
        const hourInWords = hours[hour % 12];
        const minuteInWords = minutes[minute];
        return minute === 0 ? `${hourInWords} ${minutes[0]} ${ampm}` : `${hourInWords} ${minuteInWords} ${ampm}`;
    }
}