// ###### import ######
import findAll from "./findAll.js";
import removeClass from "./removeClass.js";

// ####################
// ##### settings #####
// ####################

// ###### script ######
export default function clickOutside(selector) {
	document.addEventListener('click', function (event) {
		if (!event.target.closest(selector) ) {
			// click happened inside of elment
			removeClass(findAll(selector), selector.substring(1));
		} else {
			//click happened outside

		};
	}, true);   // we're using captureing so this listener always get's activated first
}
