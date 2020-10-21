const path = require('path');
const express = require('express');

const app = express();  //acquiring express

//static folder (to access front-end files)
app.use(express.static(path.join(__dirname, 'public')));


const PORT = process.env.PORT || 3000;  //defining port

app.listen(PORT, function(){ console.log('Server running on port 3000')
});
