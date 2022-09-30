function trueZero(val){
	const value = val
	if(typeof value == "number") {
		if(value == 1 || value == 0) {
			if(value == 1) {
				return true
			} else {
				return false
			}
		}
	}
	
	if(typeof value == "string") {
		if(value == "1" || value == "0") {
			if(value == "1") {
				return true
			} else {
				return false
			}
		}

		if(value == "true" || value == "false") {
			if(value == "true") {
				return 1
			} else {
				return 0
			}
		}
	}

	if(typeof value == "boolean") {
		if(value == true || value == false) {
			if(value == true) {
				return 1
			} else {
				return 0
			}
		}
	}
	
	
	
}

module.exports = trueZero