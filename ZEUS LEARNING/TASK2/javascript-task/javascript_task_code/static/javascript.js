function validateForm() {
    // alert("hellio");
    var name = document.getElementById("name").value;
    var comment = document.getElementById("comments").value;
    var radio = document.querySelector("input[type='radio'][name=gender]:checked");
    if (name == '') {
        alert("All fields are compulsory");
    }
    if (comment == '') {
        alert("All fields are compulsory");
    }
    if (radio == null) {
        alert("All fields are compulsory");
    }
}