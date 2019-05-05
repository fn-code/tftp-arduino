const TFTP = require("tftp-client");

const client = new TFTP(69, '192.168.1.128');

client.write('./ethernet.bin', function(err, data) {
    if (err) {
        console.error('ERROR:');
        console.error(err);
        return;
    }
    console.log('Got data (%d bytes). First 100 bytes:', data.length);

});
