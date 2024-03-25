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
    }
}



