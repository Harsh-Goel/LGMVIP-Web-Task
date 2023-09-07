function run() {
    const fname = document.getElementById("firstname").value;
    const lname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    if (fname === '' || lname === '' || email === '' || mobile === '') {
        alert("Fill Details");
        return;
    }
    else {
        const box = document.getElementById("output");
        let dv = document.createElement("div");
        dv.innerHTML = "<b>Name</b> = " + fname + " " + lname + "<br><b>Email</b> = " + email + "<br><b>Mobile</b> = " + mobile;
        dv.classList.add("bx");
        box.appendChild(dv);
    }
}
