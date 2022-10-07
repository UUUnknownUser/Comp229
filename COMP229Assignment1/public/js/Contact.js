function resultMessage() {
    var firstName = document.getElementById("FirstName").value;
    var lastName = document.getElementById("LastName").value;
    var phone = document.getElementById("Phone").value;
    var email = document.getElementById("Email").value;
    var clientMessage = document.getElementById("clientMessage").value;

    var msg="Thank you for your message."+
            "\r\n"+"Your First Name is : "+firstName+
            "\r\n"+"Your Last Name is : "+lastName+
            "\r\n"+"Your Email Address is : "+email+
            "\r\n"+"Your Phone Number is : "+phone+
            "\r\n"+"Your message is : "+clientMessage;


        window.location.href="/Home";

        alert(msg);





}