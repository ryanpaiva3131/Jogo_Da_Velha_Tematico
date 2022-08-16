var player = "X";
var numJog = 0;
var valorX = 0;
var valorO = 0;
var valorV = 0;
var vitoria = 0;
var tema = 0;
var imgcontX;
var imgcontO;
var imgcontV;
var condicao = false;
const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})

    function mudartema(id){

        tema = document.querySelector('input[name="tema"]:checked').value;
        imgcontO = document.getElementById('imgcontadorO');
        imgcontO.style.backgroundImage="url('./img/O"+tema+".png')";
        imgcontO.style.backgroundSize="50px, 50px";
        imgcontO.style.backgroundRepeat="no-repeat";
        imgcontX = document.getElementById('imgcontadorX');
        imgcontX.style.backgroundImage="url('./img/X"+tema+".png')";
        imgcontX.style.backgroundSize="50px, 50px";
        imgcontX.style.backgroundRepeat="no-repeat";
        imgcontV = document.getElementById('imgcontadorV');
        imgcontV.style.backgroundImage="url('./img/V"+tema+".png')";
        imgcontV.style.backgroundSize="40px, 20px";
        imgcontV.style.backgroundRepeat="no-repeat";
    }


    function mudarcontador() {
        document.getElementById("contadorX").innerHTML = valorX;
        document.getElementById("contadorO").innerHTML = valorO;
        document.getElementById("contadorV").innerHTML = valorV;
    }

    function exibebotao(){
        document.getElementById("playa").style.display="block";
        document.getElementById("res").style.display="block";
    }

    function ocultabotao(){
        document.getElementById("playa").style.display="none";
        document.getElementById("res").style.display="none";
    }

    function playagain(){
        var pc = document.getElementById('cpu').checked;
        document.getElementById('c1').src = "./img/transp.png";
        document.getElementById('c2').src = "./img/transp.png";
        document.getElementById('c3').src = "./img/transp.png";
        document.getElementById('c4').src = "./img/transp.png";
        document.getElementById('c5').src = "./img/transp.png";
        document.getElementById('c6').src = "./img/transp.png";
        document.getElementById('c7').src = "./img/transp.png";
        document.getElementById('c8').src = "./img/transp.png";
        document.getElementById('c9').src = "./img/transp.png";
        numJog=0;
        vitoria = 0;
        player = "X";
    }

    function mudarmenu(){
        playagain();
        var menu = document.getElementById('menu');
        menu.style.display = "none";
        var principal = document.getElementById('principal');
        principal.style.display = "block";
        return false;
    }

    function mudarmenu2(){
        var principal = document.getElementById('principal');
        principal.style.display = "none";
        return false;
    }

    function mudarmenu3(){
        if((vitoria==1) && (tema==1)){
            playagain();
            ocultabotao();
            var result1 = document.getElementById('result1X');
            result1.style.display="none";
            var principal = document.getElementById('principal');
            principal.style.display = "block";
        }else if((vitoria==1) && (tema==2)){
            playagain();
            ocultabotao();
            var result1 = document.getElementById('result2X');
            result1.style.display="none";
            var principal = document.getElementById('principal');
            principal.style.display = "block";
        }else if(vitoria==1 && tema==3){
            playagain();
            ocultabotao();
            var result1 = document.getElementById('result3X');
            result1.style.display="none";
            var principal = document.getElementById('principal');
            principal.style.display = "block";
        }else if((vitoria==2) && (tema==1)){
            playagain();
            ocultabotao();
            var result1 = document.getElementById('result1O');
            result1.style.display="none";
            var principal = document.getElementById('principal');
            principal.style.display = "block";
        }else if((vitoria==2) && (tema==2)){
            playagain();
            ocultabotao();
            var result1 = document.getElementById('result2O');
            result1.style.display="none";
            var principal = document.getElementById('principal');
            principal.style.display = "block";
        }else if((vitoria==2) && (tema==3)){
            playagain();
            ocultabotao();
            var result1 = document.getElementById('result3O');
            result1.style.display="none";
            var principal = document.getElementById('principal');
            principal.style.display = "block";
        }else if((numJog>=9) && (tema==1)){
            playagain();
            ocultabotao();
            var result1 = document.getElementById('result1V');
            result1.style.display="none";
            var principal = document.getElementById('principal');
            principal.style.display = "block";
        }else if((numJog>=9) && (tema==2)){
            playagain();
            ocultabotao();
            var result1 = document.getElementById('result2V');
            result1.style.display="none";
            var principal = document.getElementById('principal');
            principal.style.display = "block";
        }else if((numJog>=9) && (tema==3)){
            playagain();
            ocultabotao();
            var result1 = document.getElementById('result3V');
            result1.style.display="none";
            var principal = document.getElementById('principal');
            principal.style.display = "block";
        }
        return false;
    }

    function mudarmenu4(){
        if((vitoria==1) && (tema==1)){
            playagain();
            ocultabotao();
            var result1 = document.getElementById('result1X');
            result1.style.display="none";
            var principal = document.getElementById('menu');
            principal.style.display = "block";
        }else if((vitoria==1) && (tema==2)){
            playagain();
            ocultabotao();
            var result1 = document.getElementById('result2X');
            result1.style.display="none";
            var principal = document.getElementById('menu');
            principal.style.display = "block";
        }else if((vitoria==1) && (tema==3)){
            playagain();
            ocultabotao();
            var result1 = document.getElementById('result3X');
            result1.style.display="none";
            var principal = document.getElementById('menu');
            principal.style.display = "block";
        }else if((vitoria==2) && (tema==1)){
            playagain();
            ocultabotao();
            var result1 = document.getElementById('result1O');
            result1.style.display="none";
            var principal = document.getElementById('menu');
            principal.style.display = "block";
        }else if((vitoria==2) && (tema==2)){
            playagain();
            ocultabotao();
            var result1 = document.getElementById('result2O');
            result1.style.display="none";
            var principal = document.getElementById('menu');
            principal.style.display = "block";
        }else if((vitoria==2) && (tema==3)){
            playagain();
            ocultabotao();
            var result1 = document.getElementById('result3O');
            result1.style.display="none";
            var principal = document.getElementById('menu');
            principal.style.display = "block";
        }else if((numJog>=9) && (tema==1)){
            playagain();
            ocultabotao();
            var result1 = document.getElementById('result1V');
            result1.style.display="none";
            var principal = document.getElementById('menu');
            principal.style.display = "block";
        }else if((numJog>=9) && (tema==2)){
            playagain();
            ocultabotao();
            var result1 = document.getElementById('result2V');
            result1.style.display="none";
            var principal = document.getElementById('menu');
            principal.style.display = "block";
        }else if((numJog>=9) && (tema==3)){
            playagain();
            ocultabotao();
            var result1 = document.getElementById('result3V');
            result1.style.display="none";
            var principal = document.getElementById('menu');
            principal.style.display = "block";
        }
        return false;
    }

    function chamarvitoriaX(){
        if(tema==1){
            mudarmenu2();
            var result1 = document.getElementById('result1X');
            result1.style.display="block";
            exibebotao();
        }else if(tema==2){
            mudarmenu2();
            var result1 = document.getElementById('result2X');
            result1.style.display="block";
            exibebotao();
        }else if(tema==3){
            mudarmenu2();
            var result1 = document.getElementById('result3X');
            result1.style.display="block";
            exibebotao();
        }
        return false;
    }

    function chamarvitoriaO(){
        if(tema==1){
            mudarmenu2();
            var result1 = document.getElementById('result1O');
            result1.style.display="block";
            exibebotao();
        }else if(tema==2){
            mudarmenu2();
            var result1 = document.getElementById('result2O');
            result1.style.display="block";
            exibebotao();
        }else if(tema==3){
            mudarmenu2();
            var result1 = document.getElementById('result3O');
            result1.style.display="block";
            exibebotao();
        }
        return false;
    }

    function chamarvelha(){
        if(tema==1){
            mudarmenu2();
            var result1 = document.getElementById('result1V');
            result1.style.display="block";
            exibebotao();
        }else if(tema==2){
            mudarmenu2();
            var result1 = document.getElementById('result2V');
            result1.style.display="block";
            exibebotao();
        }else if(tema==3){
            mudarmenu2();
            var result1 = document.getElementById('result3V');
            result1.style.display="block";
            exibebotao();
        }
        return false;
    }

    function verifyimg(id){
        var file = document.getElementById(id).src;
        return file.substring(file.length - 10, file.length);
        
    }

    function jogodopc(){
        if(verifyimg('c5')=="transp.png"){
            return 'c5';
        }else{
            return 'c' + Math.floor((Math.random()*9)+1);
        }
    }

    function win(){
        numJog++;
        if((verifyimg('c1')==verifyimg('c2'))&&(verifyimg('c1')==verifyimg('c3'))&&(verifyimg('c1')=="img/X"+tema+".png")){
            return vitoria = 1;
        }else
        if((verifyimg('c1')==verifyimg('c2'))&&(verifyimg('c1')==verifyimg('c3'))&&(verifyimg('c1')=="img/O"+tema+".png")){
            return vitoria = 2;
        }else
        if((verifyimg('c4')==verifyimg('c5'))&&(verifyimg('c4')==verifyimg('c6'))&&(verifyimg('c4')=="img/X"+tema+".png")){
            return vitoria = 1;
        }else 
        if((verifyimg('c4')==verifyimg('c5'))&&(verifyimg('c4')==verifyimg('c6'))&&(verifyimg('c4')=="img/O"+tema+".png")){
            return vitoria = 2;
        }else 
        if((verifyimg('c7')==verifyimg('c8'))&&(verifyimg('c7')==verifyimg('c9'))&&(verifyimg('c7')=="img/X"+tema+".png")){
            return vitoria = 1;
        }else 
        if((verifyimg('c7')==verifyimg('c8'))&&(verifyimg('c7')==verifyimg('c9'))&&(verifyimg('c7')=="img/O"+tema+".png")){
            return vitoria = 2;
        }else 
        if((verifyimg('c1')==verifyimg('c4'))&&(verifyimg('c1')==verifyimg('c7'))&&(verifyimg('c1')=="img/X"+tema+".png")){
            return vitoria = 1;
        }else 
        if((verifyimg('c1')==verifyimg('c4'))&&(verifyimg('c1')==verifyimg('c7'))&&(verifyimg('c1')=="img/O"+tema+".png")){
            return vitoria = 2;
        }else 
        if((verifyimg('c2')==verifyimg('c5'))&&(verifyimg('c2')==verifyimg('c8'))&&(verifyimg('c2')=="img/X"+tema+".png")){
            return vitoria = 1;
        }else 
        if((verifyimg('c2')==verifyimg('c5'))&&(verifyimg('c2')==verifyimg('c8'))&&(verifyimg('c2')=="img/O"+tema+".png")){
            return vitoria = 2;
        }else 
        if((verifyimg('c3')==verifyimg('c6'))&&(verifyimg('c3')==verifyimg('c9'))&&(verifyimg('c3')=="img/X"+tema+".png")){
            return vitoria = 1;
        }else 
        if((verifyimg('c3')==verifyimg('c6'))&&(verifyimg('c3')==verifyimg('c9'))&&(verifyimg('c3')=="img/O"+tema+".png")){
            return vitoria = 2;
        }else 
        if((verifyimg('c1')==verifyimg('c5'))&&(verifyimg('c1')==verifyimg('c9'))&&(verifyimg('c1')=="img/X"+tema+".png")){
            return vitoria = 1;
        }else 
        if((verifyimg('c1')==verifyimg('c5'))&&(verifyimg('c1')==verifyimg('c9'))&&(verifyimg('c1')=="img/O"+tema+".png")){
            return vitoria = 2;
        }else 
        if((verifyimg('c3')==verifyimg('c5'))&&(verifyimg('c3')==verifyimg('c7'))&&(verifyimg('c3')=="img/X"+tema+".png")){
            return vitoria = 1;
        }else
        if((verifyimg('c3')==verifyimg('c5'))&&(verifyimg('c3')==verifyimg('c7'))&&(verifyimg('c3')=="img/O"+tema+".png")){
            return vitoria = 2;
        }
        return vitoria = 0;
    }

    function checkjogo(id){
        if(condicao){
            return false;
        }
        var pc = document.getElementById('cpu').checked;
        var opc = verifyimg(id);

        if (opc=="transp.png"){
            document.getElementById(id).src = "./img/" + player + tema + ".png";
            if(player == "X"){
                player = "O";
                win();
                if(vitoria == 1){
                    valorX++;
                    chamarvitoriaX()
                    mudarcontador()
                    return false;
                }else
                if(vitoria == 2){
                    valorO++;
                    chamarvitoriaO()
                    mudarcontador()
                    return false;
                }else
                if(numJog>=9){
                    chamarvelha()
                    valorV++;
                    mudarcontador()
                    return false;
                }
            }else if(player=="O"){
                player="X";
                win()
                if(vitoria == 1){
                    valorX++;
                    chamarvitoriaX()
                    mudarcontador()
                    return false;
                }else
                if(vitoria == 2){
                    valorO++;
                    chamarvitoriaO()
                    mudarcontador()
                    return false;
                }else
                if(numJog>=9){
                    chamarvelha()
                    valorV++;
                    mudarcontador()
                    return false;
                }
            }
        }if(pc && player=="O"){
            checkjogo(jogodopc());
        }
    }

    var td1 = document.getElementById("c1");
    var td2 = document.getElementById("c2");
    var td3 = document.getElementById("c3");
    var td4 = document.getElementById("c4");
    var td5 = document.getElementById("c5");
    var td6 = document.getElementById("c6");
    var td7 = document.getElementById("c7");
    var td8 = document.getElementById("c8");
    var td9 = document.getElementById("c9");

    td1.addEventListener("mouseover", mouseentra1);
    td1.addEventListener("mouseleave", mousesai1);
    td2.addEventListener("mouseover", mouseentra2);
    td2.addEventListener("mouseleave", mousesai2);
    td3.addEventListener("mouseover", mouseentra3);
    td3.addEventListener("mouseleave", mousesai3);
    td4.addEventListener("mouseover", mouseentra4);
    td4.addEventListener("mouseleave", mousesai4);
    td5.addEventListener("mouseover", mouseentra5);
    td5.addEventListener("mouseleave", mousesai5);
    td6.addEventListener("mouseover", mouseentra6);
    td6.addEventListener("mouseleave", mousesai6);
    td7.addEventListener("mouseover", mouseentra7);
    td7.addEventListener("mouseleave", mousesai7);
    td8.addEventListener("mouseover", mouseentra8);
    td8.addEventListener("mouseleave", mousesai8);
    td9.addEventListener("mouseover", mouseentra9);
    td9.addEventListener("mouseleave", mousesai9);

    function mouseentra1(){
        var opc = verifyimg('c1');
        if(opc=="transp.png"){
        td1.style.backgroundImage="url('./img/"+player+tema+".png')";
        td1.style.backgroundPosition="relative";
        td1.style.backgroundSize="100px, 100px";
        td1.style.backgroundRepeat="no-repeat";
    }else{
        return false;
    }
    }function mouseentra2(){
        var opc = verifyimg('c2');
    if(opc=="transp.png"){
        td2.style.backgroundImage="url('./img/"+player+tema+".png')";
        td2.style.backgroundPosition="relative";
        td2.style.backgroundSize="100px, 100px";
        td2.style.backgroundRepeat="no-repeat";
    }else{
        return false;
    }
    }function mouseentra3(){
        var opc = verifyimg('c3');
    if(opc=="transp.png"){
        td3.style.backgroundImage="url('./img/"+player+tema+".png')";
        td3.style.backgroundPosition="relative";
        td3.style.backgroundSize="100px, 100px";
        td3.style.backgroundRepeat="no-repeat";
    }else{
        return false
    }
    }function mouseentra4(){
        var opc = verifyimg('c4');
    if(opc=="transp.png"){
        td4.style.backgroundImage="url('./img/"+player+tema+".png')";
        td4.style.backgroundPosition="relative";
        td4.style.backgroundSize="100px, 100px";
        td4.style.backgroundRepeat="no-repeat";
    }else{
        return false;
    }
    }function mouseentra5(){
        var opc = verifyimg('c5');
    if(opc=="transp.png"){
        td5.style.backgroundImage="url('./img/"+player+tema+".png')";
        td5.style.backgroundPosition="relative";
        td5.style.backgroundSize="100px, 100px";
        td5.style.backgroundRepeat="no-repeat";
    }else{
        return false;
    }
    }function mouseentra6(){
        var opc = verifyimg('c6');
    if(opc=="transp.png"){
        td6.style.backgroundImage="url('./img/"+player+tema+".png')";
        td6.style.backgroundPosition="relative";
        td6.style.backgroundSize="100px, 100px";
        td6.style.backgroundRepeat="no-repeat";
    }else{
        return false;
    }
    }function mouseentra7(){
        var opc = verifyimg('c7');
    if(opc=="transp.png"){
        td7.style.backgroundImage="url('./img/"+player+tema+".png')";
        td7.style.backgroundPosition="relative";
        td7.style.backgroundSize="100px, 100px";
        td7.style.backgroundRepeat="no-repeat";
    }else{
        return false;
    }
    }function mouseentra8(){
        var opc = verifyimg('c8');
    if(opc=="transp.png"){
        td8.style.backgroundImage="url('./img/"+player+tema+".png')";
        td8.style.backgroundPosition="relative";
        td8.style.backgroundSize="100px, 100px";
        td8.style.backgroundRepeat="no-repeat";
    }else{
        return false;
    }
    }function mouseentra9(){
        var opc = verifyimg('c9');
    if(opc=="transp.png"){
        td9.style.backgroundImage="url('./img/"+player+tema+".png')";
        td9.style.backgroundPosition="relative";
        td9.style.backgroundSize="100px, 100px";
        td9.style.backgroundRepeat="no-repeat";
    }else{
        return false
    }
    }

    function mousesai1(){
        td1.style.backgroundImage="url('./img/transp.png')"
    }function mousesai2(){
        td2.style.backgroundImage="url('./img/transp.png')"
    }function mousesai3(){
        td3.style.backgroundImage="url('./img/transp.png')"
    }function mousesai4(){
        td4.style.backgroundImage="url('./img/transp.png')"
    }function mousesai5(){
        td5.style.backgroundImage="url('./img/transp.png')"
    }function mousesai6(){
        td6.style.backgroundImage="url('./img/transp.png')"
    }function mousesai7(){
        td7.style.backgroundImage="url('./img/transp.png')"
    }function mousesai8(){
        td8.style.backgroundImage="url('./img/transp.png')"
    }function mousesai9(){
        td9.style.backgroundImage="url('./img/transp.png')"
    }
