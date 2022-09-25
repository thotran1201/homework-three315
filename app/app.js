import * as MODEL from "../model/model.js";

function route() {
    let hashTag = window.location.hash;
    let pageId = hashTag.replace("#", "");
    console.log("hash " + pageId);

    if(pageId == "") {
        MODEL.changePage("home");
    } else {
        MODEL.changePage(pageId);
    }
}

function initListeners() {
    // $("nav a").click((e) => {
    //     console.log("click " + btnId);
    // });
}

function initApp () {
    $(window).on("hashchange", route);
    route();
}

$(document).ready(function () {
    initApp();
    initListeners();
});