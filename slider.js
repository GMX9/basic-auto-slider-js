// Slides = NR OF SLIDES; speed = SLIDER SPEED(MS);
// Basic Slider Dev Gonçalo M.
// Slides = NR OF SLIDES; speed = SLIDER SPEED(MS);
function Slider(item_class,slides,speed){
        
        let count = 1;
        // Mostrar o primeiro slide
        var iclass = item_class+"[data-slide=1]";
        $(iclass).show();
        
        function initSlider(max){
                
                var main_class = $(item_class);
                
                // Esconder slide antigo
                main_class.each(function(){
                    if($(this).attr('data-slide') == count){
                        $(this).hide();
                    }
                });
                
                // Incrementar Contagem de Slider
                count++;
                
                // Verificar se passou o máximo de slides
                if(count > max){
                    count = 1;
                }else{
                    //count++;
                }    
                
                // Mostrar slide novo
                main_class.each(function(){
                    if($(this).attr('data-slide') == count){
                        $(this).slideDown("medium");
                    }
                });

                console.log("Slide "+count);
                
        }
        
        window.setInterval(function () { initSlider(slides); }, speed); 
}
