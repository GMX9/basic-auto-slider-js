//Slider Function - item_class -> Your slide item class |  slides -> total number of slides | speed -> slider speed in ms (miliseconds) | controls -> enabled ou disabled | controls_type -> squared ou circle
//Slider Function - item_class -> A class do item do slider |  slides -> número total de slides | speed -> velocidade da passagem de slides em ms (milisegundos) | controls -> enabled or disabled | controls_type -> squared or circle
function Slider(item_class,speed,controls,controls_type,slider_color){
        
        let count = 1;
        let slides = $(item_class).length;
        let clicked = 0;
        startSlider = 0;
        
        // Controls Color
        color = slider_color;
        
        // Mostrar o primeiro slide | Show first slide
        var iclass = item_class+"[data-slide=1]";
        $(iclass).show();
        
        // Efeito Zoom-in | Zoom-in Effect
        $( iclass+" img" ).animate( { zoom: "1" },0 );
        $( iclass+" img" ).animate( { zoom: "1.3" },6000 );
        
        function sleep (time) {
          return new Promise((resolve) => setTimeout(resolve, time));
        }
        

        function initSlider(max){
                
                //console.log("Current count: "+count);
                var main_class = $(item_class);
                
                // Esconder slide antigo
                main_class.each(function(){
                    //if($(this).attr('data-slide') == count){
                        $(this).hide();
                    //}
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
                        
                        $(".pointer").css("background-color", "transparent");
                        $(".pointer").css("border", "1px solid white");
                        var pclass = ".pointer"+"[data-sl="+count+"]";
                        $(pclass).css("background-color", "transparent");
                        $(pclass).css("border", "1px solid "+color);
                       
                    }
                });
    
                //console.log("Slide "+count);
                
        }
        
        // Controlador do slider design | Slider controls appeareance 
        function initControls(item_class,slides,color){
           
           slides = slides + 1;
           
           // Pointer & Div settings
           pointerWh = 14; // Pointer width plus height
           marginR = 10; // Pointer margin right
           calcMrWh = marginR + pointerWh;
           calcWidth = calcMrWh * slides - calcMrWh; // Calculate gmx-controls-slider width
           
           // Types of controls
           if(controls_type == "squared"){
            ctype = "border-radius:4px;"; //squared
           }else{
            ctype = "border-radius:50%;";
           }

           // Main Divs    
           var controlsdiv = '<div class="gmx-controls-slider" style="margin:0 auto; padding-left:0px; width:'+calcWidth+'px; height:20px; position:absolute; background:transparent; text-align:center; left:0; right:0; bottom:10px;">';
           var i;
           for (i = 1; i < slides; i++) {
    	    var controlsdiv = controlsdiv + '<div class="pointer" style="float:left; width:'+pointerWh+'px; height:'+pointerWh+'px; cursor:pointer; '+ctype+' margin-right:'+marginR+'px; border:1px solid white; background:transparent;" data-sl="'+i+'"></div>';
           }
    	   var controlsdiv = controlsdiv + "</div>";
    	   
    	   // Adicionar controls div a cada slide | Append controls div to slider
    	   $(item_class).each(function(){
    	    $(this).append(controlsdiv);
    	   });
    	   
    	   // Marcar o primeiro marker | Mark first slider pointer
           var pfirstclass = ".pointer"+"[data-sl=1]";
           $(pfirstclass).css("background-color", "transparent");
           $(pfirstclass).css("border", "1px solid "+color);
    	   
        } 
        
        // Slider controls funcionalidades | Slider control functionalities
        function setControls(){
            
            $( ".pointer" ).click(function() {
                  var point = $(this).attr('data-sl');
                  count = point;
                  initSlider(slides);
                  console.log("clicked point:"+point);
            });

        }
        
        // Slider controls funcionalidades | Slider control functionalities
        function setControls(slides,speed){
            
            $( ".pointer" ).click(function() {
                  var point = $(this).attr('data-sl');
                  point = point - 1
                  if(point >= slides){ point = 1; }
                  if(point < 0){ point = slides; }
                  count = point;
                  clicked = 1;
                  startSlide(slides,speed);
                  console.log("clicked point:"+point);
            });

        }
        
        //Start Timer
        function startSlide(slides,speed){
            
            if(clicked == 1){
                // Clear interval slider and increment count + 1
                window.clearInterval(startSlider);
                startSlider = 0;
                count = count + 1;
                
                // Mostrar o slide | Show slide
                $(item_class).hide();
                var iclass = item_class+"[data-slide="+count+"]";
                $(iclass).show();
                
                // Efeito Zoom-in | Zoom-in Effect
                $( iclass+" img" ).animate( { zoom: "1" },0 );
                $( iclass+" img" ).animate( { zoom: "1.3" },6000 );
                
                // Marcar o primeiro marker | Mark first slider pointer
                $(".pointer").css("background-color", "transparent");
                $(".pointer").css("border", "1px solid white");
                var pfirstclass = ".pointer"+"[data-sl="+count+"]";
                $(pfirstclass).css("background-color", "transparent");
                $(pfirstclass).css("border", "1px solid "+color);
                
                if(slides != 1){ startSlider = window.setInterval(function () { initSlider(slides); }, speed); }
                clicked = 0;
            }else{
                if(slides != 1){ startSlider = window.setInterval(function () { initSlider(slides); }, speed); }
            }
            
        }

        
        // Iniciar o slider | Start Slider
        startSlide(slides,speed);
        // Habilitar controladores se ativos | Enable controls if enabled otherwise slider plays auto
        if(controls == "enabled"){
            initControls(item_class,slides,color);
            setControls(slides,speed);
        }
}
