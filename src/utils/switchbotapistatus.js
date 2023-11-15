const crypto = require('crypto');
const https = require('https');

function Switchbotapistatus (deviceId){
    const token = "84aa53e5b4b1b4a010683ee0b4147846fb07e8221798fc636595f08dd19a2ff12334743c550ad59a2f2bc12b40446caa";
    const secret = "8553e6505ce5b68afa82fd61148fd22b";
    const t = Date.now();
    const nonce = "requestID";
    const data = token + t + nonce;
    const signTerm = crypto.createHmac('sha256', secret)
        .update(Buffer.from(data, 'utf-8'))
        .digest();
    const sign = signTerm.toString("base64");
    console.log(sign);
    const options = {
        hostname: 'api.switch-bot.com',
        port: 443,
        path: `/v1.1/devices/${deviceId}/status`,
        method: 'POST',
        headers: {
            "Authorization": token,
            "sign": sign,
            "nonce": nonce,
            "t": t,
            'Content-Type': 'application/json',
            'Content-Length': body.length,
        },
    };

    const req = https.request(options, res => {
        console.log(`statusCode: ${res.statusCode}`);
        res.on('data', d => {
            process.stdout.write(d);
        });
    });

    req.on('error', error => {
        console.error(error);
    });

    req.write(body);
    req.end();
}