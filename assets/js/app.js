'use strict';

const Game = (update) => {


	const root = $('.root');
	  root.empty();
	const imgCoder = $('<img src="" alt="Image coder">');
	root.append(imgCoder);
	const imgRoute = "assets/img/mexico/";
	var value = Math.round(Math.random() * mexico.length);
	console.log(value);
	console.log(mexico[value]);
	console.log(imgRoute + mexico[value].image);
	//imgCoder.src = imgRoute + mexico[value].image;
	imgCoder.attr("src", imgRoute + mexico[value].image);
	/*
  const update = function() {
    render(root);
  }
	*/
}



$( _ => {
	//root.empty();
	console.log($( "select option:selected" ).text());
	$( "select" ).change(function() {
	  Game();
	});
/*
    const root = $('.root');
    render(root);
  });
*/
});
