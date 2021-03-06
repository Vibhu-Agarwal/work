/*
 * Projects listing
 */

let projects = [
	{
		id: "quick-pdf",
		name: "quick-pdf",
		desc: [
			"CLI for quick PDF handling 📄",
			"Features: 1) Merging PDF in a given folder",
		],
		date: "2021-21",
		github: "https://github.com/Vibhu-Agarwal/quickpdf",
		websites: ["https://pypi.org/project/quick-pdf/"],
		weight: 2,
		tags: ["pdf", "cli", "python", "packaging", "pypi"],
	},
	{
		id: "Hedwig",
		name: "Hedwig 🦉💬",
		desc: [
			"An asynchronus web-server to support chat-applications having multiple rooms/groups.",
			"Hedwig is built using FastAPI and websockets.",
			"Redis is used as the caching layer for messages - its Pub/Sub feature is used for triggering sending/receiving of messages.",
			"MongoDB is used as the persistent storage",
		],
		date: "2021-21",
		github: "https://github.com/shawarmaKoders/Hedwig",
		weight: 2,
		tags: ["async", "python", "fastapi", "websockets", "chat", "redis"],
	},
	{
		id: "Hostel-Adda",
		name: "Hostel-Adda",
		desc: [
			"A cross-platform mobile app to simplify the life of hostellers.",
			"The app has a plethora of features, few of them being: managing local-area tasks like laundry, making bulk orders among various hostellers, notices broadcasting and dedicated chatting.",
			"The App is primarily made using React-Native and is built around tools and libraries provided by Expo.",
			"The back-end follows a micro-service architecture comprising of different services using different programming languages",
			"The primary service is backed by ExpressJS based back-end which is hosted on Heroku Servers.",
			"Other services like chatting (which uses Hedwig, the messenger) are hosted independently.",
			"MongoDB is used as the Database.",
		],
		date: "2020-21",
		github: "https://github.com/shawarmaKoders/HostelAdda",
		websites: [
			"https://play.google.com/store/apps/details?id=com.vibhu4agarwal.Hostel_Adda",
		],
		weight: 2,
		tags: ["android", "ios", "react-native", "javascript", "nodejs", "mongoDB"],
	},
	{
		id: "single-sign-on",
		name: "Single-Sign-On",
		desc: [
			"A server implementation to centralize authorization and authentication in your architecture.",
			"Single-Sign-On (SSO) allows users to authenticate with a single ID and password to any of several related, yet independent, software systems.",
			"It's implemented using Django, uses cryptography for generating public and private keys and serves using REST-APIs.",
			"This was originally developed during my the time when I was working at VigaStudios.",
			"Also, I spoke about it at PyCon India and PyCon Sweden in 2020 :)",
		],
		date: "2020-20",
		github:
			"https://github.com/Vibhu-Agarwal/Developing-an-SSO-Service-using-Django",
		weight: 2,
		tags: ["python", "django", "sso", "authentication"],
	},
	{
		id: "Binge-o-Philia",
		name: "Binge-o-Philia",
		desc: [
			"A full-fledged social networking platform developed for movie enthusiasts",
			"An app to keep the movie-buffs connected, updated and well managed of their time, activities and data",
			"The App is primarily made using React-Native and is built around tools and libraries provided by Expo.",
			"The application is backed by Django framework based back-end which is hosted on Heroku Servers.",
			"Database and Storage is completely decoupled from the back-end by using separate services for them in the form of Amazon’s AWS S3 and PostgreSQL.",
		],
		date: "2020-20",
		github: "https://github.com/Vibhu-Agarwal/App-Innovation-Challenge-2020",
		websites: [
			"https://play.google.com/store/apps/details?id=com.vibhu4agarwal.Binge_o_Philia",
		],
		weight: 2,
		tags: ["android", "ios", "react-native", "javascript", "django", "aws-s3"],
	},
	{
		id: "notification-server",
		name: "Notification-Server",
		desc: [
			"A server to make HTTP requests at a particular time with a database-backed work queue",
			"This project aims to be a very easy-to-use server to schedule HTTP request-APIs (for GET, POST, PATCH etc.) in future.",
			"It can be used for scheduling reminders or for monitoring a particular server - without having to manually configure celery.",
			"It is built using django-background-tasks which is loosely based around Ruby’s DelayedJob library.",
		],
		date: "2020-20",
		github: "https://github.com/Vibhu-Agarwal/notification-server",
		websites: [
			"https://vibhu4agarwal.hashnode.dev/scheduling-notifications-in-django",
		],
		weight: 2,
		tags: ["python", "django", "scheduling", "notifications"],
	},
	{
		id: "el-clasico",
		name: "El Clásico",
		desc: [
			"A simple score-keeper-app made in React Native",
			"The app can keep up the score of the game providing the features of counting goals, shots, shots on target, \
			fouls committed, corners taken, or number of offside calls against the team.",
			"Look and feel of the app belongs to the primary colours of the two teams. \
			White and Blue belonging to Madrid, and Blue and Yellow to Barcelona.",
			"Replica of https://vibhu-agarwal.github.io/projects/#/score-keeper-app in React Native",
		],
		date: "2020-20",
		github: "https://github.com/Vibhu-Agarwal/El_Clasico",
		weight: 2,
		tags: ["android", "ios", "react-native", "javascript", "football"],
	},
	{
		id: "av-helper",
		name: "av-helper",
		desc: [
			"An Audio-Video Helper Utility Package in Python",
			"Convert video-format file to audio-format file",
			"Merge an Audio-file to a video file at a particular frame with option of modifying volume level",
		],
		date: "2020-20",
		github: "https://github.com/Vibhu-Agarwal/av_helper/",
		websites: ["https://pypi.org/project/av-helper/"],
		weight: 2,
		tags: ["audio-video", "cli", "python", "packaging", "pypi"],
	},
	{
		id: "entry-management-app",
		name: "Entry Management App",
		desc: [
			"A web application for an organization to manage entry records of visitors",
			"Entry Management App is a web application that can be used at entry-points at several places, \
			partcularly targetting offices where it needs to digitalize their process of maintaining records of visitors and visits.",
			"The application keeps the users updated about entry and exit of the visit through text messages and mails.",
			"The application backed by Django framework and for its back-end and uses SQLite3 as database to store data. \
			It also makes use of Twilio APIs to send SMS to Hosts of the Visit. \
			The front-end of the application is written in HTML and CSS and uses AJAX calls with forms for auto-completion.",
		],
		date: "2019-19",
		github: "https://github.com/Vibhu-Agarwal/Entry_Management_App",
		weight: 2,
		tags: ["django", "python", "twilio-api", "ajax"],
	},
	{
		id: "hit-me-news",
		name: "Hit-Me-News",
		desc: [
			"An Alexa Skill which keeps you updated about the latest headlines",
			"Provides dynamic content (latest news). News Headlines are categorical, based on data from user-interaction.",
			"Scrapes the websites for News Headlines.",
			"Alexa triggered AWS-Lambda Back-end.",
		],
		date: "2019-19",
		github: "https://github.com/Vibhu-Agarwal/hit-me-news-alexa-skill",
		weight: 2,
		tags: ["alexa", "aws-lambda", "web-scraping", "python"],
	},
	{
		id: "mospi",
		name: "MOSPI-website",
		desc: [
			"Website for Ministry of Statistics and Programme Implementation (MOSPI)",
			"Developed at Grand Finale of Smart India Hackathon 2019",
			"Generates Template Sheets for each hierarchy at Ministry and Automates the task of reading raw data from excel sheets.",
			"Make calculations of GVA and other parameters and Reports statements and view insights through Charts and Graphs.",
		],
		date: "2019-19",
		weight: 2,
		tags: ["django", "sih", "python", "openpyxl"],
	},
	{
		id: "guess-them-avengers",
		name: "Guess Them Avengers",
		desc: ["An Alexa Skill based around quizzing Marvel's Avengers"],
		date: "2019-19",
		github: "https://github.com/Vibhu-Agarwal/guess-Them-Avengers/",
		weight: 2,
		tags: ["alexa", "aws-lambda", "python"],
	},
	{
		id: "interactive-resume",
		name: "Interactive Resume on CLI",
		desc: [
			"My Interactive Resume made command-line up",
			"Proper Highlighting by using bold/italics with appropriate colors.",
			"Packaged in Python and published on PyPI",
		],
		date: "2019-19",
		github: "https://github.com/Vibhu-Agarwal/vibhu4agarwal",
		websites: ["https://pypi.org/project/vibhu4agarwal/"],
		weight: 2,
		tags: ["cli", "python", "packaging", "pypi", "resume"],
	},
	{
		id: "amfr",
		name: "Attendance Management through Face Recognition",
		desc: [
			"A python based Desktop App to manage Attendance in an Institute",
			"Real Time Face Detection and Recognition.",
			"Separate Dedicated Panels for Manager and Students.",
			"Add new Batches and Students in Manager Panel",
			"Capture Images for Training Data",
			"Automated Attendance Register maintainance in Excel Sheets",
		],
		date: "2018-19",
		github:
			"https://github.com/Marauders-9998/Attendance-Management-using-Face-Recognition",
		weight: 2,
		tags: ["tkinter", "python", "opencv", "openpyxl", "desktop-app"],
	},
	{
		id: "marauders-website",
		name: "Marauders-Website",
		desc: [
			"A Website made for Marauders, an organization.",
			"Python Microframework, Flask powered Website using SQL as database.",
			"Github OAuth Integration for Authorization and Authentication.",
			"External APIs to provide Marauders' data to other developers",
		],
		date: "2018-19",
		github: "https://github.com/Marauders-9998/Marauders-Website",
		websites: ["http://marauders9998.herokuapp.com/"],
		weight: 2,
		tags: ["github-api", "python", "oauth", "flask"],
	},
	{
		id: "potter-spells",
		name: "potter-spells",
		desc: [
			"A python package to list all Harry Potter spells.",
			"Specifically, the scripts scrape the data from the website harrypotter.wikia.com and and provides all the spells.",
			"The various python scripts provides various filters to list out the spells and enchantments \
			(magic enchantments which are not specifically spells).",
		],
		date: "2018-18",
		github: "https://github.com/Vibhu-Agarwal/potter_spells",
		websites: ["https://pypi.org/project/potter-spells/"],
		weight: 2,
		tags: ["python", "packaging", "web-scraping", "pypi"],
	},
	{
		id: "automate-fb-posting",
		name: "Automated Facebook Posting via Speech to Text",
		desc: [
			"A python script to post on Facebook",
			"Speech to Text using wit.ai API",
			"Browser Automation using selenium module",
		],
		date: "2018-18",
		github:
			"https://github.com/Vibhu-Agarwal/Automated-Facebook-Post-from-Speech-to-Text",
		weight: 2,
		tags: ["automation", "python", "speech-to-text", "selenium"],
	},
	{
		id: "score-keeper-app",
		name: "El-Clasico",
		desc: [
			"An Android App to help record the score of a Football Match.",
			"The app can keep up the score of the game providing the features of counting goals, shots, shots on target, \
			fouls committed, corners taken, or number of offside calls against the team and lastly, a Reset button.",
			"Used Relative Layout as the outermost Layout and all the nested layouts are \
			Linear Layouts with different orientations according to the need in different sections.",
			"Look and feel of the app belongs to the primary colours of the two teams. \
			White and Blue belonging to Madrid, and Blue and Yellow to Barcelona.",
		],
		date: "2018-18",
		github: "https://github.com/Vibhu-Agarwal/Score-Keeper-App",
		weight: 2,
		tags: ["android", "java", "football"],
	},
	{
		id: "automated-draw-ms-paint",
		name: "Automated Draw in MS-Paint",
		desc: [
			"Using GUI Automation, opens MS-paint and draws mentioned words using brushes or pencils.",
		],
		date: "2018-18",
		github: "https://github.com/Vibhu-Agarwal/Automated-Draw-In-MS-Paint",
		weight: 2,
		tags: ["windows", "python", "gui-automation", "ms-paint"],
	},
	{
		id: "gesture-based-gui-controller",
		name: "Gesture Recognition GUI-Controller",
		desc: [
			"A project which recongizes gestures and performs certain GUI operations.",
		],
		date: "2018-18",
		github:
			"https://github.com/Vibhu-Agarwal/Gesture-Recognition-GUI-Controller",
		weight: 2,
		tags: ["arduino", "python", "gui-automation"],
	},
	{
		id: "codechef",
		name: "Codechef-Problems-Solved",
		desc: [
			"Just enter the username, and get the problems solved by the user on codechef.",
			"Also, you can view all submissions for a problem by that user in your Google Chrome tab: \
			press enter after 'content found' shows. Then enter a problem code to search for its submissions.",
		],
		date: "2018-18",
		github: "https://github.com/Vibhu-Agarwal/Codechef-Problems-Solved",
		weight: 2,
		tags: ["web-scraping", "python", "cli", "automation", "selenium"],
	},
	{
		id: "uttt",
		name: "Ultimate Tic-Tac-Toe",
		desc: [
			"Highly modified version of ordinary tic-tac-toe game",
			"A Desktop App made in Java",
			"9 individual mini boards contained within 1 main board",
			"Constrained moves within the main board",
			"Advantages and Penalties",
			"Overall lesser tied results",
		],
		date: "2018-18",
		websites: ["http://bit.ly/Ultimate-Tic-Tac-Toe"],
		weight: 2,
		tags: ["game", "java", "swing", "desktop-app"],
	},
	{
		id: "imdb-rating",
		name: "IMDB-Rating",
		desc: [
			"Type in the movie name and the script displays the rating and duration of the movie.",
			"Scrapes the official IMDB Website and get the information dynamically.",
		],
		date: "2018-18",
		github: "https://github.com/Vibhu-Agarwal/IMDB-Rating",
		weight: 2,
		tags: ["web-scraping", "python", "cli"],
	},
	{
		id: "memory-game",
		name: "Memory Game",
		desc: ["A Classic 3x3 Memory Game (Desktop App) using Grid Layout in Java"],
		date: "2017-17",
		github: "https://github.com/Vibhu-Agarwal/Memory-Game",
		weight: 2,
		tags: ["game", "java", "swing", "desktop-app"],
	},
];

console.log(JSON.stringify(projects, null, 4));

export default projects;
