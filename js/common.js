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
      // ele.find('.char').replaceWith("<strong class='char'></strong>");
      gsap.set([ele.find('.word'), ele.find('.char')], {
        lineHeight: "1",
      })
      gsap.set(ele.find('.char'), {
        opacity: 0,
        transform: "perspective(1000px)",
        // rotationX: 0,
        // rotationY: 0,
        // rotationZ: 0,
        // yPercent: 0,
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
  // if ($(".wlcme_txt").length) {
  //   $(".wlcme_txt").each(function () {
  //     let ele = $(this);
  //     gsap.set(ele, {
  //       transform: "perspective(1000px)",
  //       translateX: 100,
  //       transformOrigin: "center center",
  //       transformStyle: "preserve-3d",
  //     })
  //     // let t1 = new gsap.timeline({
  //     //     scrollTrigger:{
  //     //       scrub:true,
  //     //       trigger:$(".bnnr_section"),
  //     //       start: "top bottom",
  //     //     end: "bottom bottom",
  //     //     }
  //     // })
  //   })
  // }  
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
      // ele.find('.char').replaceWith("<strong class='char'></strong>");
      gsap.set([ele.find('.word'), ele.find('.char')], {
        lineHeight: "1",
      })
      gsap.set(ele.find('.char'), {
        opacity: 0,
        transform: "perspective(1000px)",
        // rotationX: 0,
        // rotationY: 0,
        // rotationZ: 0,
        // yPercent: 0,
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
        // repeat:0, 
        scrollTrigger: {
          trigger: el,
          start: "top 50%",
          end: "bottom 50%",
          scrub: 1,
          pin: false,
          // yoyo: true,
        }
      })
      t3.to(prllx_img,{
        // backgroundPositionY:"-100px"
        y:"-15%",
      })
    })
  }   
  if ($(".indvdl_insght_box").length) {
    $(".indvdl_insght_box").each(function () {
      let el = $(this);
      // var rule = CSSRulePlugin.getRule(".indvdl_box_hldr::before");
      // var rule2 = CSSRulePlugin.getRule(".indvdl_box_hldr::after");
      // let prllx_img = $('.prllx_img')
      gsap.set(el, {
        xPercent:30,
        opacity:0,
        transition:0.3,
      }) 
      let t3 = gsap.timeline({
        // repeat:0, 
        scrollTrigger: {
          trigger: el,
          start: "top 50%",
          end: "bottom bottom",
          // scrub: 1,
          pin: false,
          toggleActions: "play complete reverse reset",
          // yoyo: true,
        },
        // once:true
      })
      t3.to(el,{
        // backgroundPositionY:"-100px"
       opacity:1,
       xPercent:0,
       stagger: 0.05,
      })
    })
  }   
  if ($(".dot_crcle").length) {
    $(".dot_crcle").each(function () {
      let el = $(this);
      // var el = CSSRulePlugin.getRule(".indvdl_box_hldr::before");
      gsap.set(el, {
        // xPercent:30,
        // opacity:0,
        transition:0.3,
        scale:0,
        opacity:0,
      })
      let t3 = gsap.timeline({
        // repeat:0, 
        scrollTrigger: {
          trigger: el,
          start: "top 50%",
          end: "bottom bottom",
          // scrub: 1,
          pin: false,
          toggleActions: "play complete reverse reset",
          // yoyo: true,
        },
        // once:true
      })
      t3.to(el,{
        opacity:1,
        scale:1,
        stagger: 0.05,
        // delay:2,
        // duration:3,
        // stagger: 0.05,
      })
    })
  }   
  if ($(".drw_lne").length) {
    $(".drw_lne").each(function () {
      let el = $(this);
      // var el = CSSRulePlugin.getRule(".indvdl_box_hldr::before");
      gsap.set(el, {
        // xPercent:30,
        // opacity:0,
        transition:0.3,
        // scale:0,
        opacity:0,
        height:0,
      })
      let t3 = gsap.timeline({
        // repeat:0, 
        scrollTrigger: {
          trigger: el,
          start: "top 50%",
          end: "bottom bottom",
          // scrub: 1,
          pin: false,
          toggleActions: "play complete reverse reset",
          // yoyo: true,
        },
        // once:true
      })
      t3.to(el,{
        opacity:1,
        // scale:1,
        stagger: 0.05,
        height:"100%",
        // delay:2,
        // duration:3,
        // stagger: 0.05,
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
      // xPercent:30,
      // opacity:0,
      transition:0.3,
      translateY:-80,
      // scale:0,
      // opacity:0,
      // height:0,
    })
    gsap.set(img2, {
      transformOrigin: "center center",
      transformStyle: "preserve-3d",
      transform: "perspective(100px)",
      // xPercent:30,
      // opacity:0,
      transition:0.3,
      scale:0,
      opacity:0,
      // scale:0,
      // opacity:0,
      // height:0,
    })
    let t3 = gsap.timeline({
      // repeat:0, 
      scrollTrigger: {
        trigger: el,
        start: "top 50%",
        end: "bottom 50%",
        // scrub: 1,
        pin: false,
        toggleActions: "play none none none",
        // yoyo: true,
      },
      // once:true
    })
    t3.to(img1,{
      opacity:1,
      translateY:0,
      // scale:1,
      // stagger: 0.05,
      // height:"100%",
      // delay:2,
      // duration:3,
      // stagger: 0.05,
    })
    .to(img2,{
      scale:1,
      opacity:1
    })

  }) 
// document end
})


