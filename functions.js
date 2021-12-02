function telephoneCheck(str) {
  let strNonDigits = str.replace(/\d/ig, "").replace(/ /g, "");
  let strDigits = str.replace(/\D/ig, "");
  let strArr = str.replace(" ","").split(/[\D ]/ig);
  
  switch (strDigits.length) {
	  /*
	case 10:
		return (strNonDigits.length == 0 || strNonDigits.length == 2 || strNonDigits.length == 3) ? 
			(strArr[strArr.length - 1].length >= 4) ?
				((/)/.test(strNonDigits) == true && (/(/.test(strNonDigits) == false)) ? 
		false : true : false : false;
		break;
	case 11:
		return str[0] == 1 ?
			(strNonDigits.length == 0 || strNonDigits.length == 2 || strNonDigits.length == 3) ? 
				(strArr[strArr.length - 1].length >= 4) ?
					((/)/.test(strNonDigits) == true && (/(/.test(strNonDigits) == false)) ? 
		false : true : false : false : false;
		break;
	default : 
		return false;
		break;
		*/
	case 10:
		if (strNonDigits.length == 0 || strNonDigits.length == 2 || strNonDigits.length == 3) {
			if (strArr[strArr.length - 1].length >= 4) {
				if ((/\)/.test(strNonDigits) == true && /\(/.test(strNonDigits) == false) || (/\(/.test(strNonDigits) == true && /\)/.test(strNonDigits) == false))  {
					return false;
				} else {
					return true 
				}
			} else {
				return false;
			}
		} else {
			return false;
		}
		break;
	case 11:
		if (str[0] == 1) {
			if (strNonDigits.length == 0 || strNonDigits.length == 2 || strNonDigits.length == 3) {
				if (strArr[strArr.length - 1].length >= 4) {
					if ((/\)/.test(strNonDigits) == true && /\(/.test(strNonDigits) == false) || (/\(/.test(strNonDigits) == true && /\)/.test(strNonDigits) == false)) {
						return false;
					} else {
						return true;
					}
				} else {
					return false;
				}
			} else {
				return false;
			}
		} else {
			return false;
		}
		break;
	default:
		return false;
		break;
	}
}
