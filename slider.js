// Slides = NR OF SLIDES; speed = SLIDER SPEED(MS);
// Basic Slider Dev Gonçalo M.
function Slider(item_class,slides,speed){
        
        let count = 0;
        
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
                
                // verificar se passou o máximo de slides
                if(count > max){
                    count = 1;
                }else{
                    //count++;
                }    
                
                // Mostrar slide novo
                main_class.each(function(){
                    if($(this).attr('data-slide') == count){
                        $(this).show();
                    }
                });

                console.log("New slide "+count);
                
        }
        
        window.setInterval(function () { initSlider(slides); }, speed); 
}
