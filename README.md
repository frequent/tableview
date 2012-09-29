#### Tableview - table plugin for Jquery Mobile ####

version:&nbsp;&nbsp;&nbsp;&nbsp;v.1 using JQM 1.2.0  
author:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sven Franck <sven.franck@stokkers.de>  
credits:&nbsp;&nbsp;&nbsp;&nbsp;Maggie Wachs - [Responsive Table Design](http://filamentgroup.com/lab/responsive_design_approach_for_complex_multicolumn_data_tables/)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Allan Jardine - [Datatables.net](http://www.datatables.net/)  

#### No-Func/Func version ####
The plugin is available in two version. The **No-Func** (basic) tableview version is an HTML table enhanced by JQM. Like in listviews there is a filter extension available. Other than that, **no-func** has no functionality. It only provides the looks.

The **Func** tableview version is integrated into the [Jquery datatables](http://www.datatables.net/) plugin by Allan Jardine. Tableview adds a third layout mode (named JqueryMobileUI - next to datatables Standard and JqueryUI). This tableview version must be triggered from within the regular datatables call ( with enhancement being done on datatable's `fnHeaderCallback` and `fnDrawCallback` functions). 

#### Demo ####
Can be found here: [tableview demo](http://www.franckreich.de/jqm/tableview/demo.html)

#### Required Files ####
a) **No-Func**  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tableview.js  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tableview.filter.js (optional)   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;jquery.mobile.tableview.css  
	
b) **Func**  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;datatables.js (modified!)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;jquery.mobile.tableview.css  

#### Layout ####
A JQM tableview table will look like this:

<div style="">
	<div style="width: 50%; height: 30px; -moz-border-radius-topleft:.6em; -webkit-border-top-left-radius: .6em; border-top-left-radius:  .6em; -moz-border-radius-topright: .6em; -webkit-border-top-right-radius: .6em; border-top-right-radius:  .6em; background-color: #ccc; margin-bottom: .5em;"><h6 style="margin: 0; text-align: center; vertical-align: middle; line-height: 20px; font-size: 12px;">Table-Top-Wrapper</h6></div>
	<div style="width: 50%; height: 20px; background-color: #eee; margin: 2px 0;"><h6 style="margin: 0; text-align: center; vertical-align: middle; line-height: 20px; font-size: 12px;">THEAD (table header rows)</h6></div>
	<div style="width: 50%; height: 20px; background-color: #eee; margin: 2px 0;"><h6 style="margin: 0; text-align: center; vertical-align: middle; line-height: 20px; font-size: 12px;">TBODY (table )</h6></div>
	<div style="width: 50%; height: 20px; background-color: #eee; margin: 2px 0;"><h6 style="margin: 0; text-align: center; vertical-align: middle; line-height: 20px; font-size: 12px;">TFOOT (table footer rows)</h6></div>
	<div style="width: 50%; height: 30px; -moz-border-radius-bottomleft:.6em; -webkit-border-bottom-left-radius: .6em; border-bottom-left-radius:  .6em; -moz-border-radius-bottomright: .6em; -webkit-border-bottom-right-radius: .6em; border-bottom-right-radius:  .6em; background-color: #ccc; margin-top: .5em;"><h6 style="margin: 0; text-align: center; vertical-align: middle; line-height: 20px; font-size: 12px;">Table-Bottom-Wrapper</h6></div>
</div>

#### Responsiveness ####
Tableview uses a responsive layout (based on Responsive Table Design by Maggie Wachs). This means that depending on the available screen size, certain columns will be hidden to fit the table on any display. There is also a toggle menu, so users can modify the table to hide/show the columns they are interested in. To use this feature, you can give the following classes to your header cells:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**persist** =  columns with this class will always be visible and cannot be toggled   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**essential** = columns can be toggled, will be shown if all persist fit on screen   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**option** = columns can be toggled, will be shown if all persist and essential fit on screen   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[no class]** = columns can be toggled, will be shown if all persist, essential and optional fit on screen   

Just add the specific class to your `thead th` cells and the plugin will take care of the rest. (**Note:** Make sure you are not using more than 2-3 persisting classes, because on a smartphone this is usually all that fits on the screen).

#### Multi Column Headers ####
Right now tableview can handle one and two column headers. More is... tricky.


#### Configuration ####
The following attributes can be set on the table:

#### 0) Initialize ####

<TABLE cellspacing="2" border="0">
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Config:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">Init</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Default value:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">[none]</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Declare On:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">table</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Attribute: </td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">data-role="tableview"</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Info:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">Tell tableview to enhance the table.</td>
	</tr>
</TABLE>

#### 1) Wrapper/Grids/Slot-Machine ####
<TABLE cellspacing="2" border="0">
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Config:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">topContainer/bottomContainer </td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Default value:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">NULL</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Declare On:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">[plugin option] </td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Attribute: </td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">[none] </td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Info:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">You can specify elements that should server as top and bottom wrappers. If they are not specified, tableview will create wrappers automatically and use JQM grid to add 3 slots in each wrapper, giving you a total of 6 slots to add custom button elements to the table.  </td>
	</tr>
</TABLE>

<TABLE cellspacing="2" border="0">
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Config:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">bottom/topContainerGrid</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Default value:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">3</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Declare On:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">[plugin option] </td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Attribute: </td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">[none] </td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Info:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">You can set the number of grids to use in the wrappers. 1,2 or 3 grids are possible. By default tableview creates 3 grid layouts.</td>
	</tr>
</TABLE> 

<TABLE cellspacing="2" border="0">
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Config:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">Fill slots (1)</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Default value:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">[none]</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Declare On:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">any div element</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Attribute: </td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">data-slot="true"</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Info:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">Use this attribute to label an element to be added to a slot on the table top and bottom wrapper grid. Top grid has slots 1 (left), 2 (middle), 3 (right) by default. Bottom wrapper has slots 4 (left), 5 (middle) and 6 (right) by default.</td>
	</tr>
</TABLE>

<TABLE cellspacing="2" border="0">
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Config:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">Fill Slots (2)</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Default value:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">[none]</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Declare On:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">any div element</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Attribute: </td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">data-slot-id="1|2|3|4|5|6"</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Info:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">This tells the plugin in which slot the element should be dropped.</td>
	</tr>
</TABLE>

#### 2) Toggle Menu ####

<TABLE cellspacing="2" border="0">
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Config:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">toggleMenu</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Default value:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">popup</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Declare On:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">[plugin option] </td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Attribute: </td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">[none]</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Info:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">The plugin adds a toggle menu, which users can use to manually hide/show columns of a table. All columns except persist columns can be toggled. The menu can either be a JQM popup or a native select element.</td>
	</tr>
</TABLE>

<TABLE cellspacing="2" border="0">
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Config:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">toggleCueText</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Default value:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">hide/show columns</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Declare On:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">[plugin option] </td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Attribute: </td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">[none] </td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Info:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">The text to display on the column toggle popup button, select element</td>
	</tr>
</TABLE>
 
<TABLE cellspacing="2" border="0">
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Config:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">toggleSlot</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Default value:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">3</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Declare On:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">[plugin option] </td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Attribute: </td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">[none] </td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Info:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">The default slot into which the toggle menu will be dropped</td>
	</tr>
</TABLE>

<TABLE cellspacing="2" border="0">
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Config:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">toggleIcon</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Default value:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">gear</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Declare On:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">[plugin option] </td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Attribute: </td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">[none] </td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Info:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">The default icon for the toggle menu</td>
	</tr>
</TABLE>

<TABLE cellspacing="2" border="0">
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Config:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">toggleIconPos</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Default value:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">left</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Declare On:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">[plugin option] </td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Attribute: </td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">[none] </td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Info:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">Default icon position.</td>
	</tr>
</TABLE>

#### 3) Themes ####

<TABLE cellspacing="2" border="0">
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Config:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">headerTheme </td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Default value:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">c</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Declare On:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">[plugin option] </td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Attribute: </td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">[none] </td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Info:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">Theme to use for the table header cells.</td>
	</tr>
</TABLE>

<TABLE cellspacing="2" border="0">
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Config:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">wrapperTheme</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Default value:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">a</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Declare On:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">[plugin option] </td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Attribute: </td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">[none] </td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Info:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">Theme to be used for table top and bottom wrappers.</td>
	</tr>
</TABLE>

<TABLE cellspacing="2" border="0">
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Config:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">oddTheme</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Default value:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">c</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Declare On:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">[plugin option] </td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Attribute: </td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">[none] </td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Info:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">Theme to use for odd rows</td>
	</tr>
</TABLE>

<TABLE cellspacing="2" border="0">
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Config:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">evenTheme</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Default value:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">d</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Declare On:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">[plugin option] </td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Attribute: </td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">[none] </td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Info:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">Theme to use for even rows</td>
	</tr>
</TABLE>

#### 4) Table enhancement ####

<TABLE cellspacing="2" border="0">
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Config:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">Embedded Selects</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Default value:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">[none]</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Declare On:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">table</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Attribute: </td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">data-embedded-selects="true"</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Info:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">Use this attribute, if your elements should be embedded into the wrappers vs. being regular buttons/select elemens. Embedding stretches to available width/height, removes all shadows, corners and borders.</td>
	</tr>
</TABLE>

<TABLE cellspacing="2" border="0">
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Config:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">Inset</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Default value:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">[none]</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Declare On:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">table</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Attribute: </td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">data-inset="true"</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Info:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">Add 15px margin and round borders to the table. Without it, the table will stretch full screen width.</td>
	</tr>
</TABLE>

<TABLE cellspacing="2" border="0">
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Config:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">Checkers</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Default value:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">[none]</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Declare On:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">table</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Attribute: </td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">data-selectable="true"</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Info:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">If you want to have your rows selectable (visually!), you can add this attribute to the table. The plugin will add a persistent column with icon only checkboxes. In the header a select all/unselect all checkbox will be added. You will need to add the underlying logic, but the visuals are all set by tableview.</td>
	</tr>
</TABLE>

<TABLE cellspacing="2" border="0">
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Config:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">Sortables/td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Default value:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">[none]</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Declare On:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">table header cells (THEAD TH)</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Attribute: </td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">data-sortable="true"</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Info:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">This turns a column header into a sortable button (visually - no sorting function). Buttons are embedded and use the arrow up/down icons. You will need to add the logic to sort yourself.</td>
	</tr>
</TABLE>

<TABLE cellspacing="2" border="0">
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Config:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">Filter</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Default value:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">[none]</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Declare On:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">table</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Attribute: </td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">data-filter="true"</td>
	</tr>
	<tr>
		<td style="text-align: left; with: 30%; left; font-size: 14px; vertical-align:top;">Info:</td>
		<td style="text-align: left; width: 70%; font-size: 14px; vertical-align:top;">>Same as in JQM listview. This extension adds a filter element to filter all visible records. Note: The filter will be added in slot 2, so don't put anything there, if you want to use the filter.</td>
	</tr>
</TABLE>

#### tablview **Func** Version (coming next) ####
