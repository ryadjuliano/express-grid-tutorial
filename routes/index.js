var express = require('express');
var router = express.Router();
var path = __dirname + '/views/';
// const axios = require('axios');
// const fs = require('fs');


// var config = {
//   responseType: 'stream'
// };

// let url = 'https://images.dog.ceo/breeds/setter-english/n02100735_4870.jpg';
/* home page. */
// router.get('/', function(req, res, next) {
  
//   // res.render('sindex')
//   res.render(
//     'index', 
//     { 
//         message: 'Lorem ipsum sit dolor amet', 
//         user: {name:'suyono', email:'suyono@example.com', website: 'http://www.suyono.com'} 
//     }
//   );
// });

router.get('/',function(req, res){
  res.sendFile(path + 'index.html')
});
  

//   async function getImage() {

//     let resp = await axios.get(url, config);
//     resp.data.pipe(fs.createWriteStream('image.jpg'));
// }
// getImage();

  // res.render(
  //   'index', 
  //   { 
  //       message: 'Lorem ipsum sit dolor amet', 
  //       user: {name:'suyono', email:'suyono@example.com', website: 'http://www.suyono.com'} 
  //   }
  // );






module.exports = router;
