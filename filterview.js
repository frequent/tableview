//>>excludeStart("jqmBuildExclude", pragmas.jqmBuildExclude);
//>>description: Extends the listview to add a search box to filter lists
//>>label: Listview: Filter
//>>group: Widgets
define( [ "jquery", "./forms/textinput" ], function( $ ) {
//>>excludeEnd("jqmBuildExclude");
(function ($, undefined) {

// xxx filter is a widget now
$.widget("mobile.filterview", $.mobile.widget, {
  options: {
    // filter: false,
    filterPlaceholder: null,
    filterRelate: null,
    filterTheme: null,
    filterReveal: false,
    filterCallback: null,
    filterSlot: null,
    // xxx events only
    eventsOnly: null
  },
  _create: function () {
    // xxx filter ...have mercy
    var $el = $( this ).get(0).element,
      htmlTag = $el.get(0).tagName.toLowerCase(),
      $tag = htmlTag === "ul" ? "listview" : htmlTag,
      container = this.element.data("mobile-" + $tag ),
      o = this.options,
      defaultFilterCallback = function( text, searchValue, item ) {
        return text.toString().toLowerCase().indexOf( searchValue ) === -1;
      },
      wrapper,
      search,
      onKeyUp = function( e ) {
      var $this = $( this ),
        val = this.value.toLowerCase(),
        ref = $tag === "table" ? $el.children("tbody") : $el,
        filterItems = null,
        override = $this.jqmData("overide"),
        lastval = $this.jqmData( "lastval" ) + "",
        childItems = false,
        itemtext = "",
        item,
        // Check if a custom filter callback applies
        isCustomFilterCallback = container.options.filterCallback !== defaultFilterCallback;

      if ( lastval && lastval === val ) {
        // Execute the handler only once per value change
        return;
      }

      container._trigger( "beforefilter", "beforefilter", { input: this } );
      
      if ( override ) {
        // Change val as lastval for next execution
        $this.jqmData( "lastval" , val );
        if ( isCustomFilterCallback || val.length < lastval.length || val.indexOf( lastval ) !== 0 ) {

          // xxx filter-relate = filter multiple datasets
          // Custom filter callback applies or removed chars or pasted something totally different, check all items
            filterItems = o.filterRelate === undefined ? ref.children() :
                        ref.children().add( $('[data-related="'+relate+'"]').children() );
        } else {

          // Only chars added, not removed, only use visible subset
          // xxx filter-relate = filter multiple datasets
          filterItems = o.filterRelate === undefined ? ref.children( ":not(.ui-screen-hidden)" ) :
                ref.children( ":not(.ui-screen-hidden)" ).add( $('[data-related="'+relate+'"]')
                    .children( ":not(.ui-screen-hidden)" ) );

          if ( !filterItems.length && o.filterReveal ) {
            filterItems = ref.children( ".ui-screen-hidden" );
          }
        }

        if ( val ) {

          // This handles hiding regular rows without the text we search for
          // and any list dividers without regular rows shown under it
          for ( var i = filterItems.length - 1; i >= 0; i-- ) {
            item = $( filterItems[ i ] );
            itemtext = item.jqmData( "filtertext" ) || item.text();
            
            if ( item.is( "li:jqmData(role=list-divider)" ) ) {

              item.toggleClass( "ui-filter-hidequeue" , !childItems );

              // New bucket!
              childItems = false;

            } else if ( container.options.filterCallback( itemtext, val, item ) ) {

              //mark to be hidden
              item.toggleClass( "ui-filter-hidequeue" , true );
            } else {

              // There's a shown item in the bucket
              childItems = true;
            }
          }

          // Show items, not marked to be hidden
          filterItems
            .filter( ":not(.ui-filter-hidequeue)" )
            .toggleClass( "ui-screen-hidden", false );

          // Hide items, marked to be hidden
          filterItems
            .filter( ".ui-filter-hidequeue" )
            .toggleClass( "ui-screen-hidden", true )
            .toggleClass( "ui-filter-hidequeue", false );

        } else {

          //filtervalue is empty => show all
          filterItems.toggleClass( "ui-screen-hidden", !!o.filterReveal );
        }
        // xxx filter - only listview
        if ($tag === "listview") {
          container._addFirstLastClasses( ref, container._getVisibles( ref, false ), false );
        }
      }
    }
    container.options.filterCallback = defaultFilterCallback;

    o.filterSlot = $el.jqmData("filter-slot") || 2;
    o.filterTheme = $el.jqmData("filter-theme") || "a";
    o.filterPlaceholder = $el.jqmData("filter-placeholder") || "Filter items...";
    o.filterRelate = $el.jqmData("relate") || undefined;
  
    if ( o.filterReveal ) {
      $el.children().addClass( "ui-screen-hidden" );
    }
  
    // xxx eventsOnly
		if ( $el.jqmData("create") == false ){
			o.eventsOnly = false;	
		}

		if ( o.eventsOnly != false ){
      wrapper = $( "<form>", {
          "class": "ui-" + $tag + "-filter ui-bar-" + o.filterTheme,
          "role": "search"
        })
      
      search = $( "<input>", {
        placeholder: o.filterPlaceholder
      })
      .attr( "data-" + $.mobile.ns + "type", "search" )
      .jqmData( "lastval", "" )
      .bind( "keyup change input", onKeyUp )
      .appendTo( wrapper )
      .textinput();

      if ( container.options.inset ) {
        wrapper.addClass( "ui-" + $tag + "-filter-inset" );
      }
              
    // xxx filter - add filter to table wrapper or before list
    // xxx todo: make a generic "destination"
      wrapper[ $tag === "table" ? "appendTo" : "insertBefore"]( $tag === "table" ? 
      $el.siblings('.table-top-wrapper, .table-bottom-wrapper').children('div').eq(o.filterSlot-1) : $el );
    }

    wrapper
    .submit( function( e ) {
        e.preventDefault();
        search.blur();
    })
    .bind( "submit", function() {
      return false;
    });
  }
});
$.mobile.document.delegate( ":jqmData(filter='true')", "listviewcreate., tablecreate", function(e) {
  $.mobile.filterview.prototype.enhance( e.target );
});
})( jQuery );
//>>excludeStart("jqmBuildExclude", pragmas.jqmBuildExclude);
// });
//>>excludeEnd("jqmBuildExclude");