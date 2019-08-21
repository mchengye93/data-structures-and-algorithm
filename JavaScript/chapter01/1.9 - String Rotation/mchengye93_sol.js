let stringRotation = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }
    else {
        let str = str1+str1;

        if (str.indexOf(str2)=== -1) {
            return false;
        }
        return true;
    }
}