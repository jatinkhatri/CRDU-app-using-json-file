var shell = require('shelljs');
const path = require('path');
const { exec } = require('child_process');
const appPath = path.join(__dirname + '/../../../crud-app/');

const installPackages = async () => {
    try {
        shell.cd(appPath);
        // Run external tool synchronously
        const shellexc = shell.exec('npm install');
        if (shellexc.code !== 0) {
            shell.exit(1);
        }
        return shellexc.toString();
    } catch (error) {
        throw error;
    }
}

const runApp = async () => {
    try {
        shell.cd(appPath);
        // Run external tool synchronously
        shell.exec('kill $(lsof -t -i:3000)');

        exec('npm start', function(code, stdout, stderr) {
            console.log('Exit code:', code);
            console.log('Program output:', stdout);
            console.log('Program stderr:', stderr);
          });
        // shell.exit(1);
        return true;
    } catch (error) {
        throw error;
    }
}

const stopApp = async () => {
    try {
        shell.cd(appPath);
        // Run external tool synchronously
        exec('kill $(lsof -t -i:3000)');
        // shell.exit(1);
        return true;
    } catch (error) {
        throw error;
    }
}

const runTest = async () => {
    try {
        shell.cd(appPath);
        // Run external tool synchronously
       // Run external tool synchronously
        const shellexc = shell.exec('npm test');
        if (shellexc.code !== 0) {
            shell.exit(1);
        }
        return shellexc.toString();
        // shell.exit(1);
    } catch (error) {
        throw error;
    }
}

exports.installPackages = installPackages;
exports.runApp = runApp;
exports.stopApp = stopApp;
exports.runTest = runTest;
