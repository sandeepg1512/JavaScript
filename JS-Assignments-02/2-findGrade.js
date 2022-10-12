/*
Write a function using switch case to find the grade of a student based
on marks obtained
a. “S grade” if the marks are between 90 and 100.
b. “A grade” if the marks are between 80 and 90.
c. “B grade” if the marks are between 70 and 80.
d. “C grade” if the marks are between 60 and 70.
e. “D grade” if the marks are between 50 and 60.
f. “E grade” if the marks are between 40 and 50.
g. “Student has failed” if the marks are between 0 and 40.
h. Else output “Invalid marks”.
*/

function gradeObtained(marks) 
{
    let mark=marks;

    if(mark<=100)
    {
        switch(Math.floor(mark/10))
        {
            case 10:
            case 9:
                return "S grade";
        
            case 8:
                return "A grade";
        
            case 7:
                return "B grade";
        
            case 6:
                return "C grade";
        
            case 5:
                return "D grade";
        
            case 4:
                return "E grade";
        
            case 3:
            case 2:
            case 1:
            case 0:
                return "Student has failed";

            default:
                return "Invalid marks";    
        
        }
    }
    else
        return "Invalid marks";

}

console.log(gradeObtained(95));
console.log(gradeObtained(85));
console.log(gradeObtained(75));
console.log(gradeObtained(55));
console.log(gradeObtained(25));
console.log(gradeObtained(105)); 