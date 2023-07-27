
// ------------step-wizard-------------
$(document).ready(function () {
    $('.nav-tabs > li a[title]').tooltip();
    
    //Wizard
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

        var target = $(e.target);
    
        if (target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function (e) {

        var active = $('.wizard .nav-tabs li.active');
        active.next().removeClass('disabled');
        nextTab(active);

    });
    $(".prev-step").click(function (e) {

        var active = $('.wizard .nav-tabs li.active');
        prevTab(active);

    });
});

function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}


$('.nav-tabs').on('click', 'li', function() {
    $('.nav-tabs li.active').removeClass('active');
    $(this).addClass('active');
});

function data() {
    var a=document.getElementsByName('name')[0].value;
    var b=document.getElementsByName('dob')[0].value;
    var c=document.getElementsByName('gender')[0].value;
    var d=document.getElementsByName('email')[0].value;
    var e=document.getElementsByName('phonenumber')[0].value;
    var f=document.getElementsByName('address')[0].value;
    var g=document.getElementsByName('job')[0].value;
    var h=document.getElementsByName('fname')[0].value;
    var i=document.getElementsByName('mname')[0].value;
    var j=document.getElementsByName('college')[0].value;
    var k=document.getElementsByName('city')[0].value;
    var l=document.getElementsByName('graduate')[0].value;
    const js={
        name : a,
        dob : b,
        gender: c,
        email: d,
        phonenumber: e,
        address: f,
        job: g,
        fathername: h,
        mothername: i,
        college: j,
        city: k,
        graduate:l
    }
    js1=JSON.stringify(js);
    console.log(js);
}


