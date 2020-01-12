

$(document).ready(function () {
    $('.music').on('click', function () {
        $('.main').hide(100);
        $('.cont-music').show(100);
    });

    $('.billie').on('click', function () {
        $('.main').hide(100);
        $('.cont-billie').show(100);
    });

    //Close Music{
        $('.cont-music > i:last-child').on('click', function () {
            $('.main').show(100);
            $('.cont-music').hide(100);

        })

    //Close Billie
    $('.cont-billie > i:last-child').on('click', function () {
        $('.main').show(100);
        $('.cont-billie').hide(100);

    })
    

    // Start Play The Music

    $('.cont-music i:nth-of-type(3)').on('click', function () {
        var audio = $(this).parent().parent().find('audio')[0];
        $(this).toggleClass('fa-play fa-pause');
        if ( audio.paused ) {
            audio.play();
        } else {
            audio.pause()
        }
    })

    // change The Imgs

    $('.cont-music .img-list img').on('click', function () {
        
        var sourceImg = $(this).attr('src');
        $('.main-music .main-img img').attr('src', sourceImg);
        $(this).addClass('selected').siblings().removeClass('selected');

        

        // $('.cont-music i:nth-of-type(3)').toggleClass('fa-play fa-pause');

        var audioSrc = $(this).data('audio-src'),
            audio = $(this).parent().parent().find('audio')[0];

        $(this).parent().parent().find('audio').attr('src', audioSrc)

        // $('.cont-music i:nth-of-type(3)').toggleClass('fa-play fa-pause');
        if ( audio.paused ) {
            audio.play();
        } else {
            audio.pause();
        }
        
    })


    $('.cont-music .fa-caret-left').on('click', function () {
        
        
        if ($('.img-list img.selected').is(':first-child')) {
            $('.img-list img:last-child').click()
        } else {
            $('.img-list img.selected').prev().click();
        }
        
    })

    $('.cont-music .fa-caret-right').on('click', function () {
        
        
        if ($('.img-list img.selected').is(':last-child')) {
            $('.img-list img').eq(0).click()
        } else {
            $('.img-list img.selected').next().click();
        }
        
    })

    // cutmize

        var numOfItems = $('.img-list').children().length,
            marginBetweenItems = '0.5',
            totalMarginBetweenItems = (numOfItems - 1) * marginBetweenItems,
            widthOfItem = (100 - totalMarginBetweenItems) / numOfItems;

        $('.img-list img').css({
            width: widthOfItem + "%"
        })
        $('.img-list img:not(:last-child)').css({
            marginRight: marginBetweenItems + "%"
        })




})