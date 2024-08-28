        $(document).ready(function() {
            // Loader
            setTimeout(function() {
                $('.loader').fadeOut(500);
            }, 2000);

            // Smooth scrolling
            $('a[href^="#"]').on('click', function(event) {
                var target = $(this.getAttribute('href'));
                if (target.length) {
                    event.preventDefault();
                    $('html, body').stop().animate({
                        scrollTop: target.offset().top - 100
                    }, 1000);
                }
            });

            // Navbar scroll effect
            $(window).scroll(function() {
                if ($(this).scrollTop() > 50) {
                    $('header').addClass('scrolled');
                } else {
                    $('header').removeClass('scrolled');
                }
            });

            // Mobile menu toggle
            $('.hamburger').click(function() {
                $(this).toggleClass('active');
                $('nav ul').toggleClass('active');
            });

            // Close mobile menu on link click
            $('.nav-link').click(function() {
                $('.hamburger').removeClass('active');
                $('nav ul').removeClass('active');
            });

            // Fleet carousel
            $('.fleet-carousel').slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });

            // Testimonial slider
            $('.testimonial-slider').slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 5000
            });

            // Form submission
            $('#booking-form').submit(function(e) {
                e.preventDefault();
                alert('Thank you for your booking request. We will contact you shortly to confirm your reservation.');
                this.reset();
            });

            $('#contact-form form').submit(function(e) {
                e.preventDefault();
                alert('Thank you for your message. We will get back to you as soon as possible.');
                this.reset();
            });

            // Animate on scroll
            $(window).scroll(function() {
                $(".animate__animated").each(function() {
                    var position = $(this).offset().top;
                    var scroll = $(window).scrollTop();
                    var windowHeight = $(window).height();
                    if (scroll > position - windowHeight + 100) {
                        var animationClass = $(this).data('animation') || 'animate__fadeIn';
                        $(this).addClass(animationClass);
                    }
                });
            });
        });
