/* Contact Page Form validations start here  */
$("#cnt_form").submit(function (event) {

    event.preventDefault();
    var tempe = 0;
    a = $("#cntEmail").val();
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (a == "") {
        $('#cntEmail').css('border-color', 'red');
        $('#cntEmail_e').css('display', 'block');
        $('#cntEmail_e').html('This field is required');
        tempe = 1;
    }
    else if (!filter.test(a)) {
        $('#cntEmail').css('border-color', 'red');
        $('#cntEmail_e').css('display', 'block');
        $('#cntEmail_e').html('Please enter valid email');
        tempe = 1;
    }
    else {
        $('#cntEmail').css('border-color', '');
        $('#cntEmail_e').css('display', 'none');
        tempe = 0;
    }

    if (tempe == 0) {
        $("#loding").css('display', 'inline-block');
        $.post("contactForm.php", {
            email: $("#cntEmail").val()
        })
        .done(function (data) {
            if (data == 1) {
                $("#loding").hide();
                $("#Success").slideDown("slow");
                setTimeout(function () {
                    $("#Success").slideUp("slow");
                }, 5000);
                $("#cnt_form")[0].reset();
            }
            else {
                $("#loding").hide();
                $("#Error").slideDown("slow");
                setTimeout(function () {
                    $("#Error").slideUp("slow");
                }, 5000);
                $("#cnt_form")[0].reset();
            }
        });
    }
});
$("#cntEmail").change(function (event) {
    var a = $("#cntEmail").val();
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (a == "") {
        $('#cntEmail').css('border-color', 'red');
        $('#cntEmail_e').css('display', 'block');
        $('#cntEmail_e').html('This field is required');
    }
    else if (!filter.test(a)) {
        $('#cntEmail').css('border-color', 'red');
        $('#cntEmail_e').css('display', 'block');
        $('#cntEmail_e').html('Please enter valid email');
    }
    else {
        $('#cntEmail').css('border-color', '');
        $('#cntEmail_e').css('display', 'none');
    }
});

/* Contact Page Form validation ends here  */