$(document).ready(function(){
    $('#send_message').click(function(){
        
        //Stop form submission & check the validation
        // e.preventDefault();
        
        // Variable declaration
        var error = false;
        const regex1 = /^[|가-힣a-zA-Z\s+]+$/;
        const regex = /^[|0-9|]+$/;
        var position = $('#position').val();
        // var id = $('#id-number').val();
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var agree = $('#agree11').is(":checked");
        
        
        $('#name,#email,#phone,#message,#agree11,#position').click(function(){
            $(this).removeClass("error_input");
        });
        

        if(position == null ){
            var error = true;
            $('#position').addClass("error_input");
           alert("질문 종류를 선택하세요.");
        }else{
            $('#position').removeClass("error_input");
        }

        // if(id.length ==9 && regex.test(id) ){
            
        //     $('#id-number').removeClass("error_input");
        // }else{
        //     var error = true;
        //     $('#id-number').addClass("error_input");
        //     alert("Please check your ID number");
        // }



         // Form field validation
         if(!regex1.test(name) || name.length<0 ){
            var error = true;
            $('#name').addClass("error_input");
           alert("성함 입력을 확인하세요.");
        }else{
            $('#name').removeClass("error_input");
        }


        if(email.length == 0 || email.indexOf('@') == '-1'){
            var error = true;
            $('#email').addClass("error_input");
            alert("이메일 입력을 확인하세요.");
        }else{
            $('#email').removeClass("error_input");
        }



        if(phone.substr(0, 3) == "010" && phone.length ==11 && regex.test(phone) ){
            
            $('#phone').removeClass("error_input");
        }else{
            var error = true;
            $('#phone').addClass("error_input");
            alert("전화번호 입력을 확인하세요.");
        }


        if (agree == false){
            var error = true;
            $('#agree11').addClass("error_input");
            alert("개인정보동의를 체크하세요.");
        }else{
            $('#agree11').removeClass("error_input");
        }
        
        
        // If there is no validation error, next to process the mail function
        if(error == false){
           // Disable submit button just after the form processed 1st time successfully.
          
           $('#form_e11').prop("action", "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdZ9CRngK2fCs99Pl3_ySFQBJuF1Vp-Tcgg0n15YJ15J26pBA/formResponse");
           $('#send_message').attr({'disabled' : 'true', 'value' : '전송중...' });
           
            
     $('#send_message').prop("disabled", false);
    $('#send_message').css({transition:"1s"});
    $('#send_message').css({background:"transparent"});
    $('#send_message').css({color:"#fff"});
    $('#hidden_iframe11').attr("onload", "hoa();site1111();");
  

          
        }
    });    

   

});


function dll(){

}
 
function maxLengthCheck(object){
  if (object.value.length > object.maxLength){
    object.value = object.value.slice(0, object.maxLength);
  }    
}
 
 function hoa(){
  alert("문의 신청이 완료되었습니다.");
 }
 
 function site1111(){
  //$('#mc-embedded-subscribe').click();
  

  window.location.reload();
 }
