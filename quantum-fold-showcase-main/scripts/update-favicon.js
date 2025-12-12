const https = require('https');
const fs = require('fs');
const path = require('path');

const faviconUrl = 'https://res.cloudinary.com/dvxwlajla/image/upload/v1761542075/protein_favicon-removebg-preview_gu776i.png';
const outputPath = path.join(__dirname, '..', 'public', 'favicon.ico');

// Create public directory if it doesn't exist
if (!fs.existsSync(path.dirname(outputPath))) {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
}

// Download the favicon
const file = fs.createWriteStream(outputPath);
https.get(faviconUrl, (response) => {
  response.pipe(file);
  
  file.on('finish', () => {
    file.close();
    console.log('Favicon downloaded successfully');
    
    // Update the index.html file
    const indexPath = path.join(__dirname, '..', 'index.html');
    let content = fs.readFileSync(indexPath, 'utf8');
    
    // Replace lovable.dev image URLs with local favicon
    content = content.replace(/https:\/\/lovable\.dev\/opengraph-image-p98pqg\.png/g, '/favicon.ico');
    
    // Add favicon link if it doesn't exist
    if (!content.includes('link rel="icon"')) {
      const headEnd = content.indexOf('</head>');
      content = content.slice(0, headEnd) + 
        '\n    <link rel="icon" type="image/x-icon" href="/favicon.ico" />' +
        content.slice(headEnd);
    }
    
    fs.writeFileSync(indexPath, content, 'utf8');
    console.log('index.html updated successfully');
  });
}).on('error', (err) => {
  console.error('Error downloading favicon:', err);
});
