const { exec, spawn, execSync } = require('child_process');
const { stdout } = require('process');
const chalk = require('chalk');
const ip_gen = require('./modules/ip_list_gen')

const logging = (msg) => { console.log(chalk.redBright('[VULNEXEC] ') + msg); }

// startup function
async function startup() {

    // Get Process arguments
    const args = process.argv.slice(2);

    // Check if ip is provided
    if (args.includes('-target')) {
        const ip_index = args.indexOf('-target') + 1;
        const ip = args[ip_index];

        // Check if its a single ip or a range
        if (ip.includes('/')) {
            ip = ip_gen(ip)
        } else {
            ip = [ip]
        }
    } else {
        logging(ip)
        logging('No target provided')
        process.exit(1)
    }

    console.clear()
    // Check if nmap is installed
    execSync('nmap -V', (err, stdout, stderr) => {
        if (err) {
            logging('Nmap not found, Installing...')
            execSync('sudo apt-get install nmap -y')
        }
    });

    // check if nmap-vulners is installed
    execSync('nmap --script vulners -V', (err, stdout, stderr) => {
        if (err) {
            logging('Nmap-vulners not found, Installing...')
            execSync('sudo apt-get install nmap-vulners -y')
        }
    });

    // Check if metasploit is installed
    execSync('msfconsole -v', (err, stdout, stderr) => {
        if (err) {
            logging('Metasploit not found, Installing...')
            execSync('sudo apt-get install metasploit-framework -y')
        }
    });
}




startup()