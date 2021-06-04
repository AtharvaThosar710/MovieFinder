function submit(){
	httpRequest = new XMLHttpRequest()
	title = document.getElementById("input").value;
	url = "http://www.omdbapi.com/?apikey=595ad7d7&t="+title;
	httpRequest.open("GET",url);
	httpRequest.send();

	httpRequest.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200) {
			movie_data = JSON.parse(this.responseText);
			img_src = movie_data.Poster;
			director = movie_data.Director;
			actors = movie_data.Actors;
			genres = movie_data.Genre;
			plot = movie_data.Plot;
			//console.log(img_src, director, actors, genres, plot);
			show_data(img_src, director, actors, genres, plot);
		}
	}
}


function show_data(img_src, director, actors, genres, plot){
	
	document.getElementById('img_movie').src=img_src;
	document.getElementById('p1').innerHTML='Director: '+director;
	document.getElementById('p2').innerHTML='Actors: '+actors;
	document.getElementById('p3').innerHTML='Genres: '+genres;
	document.getElementById('p4').innerHTML='Plot: '+plot;
}