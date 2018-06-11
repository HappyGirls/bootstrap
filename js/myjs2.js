/*
* @Author: Marte
* @Date:   2018-06-11 17:47:19
* @Last Modified by:   Marte
* @Last Modified time: 2018-06-11 17:48:26
*/

'use strict';

$(function(){
    $(".flexslider").flexslider();
    $('.box').hover(function(){
        $(this).find(".iconfont").addClass('animated fadeInUp');
        $(this).find("p").addClass('animated fadeInUp');

    },
    function(){
        $(this).find(".iconfont").removeClass('animated fadeInDown');
        $(this).find("p").removeClass('animated fadeInDown');
    })

})