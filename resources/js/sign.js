//                               sign up page


if ($("body").data("title") === "Omrah_signup") {
    // Place the logic pertaining to the page with title 'my_page_title' here...
    
    

    var firstname = document.getElementById('firstname');
    var secondname = document.getElementById('secondname');
    var phoneNo = document.getElementById('phoneNo');
    var email = document.getElementById('myemail');
    var password = document.getElementById('password');
    var repass = document.getElementById('repass');
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var eye = document.getElementById('eye');
    var reye = document.getElementById('reye');
    var iti = window.intlTelInput(phoneNo, {
        initialCountry: 'sa',
        narionalMode: true,
        utilsScript: '../vendors/js/utils.js'
    });


    function fname(el) {
        (el.value == "" || el.value == null) ? $(el).addClass('error'): $(el).removeClass('error');
    }

    function phonecheck(el) {
        (!iti.isValidNumber()) ? $(el).addClass('error'): $(el).removeClass('error');
    }

    function emailcheck(el) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        (!el.value.match(mailformat)) ? $(el).addClass('error'): $(el).removeClass('error');

    }

    function passcheck(el) {

        (el.value == "" || el.value == null || el.value.length < 8) ? $(el).addClass('error'): $(el).removeClass('error');
    }

    function repasscheck(el) {
        (el.value !== document.getElementById('password').value) ? $(el).addClass('error'): $(el).removeClass('error');
    }









    NodeList.prototype.forEach = Array.prototype.forEach;

    var inputs = document.querySelectorAll('input').forEach(function (el) {
        el.addEventListener("keyup", validCreate);
    })




    function validCreate() {
        if (
            firstname.value !== "" &&
            secondname.value !== "" &&
            phoneNo.value !== "" &&
            password.value.length > 7 &&
            email.value.match(mailformat) &&
            password.value == repass.value &&
            iti.isValidNumber())

        {
            $('.mysignup').addClass('true');
            $('.mysignup').removeAttr("disabled");


        } else {
            $('.mysignup').removeClass('true');
            $('.mysignup').attr('disabled', 'disabled');


        }
    }

    eye.addEventListener('click', togglePass);
    reye.addEventListener('click', togglePass);

    function togglePass() {
        reye.classList.toggle('showpass');
        eye.classList.toggle('showpass');
        (password.type == 'password') ? password.type = 'text':
            password.type = 'password';

        (repass.type == 'password') ? repass.type = 'text':
            repass.type = 'password';


    }



}

//                               end of sign up page

//                                  sign in page



if ($("body").data("title") === "Omrah_signin") {
    // Place the logic pertaining to the page with title 'my_page_title' here...
    
    

    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var eyesign = document.getElementById('eyesign');
    var username = document.getElementById('uname');
    var mypassword = document.getElementById('pass');
    NodeList.prototype.forEach = Array.prototype.forEach;
    var inputs = document.querySelectorAll('input').forEach(function (el) {
        el.addEventListener("keyup", validCreate);
    })


    function emailcheck(el) {
        (!el.value.match(mailformat)) ? $(el).addClass('error'): $(el).removeClass('error');
    }

    function passcheck(el) {
        (el.value == "" || el.value == null || el.value.length < 8) ? $(el).addClass('error'): $(el).removeClass('error');
    }



    function validCreate() {
        if (mypassword.value !== "" && mypassword.value.length > 7 && username.value.match(mailformat)) {
            $('.mysignin').addClass('true');
            $('.mysignin').removeAttr("disabled");

        } else {

            $('.mysignin').removeClass('true');
            $('.mysignin').attr('disabled', 'disabled');

        }
    }






    eyesign.addEventListener('click', togglePass);

    function togglePass() {
        eyesign.classList.toggle('showpass');
        (pass.type == 'password') ? pass.type = 'text':
            pass.type = 'password';
    }


}


//                                  end of sign in page

//                                  reset password page

if ($("body").data("title") === "Omrah_resetpass") {


    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    function emailcheck(el) {

        (!el.value.match(mailformat)) ? $(el).addClass('error'): $(el).removeClass('error');

    }


    var email = document.getElementById('email');


    document.getElementById('email').addEventListener("keyup", validCreate);

    function validCreate() {
        if (email.value.match(mailformat)) {
            $('.myreset').addClass('true');
            $('.myreset').removeAttr("disabled");

        } else {

            $('.myreset').removeClass('true');
            $('.myreset').attr('disabled', 'disabled');

        }
    }


}

//                               end of resetpassword page