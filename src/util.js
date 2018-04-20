export function convertFtoC(f) {
	// (F-32)*5/9 = C 
	return ((f - 32) * 5 / 9).toFixed(0);
}