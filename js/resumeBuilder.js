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
function displayWork () {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployerTitle+formattedDates+formattedLocation+formattedDescription);
	}
};
displayWork();

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
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedprojectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		var formattedprojectDates = HTMLprojectTitle.replace("%data%",projects.projects[project].dates);
		var formattedprojectDescription = HTMLprojectTitle.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedprojectTitle+formattedprojectDates+formattedprojectDescription);
		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images){
				var formattedprojectImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedprojectImage);
			}
		}		
	}
}
projects.display();

//BIO
var bio = {
    "name": "Maria Lamardo",
    "role": "Web Developer",
    "contact": {
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
    "bioPic": "images/fry.jpg",    
};
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	var formattedPicture = HTMLbioPic.replace("%data%",bio.bioPic);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedWelcomeMessage);
	$("#header").append(formattedPicture);
	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills) {
		var formattedskills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedskills);
	};
	var formattedMobile = HTMLmobile.replace("%data%",bio.contact.mobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contact.email);
	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contact.twitter);
	var formattedGithub = HTMLgithub.replace("%data%",bio.contact.github);
	var formattedBlog = HTMLblog.replace("%data%",bio.contact.blog);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contact.location);
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);	
	$("#footerContacts").append(formattedGithub);	
	$("#footerContacts").append(formattedLocation);
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
		"major": "Bachelors of Arts and Sciences in Psychology",
		"minor": "Business"
	}
	],
	"onlineCourse": [
		{
			"title": "Front-End Nanodegree",
			"school": "Udacity",
			"dates": 2017,
			"url": "https://classroom.udacity.com"
		},
		{
			"title": "HTML &amp; CSS",
			"school": "Codecademy",
			"dates": 2017,
			"url": "https://www.codecademy.com/learn"
		},
		{
			"title": "JQuery",
			"school": "Codecademy",
			"dates": 2017,
			"url": "https://www.codecademy.com/learn"
		},
		{
			"title": "JavaScript",
			"school": "Codecademy",
			"dates": 2017,
			"url": "https://www.codecademy.com/learn"
		},
		{
			"title": "Learn Sass",
			"school": "Codecademy",
			"dates": 2017,
			"url": "https://www.codecademy.com/learn"
		},
		{
			"title": "Learn AngularJS 1.X",
			"school": "Codecademy",
			"dates": 2017,
			"url": "https://www.codecademy.com/learn"
		},
		{
			"title": "Learn the Command Line",
			"school": "Codecademy",
			"dates": 2017,
			"url": "https://www.codecademy.com/learn"
		},
		{
			"title": "Learn Git",
			"school": "Codecademy",
			"dates": 2017,
			"url": "https://www.codecademy.com/learn"
		},
		{
			"title": "Make a Website",
			"school": "Codecademy",
			"dates": 2017,
			"url": "https://www.codecademy.com/learn"
		},
		{
			"title": "Deploy a Website",
			"school": "Codecademy",
			"dates": 2017,
			"url": "https://www.codecademy.com/learn"
		},
		{
			"title": "Python",
			"school": "Codecademy",
			"dates": 2017,
			"url": "https://www.codecademy.com/learn"
		},
		{
			"title": "Learn SQL",
			"school": "Codecademy",
			"dates": 2017,
			"url": "https://www.codecademy.com/learn"
		}
	]
};
education.display = function() {
	$("#education").append(HTMLschoolStart);
	for(school in education.schools) {
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
		$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
	}
	
	$(".education-entry:last").append(HTMLonlineClasses);
	for (online in education.onlineCourse) {		
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourse[online].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourse[online].dates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourse[online].url);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourse[online].title);
		$(".education-entry:last").append(formattedOnlineSchool + formattedOnlineDates,formattedOnlineTitle);
	}
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