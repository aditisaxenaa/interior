gsap.registerPlugin(ScrollTrigger);

gsap.from('#floating-content .anim',{
    scrollTrigger:{
        trigger:'#floating-content',
        toggleActions: "play pause resume reverse",
    },
    stagger:.5,
    opacity:0,
    duration:1,
    y:30,
    ease:'expo.easeInOut'

})

gsap.from('#know_us .anim',{
    scrollTrigger:{
        trigger:'#know_us',
        toggleActions: "play pause resume reverse",
    },
    stagger:.7,
    opacity:0,
    duration:3,
    y:50,
    ease:'Expo.easeOut'

})



gsap.from('#look-more .anim',{
    scrollTrigger:{
        trigger:'#look-more',
        toggleActions: "play pause resume reverse",
    },
    stagger:.5,
    opacity:0,
    duration:1.8,
    y:30,
    ease:'Expo.easeInOut'

})

gsap.from('#footer .anim',{
    scrollTrigger:{
        trigger:'#footer',
        toggleActions: "play pause resume reverse",
    },
    stagger:.7,
    opacity:0,
    duration:1.8,
    x:30,
    ease:'Expo.easeInOut'

})


// draggable.addplugin(Draggable);

// draggable.addContainer('#know-more .drag', {
//     Draggable:{
//         trigger: '#know-more'
//     }

// })

$(function () {
    $(".drag").draggable({            
        stack: ".drag",
        axis: "x" 
    });
});


