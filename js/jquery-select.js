/**
 * Created by jason.qian on 2018/2/27.
 */
//下拉框初始化
function selectMenu(id){
    var selectId = "#" + id;

    $(selectId).find(".select-menu-div").on("click",function(e){
        e.stopPropagation();
        if($(selectId).find(".select-menu-ul").css("display")==="block"){
            $(selectId).find(".select-menu-ul").hide();
            $(selectId).find(".select-menu-div").find("i").removeClass("select-menu-i");
            $(selectId).find(".select-menu-ul").animate({marginTop:"50px",opacity:"0"},"fast");
        }else{
            $(selectId).find(".select-menu-ul").show();
            $(selectId).find(".select-menu-div").find("i").addClass("select-menu-i");
            $(selectId).find(".select-menu-ul").animate({marginTop:"5px",opacity:"1"},"fast");
        }
        for(var i=0;i<$(".select-menu-ul").length;i++){
            if(this.parentElement.id !== id && $(".select-menu-ul").eq(i).css("display")==="block"){
                $(".select-menu-ul").eq(i).hide();
                $(".select-menu-div").eq(i).find("i").removeClass("select-menu-i");
                $(".select-menu-ul").eq(i).animate({marginTop:"50px",opacity:"0"},"fast");
            }
        }
    });

    $(selectId).find(".select-menu-input").on("blur",function () {
        $(selectId).find(".select-menu-div").css("border","1px solid #ccc");
    });

    $(selectId).find(".select-menu-ul").on("click","li",function(){//给下拉选项绑定点击事件
        $(selectId).find(".select-menu-input").val($(this).html());//把被点击的选项的值填入输入框中
        $(selectId).find(".select-menu-input-value").val($(this).val());
        $(selectId).find(".select-menu-div").click();
        $(this).siblings(".select-this").removeClass("select-this");
        $(this).addClass("select-this");
        $(selectId).find(".select-menu-input").focus();
        $(selectId).find(".select-menu-div").css("border","1px solid #197dd5");
    });

    $("body").on("click",function(event){
        event.stopPropagation();
        if($("#" + id).find(".select-menu-ul").css("display")==="block"){
            $("#" + id).find(".select-menu-ul").hide();
            $("#" + id).find(".select-menu-div").find("i").removeClass("select-menu-i");
            $("#" + id).find(".select-menu-ul").animate({marginTop:"50px",opacity:"0"},"fast");
        }
    });
}
