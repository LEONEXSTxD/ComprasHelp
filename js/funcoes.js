
globalTotal=0;

function imprimir() {
    Window.open("/imprimir.php");
}

function totalAtual(total){
globalTotal = globalTotal+converteMoedaFloat(total);
return ConverterFloatEmMoeda(globalTotal);
}


function limparHTML(IdElemento){

	$("#" + IdElemento).html("");
}


//INCLUIR EQUIPAMENTOS
function AddElementoIncluir(BlocoElementos) {

	var Alimento 		= $("#"+"incluir_alimento").val();
	var Quantidade      = $("#"+"incluir_quantidade").val();
	var Maximo  		= $("#"+"incluir_maximo").val();
	var Marca      		= $("#"+"incluir_marca").val();
	var total       	= $("#"+"incluir_total_maximo").text();
    var totalLista =   totalAtual(total); //recebe o valor total e manda para a função

    var IdElemento = parseInt(Math.random() * 1000000000);;

	var codigo = 
	"<div class='row ' style = 'background-color:#f9f9f9;border:5px solid;border-color:white' id='" + IdElemento + "'>"
    			+"<div class='col-md-3'>"
                  +"<div class='form-group text-center'> <br>"
							+"<label><h5>"+Alimento+"</h5></label>"
							+"<input type='hidden' name='incluir_alimento[]' value ='" + Alimento + "' >"
						+"</div>"
					+"</div>"
                +"<div class='col-md-2'>"
                 +"<div class='form-group text-center'> <br>"
							+"<label><h5>"+Quantidade+"</h5></label>"
							+"<input type='hidden' name='incluir_quantidade[]' value ='" + Quantidade + "' >"
						+"</div>"
					+"</div>"
                +"<div class='col-md-2'>"
                 +"<div class='form-group text-center'> <br>"
							+"<label><h5>"+Maximo+"</h5></label>"
							+"<input type='hidden' name='incluir_maximo[]' value ='" + Maximo + "' >"
						+"</div>"
					+"</div>"      
                +"<div class='col-md-2'>"
                 +"<div class='form-group text-center'> <br>"
							+"<label><h5>"+Marca+"</h5></label>"
							+"<input type='hidden' name='incluir_marca[]' value ='" + Marca + "' >"
						+"</div>"
					+"</div>"
                +"<div class='col-md-1'>"
                  +"<div class='form-group text-center'> <br>"
							+" <label><h5>R$:"+total+"</h5></label>"
							+"<input type='hidden' name='incluir_total_maximo[]' value ='" + total + "' >"
						+"</div>"
					+"</div>"
					 +"<div class='col-md-1'>"
                  +"<div class='form-group text-center'> <br>"
							+" <font color='#ff0000'><label><h5>R$"+totalLista+"</h5></label></font>"
							+"<input type='hidden' id ='incluir_total[]' name='incluir_total[]' value ='" + totalLista + "' >"
						+"</div>"
					+"</div>"
                +"<div class='col-md-1'>"   
                   +"<label></br></label>"
                   +"<br>"
                    +"<button type='button' onclick='limparHTML(" + IdElemento + ")'>remover</button>"
                +"</div>"
              +"</div>";

	$("#" + BlocoElementos).append(codigo);
	document.getElementById('incluir_alimento').value='';
	document.getElementById('incluir_quantidade').value='';
	document.getElementById('incluir_maximo').value='';
	document.getElementById('incluir_marca').value='';
	$("#"+"incluir_total_maximo").html("Total");
}
//Cálculo do total
function calcularMaximoTotal(){

	var Quantidade  =    parseInt($("#incluir_quantidade").val());
	var maximo = 		 parseFloat($("#incluir_maximo").val());
	
	if(Quantidade==null ||Quantidade==""){
		Quantidade=1;
	}
	if(maximo==null || maximo==""){
		maximo=0;

	}

	var resultado = ConverterFloatEmMoeda(Quantidade * maximo);
	
	$("#incluir_total_maximo").html(resultado);
	
}

function calcularTotal(valor){

var globalTotal = globalTotal+valor;
//alert();
}

//CONVERTAR NUMERO FLOAT PARA VALOR MOEDA
function ConverterFloatEmMoeda(numero) {
	x = 0;
	
	if(numero < 0) {
		numero = Math.abs(numero);
		x = 1;
	}
	if(isNaN(numero)) numero = "0";
	
	centavos = Math.floor((numero*100+0.5)%100);

	numero = Math.floor((numero*100+0.5)/100).toString();

	if(centavos < 10) centavos = "0" + centavos;
	
	for (var i = 0; i < Math.floor((numero.length-(1+i))/3); i++){
		numero = numero.substring(0,numero.length-(4*i+3))+"."+numero.substring(numero.length-(4*i+3));
	}
	
	retorno = numero + ',' + centavos;

	if (x == 1) retorno = ' - ' + retorno;
	
	return retorno;
}

function converteMoedaFloat(valor){
      
      if(valor === ""){
         valor =  0;
      }else{
         valor = valor.replace(".","");
         valor = valor.replace(",",".");
         valor = parseFloat(valor);
      }
      return valor;

   }