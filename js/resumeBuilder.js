var bio = {
    "name": "Jack",
    "role": "Web Developer",
    "contacts": {
        "mobile": "111-111-1111",
        "email": "john@jdh3.com",
        "github": "Tak149",
        "location": "New York, NY"
    },
    "welcomeMessage": "Hello, welcome to my online resume",
    "skills": ["a skill", "more skills", "even more skills", "too many skills"],
    "bioPic": "images/koala.jpg"
};

var education = {
    "schools": [{
        "name": "Lawrence University",
        "degree": "BA",
        "major": ["East Asian Studies (Japanese)"],
        "location": "Appleton,WI",
        "dates": "2015"
    }],
    "onlineCourses": [{
        "title": "Intro to Programming",
        "school": "Udacity",
        "date": "2016-2017",
        "url": "http://www.udacity.com"
    }]
};

var work = {
    "jobs": [{
            "employer": "Bramson ORT College",
            "title": ["IT Support Technician", " Electronics Lab Assistant", " Tutor"],
            "dates": "2011-2014",
            "location": "Queens, NY",
            "description": "Worked with teachers and students in a variety of \
      capacities including tutoring, teaching, and installing/maintaing \
      equipment."
        },
        {
            "employer": "Howell Renewable Energy",
            "title": "Home Energy Auditor",
            "dates": "2008-2010",
            "location": "Bronx, NY",
            "description": "Went to peoples homes and made them more energy \
      efficient."
        },
        {
            "employer": "AltPower Inc.",
            "title": "Solar PV Installer",
            "dates": "2006-2007",
            "location": "New York, NY",
            "description": "Installed solar panels, fun times."
        }
    ]
};

var projects = {
    "projects": [{
        "title": "Project 1",
        "dates": "2016-2017",
        "description": "Not a real project, or is it?",
        "images": ["images/197x148.gif", "images/197x148.gif"]
    }]
};

//Start of display functions
bio.display = function() {
    //Header stuff
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedName, formattedRole);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);
    //skills
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (skill = 0; skill < bio.skills.length; skill++) {
            var formattedHTMLskills = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedHTMLskills);
        }
    }
    //Contact stuff
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts, #footerContacts").append(
        formattedMobile, formattedEmail, formattedGithub, formattedLocation);
};

work.display = function() {
    for (job = 0; job < work.jobs.length; job++) {
        //create new div for work experience
        $("#workExperience").append(HTMLworkStart);
        //combine employer and title
        var formattedEmployer = HTMLworkEmployer.replace("%data%",
            work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",
            work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        //adds date
        var formattedDate = HTMLworkDates.replace("%data%",
            work.jobs[job].dates);
        $(".work-entry:last").append(formattedDate);
        //adds location
        var formattedLocation = HTMLworkLocation.replace("%data%",
            work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        //adds description
        var formattedDescription = HTMLworkDescription.replace("%data%",
            work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

projects.display = function() {
    for (proj = 0; proj < projects.projects.length; proj++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%",
            projects.projects[proj].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%",
            projects.projects[proj].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%",
            projects.projects[proj].description);
        $(".project-entry:last").append(formattedDescription);
        //adds images to projects
        if (projects.projects[proj].images.length > 0) {
            for (img = 0; img < projects.projects[proj].images.length; img++) {
                var formattedImage = HTMLprojectImage.replace("%data%",
                    projects.projects[proj].images[img]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

education.display = function() {
    for (school = 0; school < education.schools.length; school++) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%",
            education.schools[school].name);
        $(".education-entry:last").append(formattedName);
        var formattedLocation = HTMLschoolLocation.replace("%data%",
            education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);
        var formattedDates = HTMLschoolDates.replace("%data%",
            education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedMajor = HTMLschoolMajor.replace("%data%",
            education.schools[school].major);
        $(".education-entry:last").append(formattedMajor);
        var formattedDegree = HTMLschoolDegree.replace("%data%",
            education.schools[school].degree);
        $(".education-entry:last").append(formattedDegree);
    }
    $('#education').append(HTMLonlineClasses);
    for (online = 0; online < education.onlineCourses.length; online++) {
        $("#education").append(HTMLschoolStart);

        var formattedTitle = HTMLonlineTitle.replace("%data%",
            education.onlineCourses[online].title);
        $(".education-entry:last").append(formattedTitle);
        var formattedSchool = HTMLonlineSchool.replace("%data%",
            education.onlineCourses[online].school);
        $(".education-entry:last").append(formattedSchool);
        var formattedDate = HTMLonlineDates.replace("%data%",
            education.onlineCourses[online].date);
        $(".education-entry:last").append(formattedDate);
        var formattedUrl = HTMLonlineURL.replace("%data%",
            education.onlineCourses[online].url);
        $(".education-entry:last").append(formattedUrl);
    }
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
