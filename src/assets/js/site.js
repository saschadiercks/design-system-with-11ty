// #### imports ####
import setJsAvailability from "./components/setJsAvailability.js";

import handleTriggers from "./functions/handleTriggers.js";


// ####################
// ##### settings #####
// ####################

// ###### script ######
// is the DOM ready for manipulation?
document.addEventListener('DOMContentLoaded', function() {

	// --- Toggle JS Availability
	setJsAvailability("html");

	// -- handle triggers
	handleTriggers('.sdi-js-nav-mobile-trigger');

});
