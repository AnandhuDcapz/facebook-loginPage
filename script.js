$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
                
            },
            sname:{
                required:true,
                minlength:4 
            },
            emailaddress:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength:8
                
                
            },
            day:{
                required:true
            },
            month:{
                required:true
            },
            year:{
                required:true
            }
        }
    })
})