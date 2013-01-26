//>>excludeStart("jqmBuildExclude", pragmas.jqmBuildExclude);
//>>description: Responsive presentation and behavior for HTML data tables
//>>label: Table
//>>group: Widgets
//>>css.structure: ../css/structure/jquery.mobile.table.css
//>>css.theme: ../css/themes/default/jquery.mobile.theme.css

define( [ "jquery", "../jquery.mobile.widget", "./page", "./page.sections" ], function( $ ) {
//>>excludeEnd("jqmBuildExclude");
(function( $, undefined ) {

$.widget( "mobile.table", $.mobile.widget, {
  
  options: {
    classes: {
      table: "ui-table"
    },
    grid: null,
    containers: {
      top: null,
      bottom: null,
      top_grid: null,
      bottom_grid: null
    },
    themes: {
      header: null,
      wrapper: null
    },
    inset: null,
    // xxx eventsonly
    eventsOnly: null,
    initSelector: ":jqmData(role='table')"
  },

  _create: function() {

    var self = this,
      trs = this.element.find( "thead tr" ),
      o = this.options,
      $table = $( this.element[0] ),				
      slotsToFill = $table.parent().find(':jqmData(slot="true")'),
      slots, topWrapper, bottomWrapper;

    // xxx eventsonly
    if ( $table.jqmData('create') === false ){
      o.eventsOnly = false;
    }

    if ( o.eventsOnly != false ){
      // xxx table
      o.themes.header = $table.jqmData("header") || "c";
      o.themes.wrapper = $table.jqmData("wrapper") || "a";
      o.containers.top = $table.jqmData("top-container") || false;
      o.containers.bottom = $table.jqmData("bottom-container") || false;
      o.containers.top_grid = $table.jqmData("top-grid") || 3;
      o.containers.bottom_grid = $table.jqmData("bottom-grid") || 3;
      o.inset = $table.jqmData( "inset" ) || false;
    
      if ( !!o.inset ) {
          this.options.classes.table += " ui-table-inset";
          // xxx table - corners (not nice, may land on ui-content!);
          $table.parent().addClass('ui-corner-all');
      }

      this.element.addClass( this.options.classes.table );

      // xxx table - wrapper and slots
      if (o.containers.top) {
        topWrapper = $('<div />')
          .addClass( 'table-top-wrapper ui-body-'+o.themes.wrapper + ( !!o.inset ? ' ui-wrapper-inset' : '') )
          .append($.map(new Array( o.containers.top_grid ), function(){
              return $('<div/>');
            }))
          .grid({ grid: this.options.grid })
          .insertBefore($table);
      }

      if (o.containers.bottom) {
        bottomWrapper = $('<div />')
          .addClass( 'table-bottom-wrapper ui-body-'+o.themes.wrapper + ( !!o.inset ? ' ui-wrapper-inset' : '' ) )
          .append($.map(new Array( o.containers.bottom_grid ), function(){
              return $('<div/>');
            }))
          .grid({ grid: this.options.grid })
          .insertAfter($table);
      }

      // xxx table - move slots into grid
      slots = $('.table-top-wrapper, .table-bottom-wrapper').children('div');
      for ( var i = 0; i < slotsToFill.length; i++){
        var currentSlot = slotsToFill.eq(i);
        currentSlot
          .find('label')
            .addClass('ui-hidden-accessible')
            .end()
          .appendTo( slots.eq( currentSlot.jqmData("slot-id")-1 ) );	
      };
    
      // Expose headers and allHeaders properties on the widget
      // headers references the THs within the first TR in the table
      // xxx tables - add support for 2nd header row 
      // xxx TODO: only works if rowspan is at the end of the table. need to fix
      self.headers = this.element.find( "thead tr:first th[rowspan=2]").add( this.element.find( "thead tr:last-child th" ) );

      // allHeaders references headers, plus all THs in the thead, which may include several rows, or not
      self.allHeaders = this.element.find( "tr:eq(0)" ).children().add( trs.children() );
  
      var coltally = 0;

      trs.each(function(){

        var blocktally;

        $( this ).children().each(function( i ){
          
          var span = parseInt( $( this ).attr( "colspan" ), 10 ),
            sel = ":nth-child(" + ( coltally + 1 ) + ")";

          $( this )
            .jqmData( "colstart", coltally + 1 );

          if (span) {
            blocktally = span-1;
          }
            
          if( blocktally > 0){
            blocktally -= 1;
          } else {
          // Store "cells" data on header as a reference to all cells in the same column as this TH
          // xxx tables = replaced trs.eq(0) with trs )
          $( this )
            .jqmData( "cells", self.element.find( "tr" ).not( trs ).not( this ).children( sel ) );

          coltally++;
          }
        });
      });
    }
  }
});

//auto self-init widgets
$.mobile.document.bind( "pagecreate create", function( e ) {
	$.mobile.table.prototype.enhanceWithin( e.target );
});

})( jQuery );
//>>excludeStart("jqmBuildExclude", pragmas.jqmBuildExclude);
});
//>>excludeEnd("jqmBuildExclude");

