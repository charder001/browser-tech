 // Require third-party modules
 const express = require('express');
 const request = require('request');
 const bodyParser = require("body-parser")
 const fetch = require("node-fetch");
 const savedShirts = [];
 const port = process.env.PORT || 3000

 // Create new express app in 'app'
 const app = express();
 // Link the templating engine to the express app
 app.set('view engine', 'ejs');
 // Tell the views engine/ejs where the template files are stored (Settingname, value)
 app.set('views', 'views');

 // Tell express to use a 'static' folder
 app.use(express.static('public'));
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({
 	extended: false
 }))

 // Actually set up the server
 app.listen(port, function () {
 	console.log(`Application started on port: ${port}`);
 });

 // Create a home route
 app.get('/', function (req, res) {
 	res.render("home")
 })

 app.post('/', function (req, res) {
	 let uploadedShirtId = req.body.shirtId
	 
 	if (uploadedShirtId !="" && uploadedShirtId !== undefined) {
		 console.log("its true")
		 console.log(uploadedShirtId)
		 const uploadedShirt = savedShirts.filter(savedShirts => savedShirts.id === uploadedShirtId);
		 console.log(uploadedShirt)
		 res.render("shirt", {
			id: uploadedShirt[0].id,
			color: uploadedShirt[0].color,
			textColor: uploadedShirt[0].textColor,
			text: uploadedShirt[0].text
		})
 	} else {
 		let shirtId = '_' + Math.random().toString(36).substr(2, 9);
		 let shirtColor = req.body.shirtColor
		 let textColor = req.body.textColor
 		let shirtText = req.body.shirtText
 		let saveThis = {
 			id: shirtId,
			 color: shirtColor,
			 textColor: textColor,
 			text: shirtText
 		}
 		savedShirts.push(saveThis)
 		console.log(savedShirts)
 		res.render("shirt", {
 			id: shirtId,
			 color: shirtColor,
			 textColor: textColor,
 			text: shirtText
 		})
 	}
 });