   // JavaScript code goes here
   document.getElementById('header').addEventListener('click', function() {
    // Change background color of header
    this.style.backgroundColor = '#ffcc00';
});


// Require the necessary modules
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create a server
const server = http.createServer((req, res) => {
    // Routing
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html'; // Default to index.html
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
    }[extname] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                // 404 Not Found
                fs.readFile('./404.html', (err, content) => {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf-8');
                });
            } else {
                // 500 Internal Server Error
                res.writeHead(500);
                res.end('Server Error: ' + err.code);
            }
        } else {
            // 200 OK
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

// Set the port
const PORT = process.env.PORT || 3000;

// Start the server
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    // Simple email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Check if all fields are filled
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
        return;
    }

    // If validation passes, you can proceed with form submission
    // For now, let's just show a success message
    document.getElementById('contact-form').reset();
    document.getElementById('success-message').classList.remove('hidden');
});



