const { exec, spawn, execSync } = require('child_process');
const { stdout } = require('process');
const chalk = require('chalk');
const ip_gen = require('./modules/ip_list_gen')

const logging = (msg) => { console.log(chalk.redBright('[VULNEXEC] ') + msg); }

// startup function
async function startup() {
    logging('Starting VulnExec...')

    // Get Process arguments
    const args = process.argv.slice(2);

    // Check if ip is provided
    if (args.includes('-target')) {
        const ip_index = args.indexOf('-target') + 1;
        let ip = args[ip_index];

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
    try {
        execSync('nmap -V 2>&1 >/dev/null')
    } catch (error) {
        logging('Nmap is not installed')
        logging('Installing Nmap...')
        nmap_install = execSync('sudo apt install nmap -y')
        nmap_install.stdout.on('data', (data) => {
            console.log(data.toString());
        });

    }
}




startup()