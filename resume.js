var name = "Shantanu Sahai";
var career = "Aspiring Developer";
var description  = "This is my resume";

console.log("Name: " + name.toUpperCase());
console.log("Career: " + career);
console.log("Desciption: " + description);

console.log("My Interests: ");
console.log("* Ping Pong");
console.log("* Soccer");
console.log("* Music");
console.log("* Programming");
console.log("* Hiking");

function displayPosition(companyName, jobTitle, jobDescription){
    console.log("* " + jobTitle + " at " + companyName + " - " + jobDescription);
}

console.log("My Previous Experience: ");

displayPosition("Nissan North America", "ESM Specialist", "Maintained a program called 'ASIST'");
displayPosition("SuccessEHS", "Junior Java Developer", "Programmed CCDA Reports");
displayPosition("North American Construction Services", "ISO Coordinator/Developer", "Obtained 2 ISO Certifications" );

function displaySkill(skillName, isItCool){
    if(isItCool == true){
        console.log("* Check It: " + skillName);
    } else {
        console.log("* " + skillName);
    }
}

console.log("My Skills: ");

displaySkill("Programming", true);
displaySkill("Playing Drums", true);
displaySkill("Radio Host", true);
displaySkill("Long Distance Running", false);