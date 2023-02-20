export const elements = [
  {
    category: "Metadata",
    title: "<head>",
    description: "Defines a container for metadata (data about data) and is placed between the <html> tag and the <body> tag.",
    preview: `<head>\n  <title>Document Title</title>\n  <meta charset=\"UTF-8\">\n</head>`
  },
  {
    category: "Metadata",
    title: "<title>",
    description: "Defines the title of the document, which is displayed in the browser's title bar or on the page's tab.",
    preview: `<title>Document Title</title>`
  },
  {
    category: "Metadata",
    title: "<meta>",
    description: "Provides metadata about the document, such as character set, description, keywords, and more.",
    preview: `<meta charset=\"UTF-8\">`
  },
  {
    category: "Text",
    title: "<p>",
    description: "Defines a paragraph of text.",
    preview: `<p>This is a paragraph of text.</p>`
  },
  {
    category: "Text",
    title: "<a>",
    description: "Defines a hyperlink, which is used to link one page to another or to a specific location on the same page.",
    preview: `<a href=\"https://www.example.com\">Link text</a>`
  },
  {
    category: "Text",
    title: "<h1> - <h6>",
    description: "Defines headings of different levels, where <h1> is the most important and <h6> is the least important.",
    preview: `<h1>Heading level 1</h1>`
  },
  {
    category: "Text",
    title: "<em>",
    description: "Defines emphasized text, which is usually displayed in italics.",
    preview: `<em>Emphasized text</em>`
  },
  {
    category: "Text",
    title: "<strong>",
    description: "Defines strong text, which is usually displayed in bold.",
    preview: `<strong>Strong text</strong>`
  },
  {
    category: "Text",
    title: "<u>",
    description: "Defines underlined text.",
    preview: `<u>Underlined text</u>`
  },
  {
    category: "Text",
    title: "<br>",
    description: "Inserts a single line break.",
    preview: `This text is on one line.<br>This text is on another line.`
  },
  {
    category: "Text",
    title: "<hr>",
    description: "Inserts a thematic break, which is typically displayed as a horizontal line.",
    preview: `<p>This is some text.</p>\n<hr>\n<p>This is more text.</p>`
  },
  {
    category: "Text",
    title: "<blockquote>",
    description: "Defines a section of quoted text.",
    preview: `<blockquote>\n  <p>This is a quote.</p>\n</blockquote>`
  },
  {
    category: "Text",
    title: "<code>",
    description: "Defines a piece of computer code.",
    preview: `<p>The code element is used to display code:</p>\n<code>console.log('Hello, world!');</code>`
  },
  {
    category: "Text",
    title: "<pre>",
    description: "Defines preformatted text, which is usually displayed in a monospace font.",
    preview: `<pre>\n  This text\n  is preformatted.\n</pre>`
  },
  {
    category: "Text",
    title: "<sub>",
    description: "Defines subscripted text, which is usually displayed below the baseline.",
    preview: `This is some <sub>subscripted</sub> text.`
  },
  {
    category: "Text",
    title: "<sup>",
    description: "Defines superscripted text, which is usually displayed above the baseline.",
    preview: `This is some <sup>superscripted</sup> text.`
  },
  {
    category: "Text",
    title: "<kbd>",
    description: "Defines keyboard input, which is usually displayed in a monospace font.",
    preview: `<p>The kbd element is used to display keyboard input:</p>\n<kbd>Ctrl + C</kbd>`
  },
  {
    category: "Text",
    title: "<var>",
    description: "Defines a variable.",
    preview: `<p>The var element is used to display variables:</p>\n<var>x</var> = <var>y</var> + <var>z</var>;`
  },
  {
    category: "Text",
    title: "<mark>",
    description: "Defines highlighted text.",
    preview: `<p>The mark element is used to highlight text:</p>\n<p>This is <mark>important</mark> text.</p>`
  },
  {
    category: "Text",
    title: "<abbr>",
    description: "Defines an abbreviation or acronym.",
    preview: `<p>The abbr element is used to define an abbreviation or acronym:</p>\n<p><abbr title="World Health Organization">WHO</abbr></p>`
  },
  {
    category: "Text",
    title: "<time>",
    description: "Defines a date or time.",
    preview: `<p>The time element is used to display a date or time:</p>\n<p>Time is: <time datetime="2023-02-19">now</time></p>`
  },
  {
    category: "Text",
    title: "<cite>",
    description: "Defines the title of a work.",
    preview: `<p>The cite element is used to define the title of a work:</p>\n<p><cite>The Great Gatsby</cite> by F. Scott Fitzgerald</p>`
  },
  {
    category: "Text",
    title: "<dfn>",
    description: "Defines a definition.",
    preview: `<p>The dfn element is used to define a term:</p>\n<p><dfn>HTML</dfn> stands for Hyper Text Markup Language.</p>`
  },
  {
    category: "Text",
    title: "<i>",
    description: "Defines italic text.",
    preview: `<p>The i element is used to display text in italics:</p>\n<p><i>This text is in italics.</i></p>`
  },
  {
    category: "Text",
    title: "<b>",
    description: "Defines bold text.",
    preview: `<p>The b element is used to display text in bold:</p>\n<p><b>This text is in bold.</b></p>`
  },
  {
    category: "Text",
    title: "<s>",
    description: "Defines strikethrough text.",
    preview: `<p>The s element is used to display text with a strikethrough:</p>\n<p><s>This text has a strikethrough.</s></p>`
  },
  {
    category: "Text",
    title: "<small>",
    description: "Defines small text.",
    preview: `<p>The small element is used to display small text:</p>\n<p><small>This text is small.</small></p>`
  },
  {
    category: "Text",
    title: "<u>",
    description: "Defines underlined text.",
    preview: `<p>The u element is used to display underlined text:</p>\n<p><u>This text is underlined.</u></p>`
  },
  {
    category: "Text",
    title: "<em>",
    description: "Defines emphasized text.",
    preview: `<p>The em element is used to emphasize text:</p>\n<p><em>This text is emphasized.</em></p>`
  },
  {
    category: "Text",
    title: "<strong>",
    description: "Defines important text.",
    preview: `<p>The strong element is used to display important text:</p>\n<p><strong>This text is important.</strong></p>`
  },
  {
    category: "Text",
    title: "<code>",
    description: "Defines a piece of computer code.",
    preview: `<p>The code element is used to display computer code:</p>\n<p><code>console.log("Hello, World!");</code></p>`
  },
  {
    category: "Text",
    title: "<pre>",
    description: "Defines preformatted text.",
    preview: `<p>The pre element is used to display preformatted text:</p>\n<pre> This text\n is\n preformatted\n</pre>`
  },
  {
    category: "Text",
    title: "<blockquote>",
    description: "Defines a long quotation.",
    preview: `<p>The blockquote element is used to display a long quotation:</p>\n<blockquote>\n<p>"Life is what happens when you're busy making other plans."</p>\n<cite>John Lennon</cite>\n</blockquote>`
  },
  {
    category: "Text",
    title: "<q>",
    description: "Defines a short quotation.",
    preview: `<p>The q element is used to display a short quotation:</p>\n<p><q>Be the change you wish to see in the world.</q></p>`
  },
  {
    category: "Text",
    title: "<del>",
    description: "Defines deleted text.",
    preview: `<p>The del element is used to display deleted text:</p>\n<p><del>This text has been deleted.</del></p>`
  },
  {
    category: "Text",
    title: "<ins>",
    description: "Defines inserted text.",
    preview: `<p>The ins element is used to display inserted text:</p>\n<p><ins>This text has been inserted.</ins></p>`
  },
  {
    category: "Text",
    title: "<sup>",
    description: "Defines superscripted text, which is usually displayed above the baseline.",
    preview: `This is some <sup>superscripted</sup> text.`
  },
  {
    category: "Text",
    title: "<sub>",
    description: "Defines subscripted text, which is usually displayed below the baseline.",
    preview: `This is some <sub>subscripted</sub> text.`
  },
  {
    category: "Links",
    title: "<a>",
    description: "Defines a hyperlink.",
    preview: `<p>The a element is used to create a hyperlink:</p>\n<p><a href="https://www.example.com\">This is a link</a></p>`
  },
  {
    category: "Links",
    title: "<link>",
    description: "Defines the relationship between a document and an external resource.",
    preview: `<p>The link element is used to define the relationship between a document and an external resource:</p>\n<link rel=\"stylesheet\" type=\"text/css\" href=\"styles.css\">`
  },
  {
    category: "Links",
    title: "<a>",
    description: "Defines a hyperlink.",
    preview: `<p>The a element is used to create a hyperlink:</p>\n<a href=\"https://www.example.com\">Example</a>`
  },
  {
    category: "Links",
    title: "<nav>",
    description: "Defines a set of navigation links.",
    preview: `<p>The nav element is used to define a set of navigation links:</p>\n<nav>\n<a href=\"#\">Home</a>\n<a href=\"#\">About</a>\n<a href=\"#\">Contact</a>\n</nav>`
  },
  {
    category: "Links",
    title: "<area>",
    description: "Defines a clickable area in an image map.",
    preview: `<p>The area element is used to define a clickable area in an image map:</p>\n<img src=\"example.png\" alt=\"Example Image\" usemap=\"#exampleMap\">\n<map name=\"exampleMap\">\n<area shape=\"rect\" coords=\"0,0,50,50\" href=\"#\">\n<area shape=\"rect\" coords=\"50,50,100,100\" href=\"#\">\n</map>`
  },
  {
    category: "Links",
    title: "<button>",
    description: "Defines a clickable button.",
    preview: `<p>The button element is used to create a clickable button:</p>\n<button>Click me</button>`
  },
  {
    category: "Images",
    title: "<img>",
    description: "Defines an image.",
    preview: `<p>The img element is used to display an image:</p>\n<img src=\"example.jpg\" alt=\"Example Image\">`
  },
  {
    category: "Images",
    title: "<figure>",
    description: "Defines self-contained content, like illustrations, diagrams, photos, code listings, etc.",
    preview: `<p>The figure element is used to display self-contained content:</p>\n<figure>\n<img src=\"example.png\" alt=\"Example Image\">\n<figcaption>Figure caption</figcaption>\n</figure>`
  },
  {
    category: "Images",
    title: "<figcaption>",
    description: "Defines a caption for a figure element.",
    preview: `<p>The figcaption element is used to define a caption for a figure element:</p>\n<figure>\n<img src=\"example.png\" alt=\"Example Image\">\n<figcaption>Figure caption</figcaption>\n</figure>`
  },
  {
    category: "Lists",
    title: "<ul>",
    description: "Defines an unordered list.",
    preview: `<p>The ul element is used to create an unordered list:</p>\n<ul>\n<li>Item 1</li>\n<li>Item 2</li>\n<li>Item 3</li>\n</ul>`
  },
  {
    category: "Lists",
    title: "<ol>",
    description: "Defines an ordered list.",
    preview: `<p>The ol element is used to create an ordered list:</p>\n<ol>\n<li>Item 1</li>\n<li>Item 2</li>\n<li>Item 3</li>\n</ol>`
  },
  {
    category: "Lists",
    title: "<li>",
    description: "Defines a list item.",
    preview: `<p>The li element is used to define a list item:</p>\n<ul>\n<li>Item 1</li>\n<li>Item 2</li>\n<li>Item 3</li>\n</ul>`
  },
  {
    category: "Lists",
    title: "<dl>",
    description: "Defines a description list.",
    preview: `<p>The dl element is used to create a description list:</p>\n<dl>\n<dt>Term 1</dt>\n<dd>Description 1</dd>\n<dt>Term 2</dt>\n<dd>Description 2</dd>\n</dl>`
  },
  {
    category: "Lists",
    title: "<dt>",
    description: "Defines a term (an item) in a description list.",
    preview: `<p>The dt element is used to define a term (an item) in a description list:</p>\n<dl>\n<dt>Term 1</dt>\n<dd>Description 1</dd>\n<dt>Term 2</dt>\n<dd>Description 2</dd>\n</dl>`
  },
  {
    category: "Lists",
    title: "<dd>",
    description: "Defines a description (an explanation) for a term in a description list.",
    preview: `<p>The dd element is used to define a description (an explanation) for a term in a description list:</p>\n<dl>\n<dt>Term 1</dt>\n<dd>Description 1</dd>\n<dt>Term 2</dt>\n<dd>Description 2</dd>\n</dl>`
  },
  {
    category: "Tables",
    title: "<table>",
    description: "Defines a table.",
    preview: `<p>The table element is used to create a table:</p>\n<table>\n<tr>\n<th>Header 1</th>\n<th>Header 2</th>\n</tr>\n<tr>\n<td>Row 1, Column 1</td>\n<td>Row 1, Column 2</td>\n</tr>\n<tr>\n<td>Row 2, Column 1</td>\n<td>Row 2, Column 2</td>\n</tr>\n</table>`
  },
  {
    category: "Tables",
    title: "<tr>",
    description: "Defines a table row.",
    preview: `<p>The tr element is used to define a table row:</p>\n<table>\n<tr>\n<th>Header 1</th>\n<th>Header 2</th>\n</tr>\n<tr>\n<td>Row 1, Column 1</td>\n<td>Row 1, Column 2</td>\n</tr>\n<tr>\n<td>Row 2, Column 1</td>\n<td>Row 2, Column 2</td>\n</tr>\n</table>`
  },
  {
    category: "Tables",
    title: "<th>",
    description: "Defines a header cell in a table.",
    preview: `<p>The th element is used to define a header cell in a table:</p>\n<table>\n<tr>\n<th>Header 1</th>\n<th>Header 2</th>\n</tr>\n<tr>\n<td>Row 1, Column 1</td>\n<td>Row 1, Column 2</td>\n</tr>\n<tr>\n<td>Row 2, Column 1</td>\n<td>Row 2, Column 2</td>\n</tr>\n</table>`
  },
  {
    category: "Tables",
    title: "<td>",
    description: "Defines a standard cell in a table.",
    preview: `<p>The td element is used to define a standard cell in a table:</p>\n<table>\n<tr>\n<th>Header 1</th>\n<th>Header 2</th>\n</tr>\n<tr>\n<td>Row 1, Column 1</td>\n<td>Row 1, Column 2</td>\n</tr>\n<tr>\n<td>Row 2, Column 1</td>\n<td>Row 2, Column 2</td>\n</tr>\n</table>`
  },
  {
    category: "Forms",
    title: "<form>",
    description: "Defines a form for user input.",
    preview: `<p>The form element is used to create a form for user input:</p>\n<form>\n<label for=\"username\">Usertitle:</label>\n<input type=\"text\" id=\"username\" name=\"username\"><br><br>\n<label for=\"password\">Password:</label>\n<input type=\"password\" id=\"password\" name=\"password\"><br><br>\n<input type=\"submit\" value=\"Submit\">\n</form>`
  },
  {
    category: "Forms",
    title: "<input>",
    description: "Defines an input field where the user can enter data.",
    preview: `<p>The input element is used to create an input field where the user can enter data:</p>\n<form>\n<label for=\"username\">Usertitle:</label>\n<input type=\"text\" id=\"username\" name=\"username\"><br><br>\n<label for=\"password\">Password:</label>\n<input type=\"password\" id=\"password\" name=\"password\"><br><br>\n<input type=\"submit\" value=\"Submit\">\n</form>`
  },
  {
    category: "Forms",
    title: "<label>",
    description: "Defines a label for an input element.",
    preview: `<p>The label element is used to create a label for an input element:</p>\n<form>\n<label for=\"username\">Usertitle:</label>\n<input type=\"text\" id=\"username\" name=\"username\"><br><br>\n<label for=\"password\">Password:</label>\n<input type=\"password\" id=\"password\" name=\"password\"><br><br>\n<input type=\"submit\" value=\"Submit\">\n</form>`
  },
  {
    category: "Forms",
    title: "<select>",
    description: "Defines a drop-down list.",
    preview: `<p>The select element is used to create a drop-down list:</p>\n<form>\n<label for=\"color\">Choose a color:</label>\n<select id=\"color\" name=\"color\">\n<option value=\"red\">Red</option>\n<option value=\"green\">Green</option>\n<option value=\"blue\">Blue</option>\n</select>\n</form>`
  },
  {
    category: "Forms",
    title: "<option>",
    description: "Defines an option in a drop-down list.",
    preview: `<p>The option element is used to create an option in a drop-down list:</p>\n<form>\n<label for=\"color\">Choose a color:</label>\n<select id=\"color\" name=\"color\">\n<option value=\"red\">Red</option>\n<option value=\"green\">Green</option>\n<option value=\"blue\">Blue</option>\n</select>\n</form>`
  },
  {
    category: "Forms",
    title: "<button>",
    description: "Defines a clickable button.",
    preview: `<p>The button element is used to create a clickable button:</p>\n<button>Click me</button>`
  },
  {
    category: "Forms",
    title: "<textarea>",
    description: "Defines a multi-line input field.",
    preview: `<p>The textarea element is used to create a multi-line input field:</p>\n<form>\n<label for=\"message\">Message:</label>\n<textarea id=\"message\" name=\"message\" rows=\"4\" cols=\"40\"></textarea><br><br>\n<input type=\"submit\" value=\"Submit\">\n</form>`
  },
  {
    category: "Media",
    title: "<img>",
    description: "Defines an image.",
    preview: `<p>The img element is used to display an image:</p>\n<img src=\"https://www.example.com/images/example.jpg\" alt=\"Example image\">`
  },
  {
    category: "Media",
    title: "<audio>",
    description: "Defines sound content.",
    preview: `<p>The audio element is used to embed sound content in a document:</p>\n<audio controls>\n<source src=\"https://www.example.com/sound/example.mp3\" type=\"audio/mpeg\">\n<source src=\"https://www.example.com/sound/example.ogg\" type=\"audio/ogg\">\nYour browser does not support the audio element.\n</audio>`
  },
  {
    category: "Media",
    title: "<video>",
    description: "Defines video content.",
    preview: `<p>The video element is used to embed video content in a document:</p>\n<video width=\"320\" height=\"240\" controls>\n<source src=\"https://www.example.com/video/example.mp4\" type=\"video/mp4\">\n<source src=\"https://www.example.com/video/example.webm\" type=\"video/webm\">\nYour browser does not support the video element.\n</video>`
  },
  {
    category: "Scripting",
    title: "<script>",
    description: "Defines a client-side script.",
    preview: `<p>The script element is used to embed a client-side script in a document:</p>\n<script>\nalert(\"Hello, world!\");\n</script>`
  },
  {
    category: "Scripting",
    title: "<noscript>",
    description: "Defines content to be displayed if the browser does not support scripting.",
    preview: `<p>The noscript element is used to define alternative content to be displayed if a script is not executed:</p>\n<noscript>\n<p>Your browser does not support JavaScript!</p>\n</noscript>`
  }
]