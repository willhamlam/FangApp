(function($) {
    // 初始化slider
    var mySwiper = $('.swiper-container').swiper({
        mode: 'vertical',
        loop: false,
        simulateTouch: false,
        onSlideChangeEnd: function(swiper, direction) {
            if (swiper.activeIndex == 0) {
                $('.animate-2-1').css({'y': '-100px','opacity': '0'});
                $('.snail').css({'x': '0'});
                $('.animate-1-1').transition({
                    opacity: 1,
                    y: 0,
                    delay: 300,
                    duration: 400
                });
            } else if (swiper.activeIndex == 1) {
                $('.animate-1-1').css({'y': '-100px','opacity': '0'});
                $('.animate-3-1').css({'y': '-100px','opacity': '0'});
                $('.snail').transition({
                    x: -120,
                    delay: 100,
                    duration: 10000
                });
                $('.animate-2-1').transition({
                    opacity: 1,
                    y: 0,
                    delay: 300,
                    duration: 400
                });
            } else if (swiper.activeIndex == 2) {
                $('.animate-2-1').css({'y': '-100px','opacity': '0'});
                $('.snail').css({'x': '0'});
                $('.animate-4-2').css({'rotate': '0'});
                $('.animate-4-3').css({'rotate': '0'});
                $('.animate-4-4').css({'y': '-100px','opacity': '0'});
                $('.animate-4-6').css({'y': '-100px','opacity': '0'});
                $('.animate-3-1').transition({
                    opacity: 1,
                    y: 0,
                    delay: 300,
                    duration: 400
                });
            } else if (swiper.activeIndex == 3) {
                $('.animate-3-1').css({'y': '-100px','opacity': '0'});
                $('.animate-5-1').css({'y': '-100px','opacity': '0'});
                $('.animate-5-2').css({'y': '100px','opacity': '0'});
                $('.animate-5-3').css({'y': '-100px','opacity': '0'});
                $('.animate-4-2').transition({
                    rotate: 45,
                    duration: 600
                });
                $('.animate-4-3').transition({
                    rotate: -45,
                    duration: 600
                });
                $('.animate-4-4').transition({
                    opacity: 1,
                    y: 0,
                    delay: 500,
                    duration: 600
                }, function(){
                    $('.animate-4-6').transition({
                        opacity: 1,
                        y: 0,
                        delay: 300,
                        duration: 600
                    });
                });
            } else if (swiper.activeIndex == 4) {
                $('.animate-4-2').css({'rotate': '0'});
                $('.animate-4-3').css({'rotate': '0'});
                $('.animate-4-4').css({'y': '-100px','opacity': '0'});
                $('.animate-4-6').css({'y': '-100px','opacity': '0'});
                $('.animate-5-2').transition({
                    opacity: 1,
                    y: 0,
                    delay: 300,
                    duration: 600
                }, function(){
                   $('.animate-5-3').transition({
                       opacity: 1,
                       y: 0,
                       delay: 300,
                       duration: 600
                   },function(){
                        $('.animate-5-1').transition({
                            opacity: 1,
                            y: 0,
                            delay: 300,
                            duration: 600
                        }); 
                   }); 
                });
            } else if (swiper.activeIndex == 5) {
                $('.animate-5-1').css({'y': '-100px','opacity': '0'});
                $('.animate-5-2').css({'y': '100px','opacity': '0'});
                $('.animate-5-3').css({'y': '-100px','opacity': '0'});
            }
        }
    });
    var loader = {
        hide: function() {
            $('.spiner-mask').transition({
                scale: 0,
                opacity: 0,
                duration: 800
            }, function() {
                $('.spiner-mask').hide();
            });
        }
    };
    var app = {
        init: function() {
            // 第一页动画效果
            $('.animate-1-1').transition({
                opacity: 1,
                y: 0,
                delay: 600,
                duration: 400
            })
        }
    }
    // 初始化动画效果
    $(document).ready(function() {
        // 加载完去掉spinner
        // 音频js
        $("#audio").trigger('load');
        var audio = document.getElementById('audio'),
            playBtn = $('.play-paused'),
            playMask = $('.play-mask');
        playBtn.click(function() {
            if (audio.paused == false) {
                audio.pause();
                if (!$(this).hasClass('mute')) {
                    $(this).addClass('mute');
                }
            } else {
                audio.play();
                $(this).removeClass('mute');
            }
        });
        // 加载完给音乐去掉mute,并且去掉播放蒙版
        audio.oncanplaythrough = function() {
            clearTimeout(t);
            audio.play();
            playBtn.removeClass('mute');
            playMask.hide();
            loader.hide();
            app.init();
        }
        var t = setTimeout(function() {
            audio.play();
            playBtn.removeClass('mute');
            playMask.hide();
            loader.hide();
            app.init();
        }, 2000);
        $('.j-share').click(function() {
            $('.share-mask').show();
            setTimeout(function() {
                $('.share-mask').hide();
            }, 2000)
        });
    });
})(jQuery);