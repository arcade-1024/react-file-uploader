import React from "react";
import { Link } from "react-router-dom";
import "./SuccessPage.css";
import { FiCheckCircle } from "react-icons/fi";
//img
// import Check from "../../assets/icon/check.png";
const SuccessPage = ({ uploadedFile }) => {
	return (
		<div className="Success">
			<div className="Success-div">
				{/* <img src={Check} alt="" /> */}
				<FiCheckCircle
					size={122}
					className="text-white hover:text-black transition duration-300"
				/>
			</div>
			<h1 className="Success-text font-bold">Congrats! </h1>
			<Link to="/">
				<button className="Success-continue focus:outline-none ">
					Continue
				</button>
			</Link>
		</div>
	);
};

export default SuccessPage;
