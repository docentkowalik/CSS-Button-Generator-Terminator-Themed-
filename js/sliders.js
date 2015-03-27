$(document).ready(function() {
	$( "#sliderWidth" ).slider({
		orientation: "vertical",
		range:'max',
      	value:0,
      	min: 15,
      	max: 90,
     	slide: slideWidth
 	});
 		function slideWidth(event, slider){
	  		$('#ourButton').css('padding-left', slider.value + 'px');
		    $('#ourButton').css('padding-right', slider.value + 'px');
			$("#valuePX").val(slider.value + 'px');   
			}   
	



$( "#sliderHeight" ).slider({
	orientation: "vertical",
      value:0,
      min: 10,
      max: 50,
      slide: slideHeight
});
 	function slideHeight(event, slider){
    	$('#ourButton').css('padding-top', slider.value + 'px');
        $('#ourButton').css('padding-bottom', slider.value + 'px');
		$("#valuePX1").val(slider.value + 'px');   
    	}
	



$( "#sliderRadius" ).slider({
      value:10,
      min: 0,
      max: 30,
      slide: slideRadius
});
 	function slideRadius(event, slider){
    	$('#ourButton').css('border-radius', slider.value + 'px');
        $("#valuePX2").val(slider.value + 'px');   
    	}
	



$( "#sliderBorder" ).slider({
      value:2,
      min: 0,
      max: 15,
      slide: slideBorder
});
 	function slideBorder(event, slider){
        $('#ourButton').css('border-width', slider.value + 'px');
        $("#valuePX3").val(slider.value + 'px');   
    	}




$( "#sliderFontSize" ).slider({
      value:25,
      min: 10,
      max: 100,
  	slide: slideSontSize
});
 	function slideSontSize(event, slider){
        $('#para').css('font-size', slider.value + 'px');
    }
		
		$(function() {
    	var aFontsSizeArray = new Array('5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '24', '26', '28'			, '30', '33', '36', '39');
    	$('#sliderFontSize').slider({
        value: 7,
        min: 1,
        max: 35,
        slide: function(event, ui) {
            var sFontSizeArray = aFontsSizeArray[ui.value];
            $('#ourButton').css('font-size', sFontSizeArray + 'px' );
        		}
    		});  
    	});





/*Box Shadow Options Start*/
updateColor = function() {
    boxShadow.color = $('#colorBox1').val();
    	$('#ourButton').css('box-shadow', boxShadow.x + 'px ' + boxShadow.y + 'px ' + boxShadow.z + 'px #' + boxShadow.color);
};

var boxShadow = {
        x: 0,
        y: 0,
        z: 0,
    color: '000000'
	};
    
	$('#slider1Box, #slider2Box, #slider3Box').slider({
       animate: true,
        slide: function(event, ui) {
            var axis = $(this).data("axis");
            
            boxShadow[axis] = ui.value;
            
            $('#valuePX7').val(boxShadow.x + 'px');
            $('#valuePX8').val(boxShadow.y + 'px');
            $('#valuePX9').val(boxShadow.z + 'px');            

            $('#ourButton').css('box-shadow', boxShadow.x + 'px ' + boxShadow.y + 'px ' + boxShadow.z + 'px #' + boxShadow.color);
        }
    });
    $('#valuePX7').val($('#slider1Box').slider('value') + 'px');
    $('#valuePX8').val($('#slider2Box').slider('value') + 'px');
    $('#valuePX9').val($('#slider3Box').slider('value') + 'px');
/*box Shadow Options End*/
 





/*text Shadow Options Start*/
updateTextShadow = function() {
    textShadow.color = $('#colorBox2').val();
    	$('#ourButton').css('text-shadow', textShadow.x + 'px ' + textShadow.y + 'px ' + textShadow.z + 'px #' + textShadow.color);
};

var textShadow = {
        x: 0,
        y: 0,
        z: 0,
    color: '000000'
    };
    
    $('#slider1TextShad, #slider2TextShad, #slider3TextShad').slider({
        
		min:0,
		max:30,
        animate: true,
        slide: function(event, ui) {
            var axis = $(this).data("axis");
            
            textShadow[axis] = ui.value;
            
            $('#valuePX4').val(textShadow.x + 'px');
            $('#valuePX5').val(textShadow.y + 'px');
            $('#valuePX6').val(textShadow.z + 'px');            

            $('#ourButton').css('text-shadow', textShadow.x + 'px ' + textShadow.y + 'px ' + textShadow.z + 'px #' + textShadow.color);
        }
    });
    $('#valuePX4').val($('#slider1TextShad').slider('value') + 'px');
    $('#valuePX5').val($('#slider2TextShad').slider('value') + 'px');
    $('#valuePX6').val($('#slider3TextShad').slider('value') + 'px');
/*Text Shadow Options End*/





$("#textField").keyup(function () {
	var value = $(this).val();
    $("#ourButton").text(value);
}).keyup();
 
 $("#fonts").live('change', function () {
 	$('#ourButton').css("font-family", $(this).val());
		}); $("#fonts").trigger('change');
});
		





/*$(document).ready(function() {
	$('#textShadow').hover(function(){
			$(this).animate({left: '0px'}, 500)
		}, function(){
			$(this).delay(1000).animate({left: '-280px'}, 1000)
		});
		
	$('#boxShadow').hover(function(){
			$(this).animate({right: '0px'}, 500)
		}, function(){
			$(this).delay(1000).animate({right: '-280px'}, 1000)
		});	*/
		
		
		
		
		
		$('#box3').toggle(
    function(){
        $('#white').css('background-color', 'white');
    },
    function(){
        $('#white').css('background-color', 'black');
    });
    
	
	
	
	
	
	
	$(document).ready(function() {
			$("#b1").click(function() {
		$('.mainBtn').css('background-color', '#FF0')
					 .css('color', '#000')
					 .css('border-color' ,'#000');
					});
			
			$("#b2").click(function() {
		$('.mainBtn').css('background-color', '#00F')
					 .css('color', '#FFF')
					 .css('border-color' ,'#FFF');
					});
			
			$("#b3").click(function() {
		$('.mainBtn').css('background-color', '#CCC')
					 .css('color', '#000')
					 .css('border-color' ,'#06F');
					});
			
			$("#b4").click(function() {
		$('.mainBtn').css('background-color', '#00F')
					 .css('color', '#F60')
					 .css('border-color' ,'#F60');
					});
			
			$("#b5").click(function() {
		$('.mainBtn').css('background-color', '#939')
					 .css('color', '#0FF')
					 .css('border-color' ,'#0FF');
					});
			
			$("#b6").click(function() {
		$('.mainBtn').css('background-color', '#F00')
					 .css('color', '#0C0')
					 .css('border-color' ,'#0C0');
					});
				}); 
	
	
	
	
$(document).ready(function(){
  $("#code").click(function(){
    var txt="";
		txt+=yourButtonCssStart = 	"yourButton{" + "</br>"
		txt+=buttonWidth = 			"width:" 		+ $("#valuePX").val()  + ";" + "</br>" ;//width
		txt+=buttonHeight = 		"height:" 		+ $("#valuePX1").val() + ";" + "</br>";//height
		txt+=buttonBorderRadius = 	"border-radius:"+ $("#valuePX2").val() + ";" + "</br>" ;//border radius
		txt+=buttonBorderSize = 	"border-width:" + $("#valuePX3").val() + ";" + "</br>";//border size
		
		txt+=buttonTextShadow = 	"text-shadow:"  + $("#valuePX4").val() + " " + $("#valuePX5").val() + " " 
											+ $("#valuePX6").val() + " " + "#" + $("#colorBox2").val() + ";" +"</br>" ;
		
		txt+=buttonBoxShadow =		"box-shadow:"   + $("#valuePX7").val() + " " + $("#valuePX8").val() + " " 
											+ $("#valuePX9").val() + " " + "#" + $("#colorBox1").val()+ ";" +"</br>";
		
		txt+=bgColor = 				"background-color:" + "#" + $("#boxx1").val()  + ";" + "</br>" ;
		txt+=fontFam = 				"font-family:" 		+ $("#fonts").val()  +  ";" + "</br>" ;
		
		txt+=restCss = 		"display:"+ 		"table-cell" 	+ ";" + "</br>" 
							"vertical-align:"+ 	"middle" 		+ ";" + "</br>"
							"text-align:"+ 		"center" 		+ ";" + "</br>";
txt+=yourButtonCssEnd = "}"
	$("#myCode").html(txt);
});
});

	
 




		

 

			












