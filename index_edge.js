/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'openingTitle014',
            type:'image',
            rect:['1432px','200px','2029px','297px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"openingTitle01.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_openingTitle014}": [
            ["style", "top", '150px'],
            ["style", "opacity", '0'],
            ["style", "left", '1548px']
         ],
         "${_control-tab}": [
            ["transform", "scaleX", '0'],
            ["style", "opacity", '1'],
            ["transform", "translateY", '-2px'],
            ["transform", "scaleY", '0']
         ],
         "${_boxShadow}": [
            ["style", "opacity", '0']
         ],
         "${_textShadow}": [
            ["style", "opacity", '0']
         ],
         "${_white}": [
            ["transform", "scaleX", '0'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '0'],
            ["transform", "translateY", '0px']
         ],
         "${_white2}": [
            ["transform", "translateX", '0px'],
            ["transform", "scaleX", '0'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '0px'],
            ["transform", "scaleY", '0']
         ],
         "${_titleee}": [
            ["style", "opacity", '0']
         ],
         "${_button-container}": [
            ["transform", "scaleX", '0'],
            ["style", "opacity", '1'],
            ["transform", "translateX", '-2px'],
            ["transform", "scaleY", '0']
         ],
         "${_container}": [
            ["style", "opacity", '1']
         ],
         "${_liquid1}": [
            ["style", "opacity", '0']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 26750,
         autoPlay: true,
         timeline: [
            { id: "eid189", tween: [ "style", "${_white}", "opacity", '1', { fromValue: '0'}], position: 21000, duration: 3250, easing: "easeInOutBounce" },
            { id: "eid178", tween: [ "transform", "${_button-container}", "scaleX", '1', { fromValue: '0'}], position: 19500, duration: 3250, easing: "easeInOutBounce" },
            { id: "eid135", tween: [ "style", "${_boxShadow}", "opacity", '1', { fromValue: '0'}], position: 24250, duration: 2500, easing: "easeInOutBounce" },
            { id: "eid196", tween: [ "style", "${_liquid1}", "opacity", '1', { fromValue: '0'}], position: 21250, duration: 3250, easing: "easeInOutBounce" },
            { id: "eid155", tween: [ "transform", "${_white2}", "scaleX", '1', { fromValue: '0'}], position: 14000, duration: 7250, easing: "easeInOutBounce" },
            { id: "eid193", tween: [ "style", "${_white2}", "opacity", '1', { fromValue: '0'}], position: 18000, duration: 3250, easing: "easeInOutBounce" },
            { id: "eid58", tween: [ "style", "${_container}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeInOutBounce" },
            { id: "eid156", tween: [ "transform", "${_white2}", "scaleY", '1', { fromValue: '0'}], position: 14000, duration: 7250, easing: "easeInOutBounce" },
            { id: "eid170", tween: [ "transform", "${_control-tab}", "scaleX", '1', { fromValue: '0'}], position: 14000, duration: 7250, easing: "easeInOutBounce" },
            { id: "eid171", tween: [ "transform", "${_control-tab}", "scaleY", '1', { fromValue: '0'}], position: 14000, duration: 7250, easing: "easeInOutBounce" },
            { id: "eid191", tween: [ "transform", "${_white2}", "translateY", '0px', { fromValue: '0px'}], position: 14000, duration: 0, easing: "easeInOutBounce" },
            { id: "eid192", tween: [ "transform", "${_white2}", "translateY", '0px', { fromValue: '0px'}], position: 21250, duration: 0, easing: "easeInOutBounce" },
            { id: "eid190", tween: [ "transform", "${_white2}", "translateX", '0px', { fromValue: '0px'}], position: 21250, duration: 0, easing: "easeInOutBounce" },
            { id: "eid50", tween: [ "transform", "${_button-container}", "translateX", '-2px', { fromValue: '-2px'}], position: 23117, duration: 0, easing: "easeInOutBounce" },
            { id: "eid179", tween: [ "transform", "${_button-container}", "scaleY", '1', { fromValue: '0'}], position: 19500, duration: 3250, easing: "easeInOutBounce" },
            { id: "eid36", tween: [ "style", "${_openingTitle014}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 4000 },
            { id: "eid38", tween: [ "style", "${_openingTitle014}", "opacity", '0', { fromValue: '1'}], position: 12000, duration: 2000 },
            { id: "eid60", tween: [ "style", "${_titleee}", "opacity", '1', { fromValue: '0'}], position: 22500, duration: 250, easing: "easeInOutBounce" },
            { id: "eid138", tween: [ "style", "${_textShadow}", "opacity", '1', { fromValue: '0'}], position: 24250, duration: 2500, easing: "easeInOutBounce" },
            { id: "eid147", tween: [ "transform", "${_white}", "scaleY", '1', { fromValue: '0'}], position: 19500, duration: 3250, easing: "easeInOutBounce" },
            { id: "eid158", tween: [ "style", "${_control-tab}", "opacity", '1', { fromValue: '1'}], position: 14000, duration: 0, easing: "easeInOutBounce" },
            { id: "eid159", tween: [ "style", "${_control-tab}", "opacity", '1', { fromValue: '1'}], position: 19500, duration: 0, easing: "easeInOutBounce" },
            { id: "eid198", tween: [ "style", "${_openingTitle014}", "top", '150px', { fromValue: '150px'}], position: 5000, duration: 0 },
            { id: "eid146", tween: [ "transform", "${_white}", "scaleX", '1', { fromValue: '0'}], position: 19500, duration: 3250, easing: "easeInOutBounce" },
            { id: "eid33", tween: [ "style", "${_openingTitle014}", "left", '424px', { fromValue: '1548px'}], position: 1000, duration: 4000 },
            { id: "eid197", tween: [ "style", "${_openingTitle014}", "left", '-2100px', { fromValue: '424px'}], position: 5000, duration: 9000 },
            { id: "eid183", tween: [ "transform", "${_white}", "translateY", '10px', { fromValue: '0px'}], position: 19500, duration: 1500, easing: "easeInOutBounce" },
            { id: "eid184", tween: [ "transform", "${_white}", "translateY", '0px', { fromValue: '10px'}], position: 21000, duration: 1750, easing: "easeInOutBounce" },
            { id: "eid121", tween: [ "style", "${_button-container}", "opacity", '1', { fromValue: '1'}], position: 19500, duration: 0, easing: "easeInOutBounce" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-36924219");
