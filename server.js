const axios = require('axios')
const express = require('express')
const app = express()
// import moment from 'moment';
   
//   app.use(moment().format())
  app.use(express.json())
  app.use(express.static('public'))

  

  app.listen(3000, () => {
    console.log('Server Started')
  })
 