// include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const rubbishTalk = require('./rubbish_talk')
const careerList = require('./career.json')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

//setting input radio checked or not
const Handlebars = require('handlebars')
Handlebars.registerHelper('ifEquals', (value1, value2) => (value1 === value2) ? 'checked' : '')

// setting routes
app.get('/', (req, res) => {
  res.render('index', { career: careerList.results })
})

app.post('/', (req, res) => {
  const job = req.body.job
  const rubbishSentence = rubbishTalk(job)
  res.render('index', { career: careerList.results, job, rubbishSentence })
})

// starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`The Express server is running on http://localhost:${port}`)
})