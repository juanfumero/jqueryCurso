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

	$('#temas_range').on('input', function(){  //change cuando se le quita el foco a la caja
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
			descripcion: 'descripcion 1',
			monto: 80000,
		},
		standard: {
			descripcion: 'standard 1',
			monto: 10000,
		},
		avanzado: {
			descripcion: 'avanzado 1',
			monto: 20000,
		},
		profesional: {
			descripcion: 'profesional 1',
			monto: 30000,
		},
		empresarial: {
			descripcion: 'empresarial 1',
			monto: 40000,
		},
	};

	$('#complejidad').on('change', function(){  //change cuando se le quita el foco a la caja
		var indice = $(this).val();
		var objeto = complejidad[indice];
		$('#descripcion').html(
			objeto.descripcion	
		);
		//alert($(this).val());
		/*$('#descripcion').html(
			complejidad[$(this).val()].descripcion
		);*/
	});

	var social ={
		facebook: 10000,
		twitter: 8000,
		blog: 5000,
		youtube: 15000
	};

	$('#form').on('submit', function(event){  //change cuando se le quita el foco a la caja
		event.preventDefault();

		var precio_por_pagina = 5000;
		var monto_paginas = $('#paginas_number').val()*precio_por_pagina;

		var precio_por_tema = 8000;
		var monto_temas = $('#temas_number').val()*precio_por_tema;

		var precio_complejidad = complejidad[$('#complejidad').val()].monto;

		var suma_social = 0;
		$.each($('.social:checked'), function(i, obj){
			suma_social += social[$(obj).val()]
		});

		var subtotal = monto_paginas + monto_tema + precio_complejidad + suma_social;
		var iva = $('#iva').prop('checked') ? (subtotal * 0.12) : 0;
		var total = subtotal + iva;

		/* traduccion del if
		var iva;
		if($('#iva').prop('checked'))
		{
			iva = subtotal * 0.12;
		}else
		{
			iva = 0;
		}*/

		var fecha_inicio = new Date($('#fecha_inicio').val());
		var fecha_fin = new Date($('#fecha_fin').val());

		var dias = (fecha_fin - fecha_inicio)/1000/60/60/24;
		var horas = $('#horas').val();

		var honorarios = total / (horas * dias);

		$('#monto_subtotal').html('Bs. ' + subtotal.toFixed(2));
		$('#monto_iva').html('Bs. ' + iva.toFixed(2));
		$('#monto_total').html('Bs. ' + total.toFixed(2));
		$('#monto_honorarios').html('Bs. ' + honorarios.toFixed(2));

	});


});
