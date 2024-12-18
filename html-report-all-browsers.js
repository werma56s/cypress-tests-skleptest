const { getAllJSONFilesFormBrowsersToOnePlace, addMetadataToJSONFiles } = require('./html-report-all-browsers-support.js');
const report = require('multiple-cucumber-html-reporter');
const {format, addMinutes } = require('date-fns');

const executionStartTime = format(Date(), 'dd.MM.yyyy, h:mm:ss');
const executionEndTime = format(addMinutes(Date(), 5), 'dd.MM.yyyy, h:mm:ss');

//getAllJSONFilesFormBrowsersToOnePlace(); //only once when changing data json in files for browsers
addMetadataToJSONFiles();

report.generate({
 jsonDir: `cucumber_report_docker/all_reports/json`, // Path to cucumber JSON for this browser
 reportPath: `cucumber_report_docker/all_reports/report`, // Path for the report
 reportTitle: `Execution Report - all`, // Include browser name in title
 overwrite: false,
 displayDuration: true,
 pageTitle: `Test Report`,
 customData: {
        title: 'info',
        data: [
            {label: 'Project', value: 'Project'},
            {label: 'Release', value: '1.1.1'},
            {label: 'Cycle', value: 'B11111.11111'},
            {label: 'Execution Start Time', value: executionStartTime},
            {label: 'Execution End Time', value: executionEndTime}
        ]
    },
});
console.log(`Report generated for all browsers`);

