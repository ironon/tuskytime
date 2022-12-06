//todo alphabetize the course names
import allCourses from "@/assets/courses.json"
var toBeRemoved = []

function removeEntry(gradeRange, courses) {
    var i = courses['Grade'].indexOf(gradeRange)
    courses['Name'].splice(i, 1)
    courses['Code'].splice(i, 1)
    courses['Prerequisite'].splice(i, 1)
    courses['Credit'].splice(i, 1)
    courses['Grade'].splice(i, 1)
}
export var getCourses = (grade:any) => {
    console.log("Getting courses!")

    if (grade == null) {
        console.log("Grade is null :(")
        return allCourses
    }
    var courses = JSON.parse(JSON.stringify(allCourses))

    function filterByGrade(courses) {
        let i = 0; 
        while (i < courses['Grade'].length) {
            var gradeRange = courses['Grade'][i]
        
            var index = i
            var isWithinRange = false
            if (gradeRange == grade) {
                isWithinRange = true
            }
            if (gradeRange.includes(",")) {
                isWithinRange = gradeRange.includes(grade)
            }
            if (gradeRange.includes("-")) {
                var range = gradeRange.split("-")
                // console.log(range[0] + " < " + grade + " < " + range[1])
                isWithinRange = parseInt(range[0])-1 <= grade && parseInt(range[1])+1 >= grade
            }
            // console.log(courses['Name'][index] + " is " + isWithinRange)
            if (!isWithinRange) {
                removeEntry(gradeRange, courses)
            } else {
                i += 1
            }
        }
        // courses['Grade'].forEach((gradeRange, index) => {
            
        // })
        return courses
    }
    console.log(courses['Name'].length)
    var filteredCourses = filterByGrade(courses)
 
    console.log(filteredCourses)
    return filteredCourses
}


