async function get_ips(subnet) {
    // From a subnet, get all the ips
    let ips = [];
    
    if (subnet.includes('/24')) {
        // If the subnet is a /24, get all the ips
        let subnet_split = subnet.split('.');
        let subnet_prefix = subnet_split[0] + '.' + subnet_split[1] + '.' + subnet_split[2] + '.';
        for (let i = 0; i < 255; i++) {
            ips.push(subnet_prefix + i.toString());
        }
    } else if (subnet.includes('/25')) {
        // If the subnet is a /25, get all the ips
        let subnet_split = subnet.split('.');
        let subnet_prefix = subnet_split[0] + '.' + subnet_split[1] + '.' + subnet_split[2] + '.';
        for (let i = 0; i < 127; i++) {
            ips.push(subnet_prefix + i.toString());
        }
    } else if (subnet.includes('/26')) {
        // If the subnet is a /26, get all the ips
        let subnet_split = subnet.split('.');
        let subnet_prefix = subnet_split[0] + '.' + subnet_split[1] + '.' + subnet_split[2] + '.';
        for (let i = 0; i < 63; i++) {
            ips.push(subnet_prefix + i.toString());
        }
    } else if (subnet.includes('/27')) {
        // If the subnet is a /27, get all the ips
        let subnet_split = subnet.split('.');
        let subnet_prefix = subnet_split[0] + '.' + subnet_split[1] + '.' + subnet_split[2] + '.';
        for (let i = 0; i < 31; i++) {
            ips.push(subnet_prefix + i.toString());
        }
    } else if (subnet.includes('/28')) {
        // If the subnet is a /28, get all the ips
        let subnet_split = subnet.split('.');
        let subnet_prefix = subnet_split[0] + '.' + subnet_split[1] + '.' + subnet_split[2] + '.';
        for (let i = 0; i < 15; i++) {
            ips.push(subnet_prefix + i.toString());
        }
    } else if (subnet.includes('/29')) {
        // If the subnet is a /29, get all the ips
        let subnet_split = subnet.split('.');
        let subnet_prefix = subnet_split[0] + '.' + subnet_split[1] + '.' + subnet_split[2] + '.';
        for (let i = 0; i < 7; i++) {
            ips.push(subnet_prefix + i.toString());
        }
    } else if (subnet.includes('/30')) {
        // If the subnet is a /30, get all the ips
        let subnet_split = subnet.split('.');
        let subnet_prefix = subnet_split[0] + '.' + subnet_split[1] + '.' + subnet_split[2] + '.';
        for (let i = 0; i < 3; i++) {
            ips.push(subnet_prefix + i.toString());
        }
    } else if (subnet.includes('/31') || subnet.includes('/32')) {
        // If the subnet is a /31, get all the ips
        let subnet_split = subnet.split('.');
        let subnet_prefix = subnet_split[0] + '.' + subnet_split[1] + '.' + subnet_split[2] + '.';
        for (let i = 0; i < 1; i++) {
            ips.push(subnet_prefix + i.toString());
        }
    return ips;
    } else {
        // If the subnet is not a valid subnet, return an empty list
        return [];
    }
}

module.exports = {
    get_ips
}