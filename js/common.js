jQuery(document).ready(function($){
// document start
 // Navbar
 $( "<span class='clickD'></span>" ).insertAfter(".navbar-nav li.menu-item-has-children > a");
 $('.navbar-nav li .clickD').click(function(e) {
     e.preventDefault();
     var $this = $(this);
     if ($this.next().hasClass('show'))
        {
            $this.next().removeClass('show');
            $this.removeClass('toggled');
        } 
        else 
        {
            $this.parent().parent().find('.sub-menu').removeClass('show');
            $this.parent().parent().find('.toggled').removeClass('toggled');
            $this.next().toggleClass('show');
            $this.toggleClass('toggled');
        }
 });

 $(window).on('resize', function(){
     if ($(this).width() < 1025) {
         $('html').click(function(){
             $('.navbar-nav li .clickD').removeClass('toggled');
             $('.toggled').removeClass('toggled');
             $('.sub-menu').removeClass('show');
         });
         $(document).click(function(){
             $('.navbar-nav li .clickD').removeClass('toggled');
             $('.toggled').removeClass('toggled');
             $('.sub-menu').removeClass('show');
         });
         $('.navbar-nav').click(function(e){
            e.stopPropagation();
         });
     }
 });
 // Navbar end

/* ===== For menu animation === */
$(".navbar-toggler").click(function(){
    $(".navbar-toggler").toggleClass("open");
    $(".navbar-toggler .stick").toggleClass("open");
    $('body,html' ).toggleClass("open-nav");
});

// Navbar end

// back to top
if($("#scroll").length){
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 200) { 
            $('#scroll').fadeIn(200); 
        } else { 
            $('#scroll').fadeOut(200); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 500); 
        return false; 
    }); 
}


