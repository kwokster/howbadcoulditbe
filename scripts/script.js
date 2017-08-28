$(function() {
	var severity = {
			mild: {
				life : { 
					work: ['an overworked laptop fan', 'a fired minion'], 
					health: ['a rotten avocado', 'a carton of spoiled milk'],
					love: ['a lonely garden gnome', 'a star-crossed lover'],
					financial: ['an unaccomplished power ranger', 'an unsuccessful loan shark'],
					other: ['a wonky chair leg', 'a unicorn']
				},
				weather : {
		            sunny: ['in a heat wave', 'in an unventilated streetcar'], 
		            rainy: ['in a leaking bus stop', 'in a haunted house'],
		            snowy: ['in a mild snow storm', 'in -35.4 degree weather'],
		            cloudy: ['in an abandoned village', 'in a smelly changeroom']
				},
				day : {
					monday: ['who forgot their wallet', 'chased by hooligans'],
		         	tuesday: ['who forgot their phone', 'eating rotten tomatoes'],
		            wednesday: ['who stubbed a toe', 'eating bad sushi'],
		            thursday: ['who lost a bag of groceries', 'who lost their favourite pet turtle'],
		            friday: ['fighting an angry alley cat', 'who stepped in a dirty puddle'],
		            saturday: ['struggling through an extreme hangover', 'lying in a pile of dirty laundry'],
		            sunday: ['drinking cold coffee', 'thinking it\'s a Monday']
				}
			},
			medium: {
				life : { 
					work: ['a pair of shoes worn by smelly feet', 'a depressed clown'], 
					health: ['a rotten banana', 'the first character to die in a horror movie who\'s'],
					love: ['a can of forgotten tuna', 'an inedible burger'],
					financial: ['an empty piggy bank', 'a cashless cash register'],
					other: ['a T-Rex', 'a vampire']
				},
				weather : {
		            sunny: ['in Death Valley(hottest place on Earth)', 'in a desert'], 
		            rainy: ['on a slippery battlefield', 'during a flood'],
		            snowy: ['in a blizzard', 'in mid-Winter Alaska filled with hungry polar bears'],
		            cloudy: ['in the USA during Trump\'s presidency', 'in a world without pillows']
				},
				day : {
					monday: ['getting splashed by a gigantic dirty puddle', 'trying to do push ups'],
		         	tuesday: ['chased by a zombie', 'chased by a bear'],
		            wednesday: ['learning to program Javascript', 'chased by an angry boar'],
		            thursday: ['stuck in a Hulk Hogan headlock', 'cornered by angry hamsters'],
		            friday: ['cornered by an angry Chuck Norris', 'chased by an angry Mike Tyson'],
		            saturday: ['sleeping on a lice-infested mattress', 'used as a piñata'],
		            sunday: ['hunted down by the mafia', 'shot at by flaming arrows']
				}
			}, 
			intense: {
				life : { 
					work: ['a roll of toilet paper', 'a grown up Peter Pan'], 
					health: ['a zombie', 'a high-calorie soda'],
					love: ['an unlovable and ugly troll', 'the last surviving crockroach'],
					financial: ['a bankrupt leprechaun', 'a blockbuster store owner'],
					other: ['a centaur', 'Willy Wonka']
				},
				weather : {
		            sunny: ['in a volcano', 'during a forest fire'], 
		            rainy: ['in a fully submerged city', 'during a tsunami'],
		            snowy: ['during a winter zombie apocalypse', 'during an Ice Age'],
		            cloudy: ['during a tornado', 'in an alien-infested spaceship']
				},
				day : {
					monday: ['escaping a meteor', 'trying to escape a continuous loop of Mondays'],
		         	tuesday: ['getting intense constipation', 'chased by a pride of lions'],
		            wednesday: ['fending off cannibalistic seals', 'fending off a vicious octopus'],
		            thursday: ['shot out of a cannon', 'chased by human-sized bees'],
		            friday: ['who accidentally volunteered to fight in a trial by combat', 'fending off a school of piranhas'],
		            saturday: ['chased by human-sized spiders', 'fighting a three-headed dragon'],
		            sunday: ['hunted down by Liam Neeson', 'chased by killer clowns']
				}
			}
		}

	//change the active state of the selected input
	//then reset the active state when the user selects the ‘get more perspective button’
	//listen for the user selecting the ‘Get more perspective button’
	//bring user back to the top of the page. 
    $('input[type=radio]').on('click', function() {
        var selectedValue = 'label[for=' + $(this).val() + ']';
   		$(selectedValue).addClass('selectedInput').siblings().removeClass('selectedInput');
        $('input[name=reset]').on('click', function() {
            $('body').scrollTop(0);
            $(selectedValue).removeClass('selectedInput');
        });
    });

	//smooth scroll and background color change when selection is made
	$('header h1').on('click', function() {
		$('html, body').animate({
			scrollTop: $('.life').offset().top
		}, 1000);
		$('main').css('background-color', '#DDE0BD');  
	});

	$('input[name=life__categories]').on('click', function() {
		$('html, body').animate({
			scrollTop: $('.weather').offset().top
		}, 1000);
		setTimeout(function() {
		$('main').css('background-color', '#D0D1AC');
		}, 1000);
	});

	$('input[name=weather__categories]').on('click', function() {
		$('html, body').animate({
			scrollTop: $('.day').offset().top
		}, 1000);
		setTimeout(function() {
		$('main').css('background-color', '#B6A39E');
		}, 1000);
	});

	$('input[name=day__categories]').on('click', function() {
		$('html, body').animate({
			scrollTop: $('.severity').offset().top
		}, 1000);
		setTimeout(function() {
		$('main').css('background-color', '#948B89');
		}, 1000);
	});

	$('form').on('submit', function() {
		$('html, body').animate({
			scrollTop: $('.results__section').offset().top
		}, 1000);
		setTimeout(function() {
		$('main').css('background-color', '#726E75');
		}, 1000);
	});

	$('.results').on('click', function() {
		$('html, body').animate({
			scrollTop: $('.credits').offset().top
		}, 1000);
	});

	$(window).on('load', function(){
		$('html, body').animate({
			scrollTop: $('body').offset().top
		}, 1000);
	});

	//Pseudo-code
	// 1. Listen for the 'give me some perspective’ form being submitted 
	$('form').on('submit', function(e) {
		e.preventDefault();

		// 2. When the ‘give me some perspective’ input is clicked, grab the user’s severity and store in a variable 
		var severityChoice = $('input[name=severity__categories]:checked').val();
		// 3. based on the user’s severity grab the user’s selection of life, weather and day and store each in a variable
		var lifeChoice = $('input[name=life__categories]:checked').val();
		var weatherChoice = $('input[name=weather__categories]:checked').val();
		var dayChoice = $('input[name=day__categories]:checked').val();

		// 4. Pull out the array for each of the user's choices
		var lifeArray = severity[severityChoice]['life'][lifeChoice];
		var weatherArray = severity[severityChoice]['weather'][weatherChoice];
		var dayArray = severity[severityChoice]['day'][dayChoice];

		// 5. choose a random index for each of the chosen variables in step 3 and store each of them in another variable
		var randomResult = function(scenario) {
			var randomChoice = Math.floor(Math.random() * scenario.length);
			return scenario[randomChoice];
		}

		var finalLife = randomResult(lifeArray);
		var finalWeather = randomResult(weatherArray);
		var finalDay = randomResult(dayArray);

		if(severityChoice === 'mild') {
			var userDay = 'bad'
		} else if(severityChoice === 'medium') {
			var userDay = 'horrible'
		} else {
			var userDay = 'catastrophic'
		}
		
		// 5. display the final result into the results section. use the variables from step 4 to create the worse scenario (use concatenation)
	$('.tweetify').text(`It sucks that you're having a ${userDay} day, but at least you're not ${finalLife} ${finalDay} ${finalWeather}!`);
	});

	$('.results__blurb').tweetify({
		url: encodeURIComponent( window.location.href ),
		via: 'caterina_vh, @JonCLKwok ',
	});
}); 





