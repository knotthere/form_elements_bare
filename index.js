const express = require('express')
const app = express()
const port = 3000
const path = require('path')

// Set static directory
app.use(express.static('public'))

// Get the body
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/favicon.ico', (req, res) => {
    res.sendFile('images/favicon.ico')
} )

// my-form-handler
app.post('/my-handling-form-page', (req, res, next) => {

    // /Users/larry/GitHub/Form_Elements_Bare/public/zips/Individual Performance Metrics.zip
    console.log(req.body)
    var options = {
        root: path.join(__dirname, 'public'),
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    }

    // var fileName = req.params.name
    // /Users/larry/GitHub/form_elements_bare/public/zips/Migration-Desktop Connector-DEMO.mov.zip
    var fileName = 'zips/Migration-Desktop Connector-DEMO.mov.zip'
    // var fileName = 'zips/Individual Performance Metrics.zip'
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err)
        } else {
            console.log('Sent:', fileName)
        }
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
