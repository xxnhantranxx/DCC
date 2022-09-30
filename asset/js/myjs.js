jQuery(document).ready(function ($) {
	$(document).ready(function () {
		// my code custom website	
		// In your Javascript (external .js resource or <script> tag)
		$(window).scroll(function () {
			var sticky = $('.header-wrapper'),
				scroll = $(window).scrollTop();

			if (scroll >= 125) sticky.addClass('sticky');
			else sticky.removeClass('sticky');
		});
		$('.navbar-toggler').click(function () {
			$('.overlay_menu').toggleClass('active');
		});
		$('.main_menu .mega-menu').hover(function () {
			$(this).children('.sub-menu').toggleClass('active');
		});
		$('.main_menu .header-nav-main > .mega-menu').hover(function () {
			$('.overlay_menu').toggleClass('active');
		});
		$('.main_menu .has-children').hover(function () {
			$(this).children('.nav-dropdown').toggleClass('active');
		});
		$('.menu-item.search-item').hover(function () {
			$(this).children('.nav-dropdown-search').toggleClass('active');
			$(this).toggleClass('change_zindex');
		});
		$('.mobile_menu .has-child .fa-caret-down').click(function () {
			$(this).parent('.nav-link').next('.nav-mobile-sub').slideToggle();
			$(this).toggleClass('rotate_180');
		});
				
		$(document).on('click', '.navbar-collapse.show', function (event) {
			$(this).removeClass('show');
			$('.overlay_menu.active').removeClass('active');
			$('.mobile_menu>.navbar-toggler[aria-expanded="true"]').attr('aria-expanded', 'false');
		});
		function formatState(state) {
			if (!state.id) {
				return state.text;
			}
			var baseUrl = "/Tempalte/NDC/asset/images/flangs";
			var $state = $(
				// state.element.value.toLowerCase() sẽ lấy theo value
				'<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>'
			);
			return $state;
		};

		$(".language").select2({
			templateResult: formatState,
			minimumResultsForSearch: Infinity
		});


		$("#dateTime").val("01/01/2020 - 31/12/2020");
		$("#dateTime").daterangepicker({
			timePicker: true,
			timePicker24Hour: true,
			timePickerSeconds: true,
			linkedCalendars: false,
			autoUpdateInput: false,
			showDropdowns: true,
			locale: {
				format: "DD-MM-YYYY",
				separator: ' - ',
				applyLabel: "Áp dụng",
				cancelLabel: "Hủy bỏ",
				daysOfWeek: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
				monthNames: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
				firstDay: 1
			}
		}).on("apply.daterangepicker", function (ev, picker) {
			console.log(picker.startDate._d);
			console.log(picker.endDate._d);
			picker.element.val(dateTimeFormat(picker.startDate._d).string + picker.locale.separator + dateTimeFormat(picker.endDate._d).string);
		});
		$("#dateTime").data("daterangepicker").setStartDate("01/01/2020");
		$("#dateTime").data("daterangepicker").setEndDate("31/12/2020");

		function dateTimeFormat(dateTime) {
			var dateTimeObj = {
				"year": dateTime.getFullYear(),
				"month": dateTime.getMonth() + 1,
				"day": dateTime.getDate(),
			};
			for (var k in dateTimeObj) {
				if (dateTimeObj[k] < 10) {
					dateTimeObj[k] = "0" + dateTimeObj[k];
				}
			}
			var dateTimeString = dateTimeObj.day + "/" + dateTimeObj.month + "/" + dateTimeObj.year;
			return { "obj": dateTimeObj, "string": dateTimeString };
		}
		unmuteButton.addEventListener('click', function () {
			video.muted = false;
		});

	});
});