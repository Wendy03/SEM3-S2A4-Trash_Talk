const career = require('./career.json')

// define sample function to randomly return an item in an array
function randomIndex(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

const phrase = ['很簡單', '很容易', '很快', '很正常']

function rubbishTalk(job) {
  const person = career.results.find(person => person.name_en === job)
  return job ? `身為一個${person.name}，${randomIndex(person.task)}，應該${randomIndex(phrase)}!` : '請選擇一個'
}

module.exports = rubbishTalk