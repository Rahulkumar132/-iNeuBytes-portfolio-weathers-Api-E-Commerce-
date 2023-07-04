# -iNeuBytes-portfolio
// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function () {
    const top = window.scrollY;
    if (top >= 100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})
$('.next').click(function () {
    var nextTarget = $(this).parent().siblings('span');
    var currentTarget = $(this).parent();
    currentTarget.removeClass('active');
    nextTarget.addClass('active').find('input').focus();
});

$('input#email').on('keydown', function (e) {
    var keyCode = e.keyCode || e.which;
    if (keyCode == 13) {
        $('.submit').trigger('click');
    }
})

$('.submit').click(function () {
    var target = $(this);
    var lastInputContainerLabel = target.parent().find('.container.active label');
    target.addClass('submitted');
    lastInputContainerLabel.addClass('fadeOut');
})



// capture tab press
$(".container").on('keydown', 'input', function (e) {
    var keyCode = e.keyCode || e.which;

    if (keyCode == 9) {
        e.preventDefault();
        //tabbing backwards
        if (e.shiftKey) {
            var currentInput = $(this);
            var prevInput = currentInput.parent().prev('.container').find('input');
            var currentContainer = currentInput.parent();
            var prevContainer = currentInput.parent().prev('.container');
            if (currentContainer.is(':first-of-type')) {
                // do nothing if is first input
            } else {
                currentContainer.removeClass('active');
                prevContainer.addClass('active');
                prevInput.focus();
            }
            //tabbing forwards
        } else {
            var currentInput = $(this);
            var nextInput = currentInput.parent().next('.container').find('input');
            var currentContainer = currentInput.parent();
            var nextContainer = currentInput.parent().next('.container');
            if (currentContainer.is(':nth-last-of-type(2)')) {
                // do nothing if is last input
            } else {
                currentContainer.removeClass('active');
                nextContainer.addClass('active');
                nextInput.focus();
            }
        }
    }
});


// validate the form
$('.newsletter').validate({
    errorElement: "span"
});


// reset the form
$('.reset').click(function () {
    var target = $('form.newsletter');
    var targetInput = target.find('span.container > input');
    var inputContainer = target.find('span');
    var firstContainer = target.find('span.container:first-of-type');
    targetInput.val('');
    inputContainer.removeClass('active');
    firstContainer.addClass('active');
    $('span.submit').removeClass('submitted');
    $('label').removeClass('fadeOut')
});
