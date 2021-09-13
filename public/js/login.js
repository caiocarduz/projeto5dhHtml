$('input').on('input',function(){
    if($(this).val() != '') {
         $(this).parent().find('label').fadeOut(50);   
    } else {
        $(this).parent().find('label').fadeIn(); 
    }
 });