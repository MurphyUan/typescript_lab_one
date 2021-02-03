//Gets the length of the string including spaces
function str_len(value) {
    return value.length;
}
console.log(str_len("Test 1"));
//Gets the length of the string without spaces
function str_len_spaces(value) {
    var num = value.replace(/\s+/, "").length;
    return num;
}
console.log(str_len_spaces("Test 1"));
//Gets the length of the string with or without spaces with an optional variable
function str_len_both(value, value2) {
    var num;
    if (!value2)
        num = value.replace(/\s+/, "").length;
    else
        num = value.length;
    return num;
}
console.log(str_len_both("Test 1", true));
console.log(str_len_both("Test 1", false));
console.log(str_len_both("Test 1"));
