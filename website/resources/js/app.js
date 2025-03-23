// JavaScript to handle mouseover and mouseout events
var activeMethodPill = null;
var activeScenePill = null;
var select = false;

var sparseActiveScenePill = null;
var sparseViewNum = null;

var generationActiveScenePill = null;

var completionActiveScenePill = null;

$(document).ready(function () {
    activeMethodPill = $('.method-pill').filter('.active').filter('.dl3dv-method-pill')[0];
    activeScenePill = $('.scene-pill').filter('.active').filter('.dl3dv-scene-pill')[0];

    sparseActiveScenePill = $('.scene-pill').filter('.active').filter('.sparse-scene-pill')[0];

    generationActiveScenePill = $('.scene-pill').filter('.active').filter('.gen-scene-pill')[0];

    completionActiveScenePill = $('.scene-pill').filter('.active').filter('.comp-scene-pill')[0];
});

function selectCompletionScenePill(scenePill) {
    if (completionActiveScenePill) {
        completionActiveScenePill.classList.remove("active");
    }
    completionActiveScenePill = scenePill;

    scenePill.classList.add("active");
    scene = scenePill.getAttribute("data-value");
    var ourVideo = document.getElementById("sceneCompletionOurs");
    var compVideo = document.getElementById("sceneCompletion2dgs");
    ourVideo.src = "https://genapi.sibowu.com/resources/videos/completion/ours/" + scene + ".mp4";
    ourVideo.load();
    compVideo.src = "https://genapi.sibowu.com/resources/videos/completion/2dgs/" + scene + ".mp4";
    compVideo.load();
}

function selectGenerationScenePill(scenePill) {
    if (generationActiveScenePill) {
        generationActiveScenePill.classList.remove("active");
    }
    generationActiveScenePill = scenePill;

    scenePill.classList.add("active");
    scene = scenePill.getAttribute("data-value");
    var artifactRgb = document.getElementById("artifactRgb");
    var generatedRgb = document.getElementById("generatedRgb");
    var artifactDepth = document.getElementById("artifactDepth");
    var generatedDepth = document.getElementById("generatedDepth");
    artifactRgb.src = "https://genapi.sibowu.com/resources/videos/generation/" + scene + "/artifact_rgb.mp4";
    generatedRgb.src = "https://genapi.sibowu.com/resources/videos/generation/" + scene + "/generated_rgb.mp4";
    artifactDepth.src = "https://genapi.sibowu.com/resources/videos/generation/" + scene + "/artifact_depth.mp4";
    generatedDepth.src = "https://genapi.sibowu.com/resources/videos/generation/" + scene + "/generated_depth.mp4";
    artifactRgb.load();
    generatedRgb.load();
    artifactDepth.load();
    generatedDepth.load();
}

function selectSparseCompVideo(scenePill, viewNum) {

    if (sparseActiveScenePill) {
        sparseActiveScenePill.classList.remove("active");
    }

    sparseActiveScenePill = scenePill;
    if (viewNum) {
        sparseViewNum = viewNum;
    }
    scenePill.classList.add("active");

    scene = scenePill.getAttribute("data-value");
    var ourVideo = document.getElementById("ourSparseVideo");
    var compVideo = document.getElementById("compSparseVideo");
    ourVideo.src = "https://genapi.sibowu.com/resources/videos/sparse/ours/" + scene + ".mp4";
    ourVideo.load();
    compVideo.src = "https://genapi.sibowu.com/resources/videos/sparse/2dgs" + "/" + scene + ".mp4";
    compVideo.load();

    var numViews = document.getElementById("num-views-sparse");
    numViews.innerHTML = sparseViewNum;

}

function selectCompVideo(methodPill, scenePill) {
    console.log(methodPill, scenePill);
    // Your existing logic for video selection
    // var video = document.getElementById("compVideo");
    select = true;

    if (activeMethodPill) {
        activeMethodPill.classList.remove("active");
    }
    if (activeScenePill) {
        activeScenePill.classList.remove("active");
    }
    activeMethodPill = methodPill;
    activeScenePill = scenePill;
    methodPill.classList.add("active");
    scenePill.classList.add("active");
    method = methodPill.getAttribute("data-value");
    scene = scenePill.getAttribute("data-value");
    var ourVideo = document.getElementById("ourVideo");
    var compVideo = document.getElementById("compVideo");
    var inputVideo = document.getElementById("inputVideo");
    ourVideo.src = "https://genapi.sibowu.com/resources/videos/dl3dv/ours/" + scene + ".mp4";
    ourVideo.load();
    compVideo.src = "https://genapi.sibowu.com/resources/videos/dl3dv/" + method + "/" + scene + ".mp4";
    compVideo.setAttribute("vc-caption", method.toUpperCase());
    compVideo.load();
    inputVideo.src = "https://genapi.sibowu.com/resources/videos/dl3dv/input/" + scene + ".mp4";
    inputVideo.load();
    inputVideo.setAttribute("vc-caption", "Input");
}
