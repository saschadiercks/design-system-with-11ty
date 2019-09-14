// ###### import ######
import findAll from "../functions/findAll.js";
import toggleClass from "../functions/toggleClass.js";

// ####################
// ##### settings #####
// ####################
const class__isActive = 'sdi-is-active';
const selector__hamburger = '.sdi-hamburger';


// ###### script ######
export default function hamburgerState() {
	var elements = findAll(selector__hamburger)
	toggleClass(elements,class__isActive);
}
