// ACTIVE NAV BTNS SECTION

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-link-btn a');

// console.log(activePage);

navLinks.forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add("active-nav-links");
    }
});


// This is the Nav Icon Showing Mobile Nav

function navMobileBtn() {
    var navMobileBtn = $("#nav-icon");

    navMobileBtn.click(function() {
        navMobileBtn.addClass("open");
        $(".nav-mobile-links-container").css("left", "0");
        $(".nav-mobile-links-bg").removeClass("nav-mobile-animation-bg-remove");
        $(".nav-mobile-links-bg").addClass("nav-mobile-animation-bg");
    })
}

navMobileBtn();

// This is for the Click outside Mobile Nav

var mobileNavContainer = $(".nav-mobile-links-bg");

mobileNavContainer.click(function(event) {
    const navBtn2 = document.querySelector("#nav-icon");

    if (event.target.closest(".nav-mobile-links-content")) return;
    navBtn2.classList.remove("open");
    $(".nav-mobile-links-container").css("left", "-100%");
    $(".nav-mobile-links-bg").removeClass("nav-mobile-animation-bg");
    $(".nav-mobile-links-bg").addClass("nav-mobile-animation-bg-remove");
});


function subNavTrigger() {
    $(".mobile-nav-links-sub-trigger").click(function() {
        $(".mobile-nav-sub-links-1").slideToggle();
    })
}

subNavTrigger();

function subNavTrigger2() {
    $(".mobile-nav-links-sub-trigger-2").click(function() {
        $(".mobile-nav-sub-links-2").slideToggle();
    })
}

subNavTrigger2();