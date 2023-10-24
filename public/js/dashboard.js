'use strict';

let dictRooms = {
	//Room no. :[keywords in lower]
	'AG01': ['ag01', 'administration', 'central administration'],
	'AG19': ['ag19', 'thinkubator'],
	'AS07': ['as07', 'placom'],
	'AG05': ['ag05', 'mr1', 'mr2'],
	'AG21': ['ag21', 'dean', 'deans office'],
	'AG07': ['ag07', 'central procurement', 'examination', 'sos', 'docc'],
	'AG09': ['ag09'],
	'AG11': ['ag11', 'ac1', 'ac2'],
	'AG12': ['ag12', 'career services'],
	'AG13': ['ag13', 'medical room'],
	'AG18': ['ag18', 'utility room', 'store room'],
	'AG20': ['ag20', 'dcr'],
	'AG22': ['ag22', 'mr3', 'mr4'],
	'AF02': ['af02', 'central program', 'hr', 'pgdm office', 'marketing', 'pgdm program office'],
	'AS01': ['as01', 'central admissions'],
	'AS03': ['as03', 'dome 1'],
	'AS02': ['as02', 'dome 2'],
	'AT03': ['at03', 'dome 3'],
	'AS05': ['as05', 'ncr 1'],
	'AS06': ['as06', 'ncr 2'],
	'AT01': ['at01', 'meditation room'],
	'GYAN': ['gyan', 'gyan auditorium'],
	'BG02': ['bg02', 'ncr 4'],
	'BG06': ['bg06', 'alumini office'],
	'BG05': ['bg05'],
	'BG07': ['bg07'],
	'B101': ['b101', 'ncr 5'],
	'B104': ['b104', 'ncr 6'],
	'B107': ['b107', 'ncr 7'],
	'B105': ['b105', 'computer centre'],
	'B106': ['b106', 'pgpdm offfice'],
	'B108': ['b108'],
	'B201': ['b201', 'ncr 8'],
	'B205': ['b205', 'ra workstation'],
	'B204': ['b204'],
	'B301': ['b301', 'ncr 9'],
	'B30503': ['b30503', 'ncr 10'],
	'B30506': ['b30506', 'ncr 11'],
	'B30501': ['b30501', 'gmp program office'],
	'B30505': ['b30505', 'fpr workstation', 'fpr participants workstation'],
	'B306': ['b306', 'fpr program office'],
	'B401': ['b401', 'faculty lunch room'],
	'B404': ['b404', 'cfi program office'],
	'B40402': ['b40402', 'edison lab', 'edison'],
	'B40402A': ['b40402A', 'eureka chamber', 'eureka'],
	'B40403': ['b40403', 'fpr classroom'],
	'B40404': ['b40404', 'ncr 12'],
	'CG': ['cg', 'mls', 'mls auditorium'],
	'CG02': ['cg02', 'stilt area'],
	'C101': ['c101', 'computer room'],
	'C108': ['c108', 'group work room'],
	'C208': ['c208'],
	'C209': ['c209'],
	'C210': ['c210'],
	'C211': ['c211'],
	'C302': ['c302', 'pgpm', 'pgmpw', 'pgdm online', 'pgpgm', 'pgpgm program', 'pgpm office', 'pgmpw office', 'pgpgm office'],
	'C307': ['c307'],
	'C308': ['c308'],
	'C309': ['c309'],
	'C3010': ['c310'],
	'C401': ['c401', 'refuge area'],
	'C402': ['c402', 'cfbe', 'cfbe program office'],
	'C407': ['c407'],
	'C408': ['c408'],
	'C409': ['c409'],
	'C410': ['c410'],
	'C503': ['c503', 'computer lab'],
	'C505': ['c505', 'design thinking lab'],
	'C508': ['c508', 'simulation lab'],
	'C601': ['c601', 'pgemp program office', 'pgemp'],
	'C602': ['c602'],
	'C605': ['c605'],
	'C606': ['c606'],
	'DG': ['dg', 'xerox', 'xerox centre'],
	'DG02': ['dg02', 'bistro'],
	'LIB': ['lib', 'library'],
	'D102': ['d102', 'reeading room'],
	'D204': ['d204'],
	'D304': ['d304'],
	'D404': ['d404'],
	'D2': ['d2', 'bistro 2.5'],
	'D4': ['d4', 'refuge area'],
	'D502': ['d502'],
	'D503': ['d503', 'mdp', 'mdp program office'],
	'D603': ['d603', 'executive lunch room']

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