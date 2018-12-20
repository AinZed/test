$(function () {
    $(".jian1").mouseover(function () {
        $(".jian1").css("opacity", "1");
    });
    $(".jian1").mouseout(function () {
        $(".jian1").css("opacity", ".7");
    });
    $(".jian2").mouseover(function () {
        $(".jian2").css("opacity", "1");
    });
    $(".jian2").mouseout(function () {
        $(".jian2").css("opacity", ".7");
    });
    $("#q2").mouseover(function(){
        $("#q2").addClass("active");
    });
    $("#q2").mouseout(function(){
        $("#q2").removeClass("active");
    });
    $("#q3").mouseover(function(){
        $("#q3").addClass("active");
    });
    $("#q3").mouseout(function(){
        $("#q3").removeClass("active");
    });
    
    $(".dropdown").click(function(){
        if ($(this).find("#jia").text()=="-") {
            $(this).find("#jia").text("+");
        } else {
            $(this).find("#jia").text("-");
        }
        
    });
});
