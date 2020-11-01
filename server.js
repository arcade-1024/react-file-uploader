const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const app = express();

app.use(fileUpload());
app.use(cors());

const node_xj = require("xls-to-json");
// Upload Endpoint
app.post("/upload", (req, res) => {
	if (req.files === null) {
		return res.status(400).json({ msg: "No file found" });
	}

	const file = req.files.file;

	file.mv(`${__dirname}/client/public/uploads/${file.name}`, (err) => {
		if (err) {
			console.error(err);
			return res.status(500).send(err);
		}
		node_xj(
			{
				input: `${__dirname}/client/public/uploads/${file.name}`,
				output: `${__dirname}/client/public/uploads/output.json`,
			},
			function (err, result) {
				if (err) {
					console.error(err);
				} else {
					console.log(result);
				}
			}
			
		);
		res.json({filename: file.name , filepath: `uploads/${file.name}`});
	});
});

app.listen(5000, () => console.log("Server Started..."));
