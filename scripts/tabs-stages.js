$(document).ready(function() {
    // Сховати всі вкладки на мобільних пристроях
    if ($(window).width() <= 768) {
      $(".tab_content").hide();
    } else {
      // На десктопі показати першу вкладку
      $(".tab_content").hide();
      $(".tab_content:first").show();
    }
  
    // Обробник кліків для вкладок
    $("ul.tabs li").click(function() {
      $(".tab_content").hide(); // Приховати всі вкладки
      var activeTab = $(this).attr("rel"); 
      $("#" + activeTab).fadeIn(); // Показати активну вкладку
      
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");
      
      $(".tab_drawer_heading").removeClass("d_active");
      $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");
    });
  
    // Обробник кліків для вкладок у мобільному режимі (дровар)
    $(".tab_drawer_heading").click(function() {
      $(".tab_content").hide(); // Приховати всі вкладки
      var d_activeTab = $(this).attr("rel"); 
      $("#" + d_activeTab).fadeIn(); // Показати активну вкладку
      
      $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
      
      $("ul.tabs li").removeClass("active");
      $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
    });
  
    // Перевірка при зміні розміру вікна
    $(window).resize(function() {
      if ($(window).width() <= 768) {
        $(".tab_content").hide(); // Сховати вкладки на мобільних пристроях
      } else {
        $(".tab_content").hide();
        $(".tab_content:first").show(); // Показати першу вкладку на десктопі
      }
    });
  });
  