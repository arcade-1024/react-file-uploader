import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./styles/tailwind.css";
import Uploader from "./components/uploader/Uploader";
import SuccessPage from "./components/successPage/SuccessPage";
function App() {
	const [file, setFile] = useState("");
	const [filename, setFilename] = useState("Choose File");
	const [uploadedFile, setUploadedFile] = useState({});
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route
						exact={true}
						path="/"
						component={() => (
							<Uploader
								file={file}
								fileName={filename}
								setFilename={setFilename}
								setFile={setFile}
								setUploadedFile={setUploadedFile}
							/>
						)}
					/>
					<Route
						exact={true}
						path="/success"
						component={() => <SuccessPage uploadedFile={uploadedFile} />}
					/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
