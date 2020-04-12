//                                main page


if ($("body").data("title") === "Omrah_main") {
    
     $('.counting').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');

                $({
                    countNum: $this.text()
                }).animate({
                        countNum: countTo
                    },

                    {

                        duration: 3000,
                        easing: 'linear',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                            //alert('finished');
                        }

                    });
            }); 
    
    var mymap = document.getElementById('map');
    
    function MapLinkClicked(el) {
        var overlayMap = document.getElementById('overlaymap');
        overlayMap.classList.add('active')

        var lat = parseFloat(el.parentElement.querySelector('.latValue').value);
        var lng = parseFloat(el.parentElement.querySelector('.lngValue').value);
        var mylabel = el.parentElement.querySelector('.hotelName').innerText;

        initMap(lat, lng, mylabel);
    }
   
    function MapClicked(el) {
        var overlayMap = document.getElementById('overlaymap');
        overlayMap.classList.add('active')

        var lat = parseFloat(el.parentElement.querySelector('.latValue').value);
        var lng = parseFloat(el.parentElement.querySelector('.lngValue').value);
        var mylabel = el.parentElement.querySelector('.namehotel').innerText;

        initMap(lat, lng, mylabel);
    }
    
    
    function initMap(lat, lng, mylabel) {
        
        var options = {
            zoom: 8,
            center: {
                lat: +lat,
                lng: +lng
            }
        }

        var map = new google.maps.Map(mymap, options);
        var marker = new google.maps.Marker({
            position: {
                lat: +lat,
                lng: +lng
            },
            map: map,
            title: mylabel
        });
    }
    
    

function choosecurrency(el) {
    document.getElementById('changing_currency').value = el.dataset.myval;
}


    $(document).ready(function () {

        var overlay = document.getElementById('overlay');
        overlay.classList.add('active');

        $('.closeMap').click(function () {
            var overlayMap = document.getElementById('overlaymap');
            overlayMap.classList.remove('active');

        });



        $('.menuselect').click(function () {
            if (this.classList.contains('active') != true) {
                $('.menuselect').removeClass('active');
                $(this).addClass('active');

            }

        });


        $('#bestoffers').click(function () {
            $('html, body').animate({
                scrollTop: $('.betterOffer').offset().top - 160
            }, 1000);
        });

        $('.mainmenu').click(function () {
            $('html, body').animate({
                scrollTop: $('#mainpage').offset().top - 160
            }, 1000);
        });

        $('.bestoffers').click(function () {
            $('html, body').animate({
                scrollTop: $('#bestoffers').offset().top - 160
            }, 1000);
        });

        $('.mostreserver').click(function () {
            $('html, body').animate({
                scrollTop: $('#mostreserver').offset().top - 160
            }, 1000);
        });

        $('.mostvalue').click(function () {
            $('html, body').animate({
                scrollTop: $('#mostvalue').offset().top - 160
            }, 1000);
        });

        $('.closetoharam').click(function () {
            $('html, body').animate({
                scrollTop: $('#closetoharam').offset().top - 160
            }, 1000);
        });

        $('.closetomadina').click(function () {
            $('html, body').animate({
                scrollTop: $('#closetomadina').offset().top - 160
            }, 1000);
        });

        $('.position').waypoint(function (direction) {
            if (direction == "down") {
                $('nav').addClass('sticky');
                $('.newnav').addClass('sticky1');
            } else {
                $('nav').removeClass('sticky');
                $('.newnav').removeClass('sticky1');
            }
        }, {
            offset: '60px;'
        });


        $('.omrahomes').click(function () {
            $('.omracomp').addClass('hidden');
            $('.omrahomesp').removeClass('hidden');
            $('.omrahomes').addClass('clicked');
            $('.omracom').removeClass('clicked');
            $('#omrahomes').addClass('active');
            $('#omracom').removeClass('active');


        });

        $('.omracom').click(function () {
            $('.omrahomesp').addClass('hidden');
            $('.omracomp').removeClass('hidden');
            $('.omracom').addClass('clicked');
            $('.omrahomes').removeClass('clicked');
            $('#omracom').addClass('active');
            $('#omrahomes').removeClass('active');

        });




        $('#omrahomes').click(function () {
            $('#omrahomes').addClass('active');
            $('#omracom').removeClass('active');

        });

        $('#omracom').click(function () {
            $('#omrahomes').removeClass('active');
            $('#omracom').addClass('active');

        });

        $('#madina').click(function () {
            $('#makka').prop("checked", false);
            $('#makka').attr("checked", false);
            $('#madina').prop("checked", true);
            $('#madina').attr("checked", true);


        });

        $('#makka').click(function () {
            $('#madina').prop("checked", false);
            $('#madina').attr("checked", false);
            $('#makka').prop("checked", true);
            $('#makka').attr("checked", true);

        });



        $('.done').click(function () {
            $('.omra_pop').addClass('hidden');
            overlay.classList.remove('active');
        });

        

  
        
         window.addEventListener('mouseup', function (event) {

                var langdrop = document.getElementById('lang_menu');
                (event.target != langdrop) ?
                $('#menu_open').addClass('hidden'): $('#menu_open').removeClass('hidden');
                
                $('#lang_menu').click(function () {
                     document.getElementById("menu_open").classList.toggle("hidden");
                });
                
                
                
            });

            window.addEventListener('mouseup', function (e) {

                var currencydrop = document.getElementById('currency_menu');
                (e.target != currencydrop) ?
                $('#menu_currency_open').addClass('hidden'): $('#menu_currency_open').removeClass('hidden');
                
                $('#currency_menu').click(function () {
                      document.getElementById("menu_currency_open").classList.toggle("hidden");
                });

            });
        
            $('#arabic').click(function () {
                document.getElementById('changing_language').value = document.getElementById('arabic').innerText;
            });

            $('#english').click(function () {
                document.getElementById('changing_language').value = document.getElementById('english').innerText;
            });


        //      stepper


        var mindate = new Date();
        var d = new Date();
        d.setDate(d.getDate() + 1);

        $('#picker').daterangepicker({
            singleDatePicker: true,
            showDropdowns: false,
            open: 'right',
            drops: 'down',
            locale: {
                format: 'DD/MM/YYYY'
            },
            minDate: mindate,



        });



        $('#picker').on('apply.daterangepicker', function (selectedDate, picker) {
            $('#picker').removeClass('hide');
            $(".arrive").addClass('approved');
            $("#pickercheck").removeAttr("disabled");
            $("#nomber").addClass("hidden");
            $("#nomb").addClass('hidden');
            $('#pickercheck').click();
           
        });
       

        $('#pickercheck').click(function () {
            $("#nomber").addClass("hidden");
            $("#nomb").addClass('hidden');
            $(".checkpopup").removeClass('hidden');
        });

        $('#picker').click(function () {
            $("#nomber").addClass("hidden");
            $("#nomb").addClass('hidden');
           
        });
        

        
        $('#pickercheck').daterangepicker({
            singleDatePicker: true,
            showDropdowns: false,
            open: 'right',
            drops: 'down',
            locale: {
                format: 'DD/MM/YYYY'
            },
            minDate: d

        });

        $('#pickercheck').on('apply.daterangepicker', function (selectedDate, picker) {
            $('#pickercheck').removeClass('hide');
            $(".checkOut").addClass('approved');
            $('.reserveType').attr('for', 'btns')
            $("#nomber").addClass("hidden");
            $("#nomb").addClass('hidden');
            $('.reserveType').click();
            

            
        });
        

        


        $('.reserveType').click(function () {
            $('.type').removeClass('hidden');
            $("#nomber").addClass("hidden");
            $("#nomb").addClass('hidden');
            $('.typepopup').removeClass('hidden');


        });


        $('.resType').click(function () {
            $(".type").addClass('hidden');
            var x = this.innerText;
            $('.Option').val("تم اختيار" + " " + x);
            $("#personNo").removeAttr("disabled");
            $(".reserveType").addClass('approved');
            $("#nomber").addClass("hidden");
            $("#nomb").addClass('hidden');
            $('#personNo').click();
            $(".num1").val("عدد الأفراد" + "  " + 1);
            $('.typepopup').addClass('hidden');



        });
        



        $('#personNo').click(function () {
            $(".type").addClass('hidden');
            $("#nomber").removeClass('hidden');
            $('#childNo').removeAttr("disabled");
            $("#nomb").addClass('hidden');
            

        });


        $('.next_step').click(function () {
            $('#childNo').click();
            $(".num2").val("عدد الأطفال" + "  " + 0);
            $('#personNo').addClass('approved');
           

        });
        $('.next_step_child').click(function () {
            $('.search').addClass('searchapproved');
            $('#disabled').attr('onclick', 'return true;');            
            $('#childNo').addClass('approved');
            $("#nomb").addClass('hidden');
            

        });

        $('#childNo').click(function () {
            $("#nomb").removeClass('hidden');
            $("#nomber").addClass("hidden");
            $(".type").addClass('hidden');
            

        });

        $('.search').click(function () {
            $("#nomb").addClass('hidden');
            $("#nomber").addClass("hidden");

        });
        
        
       

        //          increment onclick - decrement 



        $('#incperson').click(function () {
            $(".num1").val("عدد الأفراد" + "  " + 1);
            var y = document.getElementById('person').innerHTML;
            y++;
            document.getElementById('person').innerHTML = y;

            $(".num1").val("عدد الأفراد" + "  " + y);
            $('#personNo').addClass('approved');


        });

        $('#inchild').click(function () {
            var z = document.getElementById('child').innerHTML;
            z++;
            document.getElementById('child').innerHTML = z;
            $(".num2").val("عدد الأطفال" + "  " + z);
            $('#childNo').addClass('approved')


        });

        $('#decperson').click(function () {
            var y = document.getElementById('person').innerHTML;
            y--;
            if (y < 1) {
                y = 1;
            }
            document.getElementById('person').innerHTML = y;
            $(".num1").val("عدد الأفراد" + "  " + y);


        });

        $('#dechild').click(function () {
            var z = document.getElementById('child').innerHTML;
            z--;
            if (z < 0) {
                z = 0;
            }
            document.getElementById('child').innerHTML = z;
            $(".num2").val("عدد الأطفال" + "  " + z);

        });


        //          sign in - sign up 


       
        
        $('.ident').click(function () {
            $('.idprofile').addClass('hidden');

        });

        $('.signout').click(function () {
            $('#signup').removeClass('hidden');
            $('#singin').removeClass('hidden');
            $('#myreserve').addClass('hidden');
            $('#profile').addClass('hidden');
            $('#useregname').addClass('hidden');
            $('#idprofile').addClass('hidden');

        });
        
        
         window.addEventListener('mouseup', function (maineve) {

                var dropprofile = document.getElementById('profile');
                if (maineve.target != dropprofile) {
                    $('#idprofile').addClass('hidden');
                }
                 $('#useregname').click(function () {
                     $('#idprofile').toggleClass('hidden');

                 });
                
            });





    });
    
     

    // end of document ready


    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }



}



//                               end of main page
//                               search result page



