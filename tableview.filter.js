//>>excludeStart("jqmBuildExclude", pragmas.jqmBuildExclude);
//>>description: Extends the listview to add a search box to filter lists
//>>label: Listview: Filter
//>>group: Widgets


//define( [ "jquery", "./listview", "./forms/textinput" ], function( $ ) {
//>>excludeEnd("jqmBuildExclude");
(function( $, undefined ) {

$.mobile.tableview.prototype.options.filter = false;
$.mobile.tableview.prototype.options.filterPlaceholder = "Filter items...";
$.mobile.tableview.prototype.options.filterSlot = 2;
var defaultFilterCallback = function( text, searchValue, item ) {
		return text.toString().toLowerCase().indexOf( searchValue ) === -1;
	};

$.mobile.tableview.prototype.options.filterCallback = defaultFilterCallback;

$( document ).delegate( ":jqmData(role='tableview')", "tableviewcreate", function() {

	var table = $( this ),
		tableview = table.data( "tableview" );
		
	if ( !tableview.options.filter ) {
		return;
	}

	var wrapper = $( "<form>", {
			"class": "ui-tableview-filter ui-bar-" + tableview.options.wrapperTheme,
			"role": "search"
		}),
		search = $( "<input>", {
			placeholder: tableview.options.filterPlaceholder
		})
		.attr( "data-" + $.mobile.ns + "type", "search" )
		.jqmData( "lastval", "" )
		.bind( "keyup change", function() {
			
			var $this = $( this ),
				val = this.value.toLowerCase(),
				listItems = null,
				lastval = $this.jqmData( "lastval" ) + "",
				childItems = false,
				itemtext = "",
				item, change, tableItems;
				
				// Check if a custom filter callback applies
				isCustomFilterCallback = tableview.options.filterCallback !== defaultFilterCallback,
				
				
			tableview._trigger( "beforefilter", "beforefilter", { input: this } );
			
			// Change val as lastval for next execution
			$this.jqmData( "lastval" , val );
			
			if ( isCustomFilterCallback || val.length < lastval.length || val.indexOf( lastval ) !== 0 ) {
				// Custom filter callback applies or removed chars or pasted something totally different, check all items
				tableItems = table.find("tbody tr");
			} else {
				// Only chars added, not removed, only use visible subset
				tableItems = table.find("tbody tr:not(.ui-screen-hidden)" );
			}

			if ( val ) {
				
				// This handles hiding regular rows without the text we search for
				// and any list dividers without regular rows shown under it

				
				for ( var i = tableItems.length - 1; i >= 0; i-- ) {
					item = $( tableItems[ i ] );
					itemtext = item.jqmData( "filtertext" ) || item.text();

					if ( tableview.options.filterCallback( itemtext, val ) ) {
						//mark to be hidden
						item.toggleClass( "ui-filter-hidequeue" , true );
					} else {
						// There's a shown item in the bucket
						childItems = true;
					}
				}

				// Show items, not marked to be hidden
				tableItems
					.filter( ":not(.ui-filter-hidequeue)" )
					.toggleClass( "ui-screen-hidden", false );

				// Hide items, marked to be hidden
				tableItems
					.filter( ".ui-filter-hidequeue" )
					.toggleClass( "ui-screen-hidden", true )
					.toggleClass( "ui-filter-hidequeue", false );
			} else {
				//filtervalue is empty => show all
				tableItems.toggleClass( "ui-screen-hidden", false );
			}			
		})
		.appendTo( wrapper )
		.textinput();


	if ( tableview.options.inset ) {
		wrapper.addClass( "ui-tableview-filter-inset" );
	}

	wrapper.bind( "submit", function() {
		return false;
	})
	$('.table-top-wrapper, .table-bottom-wrapper').children('div').eq(tableview.options.filterSlot-1).append(wrapper);
			
		
});

})( jQuery );
//>>excludeStart("jqmBuildExclude", pragmas.jqmBuildExclude);
// });
//>>excludeEnd("jqmBuildExclude");