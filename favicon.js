const axios = require('axios');
const fs = require('fs');

const url = 'https://youtube.com';
const outputPath = 'image.png';
async function favIcontoFile(url, outputPath) {
    const cleanUrl = new URL(url).hostname
    const response = await axios({
        url: `https://www.google.com/s2/favicons?sz=64&domain_url=${cleanUrl}`,
        method: 'GET',
        responseType: 'arraybuffer'
    })
    fs.writeFileSync(outputPath, Buffer.from(response.data, 'binary'))
}
favIcontoFile(url, outputPath)