let verification = {

    /*
    用途：检查输入的Email信箱格式是否正确
    输入：strEmail：字符串
    返回：如果通过验证返回true,否则返回false
    */
    checkEmail: (strEmail) => {
        let emailReg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
        if (emailReg.test(strEmail)) {
            return true;
        }
        else {
            return false;
        }
    },

    /*
    用途：校验ip地址的格式
    输入：strIP：ip地址
    返回：如果通过验证返回true,否则返回false；
    */
    isIP: (strIP) => {
        if (isNull(strIP)) {
            return false;
        }
        let re = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g //匹配IP地址的正则表达式
        if (re.test(strIP)) {
            if (RegExp.$1 < 256 && RegExp.$2 < 256 && RegExp.$3 < 256 && RegExp.$4 < 256) {
                return true;
            }
        }
        return false;
    },

    /*
    用途：检查输入手机号码是否正确
    输入：strMobile：字符串
    返回：如果通过验证返回true,否则返回false
    */
    checkMobile: (strMobile) => {
        let regu = /^[1][3,4,5,7,8][0-9]{9}$/;
        let re = new RegExp(regu);
        if (re.test(strMobile)) {
            return true;
        }
        else {
            return false;
        }
    },

    /*
    用途：检查输入的电话号码格式是否正确
    输入：strPhone：字符串
    返回：如果通过验证返回true,否则返回false
    */
    checkPhone: (strPhone) => {
        let phoneRegWithArea = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
        if (phoneRegWithArea.test(strPhone)) {
            return true;
        } else {
            return false;
        }
    },

    /*
    用途：检查输入字符串是否为空或者全部都是空格
    输入：str
    返回：如果全是空返回true,否则返回false
    */
    isNull: (str) => {
        if (str == "") {
            return true;
        }
        let regu = "^[ ]+$";
        let re = new RegExp(regu);
        return re.test(str);
    },

    /*
    用途：检查输入对象的值是否符合整数格式
    输入：str 输入的字符串
    返回：如果通过验证返回true,否则返回false
    */
    isInteger: (str) => {
        let regu = /^[-]{0,1}[0-9]{1,}$/;
        return regu.test(str);
    },
    /*
    用途：检查输入字符串是否符合正整数格式
    输入：s：字符串
    返回：如果通过验证返回true,否则返回false
    */
    isNumber: (s) => {
        let regu = "^[0-9]+$";
        let re = new RegExp(regu);
        if (s.search(re) != -1) {
            return true;
        }
        else {
            return false;
        }
    },
    /*
    密码验证
    不能是中文 6-18位
     *
     */
    isPassword: (Password) => {

        if (/[\u4E00-\u9FA5]/i.test(Password)) {
            return false;
        } else {

            if (6 <= Password.length && Password.length <= 18) {
                return true;
            } else {
                return false;
            }
        }
    },

    /*
    用途：检查输入字符串是否是带小数的数字格式,可以是负数
    输入：str：字符串
    返回：如果通过验证返回true,否则返回false
    */
    isDecimal: (str) => {
        if (isInteger(str)) {
            return true;
        }
        let re = /^[-]{0,1}(\d+)[\.]+(\d+)$/;
        if (re.test(str)) {
            if (RegExp.$1 == 0 && RegExp.$2 == 0) {
                return false;
            }
            return true;
        }
        else {
            return false;
        }
    },
    /*
    用途：检查输入对象的值是否符合端口号格式
    输入：str 输入的字符串
    返回：如果通过验证返回true,否则返回false
    */
    isPort: (str) => {
        return (isNumber(str) && str < 65536);
    },

    /*
    用途：检查输入字符串是否符合金额格式,格式定义为带小数的正数，小数点后最多三位
    输入：s：字符串
    返回：如果通过验证返回true,否则返回false
    */
    isMoney: (s) => {
        let regu = "^[0-9]+[\.][0-9]{0,3}$";
        let re = new RegExp(regu);
        if (re.test(s)) {
            return true;
        }
        else {
            return false;
        }
    },
    /*
    用途：检查输入字符串是否只由英文字母和数字和下划线组成
    输入：s：字符串
    返回：如果通过验证返回true,否则返回false
    */
    isNumberOr_Letter: (s) => {
        //判断是否是数字或字母
        let regu = "^[0-9a-zA-Z\_]+$";
        let re = new RegExp(regu);
        if (re.test(s)) {
            return true;
        }
        else {
            return false;
        }
    },
    /*
    用途：检查输入字符串是否只由英文字母和数字组成
    输入：s：字符串
    返回：如果通过验证返回true,否则返回false
    */
    isNumberOrLetter: (s) => {
        //判断是否是数字或字母
        let regu = "^[0-9a-zA-Z]+$";
        let re = new RegExp(regu);
        if (re.test(s)) {
            return true;
        }
        else {
            return false;
        }
    },
    /*
    用途：检查输入字符串是否只由汉字、字母、数字组成
    输入：s：字符串
    返回：如果通过验证返回true,否则返回false
    */
    isChinaOrNumbOrLett: (s) => {
        //判断是否是汉字、字母、数字组成
        let regu = "^[0-9a-zA-Z\u4e00-\u9fa5]+$";
        let re = new RegExp(regu);
        if (re.test(s)) {
            return true;
        }
        else {
            return false;
        }
    },
    /*
    用途：判断是否是日期
    输入：date：日期；fmt：日期格式
    返回：如果通过验证返回true,否则返回false
    */
    isDate: (date, fmt) => {
        if (fmt == null) {
            fmt = "yyyyMMdd";
        }
        let yIndex = fmt.indexOf("yyyy");
        if (yIndex == -1) {
            return false;
        }
        let year = date.substring(yIndex, yIndex + 4);
        let mIndex = fmt.indexOf("MM");
        if (mIndex == -1) {
            return false;
        }
        let month = date.substring(mIndex, mIndex + 2);
        let dIndex = fmt.indexOf("dd");
        if (dIndex == -1) {
            return false;
        }
        let day = date.substring(dIndex, dIndex + 2);
        if (!isNumber(year) || year > "2100" || year < "1900") {
            return false;
        }
        if (!isNumber(month) || month > "12" || month < "01") {
            return false;
        }
        if (day > getMaxDay(year, month) || day < "01") {
            return false;
        }
        return true;
    },
    getMaxDay: (year, month) => {
        if (month == 4 || month == 6 || month == 9 || month == 11) {
            return "30";
        }
        if (month == 2) {
            if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
                return "29";
            }
            else {
                return "28";
            }
            return "31";
            ;
        }
    },
    /*
    用途：字符1是否以字符串2结束
    输入：str1：字符串；str2：被包含的字符串
    返回：如果通过验证返回true,否则返回false
    */
    isLastMatch: (str1, str2) => {
        let index = str1.lastIndexOf(str2);
        if (str1.length == index + str2.length) {
            return true;
        }
        return false;
    },
    /*
    用途：字符1是否以字符串2开始
    输入：str1：字符串；str2：被包含的字符串
    返回：如果通过验证返回true,否则返回false
    */
    isFirstMatch: (str1, str2) => {
        let index = str1.indexOf(str2);
        if (index == 0) {
            return true;
        }
        return false;
    },
    /*
    用途：字符1是包含字符串2
    输入：str1：字符串；str2：被包含的字符串
    返回：如果通过验证返回true,否则返回false
    */
    isMatch: (str1, str2) => {
        let index = str1.indexOf(str2);
        if (index == -1) {
            return false;
        }
        return true;
    },
    /*
    用途：检查输入的起止日期是否正确，规则为两个日期的格式正确，且结束如期>=起始日期
    输入：startDate：起始日期，字符串; endDate：结束如期，字符串
    返回：如果通过验证返回true,否则返回false
    */
    checkTwoDate: (startDate, endDate) => {
        if (!isDate(startDate)) {
            alert("起始日期不正确!");
            return false;
        }
        else if (!isDate(endDate)) {
            alert("终止日期不正确!");
            return false;
        }
        else if (startDate > endDate) {
            alert("起始日期不能大于终止日期!");
            return false;
        }
        return true;
    },

}

export default verification;