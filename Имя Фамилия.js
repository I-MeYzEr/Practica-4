let name=prompt("Введите ваше имя: "); let surname=prompt("Введите вашу Фамилию: "); //Ввод данных
let un=name.toUpperCase(); let us=surname.toUpperCase();
let sn=un.substr(1); let ns=us.substr(1);
sn=sn.toLowerCase(); ns=ns.toLowerCase();
let n_surname=us[0]; let n_name=un[0];
let ln=n_name+sn; let last_surname=n_surname+ns;
if(ln==name&&last_surname==surname)                                                    // ниже идёт исполнение всех возможных вариантов.     
{alert(name+" "+surname+"    "+"Фамилия и имя написаны правильно.");}
else{if(ln==name&&last_surname!=surname) {alert(name+" "+last_surname+"    "+"Вид имени соответсвует стандарту. Вид фамилии откоректирован.");}
else{if(ln!=name&&last_surname==surname) {alert(ln+" "+surname+"    "+"Вид коректирован. Вид фамилии соответствует стандарту");}
else{alert(ln+" "+last_surname+"     "+"Фамилия и Имя конвертированны");}};}