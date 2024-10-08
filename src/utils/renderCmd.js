import About from "../components/commands/About";
import aboutme from "../components/commands/Aboutme";
import Contact from "../components/commands/Contact";
import Help from "../components/commands/Help";
import NotFound from "../components/commands/NotFound";
import Skills from "../components/commands/Skills";

function renderCmd(cmd) {
	switch (cmd) {
		case "ls":
			return {
				cmd,
				Component: Help,
				time: "",
			};
		case "aboutme": 
			return {
				cmd,
				Component: aboutme, 
				time: "",
			};
		case "skills":
			return {
				cmd,
				Component: Skills,
				time: "",
			};
		case "contact":
			return {
				cmd,
				Component: Contact,
				time: "",
			};
		case "about":
			return {
				cmd,
				Component: About,
				time: "",
			};
		default:
			return {
				cmd,
				Component: NotFound,
				time: "",
			};
	}
}

export default renderCmd;