//Slider Function - item_class -> Your slide item class |  slides -> total number of slides | speed -> slider speed in ms (miliseconds)
//Slider Function - item_class -> A class do item do slider |  slides -> número total de slides | speed -> velocidade da passagem de slides em ms (milisegundos)
function Slider(item_class,slides,speed){
        
        let count = 1;
        // Mostrar o primeiro slide | Show first slide
        var iclass = item_class+"[data-slide=1]";
        $(iclass).show();
        
        // Efeito Zoom-in | Zoom-in Effect
        $( iclass+" img" ).animate( { zoom: "1.3" },6000 );

        function initSlider(max){
                
                var main_class = $(item_class);
                
                // Esconder slide antigo
                main_class.each(function(){
                    if($(this).attr('data-slide') == count){
                        $(this).hide();
                    }
                });
                
                // Incrementar Contagem de Slider | Increment Slide Count
                count++;
                
                // Verificar se passou o máximo de slides | Check if max slider is reached
                if(count > max){
                    count = 1;
                }else{
                    //count++;
                }    
                
                // Mostrar slide novo | Show new slide
                main_class.each(function(){
                    if($(this).attr('data-slide') == count){
                        $(this).slideDown("medium");
                        // Efeito Zoom-in | Zoom-in Effect
                        $( this ).find("img").animate( { zoom: "1" },0 );
                        $( this ).find("img").animate( { zoom: "1.3" },6000 );
                       
                    }
                });
    
                //console.log("Slide "+count);
                
        }
        
        // Loop | Slider Loop
        if(slides != 1){ window.setInterval(function () { initSlider(slides); }, speed); }
}
