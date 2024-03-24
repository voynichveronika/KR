function vivod()
{               
    var name  = document.getElementById('text1').value;
    var phone = document.getElementById('text2').value;
    var datez = document.getElementById('text3').value;
    var datev = document.getElementById('text4').value;
    var kol = document.getElementById('text5').value;
    var inf = document.getElementById('text6').value;

    if (name == "")
    {
        document.querySelector('.v1').innerHTML = "Поля отмеченные * обязательны для заполнения";
    }
    else
    {
        if (phone == "")
        {
            document.querySelector('.v1').innerHTML = "Поля отмеченные * обязательны для заполнения";  
<<<<<<< HEAD
        }                   
=======
        }
        else
        {  
  var to = "veronika47333@gmail.com";  
         var subj = "тема письма";  
         var text = "собственно тело письма";  
 
SendMail(to, subj, text, ["c:\\1.txt"]); 
 
 
function SendMail(sRecipientMail, sSubject, sMsgBody,files)   
{   
    try   
    {   
        // create a session and log on -- username and password in profile    
        var refMsg = WScript.CreateObject("CDO.Message");   
        var refConf = WScript.CreateObject("CDO.Configuration");   
           
        // Setting configuration params   
        with(refConf.Fields)   
        {   
            Item("http://schemas.microsoft.com/cdo/configuration/smtpserver") = "smtp.mail.ru";  
            Item("http://schemas.microsoft.com/cdo/configuration/sendusing") = 2; 
            Item("http://schemas.microsoft.com/cdo/configuration/smtpauthenticate") = 1;  
            Item("http://schemas.microsoft.com/cdo/configuration/sendusername") = "lou@list.ru";  
            Item("http://schemas.microsoft.com/cdo/configuration/sendpassword") = "****"; 
        }   
        refConf.Fields.Update();   
   
        with(refMsg)   
        {   
            Configuration = refConf;   
            To       = sRecipientMail;   
            From     = "lou@list.ru";   
            Subject  = sSubject;   
            TextBody = sMsgBody;   
        }  
  
        if (files)  
        {  
            for(var i=0; i<files.length; i++)  
                refMsg.AddAttachment(files[i]);  
        }  
  
        refMsg.Send();   
    }    
    catch(e)   
    {   
        WScript.Echo("SendMail error !!! : " + e.description);   
        WScript.Quit(1);   
    }   
}


        /*var t1 = document.getElementsByTagName("input")[0];
                                                                                            var val1 = t1.value;                                              
                                                                                            document.querySelector('.v1').innerHTML = "Фамилия: " + val1;

                                                                                            var t2 = document.getElementsByTagName("input")[1];
                                                                                            var val2 = t2.value;                                              
                                                                                            document.querySelector('.v2').innerHTML = "Имя: " + val2;

                                                                                            var t3 = document.getElementsByTagName("input")[2];
                                                                                            var val3 = t3.value;                                              
                                                                                            document.querySelector('.v3').innerHTML = "Пароль: " + val3;

                                                                                            var t4 = document.getElementsByTagName("input")[3];
                                                                                            var val4 = t4.value;                                              
                                                                                            document.querySelector('.v4').innerHTML = "Подтверждение пароля: " + val4;

                                                                                            var t5 = document.getElementsByTagName("input")[4];
                                                                                            var val5 = t5.value;                                              
                                                                                            document.querySelector('.v5').innerHTML = "E-mail: " + val5;

                                                                                            var t6 = document.getElementsByTagName("input")[5];
                                                                                            var val6 = t6.value;                                              
                                                                                            document.querySelector('.v6').innerHTML = "Телефон: " + val6;

                                                                                            var t7 = document.getElementsByTagName("input")[6];
                                                                                            var val7 = t7.value;                                              
                                                                                            document.querySelector('.v7').innerHTML = "Возраст: " + val7;*/                                                      
        }                    
>>>>>>> 20e64ade9c60d6a13daa4fa46aaaf34db64ce11c
    }
}


const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();