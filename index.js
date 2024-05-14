/*
Grade Classifier: Write a function that takes a student's score as input and
returns a grade (A, B, C, D, or F) based on the following grading scale:
A: 90-100
B: 80-89
C: 70-79
D: 60-69
F: 0-59
*/

function GradeClassifier(score) {
    if (score >= 90 && score <= 100) {
        return 'A';
    } else if (score >= 80 && score < 90) {
        return 'B';
    } else if (score >= 70 && score < 80) {
        return 'C';
    } else if (score >= 60 && score < 70) {
        return 'D';
    } else {
        return 'F';
    }
}

/*
Time Converter: Write a function that takes a time in 24-hour format (e.g., "13:45")
as input and returns the time in 12-hour format with AM/PM (e.g., "1:45 PM").
*/

function timeConverter(time24) {
    let [hours, minutes] = time24.split(':').map(Number);
    let period = 'AM';
    
    if (hours >= 12) {
        period = 'PM';
        if (hours > 12) {
            hours -= 12;
        }
    } else if (hours === 0) {
        hours = 12;
    }
    
    return `${hours}:${minutes < 10 ? '0' + minutes : minutes} ${period}`;
}


/*
Password Strength Checker: Write a function that takes a password as input and returns
a message indicating its strength:
"Weak" if the password has fewer than 8 characters,
"Medium" if it has 8 to 12 characters,
"Strong" if it has more than 12 characters and contains at least one digit, one lowercase
letter, and one uppercase letter.
*/

function passwordStrengthChecker(password) {
    if (password.length < 8) {
        return 'Weak';
    } else if (password.length <= 12) {
        return 'Medium';
    } else {
        const hasDigit = /\d/.test(password);
        const hasLower = /[a-z]/.test(password);
        const hasUpper = /[A-Z]/.test(password);
        if (hasDigit && hasLower && hasUpper) {
            return 'Strong';
        } else {
            return 'Medium';
        }
    }
}

/*
Write a function that takes weekday's number (from 1 to 7) as an input and returns the
appropriate weekday name
*/

function getWeekdayName(dayNumber) {
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return weekdays[dayNumber - 1];
}

/*
Taxi Fare Calculator: Write a function that takes the distance traveled (in kilometers)
and the waiting time (in minutes) as input and calculates the taxi fare according to the
following rules:
Base fare: $5
Additional fee: $0.50 per kilometer
Additional fee for every 3 minutes waiting time: $1
*/

function taxiFareCalculator(distance, waitingTime) {
    const baseFare = 5;
    const perKm = 0.5;
    const waitingFee = 1;
    
    const distanceFee = distance * perKm;
    const waitingFeeTotal = Math.floor(waitingTime / 3) * waitingFee;
    
    return baseFare + distanceFee + waitingFeeTotal;
}