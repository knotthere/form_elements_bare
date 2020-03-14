const express = require('express')
const app = express()
const port = 3000

// Set static directory
app.use(express.static('public'))

// Get the body
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'))

// my-form-handler
app.post('/my-handling-form-page', (req, res) => {
    console.log(req.body)

    res.send('Handle that form!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))