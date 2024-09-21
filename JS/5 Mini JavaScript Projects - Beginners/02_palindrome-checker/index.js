const input = document.getElementById("input") // ID defined in main.html file

function reverseString(str) {
    return str.split("").reverse().join("")
}

function check() {
    const value = input.value
    const reversedInput = reverseString(value)

    if (value === reversedInput) {
        alert("P A L I N D R O M E")
    }
    else {
        alert("Not today!")
    }

    input.value = ""
}