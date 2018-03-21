import React from 'react';
import $ from "jquery";

//Open Side Menu ease

export const openMenu = () => {
    $('#menu').width(250);
    if($( window ).width() >= 800){
        $('#app').css('marginLeft','250px');
    }
    $('#openMenuButton').css('opacity',0);
    $('#appBody').css('opacity',0.5);
    $('#appBody').children().css('pointerEvents','none');
};

//Close Side Menu ease

export const closeMenu = () => {
    $("#menu").width(0);
    $("#app").css('marginLeft','0px');
    $('#openMenuButton').css('opacity',1);
    $('#appBody').css('opacity',1);
    $('#appBody').children().css('pointerEvents','auto');
};

//Close Side Menu without animation

export const closeMenuNav = () => {
    $('#app').css('transition','none');
    $("#menu").width(0);
    $("#app").css('marginLeft','0px');
    $('#openMenuButton').css('opacity',1);
    $('#appBody').css('opacity',1);
    $('#appBody').children().css('pointerEvents','auto');
    setTimeout(() => {
        $('#app').css('transition','margin-left 1s, opacity 1s');
    }, 400);
};

export const clickAwayMenu = () => {
    if($('#menu').width() >= 50){
        closeMenu();
    };
};