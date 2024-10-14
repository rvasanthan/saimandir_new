function isValidEmail(email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    //console.log(emailReg.test(email));
    return emailReg.test(email);
}

$("#sendmessage").click(function() {

    alert($("#email").val())


    $.ajax({
        type: "POST",
        url: "https://api.sendinblue.com/v3/smtp/email",
        headers: {
            "Accept" : "application/json",
            "Content-type" : "application/json",
            "api-key" : "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"
        },
        success: function (result, status, xhr) {
            alert("Thanks very much for your message. Sai Mandir team will review it !!");
            $("#firstname").val('');
            $("#lastname").val('');
            $("#email").val('');
            $("#phone").val('');
        },
        error: function (xhr, status, error) {
            $("#firstname").val('');
            $("#lastname").val('');
            $("#email").val('');
            $("#phone").val('');
            console.log(xhr.responseText);
        },
        data : JSON.stringify({
            "sender": {
                "name": $("#name").val(),
                "email": $("#email").val()
            },
            "to": [
                {
                     "email": "vasanth.ravindran@gmail.com",
                     "name": "Sri Shirdi Sai Mandir"
                }
            ],
            "replyTo": {
                "email": $("#email").val(),
                "name": $("#name").val()
            },
            "textContent": $("#message").val(),
            "message" : $("#message").val(),
            "subject": $("#subject").val()
       })
    })
});

function disableSubscriptionElements() {
    $("#firstname").attr('disabled', 'disabled');
    $("#lastname").attr('disabled', 'disabled');
    $("#contact-email").attr('disabled', 'disabled');
    $("#phone").attr('disabled', 'disabled');
    $("#subscribe_button").attr('disabled', 'disabled');
}

function enableSubscriptionElements() {
    $("#firstname").removeAttr('disabled');
    $("#lastname").removeAttr('disabled');
    $("#contact-email").removeAttr('disabled');
    $("#phone").removeAttr('disabled');
    $("#subscribe_button").removeAttr('disabled');
}

/**
 * This is called when a devotee click on the Subscribe
 */
 $("#subscribe_button").click(function() {
    var updateEnabled = false;
    var unencodedEmail = $("#contact-email").val();
    var email = encodeURIComponent(unencodedEmail);
    var firstname = $("#firstname").val();
    var lastname = $("#lastname").val();
    var phone = $("#phone").val();
    disableSubscriptionElements();
    if(firstname == "" || lastname == "" || phone == "" || email == "") {
        alert("Please enter the required information !!");
        return;
    }

    if(!isValidEmail(unencodedEmail)) {
        alert("Please enter a valid email address");
        enableSubscriptionElements();
        return;
    }
    //console.log(email);
    $.ajax({
        type: "GET",
        url: "https://api.sendinblue.com/v3/contacts/"+email,
        dataType: "json",
        headers: {
            "Accept" : "application/json",
            "Content-type" : "application/json",
            "api-key" : "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"
        },
        success: function (result, status, xhr) {
            var saimandirListId = 3;
            $.ajax({
                type: "POST",
                url: "https://api.sendinblue.com/v3/contacts/lists/"+saimandirListId+"/contacts/add",
                dataType: "json",
                success: function (result, status, xhr) {
                    alert("Thanks for providing your information. Stay tuned for more updates !!");
                    $("#firstname").val('');
                    $("#lastname").val('');
                    $("#contact-email").val('');
                    $("#phone").val('');
                    enableSubscriptionElements();
                },
                error: function (xhr, status, error) {
                    alert("We have your email / Phone as part of another contact. Please provide a different email and phone number.");
                    enableSubscriptionElements();
                    console.log(xhr.responseText);
                },
                headers: {
                    "Accept" : "application/json",
                    "Content-type" : "application/json",
                    "api-key" : "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"
                },
                data : JSON.stringify({
                    "updateEnabled": true,
                    "email" : $("#contact-email").val(),
                    "attributes" : { "FIRSTNAME" : $("#firstname").val(), "LASTNAME" : $("#lastname").val(), "SMS" : $("#phone").val()}
               })
            });
        },
        error: function (xhr, status, error) {
            console.log(error);
            $.ajax({
                type: "POST",
                url: "https://api.sendinblue.com/v3/contacts",
                dataType: "json",
                success: function (result, status, xhr) {
                    var saimandirListId = 3;
                    $.ajax({
                        type: "POST",
                        url: "https://api.sendinblue.com/v3/contacts/lists/"+saimandirListId+"/contacts/add",
                        dataType: "json",
                        headers: {
                            "Accept" : "application/json",
                            "Content-type" : "application/json",
                            "api-key" : "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"
                        },
                        data : JSON.stringify({
                            "emails" : [ $("#contact-email").val() ]
                        }),
                        success: function (result, status, xhr) {
                            alert("We saved your contact information. Thanks very much !!"); 
                            $("#firstname").val('');
                            $("#lastname").val('');
                            $("#contact-email").val('');
                            $("#phone").val('');   
                            enableSubscriptionElements();    
                        },
                        error: function (xhr, status, error) {
                            console.log(xhr.responseText);
                            enableSubscriptionElements();
                        }
                    });
                    
                },
                error: function (xhr, status, error) {
                    console.log(xhr.responseText);
                    enableSubscriptionElements();
                },
                headers: {
                    "Accept" : "application/json",
                    "Content-type" : "application/json",
                    "api-key" : "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"
                },
                data : JSON.stringify({
                    "updateEnabled": false,
                    "email" : $("#contact-email").val(),
                    "attributes" : { "FIRSTNAME" : $("#firstname").val(), "LASTNAME" : $("#lastname").val(), "SMS" : $("#phone").val()}
               })
            });
        }
    });
     
});

