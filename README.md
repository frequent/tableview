tableview
=======

tableview for Jquery Mobile 

Demo: [tableview](http://www.franckreich.de/jqm/tableview/demo.html)

version 0.2 - based on JQM 1.3.0 Beta (January 2013)

####How to use  
As JQM now supports tables, this version of tableview is hacked into the current
JQM widgets. To use it, you just need to replace the following files:

##JS  
tables.js  
table.columntoggle.js  
listview.filter.js (optional if you want to use the filter on tables, too)  

##CSS    
jquery.mobile.table.columntoggle.css  
jquery.mobile.table.css  

With the files provided in the repo you can still use both column-toggle and
reflow mode in tables. Both should continue to work normally. 

In addition the widgets allow to do the following:  
**1. Multiple header rows**  
Currently only working when the split header cells are at the end of the table 
(still need to fix this).

**2. Added options**  
The widgets add the following options to a table: 
   
**data-sortable="true"** [set on table header cell, default: undefined]  
Declare this on a **header cell** to convert the cell into a button (arrow-up/down).
There is no functionality on the button. You will have to add this yourself.

**data-filter="true"** [set on table: default: null]  
This will add a table row filter to the table. To use it, you need to replace 
the listview.filter widget with the filterview widget, which can be used for 
both tables and listviews.

**data-popup-theme** [set on table: default: c]  
Set a theme to the popup.

**data-button-popup-theme** [set on table, default: c]  
Set a theme to checkboxes inside the popup.

**data-popup-btn-icon** [set on table, default: gear]  
Set a icon for the popup button.

**data-popup-btn-iconpos** [set on table, default: left]  
Set the iconpos of the popup button.

**data-header** [set on table, default: "c"]  
Set a theme for the table header. 

**data-wrapper** [set on table, default: "a"]  
Set a theme for the table top and bottom containers.

**data-top/bottom-container** [set on table, default: null]  
Add a top and or bottom container to the table. This is placed before the table 
and by default has 3 grids you can add buttons to.

**data-top/bottom-grid** [set on table, default: 3]  
Set the number of grids you want in the top and bottom container (up to 5 grids).

**data-slot-id** [set on sibling select/button]  
Set a number to move this element into the top/bottom container. Tested with 
selects and buttons.

**data-create**  [set on table, default: undefined]  
If you specify a value of **false**, JQM will NOT add markup to the table. This 
is useful if you want to generate finished code on the server or if you are
rendering widgets yourself on the client. All event bindings will be set, but 
no extra markup is generated.

The following features can be used with the filter widget:  
  
**data-relate**  [set on different table or listview]  
This allows to "connect" different listviews or tables. For example you could use
a panel with a listview & filter and have another listview in the main section (
products, icons....). Specifying data-relate on the 2nd listview/table will make
the filter work for both widgets, so you can filter two datasets with a single
filter.

**data-filter-slot** [set on table]  
This will move the filter to the slot specified in the top or bottom container. 
I will modify this to make this more generic, so you can place the filter where
ever you want.