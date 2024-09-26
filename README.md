# iit-intern
# Chemical Supplies UI Documentation
# Overview
This project is a basic web-based chemical supply management interface. It offers the ability to add, update, delete, and sort rows in a chemical inventory database. The design strategy and decisions taken during development are described in this paper.
# Design Approach
# HTML Structure
Semantic HTML: The layout is made understandable and accessible by the use of semantic components in the structure. Chemical data is shown in the table, and buttons are available for different functions.
Toolbar: To do operations such as adding, rearranging, and removing rows, a toolbar is situated above the table.

# CSS Styling
Minimalist Style: The minimalistic style prioritises readability and usefulness. Accessibility is ensured by contrasting the text with a light background.
Theme: This theme is made to be both desktop and mobile device friendly because it is responsive in design.

# JavaScript Functionality
Dynamic Table Management: To handle table data dynamically, JavaScript is utilised. There are functions for sorting, adding, and removing rows.
Editable Cells: Users can change data directly in the table by designating table cells as editable using the contenteditable property.
Row Selection: Clicking a row makes it visible and allows you to manipulate or remove it.
Sorting: The table data may be sorted by clicking on the button located in each column header.

# Features
Add Row: Adds a new row that the user can update, preconfigured with certain data.
Delete Row: A table entry that eliminates the chosen row.
Transfer Move the chosen row up or down in the table using the Row Up/Down function.
Refresh Data: Reloads the data in the table.
Save Data: Provides feedback to the user while simulating data saving.

# Code Structure
HTML: Specifies the toolbar and table layout.
CSS: The table, toolbar, and button styles are provided via CSS (styles.css).
Javascript: The functionality for manipulating dynamic data and facilitating user interactions is contained in JavaScript (script.js).

# Future Enhancements
Use server-side or local storage for persistent storage to save modifications indefinitely.
Allow for multi-level filtering and sorting with advanced sorting.
Enhance keyboard navigation and screen reader support as part of accessibility improvements.

# AI Assistance
Throughout the project's development, AI tools were consulted in the spirit of efficiency and creativity. With this support, the design process was streamlined and a reliable and workable solution was guaranteed.

This project shows how to use fundamental web technologies to manage chemical inventories in a straightforward yet efficient manner. The design lays the groundwork for future improvements by emphasising usability, responsiveness, and simplicity of interaction.
