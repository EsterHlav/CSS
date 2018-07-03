# Project 0

Web Programming with Python and JavaScript

For my project 0, I borrowed the theme from a big project I'm working on (which will also be my capstone project this upcoming Fall for finishing my DGMD MLA degree).

The website www.newbeeslearn.com aims to be a platform for learning foreign languages with modules, exercises and vocabulary flashcards. For project 0, I simply practiced a random design and a basic content that my future web application can contain.

The main page, index.html is the base website, with a navbar linking all four htmls -- index.html (click on logo), french.html, spanish.html, german.html. The three websites named after a language are a simple example of what one website for learning a language can possible contain (the content is kept very simple for the purpose of this assignment..)

The styling is done with Bootstrap4. There are two css/sass files - index.sass (for the index.html styling) and languages.sass (for the three other htmls)

The list of requirements:
1) four different .html pages, possible to get from any page on your website to any other page
-> index.html, french.html, spanish.html, german.html connected with a navbar.

2) at least one list (ordered or unordered), at least one table, and at least one image.
-> list: see french.html, line 73
-> table: see french.html, line 132
-> pictures: a lot of pictures..

3) at least one stylesheet file
-> index.sass, languages.sass

4) at least five different CSS properties, and at least five different types of CSS selectors. You must use the #id selector at least once, and the .class selector at least once.
-> css properties: margin, font, color, size, padding
-> css selectors: class, >, h1,h2, h5~p, hover, #id
-> id selector -- index.sass, line 105

5) at least one mobile-responsive media query, such that something about the styling changes for smaller screens.
-> languages.sass, line 161 -- responsive font and adaptive table

6) must use Bootstrap 4 on your website, with at least one Bootstrap component, and at least two Bootstrap columns  using Bootstrap’s grid model.
-> component card, index.html, line  67
-> component carousel image, french.html, line 45
-> grid system 3 columns - index.html, line 92

7) must use at least one SCSS variable, at least one example of SCSS nesting, and at least one use of SCSS inheritance.
-> index.sass, line 1
-> nesting index.sass, line 57
-> inheritance languages.sass, line 78
