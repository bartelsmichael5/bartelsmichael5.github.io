/* global $ */
        'use strict'
        $(document).ready(function(){
			//////////////////////////////////////////////////////////////////
			/////////////////// INITIALIZATION ///////////////////////////////
			//////////////////////////////////////////////////////////////////
			
			var $box = $('.box');	// reference to the HTML .box element
			var boardWidth = $('.board').width();	// the maximum X-Coordinate of the screen
			
			// TODO 2 - Variable declarations 
			var positionX = 0;
            var speedX = 10;
            var points = 0;

			//////////////////////////////////////////////////////////////////
			/////////////////// CORE LOGIC ///////////////////////////////////
			//////////////////////////////////////////////////////////////////
			
			// Every 50 milliseconds, call the update Function (see below)
			setInterval(update, 50);
			
			// Every time the box is clicked, call the handleBoxClick Function (see below)
			$box.on('click', handleBoxClick);
			
			/////////////////////////////////////////////////
            ////////////// HELPER FUNCTIONS /////////////////
            /////////////////////////////////////////////////
			
			/* 
			This Function will be called 20 times/second. Each time it is called,
			it should move the Box to a new location. If the box drifts off the screen
			turn it around! 
			*/
			function update() {
				positionX += speedX; // moves the box's position every interval based on its current speed
                $box.css("left", positionX); // updates css property to reflect new position
                
                // If the box's position is greater than the canvas width
                if (positionX > boardWidth) {
                    speedX = -speedX; // changes direction by getting the mathematical opposite of the current speed value
                }
                
                // If the box's position is less than 0
                if (positionX < 0) {
                    speedX = -speedX; // see line 41
                }
			};

			/* 
			This Function will be called each time the box is clicked. Each time it is called,
			it should increase the points total, increase the speed, and move the box to
			the left side of the screen.
			*/
			function handleBoxClick() {
                positionX = 0; // resets box to the beginning of the canvas
                speedX += 3; // increases the box's speed
                points += 1; // increases score
                $box.text(points); // updates displayed score on box
			};
		});