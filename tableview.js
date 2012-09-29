/**
 * jQuery Mobile Framework : "tableview" plugin
 * @author Sven Franck <sven.franck@stokkers.de>
 * @version v1 using JQM 1.2.0 (October 2012)
 * @copyright 2012 Sven Franck <sven.franck@stokkers.de>
 * @license Dual licensed under the MIT or GPL Version 2 licenses.
 * @credits Maggie Wachs - http://filamentgroup.com/lab/responsive_design_approach_for_complex_multicolumn_data_tables/
 */
 
//>>excludeStart("jqmBuildExclude", pragmas.jqmBuildExclude);
//>>description: Creates responsive tables.
//>>label: Tableview
//>>group: Widgets
//>>css.structure: ../css/structure/jquery.mobile.tablview.css
//>>css.theme: ../css/themes/default/jquery.mobile.theme.css

// define( [ "jquery", "../jquery.mobile.widget", "../jquery.mobile.buttonMarkup" ], function( $ ) {
//>>excludeEnd("jqmBuildExclude");
(function( $, undefined ) {

$.widget( "mobile.tableview", $.mobile.widget, {
	options: {
		grid: null,
		toggleCueText: "hide/show columns",
		toggleMenu: 'popup',
		toggleSlot: 3,
		toggleIcon: "gear",
		toggleIconPos: "left",
		idprefix: "co-", 
		persist: "persist",				
		headerTheme: "c",
		wrapperTheme: "a",
		oddTheme: "c",
		evenTheme: "d",
		topContainer: null,
		bottomContainer: null,
		topContainerGrid: 3,
		bottomContainerGrid: 3,
		selectorID: null,
		selectorRow: null,
		inset: false,
		initSelector: ":jqmData(role='tableview')"
		},
		  
	 _create: function() {
		
		var self = this,
            o = self.options,			
            table = self.element,
            thead = table.find("thead"),
            tbody = table.find("tbody"),
			tfoot = table.find("tfoot"),
            bodyRows = tbody.find("tr"),
			container = o.toggleMenu == 'popup' ? $('<a href="#toggleColumns" data-rel="popup" data-theme="'+o.wrapperTheme+'" data-icon="'+o.toggleIcon+'" data-iconpos="'+o.toggleIconPos+'">'+o.toggleCueText+'</a>').buttonMarkup().add( $('<div data-role="popup" data-theme="'+o.wrapperTheme+'" id="toggleColumns"><div data-role="fieldcontain"><fieldset class="checkWrap" data-role="controlgroup"></fieldset></div></div>') )
					 : $('<select data-theme="'+o.wrapperTheme+'" name="toggleCols" class="updateCols" id="toggleCols" data-icon="'+o.toggleIcon+'" data-iconpos="'+o.toggleIconPos+'"></select>'),							
			hdrCols = thead.find( "tr:first th[rowspan=2], TR:first TH[rowspan=2]").add( thead.find( "tr:last-child th, TR:last-child TH" ) ),
			slotsToFill = table.parent('div').find(':jqmData(slot="true")'),
			sortables = table.find('th:jqmData(sortable="true")'),
			slots;
		
		// responsive CSS class
		table.addClass("enhanced");
		
		// base and inset classes
		self.element.addClass(function( i, orig ) {
			return orig + " ui-tableview " + ( o.inset ? " ui-tableview-inset ui-shadow" : "" );
			});
		
		// top/bottom wrapper with slots
		// XXX NOTE: not sure if the slot-thing is really necessary. I added the wrappers, because the toggle menu and
		// filter need to go somewhere. From using tableview I found it to be handy to put other elements
		// inside the table area, hence a wrapper (e.g. I'm using it to reload/replace the table data). Also if devs 
		// add functions like pagination etc, these need to go "inside" the table area, too.
		if (!o.topContainer) {
			var topWrapper = $('<div />')
				.addClass( 'table-top-wrapper ui-corner-top ui-body-'+o.wrapperTheme )
				.append($.map(new Array( o.topContainerGrid ), function(){
					  return $('<div/>');
					}))
				.grid({ grid: this.options.grid })
				.find(':nth-child('+ (o.toggleSlot)+')')
					.append(container)
					
				.end()
				.insertBefore(table).trigger('create');
			};
			
		if (!o.bottomContainer) {
			var bottomWrapper = $('<div />')
				.addClass( 'table-bottom-wrapper ui-corner-bottom ui-body-'+o.wrapperTheme )
				.append($.map(new Array( o.bottomContainerGrid ), function(){
					  return $('<div/>');
					}))
				.grid({ grid: this.options.grid })
				.insertAfter(table);
			};

		// add data-slots to grids 
		slots = $('.table-top-wrapper, .table-bottom-wrapper').children('div');
		for ( var i = 0; i < slotsToFill.length; i++){
			var currentSlot = slotsToFill.eq(i);
			currentSlot
				.find('label')
					.addClass('ui-hidden-accessible')
					.end()
				.appendTo( slots.eq( currentSlot.jqmData("slot-id")-1 ) );	
		}

		// selectable checkboxes 
		// XXX NOTE: adds a first column and inserts checkboxes to select records. Another function
		// I'm not sure about. While I'm using top/bottom wrappers with embedded buttons a lot, I'm not
		// sure if these are helpful.
		if ( table.jqmData("selectable") == true ) {
			var allRows = table.find( "tbody tr, TBODY TR, thead tr:first, THEAD TR:first" );
			
			for ( var k = 0; k < allRows.length; k++){
				var currentRow = allRows.eq(k),
					rowSpanner = currentRow.parent("thead, THEAD").length > 0 ? "rowspan="+table.find( "thead tr, THEAD TR").length : "",
					selectorID = k == 0 ? "selectAll" : o.selectorID ? o.selectorRow+"-"+k : "selectRow-"+k,
					selectorTheme = k%2 == 0 ? o.evenTheme : o.oddTheme,
					selectorBox = '<input type="checkbox" id="'+selectorID+'" name="'+selectorID+'" class="selector" data-inline="true" data-iconpos="notext" /><label for="'+selectorID+'">&nbsp;</label>',
					cell = $("<th class='persist essential notxtchkbx rowHigh' "+rowSpanner+"></th>").append( selectorBox );
					
				currentRow.prepend( cell ).trigger('create');
			}

			// select all 
			// XXX NOTE: is there a JQM checkbox toggle method?
			if ( table.find('#selectAll').length > 0 && table.find('#selectAll').jqmData('bound') != true ){
				table
					.find('#selectAll')
					.jqmData('bound',true)
					.on('change', function(){
						
						var thisSelect = $(this),
							firstCells = thisSelect.parents("table").find( "tbody .rowHigh, TBODY .rowHigh" );
						
						if ( thisSelect.is(":checked") ) {
							firstCells
								.find("label")
									.addClass("ui-checkbox-on")
									.removeClass("ui-checkbox-off")
									.end()
								.find(".ui-icon")
									.addClass('ui-icon-checkbox-on')
									.removeClass('ui-icon-checkbox-off');
						} else {
							firstCells
								.find("label")
									.addClass("ui-checkbox-off")
									.removeClass("ui-checkbox-on")
									.end()
								.find(".ui-icon")
									.addClass('ui-icon-checkbox-off')
									.removeClass('ui-icon-checkbox-on');									
					
						}	
					});
				}
			}
		
		// sortable header functions
		// XXX NOTE: this is just the looks, no functionality
		if ( sortables.length > 0 ){
			for ( var l = 0; l < sortables.length; l++){
				var currentHeader = sortables.eq(l),
					sortTitle = currentHeader.text(),
					sortButton = 
						$( document.createElement( "a" ) )
							.text( sortTitle )
							.buttonMarkup({
								shadow: false,
								corners: false,
								theme: o.headerTheme,
								iconpos: "right",
								icon: currentHeader.is( '.ui-bottomUp' ) ? "arrow-u" : "arrow-d"
								})
							.addClass("colHighTrigger")
							
				currentHeader
					.addClass('ui-btn-up-'+o.headerTheme )
					.filter(':jqmData(sortable="true")')
					.html( sortButton )
			}
		}
			
		// Toggle Colums
		// XXX NOTE: This is the trickiest part, especially to get it to work with multi row headers. Right now
		// single row and double row headers should work with toggling columns. Haven't really tested a lot tough.
		// For toggling I initially used custom selects, but these we difficult to set up properly and I never
		// managed to capture the trailing hashChange when closing the select.
		// I'm using native selects right now, which works nice albeit you can't toggle multiple columns at the 
		// same time. Popups is also a nice idea, but I would keep native selects, too.		
		hdrCols.sort(sortHeaders).each(function(i){	

			var classes = "",
				th = $(this),
				id = th.attr("id"), 				
				allClasses =  typeof th.attr("class") == "undefined" ? "" : th.attr("class").split(/\s+/);
			
			 // assign an id to each header, if none is in the markup
			 if (!id) {					 
				id = ( o.idprefix ? o.idprefix : "col-" ) + i;
				th.attr("id", id);
				};
					
			// this is tricky, because elements my have more than just the tableview classes
			for (var j = 0; j < allClasses.length; j++) {			
				if (allClasses[j] === 'persist' || allClasses[j] === 'optional' || allClasses[j] === 'essential' ) {				
					classes = classes+" "+allClasses[j]				
					}
				if (classes == "") { $(this).addClass('only') }		
			}				
					 
			 // assign matching "headers" attributes to the associated cells			 
			 bodyRows.add( tfoot.find("tr, TR") ).each(function(){						
				var cell = $(this).find("th:not(.notxtchkbx), td").eq(i);                        
				
				console.log( cell.attr('class') ); 
				
				cell.attr("headers", id);
				if (classes) { cell.addClass(classes); } else cell.addClass('only');
			 });     
					
			// create the hide/show toggles 
			if ( !th.is("." + o.persist) ) {	
				var toggle = o.toggleMenu == 'popup' ? $('<label><input type="checkbox" name="checkbox-'+id+'" />'+th.text()+'</label>')
												: $('<option value="'+id+'">'+th.text()+'</option>');
				o.toggleMenu == 'popup' ? $('.checkWrap').append(toggle).trigger('create') : $('#toggleColumns').append(toggle).trigger('create');         												
				}				
			
			}); 

		// toggle columns trigger
		// XXX NOTE: must tailor to both select and popup
		if ( o.toggleMenu == "popup" ){
			
			// popup
			var checkers = $('#toggleColumns input');
			if ( checkers.length > 0 ){
				for ( var n = 0; n < checkers.length; n++){
					var checkThis = checkers.eq(n);
					
					if ( checkThis.jqmData('bound') != true ){
						checkThis
							.jqmData('bound', true)	
							.on('change', function(){

								if ( checkThis.attr('blocked') == 'on' ){
									checkThis.attr('blocked','off');
									} else {
										checkThis.attr('blocked','on'); 
										}
								togCols( $(this) );			
								});
					}
				}
			} else {
			// select
			
			}
		}
		
		// UTILS	
		function sortHeaders(a, b) {
			var x = $(a).jqmData('sort');
			var y = $(b).jqmData('sort');

			return ((x < y) ? -1 : ((x > y) ? 1 : 0));
			}
			
		function togCols( SelectElement ) {

			var topRow = thead.find('tr').length > 1 ? thead.find( "tr:first-child th" ).not('[rowspan=2]') : "",				
				triggerId = o.toggleMenu == "popup" ? SelectElement.attr('name') : "",
				val = o.toggleMenu == "popup" ? triggerId.substr(triggerId.length - 1) : SelectElement.find("option:selected").val(),
				col = $("#" + o.idprefix + val + ", [headers="+ o.idprefix + val +"]"),
				bottomCells;

			col.is(':visible') ? col.hide() : col.show();
			
			// need to set this afterwards, otherwise cells not hidden when checking
			bottomCells = thead.find("tr:last-child th:visible" ).length;
			
			if (topRow) {
				if (  bottomCells === 0 ) {		
					topRow.hide();
					} else {	
						topRow.attr('colspan',bottomCells).show();
						}
				}
			$(this).removeAttr('blocked');
			}
			
			// update on resize
			$(window).on("orientationchange resize", function(){						
				$('.ui-page-active .updateCols option').trigger("updateCheck");
				}); 
		

	},
	// odd/even row formatting using data-theme
		_zebra: function () {

			var o = this.options,					
				table = this.element,
				rowOddTheme = table.jqmData('odd-theme') || o.oddTheme,
				rowEvenTheme = table.jqmData('even-theme') || o.evenTheme,
				rows = $("tbody tr, TBODY TR");
			
			for ( var m = 0; m < rows.length; m++){
				m%2 == 0 ? rows[m].removeClass("odd even ui-btn-up-"+rowOddTheme).addClass( "even ui-btn-up-"+rowEvenTheme ) :
									rows[m].removeClass("odd even ui-btn-up-"+rowEvenTheme).addClass( "odd ui-btn-up-"+rowOddTheme );		
			}
		}
	
	});
	
//auto self-init widgets
$( document ).bind( "pagecreate create", function( e ){
	$( $.mobile.tableview.prototype.options.initSelector, e.target ).tableview();
});

})( jQuery );
//>>excludeStart("jqmBuildExclude", pragmas.jqmBuildExclude);
// });
//>>excludeEnd("jqmBuildExclude");