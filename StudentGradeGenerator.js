//student grade generator

function getGrade(marks){
    //check if the marks are within the range
    if(marks < 0 || marks > 100){
        return "invalid marks. rang 0-100"
    }

    //assign grade based on marks
    if(marks >=80) return 'Grade A'
    if(marks >=60) return 'Grade B'
    if(marks >=49) return 'Grade C'
    if(marks >=40) return 'Grade D'
    return 'Grade E'
}

//testing the function with different marks
console.log(getGrade(85)); //should return 'Grade A'

//Prompt user for input
const userMarks = parseInt(prompt("Enter your marks:"));
console.log(getGrade(userMarks)); //should log the grade based on the user input