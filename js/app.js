$(window).on("load",function()
{

    // ===== Preloader
    $(".loader-container").fadeOut(1000);

    progressbarLight();
    init();
    burgerMenuOpen();
    backToTop();
});


// Active link switching
$(window).scroll(function() 
{
    var scrollLink = $('.page-scroll');
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function() 
    {
        var sectionOffset = $(this.hash).offset().top - 73;

        if ( sectionOffset <= scrollbarLocation ) 
        {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        }
    });
});


function progressbarLight()
{
    var preogressbar = document.getElementById('preogressbar');
    var totalHeight = document.body.scrollHeight - window.innerHeight;
    

    window.onscroll = function(){
        var t = totalHeight;
        var progress = (window.pageYOffset / t) * 100; // to the bottom of the page
        preogressbar.style.height = progress + "%";
    };
}

// ============== Animate for hero Img ================================

var animate, left=0, imgObj=null;

function init()
{

   imgObj = document.getElementById('animeImg');
   imgObj.style.position= 'relative';
   imgObj.style.left = '-150px';
   imgObj.style.visibility='hidden';
   moveRight();
}

function moveRight()
{
    left = parseInt(imgObj.style.left, 10);

    if (15 >= left) {
        imgObj.style.left = (left + 5) + 'px';
        imgObj.style.visibility='visible';

        animate = setTimeout(function(){moveRight();},35); // call moveRight in 35msec

    } else {
        stop();
    }
}

function stop()
{
   clearTimeout(animate);
}


// ================== Back to Header =======================================

function backToTop()
{
    $(window).on('scroll', function(event) 
    {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
}

// ================ Open the mobile menu ====================================

function burgerMenuOpen()
{
    
    let hamburger = document.querySelector(".hamburger");
    let times = document.querySelector(".times");
    let mobileNav = document.querySelector(".mobile-nav");
    
    
    hamburger.addEventListener('click', function()
    {
        mobileNav.classList.add('open');
    });

    times.addEventListener('click', function()
    {
        mobileNav.classList.remove('open');
    });
};