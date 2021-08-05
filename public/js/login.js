$('input').on('input',function(){
    if($(this).val() != '') {
         $(this).parent().find('label').fadeOut();   
    } else {
        $(this).parent().find('label').fadeIn(); 
    }
 });