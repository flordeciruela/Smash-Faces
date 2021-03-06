'use strict';
$( _ => {
  const root = $('.root');

  var state = {
  sedeSelected: null,
  arrayCoders: null,
  indexOfCoder: null,
  points: 0,
  countIntentos: 0,
  codersValidated: []
  }

  const loadImage = (sedeSelected, arrayCoders) => {
    root.empty();
    state.countIntentos = 0;
    const imgCoder = $('<img src="" alt="Image coder">');
    root.append(imgCoder);
    let imgRoute = "assets/img/" +sedeSelected+ "/";

    const random = (imgCoder) => {
      const indexRandom = Math.round(Math.random() * (arrayCoders.length -1));
      const actualNumber = state.codersValidated.find(function(value){
                              return value == indexRandom;
                            });
      if(actualNumber == undefined){
        state.codersValidated.push(indexRandom);
        state.indexOfCoder = arrayCoders[indexRandom];
        imgCoder.attr("src", imgRoute + arrayCoders[indexRandom].image);

      }else{
        random(imgCoder);
      }
      return state.codersValidated[state.codersValidated.length -1];
    }
    random(imgCoder);
    console.log(state.indexOfCoder);
  }

	$( "form" ).submit(function(e) {
			e.preventDefault();
			let inputName = $("#input-nombre").val().toLowerCase();
			let coderName = state.indexOfCoder.name.toLowerCase();
			state.countIntentos++;

			if (inputName === coderName) {
				alert("Excelente acertaste!");
				$( "#points" ).text(state.points += 5);
				$("#input-nombre").val("");
				if (state.codersValidated.length == state.arrayCoders.length) {
					alert("Game over, ganaste "+state.points+ " puntos!");
				} else {
					loadImage(state.sedeSelected, state.arrayCoders);
				}

			} else if (state.countIntentos < 5) {
				alert("Sigue intentando!");
			} else {
				alert("Fallaste 5 veces, pierdes 1 punto");
				$( "#points" ).text(state.points -= 1);

				if (state.codersValidated.length == state.arrayCoders.length) {
					alert("Game over, ganaste "+state.points+ " puntos!");
				} else {
					setTimeout(function() {
						loadImage(state.sedeSelected, state.arrayCoders);
						$("#input-nombre").val("");
					}, 2000);
				}
			}
		});

	$( "select" ).change(function() {
    root.empty();
		$( "#points" ).text(state.points = 0);
		state.codersValidated = [];
    if ($(this).val() == "Lima") {
      state.sedeSelected = "peru";
      state.arrayCoders = peru;
    } else  {
      state.sedeSelected = "mexico";
      state.arrayCoders = mexico;
    }
    loadImage(state.sedeSelected, state.arrayCoders);
	});

});