gsap.registerPlugin(ScrollTrigger,CSSRulePlugin);
  if ($("[data-char-split]").length) {
    $("[data-char-split]").each(function () {
      let ele = $(this);
      Splitting({
        target: this,
      });
      ele.find('.char').wrap("<span class='char_wrrpr'></span>");
      gsap.set([ele.find('.word'), ele.find('.char')], {
        lineHeight: "1",
      })
      gsap.set(ele.find('.char'), {
        opacity: 0,
        transform: "perspective(1000px)",
        translateX: 30,
        transformOrigin: "center center",
        transformStyle: "preserve-3d",
      })
    });
  }
  if ($("[data-char-split]").length) {
    $("[data-char-split]").each(function () {
      let ele = $(this);
      let txt_target2 = ele.find(".char");
      gsap.to(ele, 0.03, {
        scrollTrigger: {
          trigger: ele,
          start: "top bottom",
          end: "bottom bottom",
          scrub: false,
        },
        onComplete: function () {
          gsap.to(txt_target2, 1.3, {
            opacity: 1,
            transform: "perspective(1000px)",
            translateX: 0,
            stagger: 0.05,
          })
        }
      })   
    });
  }
  if ($("[data-move-text]").length) {
    $("[data-move-text]").each(function () {
      let ele = $(this);
      gsap.set(ele, {
        transform: "perspective(1000px)",
        translateX: 0,
        transformOrigin: "center center",
        transformStyle: "preserve-3d",
      })
      let t1 = new gsap.timeline({
          scrollTrigger:{
            scrub:true,
            trigger:$(".bnnr_section"),
            start: "top top",
            end: "bottom 50%",
          }
      })
      t1.to(ele, 0.03,{
        translateX: "30vw",
      })
    })
  } 

  if ($("[data-char-split2]").length) {
    $("[data-char-split2]").each(function () {
      let ele = $(this);
      Splitting({
        target: this,
      });
      ele.find('.char').wrap("<span class='char_wrrpr2'></span>");
      gsap.set([ele.find('.word'), ele.find('.char')], {
        lineHeight: "1",
      })
      gsap.set(ele.find('.char'), {
        opacity: 0,
        transform: "perspective(1000px)",
        rotationY: 30,
        translateY: -30,
        transformOrigin: "center center",
        transformStyle: "preserve-3d",
      })
    });
  }
  if ($("[data-char-split2]").length) {
    $("[data-char-split2]").each(function () {
      let ele = $(this);
      let txt_target2 = ele.find(".char");
      gsap.to(ele, 0.03, {
        scrollTrigger: {
          trigger: ele,
          start: "top bottom",
          end: "bottom bottom",
          scrub: false,
        },
        onComplete: function () {
          gsap.to(txt_target2, 1.3, {
            opacity: 1,
            translateY: 0,
            transform: "perspective(1000px)",
            rotationY: 0,
            stagger: 0.05,
          })
        }
      })   
    });
  }
  if ($(".prllx_sec").length) {
    $(".prllx_sec").each(function () {
      let el = $(this);
      let prllx_img = $('.prllx_img')
      let t3 = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 50%",
          end: "bottom 50%",
          scrub: 1,
          pin: false,
        }
      })
      t3.to(prllx_img,{
        y:"-15%",
      })
    })
  }   
  if ($(".indvdl_insght_box").length) {
    $(".indvdl_insght_box").each(function () {
      let el = $(this);
      // var rule = CSSRulePlugin.getRule(".indvdl_box_hldr::before");
      // var rule2 = CSSRulePlugin.getRule(".indvdl_box_hldr::after");
      gsap.set(el, {
        xPercent:30,
        opacity:0,
        transition:0.3,
      }) 
      let t3 = gsap.timeline({ 
        scrollTrigger: {
          trigger: el,
          start: "top 50%",
          end: "bottom bottom",
          pin: false,
          toggleActions: "play complete reverse reset",
        },
      })
      t3.to(el,{
       opacity:1,
       xPercent:0,
       stagger: 0.05,
      })
    })
  }   
  if ($(".dot_crcle").length) {
    $(".dot_crcle").each(function () {
      let el = $(this);
      gsap.set(el, {
        transition:0.3,
        scale:0,
        opacity:0,
      })
      let t3 = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 50%",
          end: "bottom bottom",
          pin: false,
          toggleActions: "play complete reverse reset",
        },
      })
      t3.to(el,{
        opacity:1,
        scale:1,
        stagger: 0.05,
      })
    })
  }   
  if ($(".drw_lne").length) {
    $(".drw_lne").each(function () {
      let el = $(this);
      gsap.set(el, {
        transition:0.3,
        opacity:0,
        height:0,
      })
      let t3 = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 50%",
          end: "bottom bottom",
          pin: false,
          toggleActions: "play complete reverse reset",
        },
      })
      t3.to(el,{
        opacity:1,
        stagger: 0.05,
        height:"100%",
      })
    })
  }  
  let imgBox = gsap.utils.toArray('.two_img_box');
  imgBox.forEach((el) => {
    let img1 = el.querySelector(('.dpth_img_hldr > *:nth-child(odd)'));
    let img2 = el.querySelector(('.dpth_img_hldr > *:nth-child(even)'));
    gsap.set(img1, {
      transformOrigin: "center center",
      transformStyle: "preserve-3d",
      transform: "perspective(100px)",
      transition:0.3,
      translateY:-80,

    })
    gsap.set(img2, {
      transformOrigin: "center center",
      transformStyle: "preserve-3d",
      transform: "perspective(100px)",
      transition:0.3,
      scale:0,
      opacity:0,
    })
    let t3 = gsap.timeline({ 
      scrollTrigger: {
        trigger: el,
        start: "top 50%",
        end: "bottom 50%",
        pin: false,
        toggleActions: "play none none none",
      },
    })
    t3.to(img1,{
      opacity:1,
      translateY:0,
    })
    .to(img2,{
      scale:1,
      opacity:1
    })

  }) 
  const swiper = new Swiper(".lgueComp_sldr", {
    effect: "cards",
    grabCursor: true,
    // loop:true,
    // centeredSlides:true,
    // loopAddBlankSlides:true,
    // loopAdditionalSlides:1,
    // initialSlide: 1,
    // slidesPerView: "1",
    cardsEffect: {
      slideShadows: false,
      perSlideRotate:8,
      perSlideOffset:2,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  const swiper1 = new Swiper(".lgue_sldr", {
    effect: "cards",
    grabCursor: true,
    // inverse:true,
    // initialSlide: 1,
    loop:true,
    centeredSlides:true,
    slidesPerView: "3",
    // oneWayMovement:true,
    // loopAddBlankSlides:true,
    // loopAdditionalSlides:1,
    cardsEffect: {
      slideShadows: false,
      perSlideRotate:5.25,
      perSlideOffset:3,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  let sliderIn = gsap.utils.toArray('.sldr_in');
  sliderIn.forEach((el) => {
    gsap.set(el, {
      transformOrigin: "center center",
      transformStyle: "preserve-3d",
      transform: "perspective(100px)",
      transition:1,
      opacity:0,
      scale:0.8,
    })
    let t3 = gsap.timeline({
      // repeat:0, 
      scrollTrigger: {
        trigger: el,
        start: "top 50%",
        end: "bottom 50%",
        pin: false,
        toggleActions: "play none none none",
      },
      // once:true
    })
    t3.to(el,{
      opacity:1,
      scale:1
    })

  }) 
  // if ($("[data-move-vert]").length) {
  //   $("[data-move-vert]").each(function () {
  //     let ele = $(this);
  //     gsap.set(ele, {
  //       // transform: "perspective(1000px)",
  //       translateY: -100,
  //       // transformOrigin: "center center",
  //       // transformStyle: "preserve-3d",
  //     })
  //     let t1 = new gsap.timeline({
  //         scrollTrigger:{
  //           scrub:true,
  //           trigger:$(".bnnr_section"),
  //           start: "top top",
  //           end: "bottom 50%",
  //         }
  //     })
  //     t1.to(ele, 0.03,{
  //       // translateY: -120,
  //       translateY: "-50%",
  //     })
  //   })
  // }
  // const swiper2 = new Swiper(".cmpttn_sldr", {
  //   effect: "coverflow",
  //   grabCursor: true,
  //   // initialSlide: 1,
  //   invert:true,
  //   // slidesPerGroup:2,
  //   loop:true,
  //   // loopAddBlankSlides:true,
  //   // centeredSlides:true,
  //   coverflowEffect: {
  //     rotate: 0,
  //     slideShadows: false,
  //     stretch:30,
  //     depth:100,
  //     modifier:2,
  //     // scale:1.1,
  //   },
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  // });
  const swiper2 = new Swiper(".cmpttn_sldr", {
    effect: "coverflow",
    grabCursor: true,
    initialSlide: 1,
    invert:true,
    slidesPerView: "1",
    oneWayMovement:true,
    // slidesPerGroup:2,
    loop:true,
    loopAddBlankSlides:true,
    centeredSlides:true,
    coverflowEffect: {
          rotate: 0,
          slideShadows: false,
          stretch:250,
          depth:100,
          modifier:2,
          // scale:1.1,
        },
    // cardsEffect: {
    //   perSlideRotate:0,
    //   rotate:0,
    //   perSlideOffset:25,
    //   slideShadows: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
// document end
})


