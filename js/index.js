function init() {
    // inicializar opções
    for (var i = 4; i <= 128; i++) {
        var curOption = document.createElement("option");
        curOption.value = i;
        curOption.appendChild(document.createTextNode(i.toString()));
        if (i < 16) {
            document.getElementById("weak").appendChild(curOption);
        } else {
            document.getElementById("strong").appendChild(curOption);
        }
    }

    document.getElementById("password-length").value = 16;
    document.getElementById("lowercase").checked = true;
    document.getElementById("uppercase").checked = true;
    document.getElementById("numbers").checked = true;
    document.getElementById("symbols").checked = true;
    document.getElementById("no-similar").checked = true;
    document.getElementById("no-ambiguous").checked = true;
}

function generate() {
    var lowercase = document.getElementById("lowercase").checked;
    var uppercase = document.getElementById("uppercase").checked;
    var number = document.getElementById("numbers").checked;
    var symbol = document.getElementById("symbols").checked;

    if (!lowercase && !uppercase && !number && !symbol) {
        window.alert("Você precisa selecionar pelo menos um tipo de caractere.");
        return;
    }

    var passwordLength = document.getElementById("password-length").value;

    var noSimilar = document.getElementById("no-similar").checked;
    var noAmb = document.getElementById("no-ambiguous").checked;

    var lowerChar = "abcdefghjkmnpqrstuvwxyz";
    var upperChar = "ABCDEFGHJKLMNPQRSTUVWXYZ";
    var numChar = "23456789";
    var symChar = "!#$%&*+-=?@^_";
    var allChars = "";
    var allCharsLength;
    var password = "";

    if (!noSimilar) {
        noSimilar += "ilo";
        upperChar += "IO";
        numChar += "01";
        symChar += "|";
    }
    if (!noAmb) {
        symChar += "{}[]()\/'\"`~,;:.<>\\";
    }
    if (lowercase) allChars += lowerChar;
    if (uppercase) allChars += upperChar;
    if (number) allChars += numChar;
    if (symbol) allChars += symChar;

    allCharsLength = allChars.length;

    for (var i = 0; i < passwordLength; i++) {
        var pos = Math.floor(Math.random() * allCharsLength);
        password += allChars.substring(pos, pos + 1);
    }

    document.getElementById("final-password").value = password;
}
