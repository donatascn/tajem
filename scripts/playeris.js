$(".our-story-play").click(function() { watch_video("main"); });
           $(".video").on("click", ".dark-background, .close", function() {
               $(".video").fadeOut(500, function() {
                   $(".aspect-ratio").empty();
               });
           });

function watch_video(video) {
 switch(video) {
     case "main":
         video_code = "<iframe width='980px' height='551px' src='//www.youtube.com/embed/BdM-EKYz3pM?rel=0&showinfo=0&VQ=HD720&autoplay=1' frameborder='0' allowfullscreen></iframe>";
         break;
     case "press":
         video_code = "<iframe width='980px' height='551px' src='//www.youtube.com/embed/JtgGGQKXnTs?rel=0&showinfo=0&VQ=HD720&autoplay=1' frameborder='0' allowfullscreen></iframe>";
         break;
     case "iphone":
         video_code = "<iframe width='980px' height='551px' src='//www.youtube.com/embed/rKXX9Koj9EE?rel=0&showinfo=0&VQ=HD720&autoplay=1' frameborder='0' allowfullscreen></iframe>";
         break;
     }
 $(".video").fadeIn(500, function() {
     $(".aspect-ratio").html(video_code);
 });
}
