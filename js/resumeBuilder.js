//Work
var work = {
    "jobs": [
        {
            "employer": "Butterfly Effects",
            "title": "Behavior Analyst",
            "location": "Raleigh",
            "dates": "February, 2014 - present",
            "description": "Provide behavioral therapy for children with developmental disabilities."
        },
        {
            "employer": "Mariposa School for Children with Autism",
            "title": "Behavior Analyst",
            "location": "Cary",
            "dates": "March, 2014- September, 2014",
            "description": "Trained and supervised interns in the implementation of basic Applied Behavior Analysis procedures."
        },
        {
            "employer": "Automaticity and World Evolve Inc.",
            "title": "Senior Behavioral Therapist",
            "location": "Miami",
            "dates": "2010-2013",
            "description": "Provide behavioral therapy for children with developmental disabilities."
        }
    ]
};
work.display = function() {
	work.jobs.forEach(function(job) {	
		console.log(job);
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",job.title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace("%data%",job.dates);
		var formattedLocation = HTMLworkLocation.replace("%data%",job.location);
		var formattedDescription = HTMLworkDescription.replace("%data%",job.description);
		$(".work-entry:last").append(formattedEmployerTitle+formattedDates+formattedLocation+formattedDescription);
	});
};
work.display();

//Projects
var projects = {
	"projects": [
		{
			"title": "Broadway",
			"dates": "2017",
			"description": "https://github.com/mlama007/1Broadway",
			"images": ["images/197x148.gif","images/197x148.gif"]
		},
		{
			"title": "Innovation Cloud",
			"dates": "2017",
			"description": "https://github.com/mlama007/2InnovationCloud",
			"images": ["images/197x148.gif","images/197x148.gif"]
		},
		{
			"title": "Move",
			"dates": "2017",
			"description": "https://github.com/mlama007/3Move",
			"images": ["images/197x148.gif	","images/197x148.gif"]
		},
	]

};
projects.display = function () {
	projects.projects.forEach(function(project){ 
		$("#projects").append(HTMLprojectStart);
		var formattedprojectTitle = HTMLprojectTitle.replace("%data%",project.title);
		var formattedprojectDates = HTMLprojectTitle.replace("%data%",project.dates);
		var formattedprojectDescription = HTMLprojectTitle.replace("%data%",project.description);
		$(".project-entry:last").append(formattedprojectTitle+formattedprojectDates+formattedprojectDescription);
		if (project.images.length > 0) {
			project.images.forEach(function(image){
				var formattedprojectImage = HTMLprojectImage.replace("%data%",image);
				$(".project-entry:last").append(formattedprojectImage);
			});
		}		
	});
};
projects.display();

//BIO
var bio = {
    "name": "Maria Lamardo",
    "role": "Web Developer",
    "contacts": {
        "mobile": "9545882021",
        "email": "marialamardo@outlook.com",
        //"twitter": "@mlama007",
        "github": "https://github.com/mlama007",
        //"blog": "https://www.mymili.com/index.html",
        "location": "North Carolina"
    },
    "welcomeMessage": "Welcome to my site.",
    "skills": [
		"JavaScript",
		"Python",
		"AngularJS",
		"HTML",
		"JQuery",
		"Command Line",
		"Git",
		"SQL ",
		"CSS",
		"SCSS",
		"Visual Studio Code",
		"Microsoft Office"
        ],
    "biopic": "images/fry.jpg",    
};
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	var formattedPicture = HTMLbioPic.replace("%data%",bio.biopic);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedWelcomeMessage);
	$("#header").append(formattedPicture);
	$("#header").append(HTMLskillsStart);	
	bio.skills.forEach(function(skill){
		var formattedskills = HTMLskills.replace("%data%",skill);
		$("#skills").append(formattedskills);
	});
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedBlog = HTMLblog.replace("%data%",bio.contacts.blog);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	$("#topContacts, #footerContacts").append(formattedMobile);
	$("#topContacts, #footerContacts").append(formattedEmail);	
	$("#topContacts, #footerContacts").append(formattedGithub);	
	$("#topContacts, #footerContacts").append(formattedLocation);
	//$("#footerContacts").append(formattedBlog);
	//$("#footerContacts").append(formattedTwitter);
};
bio.display();

//Education
var education = {
	"schools" : [
		{
		"name": "Florida International University",
		"degree": "Cum Laude with Bachelors of Arts and Sciences in Psychology and a Minor in Business",
		"dates": "2009-2013",
		"location": "Miami, Florida",
		"majors": "Bachelors of Arts and Sciences in Psychology",
		"minor": "Business"
	}
	],
	"onlineCourses": [
		{
			"title": "Front-End Nanodegree",
			"school": "Udacity",
			"dates": "2017",
			"url": "https://classroom.udacity.com"
		},
		{
			"title": "HTML &amp; CSS",
			"school": "Codecademy",
			"dates": "2017",
			"url": "https://www.codecademy.com/learn"
		},
		{
			"title": "JQuery",
			"school": "Codecademy",
			"dates": "2017",
			"url": "https://www.codecademy.com/learn"
		},
		{
			"title": "JavaScript",
			"school": "Codecademy",
			"dates": "2017",
			"url": "https://www.codecademy.com/learn"
		},
		{
			"title": "Learn Sass",
			"school": "Codecademy",
			"dates": "2017",
			"url": "https://www.codecademy.com/learn"
		},
		{
			"title": "Learn AngularJS 1.X",
			"school": "Codecademy",
			"dates": "2017",
			"url": "https://www.codecademy.com/learn"
		},
		{
			"title": "Learn the Command Line",
			"school": "Codecademy",
			"dates": "2017",
			"url": "https://www.codecademy.com/learn"
		},
		{
			"title": "Learn Git",
			"school": "Codecademy",
			"dates": "2017",
			"url": "https://www.codecademy.com/learn"
		},
		{
			"title": "Make a Website",
			"school": "Codecademy",
			"dates": "2017",
			"url": "https://www.codecademy.com/learn"
		},
		{
			"title": "Deploy a Website",
			"school": "Codecademy",
			"dates": "2017",
			"url": "https://www.codecademy.com/learn"
		},
		{
			"title": "Python",
			"school": "Codecademy",
			"dates": "2017",
			"url": "https://www.codecademy.com/learn"
		},
		{
			"title": "Learn SQL",
			"school": "Codecademy",
			"dates": "2017",
			"url": "https://www.codecademy.com/learn"
		}
	]
};
education.display = function() {
	$("#education").append(HTMLschoolStart);
	education.schools.forEach(function(school){
		var formattedName = HTMLschoolName.replace("%data%",school.name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",school.degree);
		var formattedDates = HTMLschoolDates.replace("%data%",school.dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",school.location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",school.majors);
		$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
	});
	
	$(".education-entry:last").append(HTMLonlineClasses);
	education.onlineCourses.forEach(function(online){
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",online.school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%",online.dates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%",online.url);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",online.title);
		$(".education-entry:last").append(formattedOnlineSchool + formattedOnlineDates,formattedOnlineTitle);
	});
};
education.display();

//international Button
$("#main").append(internationalizeButton);
function inName(name){
	name = bio.name.trim().split(" ");
	var firstName = name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
	var lastName = name[1].toUpperCase();
	var internationalName = firstName + " " + lastName.toUpperCase();
	return internationalName;
}

//map
$("#mapDiv").append(googleMap);