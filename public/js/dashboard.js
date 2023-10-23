'use strict';

let dictRooms = {
	//Room no. :[keywords in lower]
	'AG01': ['ag01', 'administration', 'central administration'],
	'AG19': ['ag19', 'thinkubator'],
	'AS07': ['as07', 'placom']
}

function searchRoom(roomToFind) {
	for (const key in dictRooms) {
		if (dictRooms[key].includes(roomToFind.toLowerCase())) {
			console.log("Searched: ", key)
			return key;
		}
	}
	return null;
}

// var FormControl = (function() {
	
// 	var $input = $('.form-control');
// 	console.log("Inside FormControl",$input)
// 	function init($this) {
// 		console.log("Inside Init",$this )
// 		$this.on('focus blur', function(e) {
//         $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
//     }).trigger('blur');
// 	}

// 	if ($input.length) {
// 		console.log("Inside If")
// 		init($input);
// 	}

// })();

function handleEnterKeyPress(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      const inputElement = document.getElementById('searchInput');
      const searchQuery = inputElement.value;
	  let tempRoom = document.getElementById(searchRoom(searchQuery));
	  console.log("Element ",tempRoom);
	  tempRoom.classList.add('focused')
	  tempRoom.scrollIntoView();
    //   alert(`You searched for: ${searchRoom(searchQuery)}`);
    }
  }

  const inputElement = document.getElementById('searchInput');
  inputElement.addEventListener('keydown', handleEnterKeyPress);

//
// Navbar
//

'use strict';

var Navbar = (function() {
	var $nav = $('.navbar-nav, .navbar-nav .nav');
	var $collapse = $('.navbar .collapse');
	var $dropdown = $('.navbar .dropdown');
	function accordion($this) {
		$this.closest($nav).find($collapse).not($this).collapse('hide');
	}
    function closeDropdown($this) {
        var $dropdownMenu = $this.find('.dropdown-menu');
        $dropdownMenu.addClass('close');

    	setTimeout(function() {
    		$dropdownMenu.removeClass('close');
    	}, 200);
	}
	$collapse.on({
		'show.bs.collapse': function() {
			accordion($(this));
		}
	})
	$dropdown.on({
		'hide.bs.dropdown': function() {
			closeDropdown($(this));
		}
	})
})();

//
// Popover
//

'use strict';

var Popover = (function() {
	var $popover = $('[data-toggle="popover"]'),
		$popoverClass = '';

	function init($this) {
		if ($this.data('color')) {
			$popoverClass = 'popover-' + $this.data('color');
		}
		var options = {
			trigger: 'focus',
			template: '<div class="popover ' + $popoverClass + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
		};
		$this.popover(options);
	}
	if ($popover.length) {
		$popover.each(function() {
			init($(this));
		});
	}
})();

//
// Scroll
//

'use strict';

var ScrollTo = (function() {

	var $scrollTo = $('.scroll-me, [data-scroll-to], .toc-entry a');

	function scrollTo($this) {
		var $el = $this.attr('href');
        var offset = $this.data('scroll-to-offset') ? $this.data('scroll-to-offset') : 0;
		var options = {
			scrollTop: $($el).offset().top - offset
		};
        $('html, body').stop(true, true).animate(options, 600);

        event.preventDefault();
	}

	if ($scrollTo.length) {
		$scrollTo.on('click', function(event) {
			scrollTo($(this));
		});
	}

})();

//
// Tooltip
//

'use strict';

var Tooltip = (function() {
	var $tooltip = $('[data-toggle="tooltip"]');
	function init() {
		$tooltip.tooltip();
	}
	if ($tooltip.length) {
		init();
	}
})();