$(document).ready( function() {
	$('#paginas_range').on('input', function(){ //para q cambie en tiempo real
		$('#paginas_number').val($(this).val());
	});

	$('#paginas_number').on('change', function(){  //change cuando se le quita el foco a la caja
		$('#paginas_range').val($(this).val());
	});


	$('#paginas_number').on('keyup', function(){  //change cuando se le quita el foco a la caja
		$('#paginas_range').val($(this).val());
	});

	$('#temas_range').on('input', function(){ //para q cambie en tiempo real
		$('#temas_number').val($(this).val());
	});

	$('#temas_number').on('change', function(){  //change cuando se le quita el foco a la caja
		$('#temas_range').val($(this).val());
	});

	
	$('#temas_number').on('keyup', function(){  //change cuando se le quita el foco a la caja
		$('#temas_range').val($(this).val());
	});

	var complejidad = {
		personal: {
			descripcion: "sencillo",
			monto: 234,
		},
		standard: {
			descripcion: "standard",
			monto: 2345,
		},		
		avanzado: {
			descripcion: "avanzado",
			monto: 23456,
		},	
		profesional: {
			descripcion: "profesional",
			monto: 234567,
		},	
		empresarial: {
			descripcion: "empresarial",
			monto: 2345678,
		},	
	};

	$('#complejidad').on('change', function(){
		var indice= $(this).val();
		var objeto = complejidad [indice];
		$('#descripcion').html(objeto.descripcion);
	});

	var social = {
		facebook: 10000,
		twitter: 5000,
		blog: 8000,
		youtube: 15000,
	};


	$('form').on('submit', function(event){ //listener
		event.preventDefault(); //para no recargar el navegador cuando se envie el formulariocon el submit

		var precio_x_pagina = 5000;
		var monto_paginas = $('#paginas_number').val()*precio_x_pagina;
		
		var precio_x_tema = 8000;
		var monto_tema = $('#temas_number').val()*precio_x_tema;

		var precio_complejidad = complejidad[ $('#complejidad').val()].monto;
		
		var suma_social = 0;

		$.each( $('.social:checked'), function(i, obj){ //chequea los elementos seleccionaos
			suma_social += social[ $(obj).val() ];
		}); //each es igual al foreach

		var subtotal = monto_paginas + monto_tema + precio_complejidad + suma_social;
		var iva = $('#iva').prop('checked') ? (subtotal * 0.12) : 0;
		//condicion ? valor_true : valor_false;
		var total = subtotal + iva;

		var fecha_inicio = new Date ( $('#fecha_inicio').val());
		var fecha_fin = new Date ( $('#fecha_fin').val());

		var dias = (fecha_fin - fecha_inicio) / 1000 / 60 / 60 / 24;
		var horas = $('#horas').val();

		var honorarios = total / (horas * dias);

		$('#monto_subtotal').html('Bs. '+subtotal.toFixed(2));
		$('#monto_iva').html('Bs. '+iva.toFixed(2));
		$('#monto_total').html('Bs. '+total.toFixed(2));
		$('#monto_honorarios').html('Bs. '+honorarios.toFixed(2));
	});

});