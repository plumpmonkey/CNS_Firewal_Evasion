const express = require('express')
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/views'))
app.listen(8080, () => console.log(`Listening on port 8080`))
app.listen(80, () => console.log(`Listening on port 80`))

const { exec } = require("child_process")

app.post('/form-submission', async function(req, res) {
  const data = req.body
  console.log('User data from form: ', req.body)

  // This function executes whatever has been added in the form's name field.
  
  let result = ''

  if(data.name && data.name.length > 0) {
    result = await executeUserData(data.name)
    console.log('Result from machine', result)
  }

  res.json({ success: true, dataFromServer: result })
})

app.get('/', function(req, res) {
    const port = req.socket.localPort
  
    if(port == 8080) {
      res.render('index')
    } else if (port == 80) {
      res.render('index2')
    }
    
})

// Function to execute user input on machine
function executeUserData(input) {
  return new Promise(function (resolve, reject) {
    exec(input, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`)
        return resolve('')
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`)
        return resolve('')
      }
      console.log(`stdout: ${stdout}`)
      return resolve(stdout)
    })
  })
}
