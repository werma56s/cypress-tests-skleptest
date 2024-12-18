//report for one folder with JSON files
const report = require('multiple-cucumber-html-reporter');
const {format, addMinutes } = require('date-fns');

const executionStartTime = format(Date(), 'dd.MM.yyyy, h:mm:ss');
const executionEndTime = format(addMinutes(Date(), 5), 'dd.MM.yyyy, h:mm:ss');

report.generate({
 jsonDir: 'cypress/reports/cucumber-json',// Path of cucumber json file
 reportPath: 'cypress/reports/cucumber-html',//path of required report
    reportTitle: 'Latest Execution',
    overwrite: true,
 metadata:{
        browser: {
            name: 'Electron',
            version: '118'
        },
        device: 'Local test machine',
        platform: {
            name: 'Windows',
            version: '11'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Custom project'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: executionStartTime},
            {label: 'Execution End Time', value: executionEndTime}
        ]
    }
});