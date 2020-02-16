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
