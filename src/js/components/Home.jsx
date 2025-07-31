// helps select the color in the traffic light
import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// imported path from index.css file
import '../../styles/index.css'

//create your first component
const Home = () => {
	// sets the default to glow the red light
	const [ color, setColor ] = useState("red");

	// onClick helps you select the light
	return (
		<div className="traffic-light">
			<div onClick={() => setColor("red")} className={"light red" + (color === "red" ? " glow" : "")}></div>
            <div onClick={() => setColor("yellow")} className={"light yellow" + (color === "yellow" ? " glow" : "")}></div>
			<div onClick={() => setColor("green")} className={"light green" + (color === "green" ? " glow" : "")}></div>
		</div>
	);
};

export default Home;