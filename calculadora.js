function help(){
    alert("Cuando utilice cos, sin y tan -> Cierre la operación con ')'.\nPara poner '(' y ')' con el teclado presione shift+8 o shift+9.\nPara utilizar las funciones trigonométricas con el teclado presionar -> cos:c , sin:s, tan:t.\nLa tecla C resetea la calculadora");
}


function deleteOp(){
    $("#display").text("");   
}

function calculate(){
    var result=eval($("#display").text());
    $("#display").text(result);
  //  console.log("res "+result);
}

jQuery(document).ready(
    function() {
        $("#zero, #one, #two, #three, #four, #five, #six, #seven, #eight, #nine, #sum, #sub, #mult, #div, #pto").click(function() {
            $("#display").append(this.value);
        });

        $("#cos").click(function() {
            $("#display").append("Math.cos(");
        });

        $("#sin").click(function() {
            $("#display").append("Math.sin(");
        });

        $("#tan").click(function() {
            $("#display").append("Math.tan(");
        });

        $("#p1").click(function() {
            $("#display").append("("); 
        });

        $("#p2").click(function() {  
            $("#display").append(")"); 
        });

        $("#equal").click(function() {
            calculate();
        });

        $("#reset").click(function() {
           deleteOp();    
        });

        $(document).keypress(
            function(e){
                var key = e.which;
                var value= String.fromCharCode(key);
            //    console.log("k "+key+" val "+value);
                if(key>41 && key<58){
                    $("#display").append(value); 
                }
                if(key==40){
                    $("#display").append("(");
                }
                if(key==41){
                    $("#display").append(")");
                }
                if(key==67){
                    $("#display").append("Math.cos(");
                }
                if(key==83){
                    $("#display").append("Math.sin(");
                }
                if(key==84){
                    $("#display").append("Math.tan(");
                }
                if(key==46){
                    deleteOp();
                }
                if(key==13){
                    calculate();
                }
        });
});