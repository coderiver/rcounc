$(document).ready(function() {  
  function tabsLoad() {
       $(".js-tabs-simple").each(function(){
         if ($(this).find(".is-active").length) {
          var index = $(this).find(".is-active").index();
         	$(this).next().find(".js-tabs-simple-content").eq(index).show();
         }
         else {
           $(this).find("span").eq(0).addClass("is-active");
           $(this).next().find(".js-tabs-simple-content").eq(0).show();
         }
       });
   }
   tabsLoad();
    $('.js-tabs-simple p').on("click",function () {
			var tabs = $(this).parents(".js-tabs-simple");
			var tabsCont = tabs.next().find(".js-tabs-simple-content");
			var index = $(this).parent().index();
			tabs.find("span").removeClass("is-active");
      $(this).parent().addClass("is-active");
			tabsCont.hide();
			tabsCont.eq(index).show();
    });

  $('.js-btn-more').click(function() {
    $(this).closest('.page-preview').toggleClass('is-full');
    return false;
  });

});