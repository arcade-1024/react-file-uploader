import React from "react";
import { useHistory } from "react-router-dom";
import { FiUploadCloud } from "react-icons/fi";
import axios from "axios";

//css
import "./Uploader.css";
const Uploader = ({
	file,
	setFile,
	setFilename,
	setUploadedFile,
	fileName,
}) => {
	const History = useHistory();

	const onChange = (e) => {
		setFile(e.target.files[0]);
		setFilename(e.target.files[0].name);
		console.log(fileName);
	};
	const onSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("file", file);

		try {
			const res = await axios.post("http://localhost:5000/upload", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});

			const { filename, filepath } = res.data;

			setUploadedFile({ name: filename, path: filepath });
			History.push("/success");
		} catch (err) {
			if (err.response.status === 500) {
				console.log("There was a problem with the server");
			} else {
				console.log(err.response.data.msg);
			}
		}
	};
	return (
		<div className="upload w-screen h-screen mx-auto flex flex-col justify-center items-center">
			<form
				className="flex flex-col md:px-48 md:py-12  items-center justify-center border border-gray-200 rounded-2xl shadow-2xl "
				onSubmit={onSubmit}
			>
				<label
					htmlFor="fileUploder"
					className="w-full flex flex-col items-center px-16 py-6 bg-white text-blue rounded-lg shadow-2xl tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300 text-lg"
				>
					<FiUploadCloud size={52} className="my-3" />
					<input
						type="file"
						id="fileUploder"
						className="hidden"
						onChange={onChange}
					/>
					{fileName}
				</label>
				<button
					type="submit"
					className="bg-trasnparent border-4 border-teal-500  text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 mx-10 my-24  rounded-full shadow-lg px-6 py-1 cursor-pointer focus:outline-none text-2xl"
				>
					upload
				</button>
			</form>
		</div>
	);
};

export default Uploader;
