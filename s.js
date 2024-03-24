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
        }
        else
        {  

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
    }
}
