/*
 * Projects listing
 */

let projects = [
	{
		id: 'hitmenews',
		name: 'Hit-Me-News',
		desc: [
			'An Alexa Skill which keeps you updated about the latest headlines',
			'Provides dynamic content (latest news). News Headlines are categorical, based on data from user-interaction.',
			'Scrapes the websites for News Headlines.',
			'Alexa triggered AWS-Lambda Back-end.'
		],
		date: '2019-19',
		github: 'https://github.com/Vibhu-Agarwal/hit-me-news-alexa-skill',
		weight: 2,
		tags: ['alexa', 'aws-lambda', 'web-scraping', 'python']
	},
	{
		id: 'mospi',
		name: 'MOSPI-website',
		desc: [
			'Website for Ministry of Statistics and Programme Implementation (MOSPI)',
			'Developed at Grand Finale of Smart India Hackathon 2019',
			'Generates Template Sheets for each hierarchy at Ministry and Automates the task of reading raw data from excel sheets.',
			'Make calculations of GVA and other parameters and Reports statements and view insights through Charts and Graphs.'
		],
		date: '2019-19',
		github: 'https://github.com/Vibhu-Agarwal/',
		weight: 2,
		tags: ['django', 'sih', 'python', 'openpyxl']
	},
	{
		id: 'amfr',
		name: 'Attendance Management through Face Recognition',
		desc: [
			'A python based Desktop App to manage Attendance in an Institute',
			'Real Time Face Detection and Recognition.',
			'Separate Dedicated Panels for Manager and Students.',
			'Add new Batches and Students in Manager Panel',
			'Capture Images for Training Data',
			'Automated Attendance Register maintainance in Excel Sheets'
		],
		date: '2018-19',
		github: 'https://github.com/Marauders-9998/Attendance-Management-using-Face-Recognition',
		weight: 2,
		tags: ['tkinter', 'python', 'opencv', 'openpyxl']
	},
	{
		id: 'marauders-website',
		name: 'Marauders-Website',
		desc: [
			'A Website made for Marauders, an organization.',
			'Python Microframework, Flask powered Website using SQL as database.',
			'Github OAuth Integration for Authorization and Authentication.',
			"External APIs to provide Marauders' data to other developers",
		],
		date: '2018-19',
		github: 'https://github.com/Marauders-9998/Marauders-Website',
		websites: ['http://marauders9998.herokuapp.com/'],
		weight: 2,
		tags: ['github-api', 'python', 'oauth', 'flask', 'desktop-app']
	},
	{
		id: 'automate-fb-posting',
		name: 'Automated Facebook Posting via Speech to Text',
		desc: [
			'A python script to post on Facebook',
			'Speech to Text using wit.ai API',
			'Browser Automation using selenium module',
		],
		date: '2018-18',
		github: 'https://github.com/Vibhu-Agarwal/Automated-Facebook-Post-from-Speech-to-Text',
		weight: 2,
		tags: ['automation', 'python', 'speech-to-text', 'selenium']
	},
	{
		id: 'uttt',
		name: 'Ultimate Tic-Tac-Toe',
		desc: [
			'Highly modified version of ordinary tic-tac-toe game',
			'A Desktop App made in Java',
			'9 individual mini boards contained within 1 main board',
			'Constrained moves within the main board',
			'Advantages and Penalties',
			'Overall lesser tied results'
		],
		date: '2018-18',
		github: 'https://github.com/Vibhu-Agarwal/',
		websites: ['http://bit.ly/Ultimate-Tic-Tac-Toe'],
		weight: 2,
		tags: ['game', 'java', 'swing', 'desktop-app']
	},
];


/*
 * Sort and return
 */
function compareDates(a, b) {
	// current year
	const year = new Date().getFullYear();
	// base year - when I started development
	const baseYear = 2013 - 1;

	// date value generator
	const fd = (date) => {
		if (date.indexOf('present') > -1)
			return year - baseYear + 1; // largest, so +1
		else {
			for (let yr = year; yr > baseYear; yr--) {
				if (date.indexOf(yr.toString().substring(3)) > -1) {
					return yr - baseYear;
				}
			}
		}
	};

	let wta = fd(a.date) + (a.weight || 0);
	let wtb = fd(b.date) + (b.weight || 0);

	if (wta < wtb) {
		return 1;
	} else if (wta > wtb) {
		return -1;
	} else {
		// a comes before b in original array
		// let comp = (a.weight || 5) <= (b.weight || 5);
		return -1; // (comp) ? 1 : -1;
	}
}

projects.sort(compareDates);

export default projects;