if ($("body").data("title") === "Omrah_search_result") {
    
    var mymap = document.getElementById('map'); 
    var overlayMap = document.getElementById('overlaymap');
    function MapLinkClicked(el) {        
        overlayMap.classList.add('active')
        var lat = parseFloat(el.parentElement.querySelector('.latValue').value);
        var lng = parseFloat(el.parentElement.querySelector('.lngValue').value);
        var mylabel = el.parentElement.parentElement.parentElement.parentElement.querySelector('.info_name').innerText;

        initMap(lat, lng, mylabel);
    }
    
    
    
    function initMap(lat, lng, mylabel) {
        
        var options = {
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: {
                lat: +lat,
                lng: +lng
            }
            
            
        }

        var map = new google.maps.Map(mymap, options);
        var marker = new google.maps.Marker({
            position: {
                lat: +lat,
                lng: +lng
            },
            map: map,
            title: mylabel,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
    }
    
    
    function changeImg(el){
        
            el.parentElement.parentElement.querySelector('.parentImage').src = el.querySelector('.thumb').src ;
            if (el.querySelector("img").classList.contains('current') != true) {
                $('.thumb').removeClass('current');
                el.querySelector(".thumb").classList.add('current');
            }
       
    }
    
   function nextimage(el) {
       var next = el.parentElement.querySelector('.current').parentElement.parentElement.nextElementSibling;
       if (next) {
           next.click();
       }

   }

   function previmage(el) {
       var prev = el.parentElement.querySelector('.current').parentElement.parentElement.previousElementSibling;
       if (prev) {
           prev.click();
       }
   }

    
    function changePage(el){
            if (el.classList.contains('currentPage') != true) {
                $('.page').removeClass('currentPage');
                el.classList.add('currentPage');
            }
    }
    
    
    
    $('.menuselect').click(function () {
            if (this.classList.contains('active') != true) {
                $('.menuselect').removeClass('active');
                $(this).addClass('active');

            }

        });
    
    
    $('.stars').click(function () {
            if ($(this).prop("checked", true)) {
                $(".stars").prop("checked", false);
                $(".stars").attr("checked", false);
                $(this).prop("checked", true);
                $(this).attr("checked", true);
            }

        });
    
    function myClickBox(el){
       if (!$(el).is(':checked')) {           
           $(el).attr('checked' , false); 
       } else {         
           $(el).attr('checked', true);
       }
    }

    
    
   
    function choosecurrency(el) {
        NodeList.prototype.forEach = Array.prototype.forEach;
        document.getElementById('changing_currency').value = el.dataset.myval;
        document.getElementById('fromslide').innerText = el.dataset.myval;
        document.getElementById('toslide').innerText = el.dataset.myval;
        var roomcurrency = document.querySelectorAll('.new_currency').forEach(function(curr){
            curr.innerText = el.dataset.myval;
        });
       
    }
    
   
    
//                                              start of document ready
    
     $(document).ready(function () {
         
         $('.closeMap').click(function () {
             var overlayMap = document.getElementById('overlaymap');
             overlayMap.classList.remove('active');
         });

         window.addEventListener('mouseup', function (eve) {

             var dropbest = document.getElementById('bestMenudwn');
             var dropstar = document.getElementById('starMenudwn');
             var dropdist = document.getElementById('distMenudwn');
             if (eve.target != dropbest) {
                 $('#bestMenudwn').addClass('hidden');
             }
             if (eve.target != dropstar) {
                 $('#starMenudwn').addClass('hidden');
             }
             if (eve.target != dropdist) {
                 $('#distMenudwn').addClass('hidden');
             }

             $('#High_value').click(function () {

                 document.getElementById("bestMenudwn").classList.toggle("hidden");
             });

             $('#stars').click(function () {
                 document.getElementById("starMenudwn").classList.toggle("hidden");
             });

             $('#dist_haram').click(function () {
                 document.getElementById("distMenudwn").classList.toggle("hidden");
             });

         });

         window.addEventListener('mouseup', function (event) {

             var langdrop = document.getElementById('lang_menu');
             (event.target != langdrop) ?
             $('#menu_open').addClass('hidden'): $('#menu_open').removeClass('hidden');

             $('#lang_menu').click(function () {
                 document.getElementById("menu_open").classList.toggle("hidden");
             });

         });


         window.addEventListener('mouseup', function (e) {

             var currencydrop = document.getElementById('currency_menu');
             (e.target != currencydrop) ?
             $('#menu_currency_open').addClass('hidden'): $('#menu_currency_open').removeClass('hidden');

             $('#currency_menu').click(function () {
                 document.getElementById("menu_currency_open").classList.toggle("hidden");
             });

         });


         $('#arabic').click(function () {
             document.getElementById('changing_language').value = document.getElementById('arabic').innerText;
         });

         $('#english').click(function () {
             document.getElementById('changing_language').value = document.getElementById('english').innerText;
         });

         //      stepper


         var mindate = new Date();
         var d = new Date();
         d.setDate(d.getDate() + 1);

         $('#picker').daterangepicker({
             singleDatePicker: true,
             showDropdowns: false,
             open: 'right',
             drops: 'down',
             locale: {
                 format: 'DD/MM/YYYY'
             },
             minDate: mindate,



         });


         $('#picker').on('apply.daterangepicker', function (selectedDate, picker) {
             $('#picker').removeClass('hide');
             $(".arrive").addClass('approved');
             $("#pickercheck").removeAttr("disabled");
             $("#nomber").addClass("hidden");
             $("#nomb").addClass('hidden');
             $('#pickercheck').click();



         });

         $('#pickercheck').click(function () {
             $("#nomber").addClass("hidden");
             $("#nomb").addClass('hidden');
         });

         $('#picker').click(function () {
             $("#nomber").addClass("hidden");
             $("#nomb").addClass('hidden');
         });

         $('#pickercheck').daterangepicker({
             singleDatePicker: true,
             showDropdowns: false,
             open: 'right',
             drops: 'down',
             locale: {
                 format: 'DD/MM/YYYY'
             },
             minDate: d

         });

         $('#pickercheck').on('apply.daterangepicker', function (ev, picker) {
             $('#pickercheck').removeClass('hide');
             $(".checkOut").addClass('approved');
             $('.reserveType').attr('for', 'btns')
             $("#nomber").addClass("hidden");
             $("#nomb").addClass('hidden');
             $('.reserveType').click();
         });






         $('.reserveType').click(function () {
             $('.type').removeClass('hidden');
             $("#nomber").addClass("hidden");
             $("#nomb").addClass('hidden');


         });


         $('.resType').click(function () {
             $(".type").addClass('hidden');
             var x = this.innerText;
             $('.Option').val("تم اختيار" + " " + x);
             $("#personNo").removeAttr("disabled");
             $(".reserveType").addClass('approved');
             $("#nomber").addClass("hidden");
             $("#nomb").addClass('hidden');
             $('#personNo').click();
             $(".num1").val("عدد الأفراد" + "  " + 1);



         });



         $('#personNo').click(function () {
             $(".type").addClass('hidden');
             $("#nomber").removeClass('hidden');
             $('#childNo').removeAttr("disabled");
             $("#nomb").addClass('hidden');

         });


         $('.next_step').click(function () {
             $('#childNo').click();
             $(".num2").val("عدد الأطفال" + "  " + 0);
             $('#personNo').addClass('approved');

         });
         $('.next_step_child').click(function () {
             $('.search').addClass('searchapproved');
             $('#disabled').attr('onclick', 'return true;');
             $('#childNo').addClass('approved');
             $("#nomb").addClass('hidden');

         });

         $('#childNo').click(function () {
             $("#nomb").removeClass('hidden');
             $("#nomber").addClass("hidden");
             $(".type").addClass('hidden');

         });

         $('.search').click(function () {
             $("#nomb").addClass('hidden');
             $("#nomber").addClass("hidden");

         });


        //          increment onclick - decrement 



        $('#incperson').click(function () {
            $(".num1").val("عدد الأفراد" + "  " + 1);
            var y = document.getElementById('person').innerHTML;
            y++;
            document.getElementById('person').innerHTML = y;

            $(".num1").val("عدد الأفراد" + "  " + y);
            $('#personNo').addClass('approved');


        });

        $('#inchild').click(function () {
            var z = document.getElementById('child').innerHTML;
            z++;
            document.getElementById('child').innerHTML = z;
            $(".num2").val("عدد الأطفال" + "  " + z);
            $('#childNo').addClass('approved')


        });

        $('#decperson').click(function () {
            var y = document.getElementById('person').innerHTML;
            y--;
            if (y < 1) {
                y = 1;
            }
            document.getElementById('person').innerHTML = y;
            $(".num1").val("عدد الأفراد" + "  " + y);


        });

        $('#dechild').click(function () {
            var z = document.getElementById('child').innerHTML;
            z--;
            if (z < 0) {
                z = 0;
            }
            document.getElementById('child').innerHTML = z;
            $(".num2").val("عدد الأطفال" + "  " + z);

        });


        //          sign in - sign up 


        $('#useregname').click(function () {
            $('#idprofile').removeClass('hidden');

        });
       

        $('.signout').click(function () {
            $('#signup').removeClass('hidden');
            $('#singin').removeClass('hidden');
            $('#myreserve').addClass('hidden');
            $('#profile').addClass('hidden');
            $('#useregname').addClass('hidden');
            $('#idprofile').addClass('hidden');

        });
         
       
             

     });
    
     
     window.addEventListener('mouseup', function (maineve) {
            
            $('#useregname').click(function () {
                $('#idprofile').toggleClass('hidden');
            });

            var dropprofile = document.getElementById('profile');
            if (maineve.target != dropprofile) {
                $('#idprofile').addClass('hidden');
            }
            
        });
    
    
//                                  end of document ready
    
    
     function evalhide(el) {
         el.parentElement.querySelector('.evalcontainer').classList.add('hidezero');
     }

     function comparehide(el) {
         el.parentElement.querySelector('.evalcontainercompare').classList.add('hidezero');
     }
    
     function evalShow(el){
            
            window.addEventListener('mouseup', function (event) {
                
                var droprate = el.parentElement.querySelector('.evalcontainer');
                
                (event.target != droprate) ?
                el.parentElement.querySelector('.evalcontainer').classList.add('hidezero') :
                el.parentElement.querySelector('.evalcontainer').classList.remove('hidezero');
                
            });
           
         el.parentElement.querySelector('.evalcontainer').classList.toggle('hidezero');
         var ratemarafek = el.parentElement.querySelector('.marafekInput').value;
         var ratequality = el.parentElement.querySelector('.qualityInput').value;
         var rateprice = el.parentElement.querySelector('.priceInput').value;
         var rateclean = el.parentElement.querySelector('.cleanInput').value;
         var ratesite = el.parentElement.querySelector('.siteInput').value;
         var rateserve = el.parentElement.querySelector('.serveInput').value;
          
         el.parentElement.querySelector('.marafekValue').innerText = ratemarafek; 
         el.parentElement.querySelector('.qualityValue').innerText = ratequality; 
         el.parentElement.querySelector('.priceValue').innerText = rateprice; 
         el.parentElement.querySelector('.cleanValue').innerText = rateclean; 
         el.parentElement.querySelector('.siteValue').innerText = ratesite; 
         el.parentElement.querySelector('.serveValue').innerText = rateserve; 
        
         el.parentElement.querySelector('.marafek').style.width =  (ratemarafek * 10) + "%";
         el.parentElement.querySelector('.quality').style.width =  (ratequality * 10) + "%";
         el.parentElement.querySelector('.price').style.width =  (rateprice * 10) + "%";
         el.parentElement.querySelector('.clean').style.width =  (rateclean * 10) + "%";
         el.parentElement.querySelector('.site').style.width =  (ratesite * 10) + "%";
         el.parentElement.querySelector('.serve').style.width =  (rateserve * 10) + "%";
        
    }
    
    function compareShow(el){
        
            window.addEventListener('mouseup', function (event) {
                
                var dropcompare = el.parentElement.querySelector('.evalcontainercompare');
                
                (event.target != dropcompare) ?
                el.parentElement.querySelector('.evalcontainercompare').classList.add('hidezero') :
                el.parentElement.querySelector('.evalcontainercompare').classList.remove('hidezero');
                
            });
        
         el.parentElement.querySelector('.evalcontainercompare').classList.toggle('hidezero');
         var ratemarafek = el.parentElement.querySelector('.marafekInputcompare').value;
         var ratequality = el.parentElement.querySelector('.qualityInputcompare').value;
         var rateprice = el.parentElement.querySelector('.priceInputcompare').value;
         var rateclean = el.parentElement.querySelector('.cleanInputcompare').value;
         var ratesite = el.parentElement.querySelector('.siteInputcompare').value;
         var rateserve = el.parentElement.querySelector('.serveInputcompare').value;
          
         el.parentElement.querySelector('.marafekValuecompare').innerText = ratemarafek; 
         el.parentElement.querySelector('.qualityValuecompare').innerText = ratequality; 
         el.parentElement.querySelector('.priceValuecompare').innerText = rateprice; 
         el.parentElement.querySelector('.cleanValuecompare').innerText = rateclean; 
         el.parentElement.querySelector('.siteValuecompare').innerText = ratesite; 
         el.parentElement.querySelector('.serveValuecompare').innerText = rateserve; 
        
         el.parentElement.querySelector('.marafekcompare').style.width =  (ratemarafek * 10) + "%";
         el.parentElement.querySelector('.qualitycompare').style.width =  (ratequality * 10) + "%";
         el.parentElement.querySelector('.pricecompare').style.width =  (rateprice * 10) + "%";
         el.parentElement.querySelector('.cleancompare').style.width =  (rateclean * 10) + "%";
         el.parentElement.querySelector('.sitecompare').style.width =  (ratesite * 10) + "%";
         el.parentElement.querySelector('.servecompare').style.width =  (rateserve * 10) + "%";
    }
    
    function showfilter(){
        document.getElementById('filter').style.display= "block";
        document.getElementById('closefilter').classList.remove('hidden');
    }
    
   function closefilter(){
       document.getElementById('filter').style.display= "none";
   }
    
    
    
               
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
    
 
    
    
}


//                             end of search result page
//                                user profile page


if ($("body").data("title") === "User_Profile") {
   
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var firstname = document.getElementById('firstname');
    var secondname = document.getElementById('secondname');
    var phoneNo = document.getElementById('phoneNo');
    var myloc = document.getElementById('myloc');
    var email = document.getElementById('myemail');
    var iti = window.intlTelInput(phoneNo, {
        initialCountry: 'id',
        narionalMode: true,
        utilsScript: '../vendors/js/utils.js'
    });
    
    
    var reservepopup = document.getElementById('pop_reserve');
    var cancel_res_popup = document.getElementById('pop_reserve_cancel');
    
    function previewFile() {
        const preview = document.querySelector('#userImg');
        const file = document.querySelector('input[type=file]').files[0];
        const reader = new FileReader();

        reader.addEventListener("load", function () {
            // convert image file to base64 string
            preview.src = reader.result;            
            document.querySelector('.personal').querySelector('img').src = preview.src;
            document.querySelector('#profile').src = preview.src;
            document.querySelector('input[type=file]').classList.add('hidden')
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    }
    
    function loadImg(){
        var input = document.querySelector('input[type=file]');
        input.click();
        
    }
    
    
    function openListMenu(el){
        el.parentElement.querySelector('.profile_content').classList.toggle("listOpen");
        if(el.parentElement.querySelector('.profile_content').classList.contains("listOpen")){
            el.classList.add('white');
        }else{
            el.classList.remove('white');
        }
        
    }
    
    function emailcheck(el) {
        (!el.value.match(mailformat)) ? $(el).addClass('error'): $(el).removeClass('error');
    }
    
    function fname(el) {
        (el.value == "" || el.value == null) ? $(el).addClass('error'): $(el).removeClass('error');
    }

    function phonecheck(el) {
        (!iti.isValidNumber()) ? $(el).addClass('error'): $(el).removeClass('error');
    }
    
    
    function editUser(el){
        el.parentElement.parentElement.parentElement.parentElement.querySelector('.save_user').classList.remove('hidden')
        el.parentElement.querySelector('input').removeAttribute("readonly");
        el.parentElement.querySelector('input').classList.add("edited");
        el.parentElement.querySelector('.cancel_edit').classList.remove("hidden");
        
        
    }
    
    var oldName = firstname.value;
    var oldlName = secondname.value;
    var oldNo = phoneNo.value;
    var oldMail = email.value;
    var oldLoc = myloc.value;
    
     function getOldValue(el){
         var old = el.value;
         return old;
         
     }
    
    
    
    function cancelEdit(el){ 
        NodeList.prototype.forEach = Array.prototype.forEach;
        el.parentElement.querySelector('input').classList.remove("edited");
        if (el.parentElement.querySelector('input').id === "firstname" ){el.parentElement.querySelector('input').value =  oldName; }
        if (el.parentElement.querySelector('input').id === "secondname" ){el.parentElement.querySelector('input').value =  oldlName; }        
        if (el.parentElement.querySelector('input').id === "myloc" ){el.parentElement.querySelector('input').value =  oldLoc; }
        if (el.parentElement.querySelector('input').id === "phoneNo" ){el.parentElement.querySelector('input').value =  oldNo; }
        if (el.parentElement.querySelector('input').id === "myemail" ){el.parentElement.querySelector('input').value =  oldMail; }
        el.parentElement.querySelector('input').setAttribute('readonly', 'true');
        el.parentElement.querySelector('input').classList.remove("error");
        el.classList.add("hidden");
        var myarray = el.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.hidden');        
        console.log(myarray)
        if(myarray.length > 5){
            el.parentElement.parentElement.parentElement.parentElement.querySelector('.save_user').classList.add('hidden');            
        }
    }
    
   function cancelcredit(el){
       NodeList.prototype.forEach = Array.prototype.forEach;
       el.parentElement.querySelector('#saveCredit').classList.add('hidden');
       el.parentElement.querySelector('#editCredit').classList.remove('hidden');
       el.classList.add('hidden');
       el.parentElement.querySelectorAll('input').forEach(function(child){
          child.setAttribute('readonly', 'true');
       });
       
        document.getElementById('creditName').type = 'password';
        document.getElementById('creditNo').type = 'password';
        document.getElementById('creditExDate').type = 'password';
        document.getElementById('creditCVV').type = 'password'; 
       
   }
    
   function creditsave(el){
       NodeList.prototype.forEach = Array.prototype.forEach;
       el.parentElement.querySelector('#cancelCredit').classList.add('hidden');
       el.parentElement.querySelector('#editCredit').classList.remove('hidden');
       el.classList.add('hidden');
       el.parentElement.querySelectorAll('input').forEach(function(child){
          child.setAttribute('readonly', 'true');
       });
       
        document.getElementById('creditName').type = 'password';
        document.getElementById('creditNo').type = 'password';
        document.getElementById('creditExDate').type = 'password';
        document.getElementById('creditCVV').type = 'password'; 
        
   }
    
    
    function creditadd(el){
       NodeList.prototype.forEach = Array.prototype.forEach;
       el.parentElement.querySelector('#cancelCredit').classList.remove('hidden');
       el.parentElement.querySelector('#saveCredit').classList.remove('hidden');       
       el.classList.add('hidden');
       el.parentElement.querySelectorAll('input').forEach(function(child){
          child.removeAttribute("readonly");
       }); 
 
        
        document.getElementById('creditName').type = 'text';
        document.getElementById('creditNo').type = 'number';
        document.getElementById('creditExDate').type = 'text';
        document.getElementById('creditCVV').type = 'text';        
       
        
   }
    

   function profilePage(){
       document.getElementById('pFile').click();
   }
   function emailPage(){
       document.getElementById('pEmail').click();
   }
   function valuePage(){
       document.getElementById('pEvaluation').click();
   }
   function resPage(){
       document.getElementById('pReserve').click();
   }
   function favPage(){
       document.getElementById('pfavourite').click();
   }
    
    function formatString(e) {
        var inputChar = String.fromCharCode(event.keyCode);
        var code = event.keyCode;
        var allowedKeys = [8];
        if (allowedKeys.indexOf(code) !== -1) {
            return;
        }

        event.target.value = event.target.value.replace(
            /^([1-9]\/|[2-9])$/g, '0$1/' // 3 > 03/
        ).replace(
            /^(0[1-9]|1[0-2])$/g, '$1/' // 11 > 11/
        ).replace(
            /^([0-1])([3-9])$/g, '0$1/$2' // 13 > 01/3
        ).replace(
            /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' // 141 > 01/41
        ).replace(
            /^([0]+)\/|[0]+$/g, '0' // 0/ > 0 and 00 > 0
        ).replace(
            /[^\d\/]|^[\/]*$/g, '' // To allow only digits and `/`
        ).replace(
            /\/\//g, '/' // Prevent entering more than 1 `/`
        );
    }
    
       
    $('.menuselect').click(function () {
        if (this.classList.contains('side_menu_select') != true) {
            $('.menuselect').removeClass('side_menu_select');
            $(this).addClass('side_menu_select');
            $('.side_menu').click();
        }
    });
    
    
    function pMenu(el) {
            el.parentElement.parentElement.classList.remove('listOpen');
            el.parentElement.parentElement.parentElement.querySelector('.fa-th-list').classList.remove('white');
            NodeList.prototype.forEach = Array.prototype.forEach;
            var h = el.id;
            var x = document.getElementsByClassName(h)[0];
            x.classList.remove('hidden');
            x.parentElement.querySelectorAll('.side_menu').forEach(function(child){
                if(child !== x){
                    child.classList.add('hidden');
                }
            });
        
        
    }

    function deletefav(el) {
        el.parentElement.parentElement.classList.add('hidden');
    }


    function checkResCancel() {
        cancel_res_popup.classList.remove('hidden')
    }

    function checkres() {
        reservepopup.classList.remove('hidden');
    }
    
    
    $('.favSelect').click(function () {
            if (this.classList.contains('choosedone') != true) {
                $('.favSelect').removeClass('choosedone');
                $(this).addClass('choosedone');

            }
        });
    
    $('#closeall').click(function () {
             $(".favOption_hotel").addClass('hidden');
             $(".favOption_room").addClass('hidden');
        });
    
    $('.resbtn').click(function () {
            if (this.classList.contains('choosedone') != true) {
                $('.resbtn').removeClass('choosedone');
                $(this).addClass('choosedone');

            }
        });
    
    $('.evalbtn').click(function () {
            if (this.classList.contains('choosedone') != true) {
                $('.evalbtn').removeClass('choosedone');
                $(this).addClass('choosedone');

            }
        });
  
    $('#favOption_room').click(function () {
        $(".favOption_room").removeClass('hidden');
        $(".favOption_hotel").addClass('hidden');
        });
    
    $('#favOption_hotel').click(function () {
        $(".favOption_hotel").removeClass('hidden');
        $(".favOption_room").addClass('hidden');
        }); 
    
    $('#waited').click(function () {
        $(".res_item_done").addClass('hidden');
        $(".res_item_canceled").addClass('hidden');
        $(".res_item_wait").removeClass('hidden');
        }); 
    
    $('#checkdate').click(function () {
        $(".res_item_done").removeClass('hidden');
        $(".res_item_canceled").removeClass('hidden');
        $(".res_item_wait").removeClass('hidden');
        });
    
    $('#registerdate').click(function () {
        $(".res_item_done").removeClass('hidden');
        $(".res_item_canceled").removeClass('hidden');
        $(".res_item_wait").removeClass('hidden');
        });  
    
    $('#done').click(function () {
        $(".res_item_done").removeClass('hidden');
        $(".res_item_canceled").addClass('hidden');
        $(".res_item_wait").addClass('hidden');
        });
    $('#cancelled').click(function () {
        $(".res_item_done").addClass('hidden');
        $(".res_item_canceled").removeClass('hidden');
        $(".res_item_wait").addClass('hidden');
        });
    
    

    
    $("#avaiable").click(function(){
        $(".evalpuplished").addClass('hidden');
        $("#puplished").removeClass('choosedone');
        $(".availableVal").removeClass('hidden');
        $("#avaiable").addClass('choosedone');
    });
    $("#puplished").click(function(){
        $(".availableVal").addClass('hidden');
        $("#avaiable").removeClass('choosedone');
        $(".evalpuplished").removeClass('hidden');
        $("#puplished").addClass('choosedone');
    });
    
    
    $('.newoption').click(function () {
            if ($(this).prop("checked", true)) {
                $(".newoption").prop("checked", false);
                $(this).prop("checked", true);
            }

        });
    
     function closemail(el){
      el.parentElement.classList.add('hidden');
        
    }
   function incriment(el){
       var h = el.parentElement.querySelector('.no').value;       
       h++;      
       el.parentElement.querySelector('.no').value = h
       el.parentElement.parentElement.parentElement.querySelector('.myrange').value = h;
      
       
       
       if (el.parentElement.querySelector('.no').value > 10 ){
           el.parentElement.querySelector('.no').value =10;
       }else if(el.parentElement.querySelector('.no').value < 1){
           el.parentElement.querySelector('.no').value = 1;
       }
   }
   function decriment(el){
       var h = el.parentElement.querySelector('.no').value;
       h--;
       el.parentElement.querySelector('.no').value = h
       el.parentElement.parentElement.parentElement.querySelector('.myrange').value = h;       
      if(el.parentElement.querySelector('.no').value < 1){
           el.parentElement.querySelector('.no').value = 1;
       }
   }

    function updatevalue(el){
         el.parentElement.querySelector('.no').value = el.value;
        
    }
    
    
    

    function choosecurrency(el) {
        NodeList.prototype.forEach = Array.prototype.forEach;
        document.getElementById('changing_currency').value = el.dataset.myval;
       
    }

    $(document).ready(function () {
        
                 
                 $('.closeMap').click(function () {
                     var overlayMap = document.getElementById('overlaymap');
                     overlayMap.classList.remove('active');
                 });
          
           
        
            

            window.addEventListener('mouseup', function (event) {

                var langdrop = document.getElementById('lang_menu');
                (event.target != langdrop) ?
                $('#menu_open').addClass('hidden'): $('#menu_open').removeClass('hidden');
                
                $('#lang_menu').click(function () {
                     document.getElementById("menu_open").classList.toggle("hidden");
                });
                
                
                
            });
        
           

            window.addEventListener('mouseup', function (e) {

                var currencydrop = document.getElementById('currency_menu');
                (e.target != currencydrop) ?
                $('#menu_currency_open').addClass('hidden'): $('#menu_currency_open').removeClass('hidden');
                
                $('#currency_menu').click(function () {
                      document.getElementById("menu_currency_open").classList.toggle("hidden");
                });

            });

            $('#arabic').click(function () {
                document.getElementById('changing_language').value = document.getElementById('arabic').innerText;
            });

            $('#english').click(function () {
                document.getElementById('changing_language').value = document.getElementById('english').innerText;
            });


            $('.ident').click(function () {
                $('.idprofile').addClass('hidden');

            });

            $('.signout').click(function () {
                $('#signup').removeClass('hidden');
                $('#singin').removeClass('hidden');
                $('#myreserve').addClass('hidden');
                $('#profile').addClass('hidden');
                $('#useregname').addClass('hidden');
                $('#idprofile').addClass('hidden');

            });

            window.addEventListener('mouseup', function (maineve) {

                var dropprofile = document.getElementById('profile');
                if (maineve.target != dropprofile) {
                    $('#idprofile').addClass('hidden');
                }
                 $('#useregname').click(function () {
                     $('#idprofile').toggleClass('hidden');

                 });

                
            });

        });
    
   
    
    }

//                               end of User_Profile page
//                                  hotel_enter page


if ($("body").data("title") === "hotel_enter") {   
    
            $('.counting').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');

                $({
                    countNum: $this.text()
                }).animate({
                        countNum: countTo
                    },

                    {

                        duration: 3000,
                        easing: 'linear',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                            //alert('finished');
                        }

                    });
            }); 
    
    
            function choosecurrency(el) {
                NodeList.prototype.forEach = Array.prototype.forEach;
                document.getElementById('changing_currency').value = el.dataset.myval;
                document.querySelectorAll('.prices').forEach(function(child){
                    child.innerHTML = el.dataset.myval;
                });
            }

            window.addEventListener('mouseup', function (event) {

                var langdrop = document.getElementById('lang_menu');
                (event.target != langdrop) ?
                $('#menu_open').addClass('hidden'): $('#menu_open').removeClass('hidden');

                $('#lang_menu').click(function () {
                    document.getElementById("menu_open").classList.toggle("hidden");
                });



            });



            window.addEventListener('mouseup', function (e) {

                var currencydrop = document.getElementById('currency_menu');
                (e.target != currencydrop) ?
                $('#menu_currency_open').addClass('hidden'): $('#menu_currency_open').removeClass('hidden');

                $('#currency_menu').click(function () {
                    document.getElementById("menu_currency_open").classList.toggle("hidden");
                });

            });

            $('#arabic').click(function () {
                document.getElementById('changing_language').value = document.getElementById('arabic').innerText;
            });

            $('#english').click(function () {
            document.getElementById('changing_language').value = document.getElementById('english').innerText;
            });

    
    }

//                               end of hotel_enter page
//                                  hotel_signup page
        

if ($("body").data("title") === "hotel_signup") {   
        var eye = document.getElementById('hotelSignEye');
        var password = document.getElementById('password');
        var mymap = document.getElementById('map');
        var overlayMap = document.getElementById('overlaymap');
        var phoneNo = document.getElementById('phoneNo');
        var iti = window.intlTelInput(phoneNo, {
            initialCountry: 'sa',
            narionalMode: true,
            utilsScript: '../vendors/js/utils.js'
        });

        function showcity() {
            document.getElementById('signupCity').classList.toggle('hidden')
        }

        function chosecity(el) {
            document.getElementById('currentCity').value = el.innerHTML;
        }

        function showLang() {
            document.getElementById('signupLang').classList.toggle('hidden')
        }

        function choseLang(el) {
            document.getElementById('currentLang').value = el.innerHTML;
        }

        function validateNo(evt) {
            var theEvent = evt || window.event;

            // Handle paste
            if (theEvent.type === 'paste') {
                key = event.clipboardData.getData('text/plain');
            } else {
                // Handle key press
                var key = theEvent.keyCode || theEvent.which;
                key = String.fromCharCode(key);
            }
            var regex = /[0-9]|\./;
            if (!regex.test(key)) {
                theEvent.returnValue = false;
                if (theEvent.preventDefault) theEvent.preventDefault();
            }
        }


        function MapLinkClicked(el) {
            overlayMap.classList.add('active');
            initMap();
        }

        function initMap() {
            function myMap(lat, long) {
                var myCenter = new google.maps.LatLng(lat, long);
                var mapCanvas = mymap;

                var mapOptions = {
                    center: myCenter,
                    zoom: 15,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,


                };

                map = new google.maps.Map(mapCanvas, mapOptions);
                marker = new google.maps.Marker({
                    position: myCenter,
                    draggable: true,
                    title: document.getElementById('hotelTitle').value,

                });
                marker.setMap(map);

                // Zoom to 9 when clicking on marker
                google.maps.event.addListener(marker, 'click', function () {
                    map.setZoom(9);
                    map.setCenter(marker.getPosition());
                });

                //sets variable for lat and long
                $('.lat').text(lat);
                $('.long').text(long);
            }

            function newLocation(newLat, newLng) {
                map.setCenter({
                    lat: newLat,
                    lng: newLng
                });
            }
            google.maps.event.addDomListener(window, 'load', myMap(21.422510, 39.826168));
            google.maps.event.addListener(map, 'click', function (event) {
                marker.setPosition(event.latLng);
            });

            $('.closeMap').click(function () {
                overlayMap.classList.remove('active');
                var myLat = marker.getPosition().lat();
                var myLng = marker.getPosition().lng();
                document.getElementById("latbox").value = myLat;
                document.getElementById("lngbox").value = myLng;

            });

        }

        $('#langquerYes').click(function () {
            $('#langquerYes').addClass('queryselect');
            $('#langquerNo').removeClass('queryselect');
            $('#langAgree').attr("checked", true);
            $('#langAgree').prop("checked", true);
            $('#langDisagree').attr('checked', false);
            $('#langDisagree').prop('checked', false);
            $('#arabicInput').removeClass('hidden');


        });
        $('#langquerNo').click(function () {
            $('#langquerNo').addClass('queryselect');
            $('#langquerYes').removeClass('queryselect');
            $('#langDisagree').attr('checked', true);
            $('#langDisagree').prop('checked', true);
            $('#langAgree').attr("checked", false);
            $('#langAgree').prop("checked", false);
            $('#arabicInput').addClass('hidden');

        });

        $('#creditquerYes').click(function () {
            $('#creditquerYes').addClass('queryselect');
            $('#creditquerNO').removeClass('queryselect');
            $('#creditAgree').attr("checked", true);
            $('#creditAgree').prop("checked", true);
            $('#creditDisagree').attr("checked", false);
            $('#creditDisagree').prop("checked", false);

        });

        $('#creditquerNO').click(function () {
            $('#creditquerNO').addClass('queryselect');
            $('#creditquerYes').removeClass('queryselect');
            $('#creditAgree').prop("checked", false);
            $('#creditAgree').attr("checked", false);
            $('#creditDisagree').prop("checked", true);
            $('#creditDisagree').attr("checked", true);
        });

        function choosecurrency(el) {
            NodeList.prototype.forEach = Array.prototype.forEach;
            document.getElementById('changing_currency').value = el.dataset.myval;

        }



        window.addEventListener('mouseup', function (event) {

            var langdrop = document.getElementById('lang_menu');
            (event.target != langdrop) ?
            $('#menu_open').addClass('hidden'): $('#menu_open').removeClass('hidden');

            $('#lang_menu').click(function () {
                document.getElementById("menu_open").classList.toggle("hidden");
            });



        });


        eye.addEventListener('click', togglePass);

        function togglePass() {
            eye.classList.toggle('hotelEyeShow');
            (password.type == 'password') ? password.type = 'text':
                password.type = 'password';

        }


        window.addEventListener('mouseup', function (e) {

            var currencydrop = document.getElementById('currency_menu');
            (e.target != currencydrop) ?
            $('#menu_currency_open').addClass('hidden'): $('#menu_currency_open').removeClass('hidden');

            $('#currency_menu').click(function () {
                document.getElementById("menu_currency_open").classList.toggle("hidden");
            });

        });

        $('#arabic').click(function () {
            document.getElementById('changing_language').value = document.getElementById('arabic').innerText;
        });

        $('#english').click(function () {
            document.getElementById('changing_language').value = document.getElementById('english').innerText;
        });

        $(document).ready(function () {
            var options = {
                max_value: 5,
                step_size: 0.5,
                update_input_field_name: $("#input2")
            }
            $(".rate").rate(options);
        });
    
    }

//                                end of hotel_signup page
//                               hotel_signup_request page


if ($("body").data("title") === "hotel_signup_request") {   
       
            function choosecurrency(el) {
                NodeList.prototype.forEach = Array.prototype.forEach;
                document.getElementById('changing_currency').value = el.dataset.myval;
               
            }
           
            window.addEventListener('mouseup', function (event) {

                var langdrop = document.getElementById('lang_menu');
                (event.target != langdrop) ?
                $('#menu_open').addClass('hidden'): $('#menu_open').removeClass('hidden');

                $('#lang_menu').click(function () {
                    document.getElementById("menu_open").classList.toggle("hidden");
                });
            });
    
            window.addEventListener('mouseup', function (e) {
                
                var currencydrop = document.getElementById('currency_menu');
                (e.target != currencydrop) ?
                $('#menu_currency_open').addClass('hidden'): $('#menu_currency_open').removeClass('hidden');

                $('#currency_menu').click(function () {
                    document.getElementById("menu_currency_open").classList.toggle("hidden");
                });

            });

            $('#arabic').click(function () {
                document.getElementById('changing_language').value = document.getElementById('arabic').innerText;
            });

            $('#english').click(function () {
            document.getElementById('changing_language').value = document.getElementById('english').innerText;
            });
    
    
    }
//                                end of hotel_signup_request page

//                                 my_omrah_search_result page




if ($("body").data("title") === "My_Omrah_search_result") {
    
    var mymap = document.getElementById('map'); 
    var overlayMap = document.getElementById('overlaymap');
    function MapLinkClicked(el) {        
        overlayMap.classList.add('active')
        var lat = parseFloat(el.parentElement.querySelector('.latValue').value);
        var lng = parseFloat(el.parentElement.querySelector('.lngValue').value);
        var mylabel = el.parentElement.parentElement.parentElement.parentElement.querySelector('.info_name').innerText;

        initMap(lat, lng, mylabel);
    }
    
   function incRoom(el){
       var x =  el.parentElement.parentElement.querySelector('input').value;
       x++;      
       var y = el.parentElement.parentElement.querySelector('input').max;
       if (x > y){
           x = y;
       }
       el.parentElement.parentElement.querySelector('input').value = x;
   }
   function decRoom(el){
       var x =  el.parentElement.parentElement.querySelector('input').value;
       x--;
       var y = el.parentElement.parentElement.querySelector('input').min;
       if (x < y){
           x = y;
       }
       el.parentElement.parentElement.querySelector('input').value = x;
      
   }
    
    
    function initMap(lat, lng, mylabel) {
        
        var options = {
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: {
                lat: +lat,
                lng: +lng
            }
            
            
        }

        var map = new google.maps.Map(mymap, options);
        var marker = new google.maps.Marker({
            position: {
                lat: +lat,
                lng: +lng
            },
            map: map,
            title: mylabel,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
    }
    
    
    function changeImg(el){
        
            el.parentElement.parentElement.querySelector('.parentImage').src = el.querySelector('.thumb').src ;
            if (el.querySelector("img").classList.contains('current') != true) {
                $('.thumb').removeClass('current');
                el.querySelector(".thumb").classList.add('current');
            }
       
    }
    
   function nextimage(el) {
       var next = el.parentElement.querySelector('.current').parentElement.parentElement.nextElementSibling;
       if (next) {
           next.click();
       }

   }

   function previmage(el) {
       var prev = el.parentElement.querySelector('.current').parentElement.parentElement.previousElementSibling;
       if (prev) {
           prev.click();
       }
   }

    
    function changePage(el){
            if (el.classList.contains('currentPage') != true) {
                $('.page').removeClass('currentPage');
                el.classList.add('currentPage');
            }
    }
    
    
    
    $('.menuselect').click(function () {
            if (this.classList.contains('active') != true) {
                $('.menuselect').removeClass('active');
                $(this).addClass('active');

            }

        });
    
    
    $('.stars').click(function () {
            if ($(this).prop("checked", true)) {
                $(".stars").prop("checked", false);
                $(".stars").attr("checked", false);
                $(this).prop("checked", true);
                $(this).attr("checked", true);
            }

        });
    
    function myClickBox(el){
       if (!$(el).is(':checked')) {           
           $(el).attr('checked' , false); 
       } else {         
           $(el).attr('checked', true);
       }
    }

    
    
   
    function choosecurrency(el) {
        NodeList.prototype.forEach = Array.prototype.forEach;
        document.getElementById('changing_currency').value = el.dataset.myval;
        document.getElementById('fromslide').innerText = el.dataset.myval;
        document.getElementById('toslide').innerText = el.dataset.myval;
        document.getElementById('roomCurrency').innerText = el.dataset.myval;
        var roomcurrency = document.querySelectorAll('.new_currency').forEach(function(curr){
            curr.innerText = el.dataset.myval;
        });
       
    }
    
   
    
   
    
//                                              start of document ready
    
     $(document).ready(function () {
         
         
         $('.closeMap').click(function () {
             var overlayMap = document.getElementById('overlaymap');
             overlayMap.classList.remove('active');
         });

         window.addEventListener('mouseup', function (eve) {

             var dropbest = document.getElementById('bestMenudwn');
             var dropstar = document.getElementById('starMenudwn');
             var dropdist = document.getElementById('distMenudwn');
             if (eve.target != dropbest) {
                 $('#bestMenudwn').addClass('hidden');
             }
             if (eve.target != dropstar) {
                 $('#starMenudwn').addClass('hidden');
             }
             if (eve.target != dropdist) {
                 $('#distMenudwn').addClass('hidden');
             }

             $('#High_value').click(function () {

                 document.getElementById("bestMenudwn").classList.toggle("hidden");
             });

             $('#stars').click(function () {
                 document.getElementById("starMenudwn").classList.toggle("hidden");
             });

             $('#dist_haram').click(function () {
                 document.getElementById("distMenudwn").classList.toggle("hidden");
             });

         });

         window.addEventListener('mouseup', function (event) {

             var langdrop = document.getElementById('lang_menu');
             (event.target != langdrop) ?
             $('#menu_open').addClass('hidden'): $('#menu_open').removeClass('hidden');

             $('#lang_menu').click(function () {
                 document.getElementById("menu_open").classList.toggle("hidden");
             });

         });


         window.addEventListener('mouseup', function (e) {

             var currencydrop = document.getElementById('currency_menu');
             (e.target != currencydrop) ?
             $('#menu_currency_open').addClass('hidden'): $('#menu_currency_open').removeClass('hidden');

             $('#currency_menu').click(function () {
                 document.getElementById("menu_currency_open").classList.toggle("hidden");
             });

         });


         $('#arabic').click(function () {
             document.getElementById('changing_language').value = document.getElementById('arabic').innerText;
         });

         $('#english').click(function () {
             document.getElementById('changing_language').value = document.getElementById('english').innerText;
         });

         //      stepper


         var mindate = new Date();
         var d = new Date();
         d.setDate(d.getDate() + 1);

         $('#picker').daterangepicker({
             singleDatePicker: true,
             showDropdowns: false,
             open: 'right',
             drops: 'down',
             locale: {
                 format: 'DD/MM/YYYY'
             },
             minDate: mindate,



         });


         $('#picker').on('apply.daterangepicker', function (selectedDate, picker) {
             $('#picker').removeClass('hide');
             $(".arrive").addClass('approved');
             $("#pickercheck").removeAttr("disabled");
             $("#nomber").addClass("hidden");
             $("#nomb").addClass('hidden');
             $('#pickercheck').click();



         });

         $('#pickercheck').click(function () {
             $("#nomber").addClass("hidden");
             $("#nomb").addClass('hidden');
         });

         $('#picker').click(function () {
             $("#nomber").addClass("hidden");
             $("#nomb").addClass('hidden');
         });

         $('#pickercheck').daterangepicker({
             singleDatePicker: true,
             showDropdowns: false,
             open: 'right',
             drops: 'down',
             locale: {
                 format: 'DD/MM/YYYY'
             },
             minDate: d

         });

         $('#pickercheck').on('apply.daterangepicker', function (ev, picker) {
             $('#pickercheck').removeClass('hide');
             $(".checkOut").addClass('approved');
             $('.reserveType').attr('for', 'btns')
             $("#nomber").addClass("hidden");
             $("#nomb").addClass('hidden');
             $('.reserveType').click();
         });






         $('.reserveType').click(function () {
             $('.type').removeClass('hidden');
             $("#nomber").addClass("hidden");
             $("#nomb").addClass('hidden');


         });


         $('.resType').click(function () {
             $(".type").addClass('hidden');
             var x = this.innerText;
             $('.Option').val("تم اختيار" + " " + x);
             $("#personNo").removeAttr("disabled");
             $(".reserveType").addClass('approved');
             $("#nomber").addClass("hidden");
             $("#nomb").addClass('hidden');
             $('#personNo').click();
             $(".num1").val("عدد الأفراد" + "  " + 1);



         });



         $('#personNo').click(function () {
             $(".type").addClass('hidden');
             $("#nomber").removeClass('hidden');
             $('#childNo').removeAttr("disabled");
             $("#nomb").addClass('hidden');

         });


         $('.next_step').click(function () {
             $('#childNo').click();
             $(".num2").val("عدد الأطفال" + "  " + 0);
             $('#personNo').addClass('approved');

         });
         $('.next_step_child').click(function () {
             $('.search').addClass('searchapproved');
             $('#disabled').attr('onclick', 'return true;');
             $('#childNo').addClass('approved');
             $("#nomb").addClass('hidden');

         });

         $('#childNo').click(function () {
             $("#nomb").removeClass('hidden');
             $("#nomber").addClass("hidden");
             $(".type").addClass('hidden');

         });

         $('.search').click(function () {
             $("#nomb").addClass('hidden');
             $("#nomber").addClass("hidden");

         });


        //          increment onclick - decrement 



        $('#incperson').click(function () {
            $(".num1").val("عدد الأفراد" + "  " + 1);
            var y = document.getElementById('person').innerHTML;
            y++;
            document.getElementById('person').innerHTML = y;

            $(".num1").val("عدد الأفراد" + "  " + y);
            $('#personNo').addClass('approved');


        });

        $('#inchild').click(function () {
            var z = document.getElementById('child').innerHTML;
            z++;
            document.getElementById('child').innerHTML = z;
            $(".num2").val("عدد الأطفال" + "  " + z);
            $('#childNo').addClass('approved')


        });

        $('#decperson').click(function () {
            var y = document.getElementById('person').innerHTML;
            y--;
            if (y < 1) {
                y = 1;
            }
            document.getElementById('person').innerHTML = y;
            $(".num1").val("عدد الأفراد" + "  " + y);


        });

        $('#dechild').click(function () {
            var z = document.getElementById('child').innerHTML;
            z--;
            if (z < 0) {
                z = 0;
            }
            document.getElementById('child').innerHTML = z;
            $(".num2").val("عدد الأطفال" + "  " + z);

        });


        //          sign in - sign up 


        $('#useregname').click(function () {
            $('#idprofile').removeClass('hidden');

        });
       

        $('.signout').click(function () {
            $('#signup').removeClass('hidden');
            $('#singin').removeClass('hidden');
            $('#myreserve').addClass('hidden');
            $('#profile').addClass('hidden');
            $('#useregname').addClass('hidden');
            $('#idprofile').addClass('hidden');

        });
         
       
             

     });
    
     
     window.addEventListener('mouseup', function (maineve) {
            
            $('#useregname').click(function () {
                $('#idprofile').toggleClass('hidden');
            });

            var dropprofile = document.getElementById('profile');
            if (maineve.target != dropprofile) {
                $('#idprofile').addClass('hidden');
            }
            
        });
    
    
//                                  end of document ready
    
    
     function evalhide(el) {
         el.parentElement.querySelector('.evalcontainer').classList.add('hidezero');
     }

     function comparehide(el) {
         el.parentElement.querySelector('.evalcontainercompare').classList.add('hidezero');
     }
    
     if (window.matchMedia('(max-width: 1024px)').matches) {
         NodeList.prototype.forEach = Array.prototype.forEach;
         document.querySelectorAll('.eval').forEach(function (el) {
             el.removeAttribute("onmouseenter");
             el.removeAttribute("onmouseleave");
         });
         document.querySelectorAll('.compare').forEach(function (el) {
             el.removeAttribute("onmouseenter");
             el.removeAttribute("onmouseleave");
         });
     } else {

     }
    
     function evalShow(el){
            
            window.addEventListener('mouseup', function (event) {
                
                var droprate = el.parentElement.querySelector('.evalcontainer');
                
                (event.target != droprate) ?
                el.parentElement.querySelector('.evalcontainer').classList.add('hidezero') :
                el.parentElement.querySelector('.evalcontainer').classList.remove('hidezero');
                
            });
           
         el.parentElement.querySelector('.evalcontainer').classList.toggle('hidezero');
         var ratemarafek = el.parentElement.querySelector('.marafekInput').value;
         var ratequality = el.parentElement.querySelector('.qualityInput').value;
         var rateprice = el.parentElement.querySelector('.priceInput').value;
         var rateclean = el.parentElement.querySelector('.cleanInput').value;
         var ratesite = el.parentElement.querySelector('.siteInput').value;
         var rateserve = el.parentElement.querySelector('.serveInput').value;
          
         el.parentElement.querySelector('.marafekValue').innerText = ratemarafek; 
         el.parentElement.querySelector('.qualityValue').innerText = ratequality; 
         el.parentElement.querySelector('.priceValue').innerText = rateprice; 
         el.parentElement.querySelector('.cleanValue').innerText = rateclean; 
         el.parentElement.querySelector('.siteValue').innerText = ratesite; 
         el.parentElement.querySelector('.serveValue').innerText = rateserve; 
        
         el.parentElement.querySelector('.marafek').style.width =  (ratemarafek * 10) + "%";
         el.parentElement.querySelector('.quality').style.width =  (ratequality * 10) + "%";
         el.parentElement.querySelector('.price').style.width =  (rateprice * 10) + "%";
         el.parentElement.querySelector('.clean').style.width =  (rateclean * 10) + "%";
         el.parentElement.querySelector('.site').style.width =  (ratesite * 10) + "%";
         el.parentElement.querySelector('.serve').style.width =  (rateserve * 10) + "%";
        
    }
    
    function compareShow(el){
        
            window.addEventListener('mouseup', function (event) {
                
                var dropcompare = el.parentElement.querySelector('.evalcontainercompare');
                
                (event.target != dropcompare) ?
                el.parentElement.querySelector('.evalcontainercompare').classList.add('hidezero') :
                el.parentElement.querySelector('.evalcontainercompare').classList.remove('hidezero');
                
            });
        
         el.parentElement.querySelector('.evalcontainercompare').classList.toggle('hidezero');
         var ratemarafek = el.parentElement.querySelector('.marafekInputcompare').value;
         var ratequality = el.parentElement.querySelector('.qualityInputcompare').value;
         var rateprice = el.parentElement.querySelector('.priceInputcompare').value;
         var rateclean = el.parentElement.querySelector('.cleanInputcompare').value;
         var ratesite = el.parentElement.querySelector('.siteInputcompare').value;
         var rateserve = el.parentElement.querySelector('.serveInputcompare').value;
          
         el.parentElement.querySelector('.marafekValuecompare').innerText = ratemarafek; 
         el.parentElement.querySelector('.qualityValuecompare').innerText = ratequality; 
         el.parentElement.querySelector('.priceValuecompare').innerText = rateprice; 
         el.parentElement.querySelector('.cleanValuecompare').innerText = rateclean; 
         el.parentElement.querySelector('.siteValuecompare').innerText = ratesite; 
         el.parentElement.querySelector('.serveValuecompare').innerText = rateserve; 
        
         el.parentElement.querySelector('.marafekcompare').style.width =  (ratemarafek * 10) + "%";
         el.parentElement.querySelector('.qualitycompare').style.width =  (ratequality * 10) + "%";
         el.parentElement.querySelector('.pricecompare').style.width =  (rateprice * 10) + "%";
         el.parentElement.querySelector('.cleancompare').style.width =  (rateclean * 10) + "%";
         el.parentElement.querySelector('.sitecompare').style.width =  (ratesite * 10) + "%";
         el.parentElement.querySelector('.servecompare').style.width =  (rateserve * 10) + "%";
    }
    
    function showfilter(){
        document.getElementById('filter').style.display= "block";
        document.getElementById('closefilter').classList.remove('hidden');
    }
    
   function closefilter(){
       document.getElementById('filter').style.display= "none";
   }
    
    
    
               
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
    
 
    
    
}


if ($("body").data("title") === "hotel") {
    
    var mymap = document.getElementById('map');
    
    function MapLinkClicked(el) {
        var overlayMap = document.getElementById('overlaymap');
        overlayMap.classList.add('active')

        var lat = parseFloat(el.parentElement.querySelector('.latValue').value);
        var lng = parseFloat(el.parentElement.querySelector('.lngValue').value);
        var mylabel = document.querySelector('#myhotelName').innerText;

        initMap(lat, lng, mylabel);
    }
 function initMap(lat, lng, mylabel) {
        
        var options = {
            zoom: 8,
            center: {
                lat: +lat,
                lng: +lng
            }
        }

        var map = new google.maps.Map(mymap, options);
        var marker = new google.maps.Marker({
            position: {
                lat: +lat,
                lng: +lng
            },
            map: map,
            title: mylabel
        });
    }
 

function choosecurrency(el) {
    document.getElementById('changing_currency').value = el.dataset.myval;
}
    
    function activate(el) {
            document.getElementById('activated').classList.add('myopac')
            setTimeout(function () {
              
                document.getElementById('activated').classList.remove('myopac');
                document.getElementById('activated').src = el.src;
            }, 200);
            
    }
    
    function activatehover(el) {
            document.getElementById('activated').classList.add('myopac');
            setTimeout(function () {
              
                document.getElementById('activated').classList.remove('myopac');
                document.getElementById('activated').src = el.src;
            }, 200);
            
            
        
    }
    
  function nextActivation(el){       
      document.getElementById('prevAct').classList.remove('hidden');
       if ($('#hotels').hasClass('active')) {
           var nextHotel = document.querySelector('#hotelThumbimages').querySelector('.active').nextElementSibling;
           if (nextHotel) {
               nextHotel.click();
           } else {
               el.classList.add('hidden');

           }
       }else if ($('#rooms').hasClass('active')){
           var nextroom = document.querySelector('#roomThumbimages').querySelector('.active').nextElementSibling;
           if (nextroom) {
               nextroom.click();
           } else {
               el.classList.add('hidden');

           }
       }else if ($('#ser').hasClass('active')){
           var nextser = document.querySelector('#serThumbimages').querySelector('.active').nextElementSibling;
           if (nextser) {
               nextser.click();
           } else {
               el.classList.add('hidden');

           }
       }else if ($('#regions').hasClass('active')){
           var nextreg = document.querySelector('#attrThumbimages').querySelector('.active').nextElementSibling;
           if (nextreg) {
               nextreg.click();
           } else {
               el.classList.add('hidden');

           }
       }
      
  }
    
    
 function prevActivation(el){ 
     
      document.getElementById('nextAct').classList.remove('hidden');
       if ($('#hotels').hasClass('active')) {
           var nextHotel = document.querySelector('#hotelThumbimages').querySelector('.active').previousElementSibling;
           if (nextHotel) {
               nextHotel.click();
           } else {
               el.classList.add('hidden');

           }
       }else if ($('#rooms').hasClass('active')){
           var nextroom = document.querySelector('#roomThumbimages').querySelector('.active').previousElementSibling;
           if (nextroom) {
               nextroom.click();
           } else {
               el.classList.add('hidden');

           }
       }else if ($('#ser').hasClass('active')){
           var nextser = document.querySelector('#serThumbimages').querySelector('.active').previousElementSibling;
           if (nextser) {
               nextser.click();
           } else {
               el.classList.add('hidden');

           }
       }else if ($('#regions').hasClass('active')){
           var nextreg = document.querySelector('#attrThumbimages').querySelector('.active').previousElementSibling;
           if (nextreg) {
               nextreg.click();
           } else {
               el.classList.add('hidden');

           }
       }
      
  }
    
     function evalhide(el) {
         el.parentElement.querySelector('.evalcontainer').classList.add('hidezero');
     }

     function evalShow(el) {

         window.addEventListener('mouseup', function (event) {

             var droprate = el.parentElement.querySelector('.evalcontainer');

             (event.target != droprate) ?
             el.parentElement.querySelector('.evalcontainer').classList.add('hidezero'):
                 el.parentElement.querySelector('.evalcontainer').classList.remove('hidezero');

         });

         el.parentElement.querySelector('.evalcontainer').classList.toggle('hidezero');
         var ratemarafek = el.parentElement.querySelector('.marafekInput').value;
         var ratequality = el.parentElement.querySelector('.qualityInput').value;
         var rateprice = el.parentElement.querySelector('.priceInput').value;
         var rateclean = el.parentElement.querySelector('.cleanInput').value;
         var ratesite = el.parentElement.querySelector('.siteInput').value;
         var rateserve = el.parentElement.querySelector('.serveInput').value;

         el.parentElement.querySelector('.marafekValue').innerText = ratemarafek;
         el.parentElement.querySelector('.qualityValue').innerText = ratequality;
         el.parentElement.querySelector('.priceValue').innerText = rateprice;
         el.parentElement.querySelector('.cleanValue').innerText = rateclean;
         el.parentElement.querySelector('.siteValue').innerText = ratesite;
         el.parentElement.querySelector('.serveValue').innerText = rateserve;

         el.parentElement.querySelector('.marafek').style.width = (ratemarafek * 10) + "%";
         el.parentElement.querySelector('.quality').style.width = (ratequality * 10) + "%";
         el.parentElement.querySelector('.price').style.width = (rateprice * 10) + "%";
         el.parentElement.querySelector('.clean').style.width = (rateclean * 10) + "%";
         el.parentElement.querySelector('.site').style.width = (ratesite * 10) + "%";
         el.parentElement.querySelector('.serve').style.width = (rateserve * 10) + "%";

     }
    
    function comparehide(el) {
        el.parentElement.querySelector('.evalcontainercompare').classList.add('hidezero');
    }

    function compareShow(el) {

        window.addEventListener('mouseup', function (event) {

            var dropcompare = el.parentElement.querySelector('.evalcontainercompare');

            (event.target != dropcompare) ?
            el.parentElement.querySelector('.evalcontainercompare').classList.add('hidezero'):
                el.parentElement.querySelector('.evalcontainercompare').classList.remove('hidezero');

        });

        el.parentElement.querySelector('.evalcontainercompare').classList.toggle('hidezero');
        var ratemarafek = el.parentElement.querySelector('.marafekInputcompare').value;
        var ratequality = el.parentElement.querySelector('.qualityInputcompare').value;
        var rateprice = el.parentElement.querySelector('.priceInputcompare').value;
        var rateclean = el.parentElement.querySelector('.cleanInputcompare').value;
        var ratesite = el.parentElement.querySelector('.siteInputcompare').value;
        var rateserve = el.parentElement.querySelector('.serveInputcompare').value;

        el.parentElement.querySelector('.marafekValuecompare').innerText = ratemarafek;
        el.parentElement.querySelector('.qualityValuecompare').innerText = ratequality;
        el.parentElement.querySelector('.priceValuecompare').innerText = rateprice;
        el.parentElement.querySelector('.cleanValuecompare').innerText = rateclean;
        el.parentElement.querySelector('.siteValuecompare').innerText = ratesite;
        el.parentElement.querySelector('.serveValuecompare').innerText = rateserve;

        el.parentElement.querySelector('.marafekcompare').style.width = (ratemarafek * 10) + "%";
        el.parentElement.querySelector('.qualitycompare').style.width = (ratequality * 10) + "%";
        el.parentElement.querySelector('.pricecompare').style.width = (rateprice * 10) + "%";
        el.parentElement.querySelector('.cleancompare').style.width = (rateclean * 10) + "%";
        el.parentElement.querySelector('.sitecompare').style.width = (ratesite * 10) + "%";
        el.parentElement.querySelector('.servecompare').style.width = (rateserve * 10) + "%";
    }
     
    
    
    function incRoom(el) {
       
        var x = el.parentElement.parentElement.querySelector('input').value;
        x++;
        var y = el.parentElement.parentElement.querySelector('input').max;
        if (x > y) {
            x = y;
        }
        el.parentElement.parentElement.querySelector('input').value = x;
        el.parentElement.querySelector('.myroomNo').innerHTML = el.parentElement.parentElement.querySelector('input').value;
        
    }

    function decRoom(el) {
        var x = el.parentElement.parentElement.querySelector('input').value;
        x--;
        var y = el.parentElement.parentElement.querySelector('input').min;
        if (x < y) {
            x = y;
        }
        el.parentElement.parentElement.querySelector('input').value = x;
        el.parentElement.querySelector('.myroomNo').innerHTML = el.parentElement.parentElement.querySelector('input').value;

    }
    
    function changeImg(el){
        
            el.parentElement.parentElement.querySelector('.parentImage').src = el.querySelector('.thumb').src ;
            if (el.querySelector("img").classList.contains('current') != true) {
                $('.thumb').removeClass('current');
                el.querySelector(".thumb").classList.add('current');
            }
       
    }
    
   function nextimage(el) {
       var next = el.parentElement.querySelector('.current').parentElement.parentElement.nextElementSibling;
       if (next) {
           next.click();
       }

   }

   function previmage(el) {
       var prev = el.parentElement.querySelector('.current').parentElement.parentElement.previousElementSibling;
       if (prev) {
           prev.click();
       }
   }
    
   function showRoomOptions(el){
     el.closest('.roomHotel').querySelector('.myroomOptions').classList.toggle('hidden');
       
   }
    
    function myClickBox(el){
       if (!$(el).is(':checked')) {           
           $(el).attr('checked' , false); 
       } else {         
           $(el).attr('checked', true);
       }
    }
    
    function goRoom(){
        $('#closeMyoverlay').click();
    }
    function changePage(el){
            if (el.classList.contains('currentPage') != true) {
                $('.page').removeClass('currentPage');
                el.classList.add('currentPage');
            }
    }
    
    
    $(document).ready(function () {
     
         document.querySelector('#btUpclean').style.width = ( document.querySelector('#btClean').value * 10 )+ "%";
         document.querySelector('#btUploc').style.width = ( document.querySelector('#btLocation').value * 10 )+ "%";
         document.querySelector('#btUpserv').style.width = ( document.querySelector('#btService').value * 10 )+ "%";
         document.querySelector('#btUpmarafek').style.width = ( document.querySelector('#btMarafek').value * 10 )+ "%";
         document.querySelector('#btUpQuality').style.width = ( document.querySelector('#btQuality').value * 10 )+ "%";
         document.querySelector('#btUpPrice').style.width = ( document.querySelector('#btqualityPr').value * 10 )+ "%";
        
         document.querySelector('#btUpclean').parentElement.querySelector('figure').innerHTML = document.querySelector('#btClean').value;
         document.querySelector('#btUploc').parentElement.querySelector('figure').innerHTML =  document.querySelector('#btLocation').value;
         document.querySelector('#btUpserv').parentElement.querySelector('figure').innerHTML =  document.querySelector('#btService').value;
         document.querySelector('#btUpmarafek').parentElement.querySelector('figure').innerHTML =  document.querySelector('#btMarafek').value;
         document.querySelector('#btUpQuality').parentElement.querySelector('figure').innerHTML =  document.querySelector('#btQuality').value;
         document.querySelector('#btUpPrice').parentElement.querySelector('figure').innerHTML = document.querySelector('#btqualityPr').value;
        
        $('#rom').click(function () {
            $('html, body').animate({
                scrollTop: $('#roomOptions').offset().top - 160
            }, 1000);
        });

        $('#hot').click(function () {
            $('html, body').animate({
                scrollTop: $('#aboutHotel').offset().top - 160
            }, 1000);
        });

        $('#serv').click(function () {
            $('html, body').animate({
                scrollTop: $('#hotelServices').offset().top - 160
            }, 1000);
        });

        $('#accomp').click(function () {
            $('html, body').animate({
                scrollTop: $('#hotelAccomp').offset().top - 160
            }, 1000);
        });

        $('#reg').click(function () {
            $('html, body').animate({
                scrollTop: $('#closeRegions').offset().top - 160
            }, 1000);
        });
        
        $('#clckval').click(function () {
            $('html, body').animate({
                scrollTop: $('#hotelEvals').offset().top - 160
            }, 1000);
        });

        
        $('#roomOptions').waypoint(function (direction) {
            if (direction == "down") {
                $('nav').addClass('sticky');
                $('.newnav').addClass('sticky1');
            } else {
                $('nav').removeClass('sticky');
                $('.newnav').removeClass('sticky1');
            }
        }, {
            offset: '500px;'
        });
        
        
         $('.closeMap').click(function () {
                     var overlayMap = document.getElementById('overlaymap');
                     overlayMap.classList.remove('active');
                 });
        
        NodeList.prototype.forEach = Array.prototype.forEach;
         document.querySelectorAll('.enterdate').forEach(function(m){
             m.addEventListener('click', function(){                 
                 $('html, body').animate({
                     scrollTop: $('#mainPage').offset().top - 160
                 }, 700);
                 $('#picker').click();
             });
             
           
           
            
        });
        
        document.querySelectorAll('.roomNo').forEach(function(current){
            current.value = current.max;
        });
        document.querySelectorAll('.myroomNo').forEach(function(current){
            current.innerHTML = current.parentElement.querySelector('input').value;
        });
        document.querySelectorAll('.bottomImgs').forEach(function(el){                      
            el.querySelectorAll('img').forEach(function(elm){
               elm.setAttribute("onclick","activate(this)");
            });
            el.querySelectorAll('img').forEach(function(elm){
               elm.setAttribute("onmouseenter","activatehover(this)");
            });
        }); 
        document.querySelectorAll('.hotelThumbimages').forEach(function(el){                      
            el.querySelectorAll('img').forEach(function(elm){
                elm.classList.add('imagehotelselect');
            });
        });
        document.querySelectorAll('.roomThumbimages').forEach(function(el){                      
            el.querySelectorAll('img').forEach(function(elm){
                elm.classList.add('imageRoomselect');
            });
        });
        document.querySelectorAll('.serThumbimages').forEach(function(el){                      
            el.querySelectorAll('img').forEach(function(elm){
                elm.classList.add('imageSerselect');
            });
        }); 
        document.querySelectorAll('.attrThumbimages').forEach(function(el){                      
            el.querySelectorAll('img').forEach(function(elm){
                elm.classList.add('imageAttrselect');
            });
        });
        
        

        $('.menuselect').click(function () {
            if (this.classList.contains('active') != true) {
                $('.menuselect').removeClass('active');
                $(this).addClass('active');

            }

        });
        $('.imagehotelselect').click(function () {
            if (this.classList.contains('active') != true) {
                $('.imagehotelselect').removeClass('active');
                $(this).addClass('active');

            }

        });
        $('.imageRoomselect').click(function () {
            if (this.classList.contains('active') != true) {
                $('.imageRoomselect').removeClass('active');
                $(this).addClass('active');

            }

        });
        $('.imageSerselect').click(function () {
            if (this.classList.contains('active') != true) {
                $('.imageSerselect').removeClass('active');
                $(this).addClass('active');

            }

        });
        $('.imageAttrselect').click(function () {
            if (this.classList.contains('active') != true) {
                $('.imageAttrselect').removeClass('active');
                $(this).addClass('active');

            }

        });
        $('.mainselect').click(function () {
            if (this.classList.contains('active') != true) {
                $('.mainselect').removeClass('active');
                $(this).addClass('active');

            }

        });
        

       
        $('#closeMyoverlay').click(function () {
                    $('#hotelOverlay').addClass('hidden');
                    $('#rom').click();
                        
            
        });
        $('.hotelImg').click(function(){
           $('#hotelOverlay').removeClass('hidden');
            document.getElementById('hotels').click();
        });
        $('.roomImg').click(function(){
           $('#hotelOverlay').removeClass('hidden');
            document.getElementById('rooms').click();
        });
        $('.extraImg').click(function(){
           $('#hotelOverlay').removeClass('hidden');
            document.getElementById('ser').click();
        });
        $('.attrImg').click(function(){
           $('#hotelOverlay').removeClass('hidden');         
           document.getElementById('regions').click(); 
        });
        
        
        $('#hotels').click(function(){            
            $('.hotelThumbimages').removeClass('hidden');            
            $('.roomThumbimages').addClass('hidden');
            $('.serThumbimages').addClass('hidden');
            $('.attrThumbimages').addClass('hidden');
            $('.hoteldata').removeClass('hidden');
            $('.roomdata').addClass('hidden');
            $('.room_services').removeClass('hidden');
            $('.closeRegion').addClass('hidden');
            
        });
        
        $('#rooms').click(function(){
            $('.hotelThumbimages').addClass('hidden');
            $('.roomThumbimages').removeClass('hidden');
            $('.serThumbimages').addClass('hidden');
            $('.attrThumbimages').addClass('hidden');
            $('.hoteldata').addClass('hidden');
            $('.roomdata').removeClass('hidden');
            $('.room_services').removeClass('hidden');
            $('.closeRegion').addClass('hidden');
            
        });
        $('#ser').click(function(){
            $('.hotelThumbimages').addClass('hidden');
            $('.roomThumbimages').addClass('hidden');
            $('.serThumbimages').removeClass('hidden');
            $('.attrThumbimages').addClass('hidden');
            $('.hoteldata').addClass('hidden');
            $('.roomdata').removeClass('hidden');
            $('.room_services').removeClass('hidden');
            $('.closeRegion').addClass('hidden');
            
        });
        $('#regions').click(function(){
            $('.hotelThumbimages').addClass('hidden');
            $('.roomThumbimages').addClass('hidden');
            $('.serThumbimages').addClass('hidden');
            $('.attrThumbimages').removeClass('hidden');
            $('.hoteldata').removeClass('hidden');
            $('.roomdata').addClass('hidden');
            $('.room_services').addClass('hidden');
            $('.closeRegion').removeClass('hidden');
            
        });
  
        
         window.addEventListener('mouseup', function (event) {

                var langdrop = document.getElementById('lang_menu');
                (event.target != langdrop) ?
                $('#menu_open').addClass('hidden'): $('#menu_open').removeClass('hidden');
                
                $('#lang_menu').click(function () {
                     document.getElementById("menu_open").classList.toggle("hidden");
                });
                
                
                
            });
        

            window.addEventListener('mouseup', function (e) {

                var currencydrop = document.getElementById('currency_menu');
                (e.target != currencydrop) ?
                $('#menu_currency_open').addClass('hidden'): $('#menu_currency_open').removeClass('hidden');
                
                $('#currency_menu').click(function () {
                      document.getElementById("menu_currency_open").classList.toggle("hidden");
                });

            });
        
            $('#arabic').click(function () {
                document.getElementById('changing_language').value = document.getElementById('arabic').innerText;
            });

            $('#english').click(function () {
                document.getElementById('changing_language').value = document.getElementById('english').innerText;
            });
        
           

        //      stepper


        var mindate = new Date();
        var d = new Date();
        d.setDate(d.getDate() + 1);

        $('#picker').daterangepicker({
            singleDatePicker: true,
            showDropdowns: false,
            open: 'right',
            drops: 'down',
            locale: {
                format: 'DD/MM/YYYY'
            },
            minDate: mindate,



        });



        $('#picker').on('apply.daterangepicker', function (selectedDate, picker) {
            $('#picker').removeClass('hide');
            $(".arrive").addClass('approved');
            $("#pickercheck").removeAttr("disabled");
            $("#nomber").addClass("hidden");
            $("#nomb").addClass('hidden');
            $('#pickercheck').click();
           
        });
       

        $('#pickercheck').click(function () {
            $("#nomber").addClass("hidden");
            $("#nomb").addClass('hidden');
            $(".checkpopup").removeClass('hidden');
        });

        $('#picker').click(function () {
            $("#nomber").addClass("hidden");
            $("#nomb").addClass('hidden');
           
        });
        

        
        $('#pickercheck').daterangepicker({
            singleDatePicker: true,
            showDropdowns: false,
            open: 'right',
            drops: 'down',
            locale: {
                format: 'DD/MM/YYYY'
            },
            minDate: d

        });

        $('#pickercheck').on('apply.daterangepicker', function (selectedDate, picker) {
            $('#pickercheck').removeClass('hide');
            $(".checkOut").addClass('approved');
            $('.reserveType').attr('for', 'btns')
            $("#nomber").addClass("hidden");
            $("#nomb").addClass('hidden');
            $('.reserveType').click();
            

            
        });
        

        


        $('.reserveType').click(function () {
            $('.type').removeClass('hidden');
            $("#nomber").addClass("hidden");
            $("#nomb").addClass('hidden');
            $('.typepopup').removeClass('hidden');


        });


        $('.resType').click(function () {
            $(".type").addClass('hidden');
            var x = this.innerText;
            $('.Option').val("تم اختيار" + " " + x);
            $("#personNo").removeAttr("disabled");
            $(".reserveType").addClass('approved');
            $("#nomber").addClass("hidden");
            $("#nomb").addClass('hidden');
            $('#personNo').click();
            $(".num1").val("عدد الأفراد" + "  " + 1);
            $('.typepopup').addClass('hidden');



        });
        



        $('#personNo').click(function () {
            $(".type").addClass('hidden');
            $("#nomber").removeClass('hidden');
            $('#childNo').removeAttr("disabled");
            $("#nomb").addClass('hidden');
            

        });


        $('.next_step').click(function () {
            $('#childNo').click();
            $(".num2").val("عدد الأطفال" + "  " + 0);
            $('#personNo').addClass('approved');
           

        });
        $('.next_step_child').click(function () {
            $('.search').addClass('searchapproved');
            $('#disabled').attr('onclick', 'return true;');            
            $('#childNo').addClass('approved');
            $("#nomb").addClass('hidden');
            

        });

        $('#childNo').click(function () {
            $("#nomb").removeClass('hidden');
            $("#nomber").addClass("hidden");
            $(".type").addClass('hidden');
            

        });

        $('.search').click(function () {
            $("#nomb").addClass('hidden');
            $("#nomber").addClass("hidden");

        });
        
        
       

        //          increment onclick - decrement 



        $('#incperson').click(function () {
            $(".num1").val("عدد الأفراد" + "  " + 1);
            var y = document.getElementById('person').innerHTML;
            y++;
            document.getElementById('person').innerHTML = y;

            $(".num1").val("عدد الأفراد" + "  " + y);
            $('#personNo').addClass('approved');


        });

        $('#inchild').click(function () {
            var z = document.getElementById('child').innerHTML;
            z++;
            document.getElementById('child').innerHTML = z;
            $(".num2").val("عدد الأطفال" + "  " + z);
            $('#childNo').addClass('approved')


        });

        $('#decperson').click(function () {
            var y = document.getElementById('person').innerHTML;
            y--;
            if (y < 1) {
                y = 1;
            }
            document.getElementById('person').innerHTML = y;
            $(".num1").val("عدد الأفراد" + "  " + y);


        });

        $('#dechild').click(function () {
            var z = document.getElementById('child').innerHTML;
            z--;
            if (z < 0) {
                z = 0;
            }
            document.getElementById('child').innerHTML = z;
            $(".num2").val("عدد الأطفال" + "  " + z);

        });


        //          sign in - sign up 


       
        
        $('.ident').click(function () {
            $('.idprofile').addClass('hidden');

        });

        $('.signout').click(function () {
            $('#signup').removeClass('hidden');
            $('#singin').removeClass('hidden');
            $('#myreserve').addClass('hidden');
            $('#profile').addClass('hidden');
            $('#useregname').addClass('hidden');
            $('#idprofile').addClass('hidden');

        });
        
        
         window.addEventListener('mouseup', function (maineve) {

                var dropprofile = document.getElementById('profile');
                if (maineve.target != dropprofile) {
                    $('#idprofile').addClass('hidden');
                }
                 $('#useregname').click(function () {
                     $('#idprofile').toggleClass('hidden');

                 });
                
            });
       




    });
    
     
    function allrooms(me){
                    
              NodeList.prototype.forEach = Array.prototype.forEach;
             document.querySelectorAll('.availPlace').forEach(function(el){
                 el.classList.remove('hidden');
             });
              document.querySelectorAll('.MyMainRoom').forEach(function(room){
                 room.classList.add('hidden'); 
              });
             me.parentElement.classList.add('hidden');
        
             $('html, body').animate({
                         scrollTop: $('#roomOptions').offset().top - 160
                     }, 700);
       
     }
    // end of document ready        
    

    function choseData(el) {
        el.closest('li').querySelector('p').innerHTML = el.innerHTML;
    }
    
     function showFilterType(el) {
         document.getElementById('dropcontBT').classList.toggle("hidden")
        
     }

     function showFilterP(el) {
         document.getElementById('dropcontbtn').classList.toggle("hidden")
     }

     function showFilterLng(el) {
         document.getElementById('dropcontBTN').classList.toggle("hidden")
     }



     function myFunction() {
         document.getElementById("myDropdown").classList.toggle("show");
     }
    
    window.onclick = function (ett) {        
        
         if (!ett.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
        
        if (!ett.target.matches('.mydropBTN')) {
            var dropdownBTN = document.getElementsByClassName("dropcontBTN");
            var i;
            for (i = 0; i < dropdownBTN.length; i++) {
                var openDropBTN = dropdownBTN[i];
                if (openDropBTN.classList.contains('hidden') != true) {
                    openDropBTN.classList.add('hidden');
                }
            }
        }
        
        if (!ett.target.matches('.mydropbtn')) {
            var dropdownbtn = document.getElementsByClassName("dropcontbtn");
            var i;
            for (i = 0; i < dropdownbtn.length; i++) {
                var openDropbtn = dropdownbtn[i];
                if (openDropbtn.classList.contains('hidden') != true) {
                    openDropbtn.classList.add('hidden');
                }
            }
        }
        
         if (!ett.target.matches('.mydropBT')) {
            var dropdownBT = document.getElementsByClassName("dropcontBT");
            var i;
            for (i = 0; i < dropdownBT.length; i++) {
                var openDropBT = dropdownBT[i];
                if (openDropBT.classList.contains('hidden') != true) {
                    openDropBT.classList.add('hidden');
                }
            }
        } 
        
        if (!ett.target.matches('.roomOptn')) {
            var dropdownBT = document.getElementsByClassName("myroomOptions");
            var i;
            for (i = 0; i < dropdownBT.length; i++) {
                var openDropBT = dropdownBT[i];
                if (openDropBT.classList.contains('hidden') != true) {
                    openDropBT.classList.add('hidden');
                }
            }
        }
        
        
        
        
    }
   
    
    
    
    
    
   

    



    
    
   
}

