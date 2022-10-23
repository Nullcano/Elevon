export const meta = {
  slug: 'html',
  title: 'HTML Reference',
  description: 'An overview over all reset and reworked semantic HTML elements. Explore their look and feel with Arctic applied.'
}

export const elements = [{
  title: '<a>',
  description: 'Create an anchor element with hyperlink to any URL address.',
  preview: `A network error occured. <a href="/status">Check network status</a>
or <a role="button" onclick="openForm()">contact support</a>`,
  categories: ['Flow', 'Phrasing', 'Interactive', 'Palpable'],
}, {
  title: '<abbr>',
  description: 'Inform users what abbreviations mean. This element is also used for acronyms.',
  preview: `Arctic provides <abbr title="Cascading Style Sheets">CSS</abbr>.`,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<address>',
  description: 'Provide contact information for a person, group, or an organization.',
  preview: `<address>
  <p>Arctic Style</p>
  <a href="mailto:jim@rock.com">jim@rock.com</a><br>
  <a href="tel:+13115552368">(311) 555-2368</a>
</address>`,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<area>',
  description: 'Define clickable areas inside an image map.',
  preview: `<map name="infographic">
  <area shape="rect" coords="184,6,253,27"
        href="https://mozilla.org"
        target="_blank" alt="Mozilla">
  <area shape="circle" coords="130,136,60"
        href="https://developer.mozilla.org/"
        target="_blank" alt="MDN">
  <area shape="poly" coords="130,6,253,96,223,106,130,39"
        href="https://developer.mozilla.org/docs/Web/Guide/Graphics"
        target="_blank" alt="Graphics">
  <area shape="poly" coords="253,96,207,241,189,217,223,103"
        href="https://developer.mozilla.org/docs/Web/HTML"
        target="_blank" alt="HTML">
  <area shape="poly" coords="207,241,54,241,72,217,189,217"
        href="https://developer.mozilla.org/docs/Web/JavaScript"
        target="_blank" alt="JavaScript">
  <area shape="poly" coords="54,241,6,97,36,107,72,217"
        href="https://developer.mozilla.org/docs/Web/API"
        target="_blank" alt="Web APIs">
  <area shape="poly" coords="6,97,130,6,130,39,36,107"
        href="https://developer.mozilla.org/docs/Web/CSS"
        target="_blank" alt="CSS">
</map>

<img usemap="#infographic" src="https://interactive-examples.mdn.mozilla.net/media/examples/mdn-info.png" 
     alt="MDN infographic" style="display:block;margin:0 auto;width:260px;height:248px">`,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<article>',
  description: 'Self-contain compositions in a document, page, application, or site, which is intended to be independently distributable or reusable.',
  preview: `<article class="forecast">
  <h1>Weather forecast for Seattle</h1>
  <article class="day-forecast">
      <h2>03 March 2018</h2>
      <p>Rain.</p>
  </article>
  <article class="day-forecast">
      <h2>04 March 2018</h2>
      <p>Periods of rain.</p>
  </article>
  <article class="day-forecast">
      <h2>05 March 2018</h2>
      <p>Heavy rain.</p>
  </article>
</article>`,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<aside>',
  description: `Define content that is indirectly related to the document's main content. Asides are not aligned to the side by default.`,
  preview: `<p>Salamanders are a group of amphibians with a lizard-like appearance, including short legs and a tail in both larval and adult forms.</p>

<aside style="margin:1rem;width:33%;float:right">
  <i>The Rough-skinned Newt defends itself with a deadly neurotoxin.</i>
</aside>

<p>Several species of salamander inhabit the temperate rainforest of the Pacific Northwest, including the Ensatina, the Northwestern Salamander and the Rough-skinned Newt. Most salamanders are nocturnal, and hunt for insects, worms and other small creatures.</p>`,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<audio>',
  description: 'Embed sound content in documents. It may contain one or more audio sources and other fallback elements when audio is not supported.',
  preview: `<audio controls>
  <source src="myAudio.mp3" type="audio/mpeg" />
  <source src="myAudio.ogg" type="audio/ogg" />
  <p>
    Download <a href="myAudio.mp3">MP3</a> or
    <a href="myAudio.ogg">OGG</a> audio.
  </p>
</audio>`,
  categories: ['Flow', 'Phrasing', 'Embedded', 'Interactive', 'Palpable']
}, {
  title: '<b>',
  description: `Draw the reader's attention to the element's contents, which are not otherwise granted special importance.`,
  preview: `The most popular science courses are 
<b>chemistry</b> and <b>physics</b>.`,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<bdi>',
  description: 'Tell the browser\'s bidirectional algorithm to treat the text it contains in isolation from its surrounding text.',
  preview: `<ul>
  <li><bdi>Evil Steven</bdi>: 1st place</li>
  <li><bdi>François fatale</bdi>: 2nd place</li>
  <li><span>تیز سمی</span>: 3rd place</li>
  <li><bdi>الرجل القوي إيان</bdi>: 4th place</li>
  <li><span dir="auto">تیز سمی</span>: 5th place</li>
</ul>`,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<bdo>',
  description: 'Override the current directionality of text, so that the text within is rendered in a different direction.',
  preview: `<p>Looks like this in Hebrew: 
  <span dir="rtl">אה, אני אוהב להיות ליד חוף הים</span>
</p>

<p>In the computer's memory, this is stored as 
  <bdo dir="ltr">אה, אני אוהב להיות ליד חוף הים</bdo>
</p>`,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<blockquote>',
  description: 'Define quotation blocks.',
  preview: `<figure>
  <blockquote cite="https://www.huxley.net/bnw/four.html">
      <p>Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.</p>
  </blockquote>
  <figcaption>—Aldous Huxley, <cite>Brave New World</cite></figcaption>
</figure>`,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<body>',
  description: 'Identify the main body of content and the part displayed in the main browser window.',
  preview: `<body>
  Hello world
</body>`,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<br>',
  description: 'insert a line break.',
  preview: `<br>
<br>
<br>
<br>`,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<button>',
  description: 'insert a clickable button.',
  preview: `<button type="button">Click me</button>`,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<canvas>',
  description: 'Draw graphics with JavaScript and render them with HTML5.',
  preview: `<canvas>
  An alternative text describing what your canvas displays.
</canvas>`,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<caption>',
  description: 'Specify the caption or title of a table.',
  preview: `<table>
  <caption>He-Man and Skeletor facts</caption>
  <tr>
    <td> </td>
    <th scope="col" class="heman">He-Man</th>
    <th scope="col" class="skeletor">Skeletor</th>
  </tr>
  <tr>
    <th scope="row">Role</th>
    <td>Hero</td>
    <td>Villain</td>
  </tr>
  <tr>
    <th scope="row">Weapon</th>
    <td>Power Sword</td>
    <td>Havoc Staff</td>
  </tr>
  <tr>
    <th scope="row">Dark secret</th>
    <td>Expert florist</td>
    <td>Cries at romcoms</td>
  </tr>
</table>`,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<cite>',
  description: 'Describe a reference to a cited creative work, and must include the title of that work.',
  preview: `<figure>
  <blockquote>
    <p>It was a bright cold day in April, and the clocks were striking thirteen.</p>
  </blockquote>
  <figcaption>First sentence in <cite><a href="http://www.george-orwell.org/1984/0.html">Nineteen Eighty-Four</a></cite> by George Orwell (Part 1, Chapter 1).</figcaption>
</figure>`,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<code>',
  description: 'display its contents styled in a fashion intended to indicate that the text is a short fragment of computer code.',
  preview: `The <code>push()</code> method adds one or more elements to the 
end of an array and returns the new length of the array.`,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<col>',
  description: 'Define a column within a table and is used for defining common semantics on all common cells.',
  preview: `<table>
  <caption>Superheros and sidekicks</caption>
  <colgroup>
    <col>
    <col span="2" class="batman">
    <col span="2" class="flash">
  </colgroup>
  <tr>
    <td> </td>
    <th scope="col">Batman</th>
    <th scope="col">Robin</th>
    <th scope="col">The Flash</th>
    <th scope="col">Kid Flash</th>
  </tr>
  <tr>
    <th scope="row">Skill</th>
    <td>Smarts</td>
    <td>Dex, acrobat</td>
    <td>Super speed</td>
    <td>Super speed</td>
  </tr>
</table>
`,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<colgroup>',
  description: 'Define a group of columns within a table.',
  preview: `<table>
  <caption>Superheros and sidekicks</caption>
  <colgroup>
    <col>
    <col span="2" class="batman">
    <col span="2" class="flash">
  </colgroup>
  <tr>
    <td> </td>
    <th scope="col">Batman</th>
    <th scope="col">Robin</th>
    <th scope="col">The Flash</th>
    <th scope="col">Kid Flash</th>
  </tr>
  <tr>
    <th scope="row">Skill</th>
    <td>Smarts</td>
    <td>Dex, acrobat</td>
    <td>Super speed</td>
    <td>Super speed</td>
  </tr>
</table>`,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<datalist>',
  description: 'Set options for a data list',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<dd>',
  description: 'Define a Description in a list',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<del>',
  description: 'Refer to strikethrough deleted content',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<details>',
  description: 'Insert section so details can be expanded',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<dfn>',
  description: 'A term definition',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<dialog>',
  description: 'Set up a dialog box',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<div>',
  description: 'Set up a division or section in a document',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<dl>',
  description: 'For a description list',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<dt>',
  description: 'For a description term',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<em>',
  description: 'To add emphasis to text',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<embed>',
  description: 'To embed media into a document',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<fieldset>',
  description: 'Establish a fieldset for a form',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<figure>',
  description: 'Set up a figure for an image',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<footer>',
  description: 'Create a footer on the page',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<form>',
  description: 'Set up an input form',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<h1>',
  description: 'define the largest section heading.',
  preview: `<h1>Heading level 1</h1>`,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<h2>',
  description: 'define the second largest section heading.',
  preview: `<h2>Heading level 2</h2>`,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<h3>',
  description: 'define the third largest section heading.',
  preview: `<h3>Heading level 3</h3>`,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<h4>',
  description: 'define the fourth largest section heading.',
  preview: `<h4>Heading level 4</h4>`,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<h5>',
  description: 'define the fifth largest section heading.',
  preview: `<h5>Heading level 5</h5>`,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<h6>',
  description: 'define the sixth largest section heading.',
  preview: `<h6>Heading level 6</h6>`,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<header>',
  description: 'represent introductory content, typically a group of introductory or navigational aids.',
  preview: `<header>
  <h1>Welcome!</h1>
</header>`,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<hr>',
  description: 'insert a horizontal rule or line showing a break between paragraph-level elements.',
  preview: `<hr>`,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<html>',
  description: 'The html tag is the root element of the document and within it sit all other tags',
  preview: `Unable to preview this element.`,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<i>',
  description: 'represents a range of text that is set off from the normal text, such as technical terms, displayed in italics.',
  preview: `The term <i>bandwidth</i> describes the measure of how much information 
can pass through a data connection in a given amount of time.`,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<iframe>',
  description: 'To embed an inline frame',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<img />',
  description: 'Place an image in the document',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<input>',
  description: 'Create an input form',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<ins>',
  description: 'Indicates inserted or updated text',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<kbd>',
  description: 'Show text as if it were entered in a keyboard',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<keygen>',
  description: 'A key generator for a form',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<label>',
  description: 'Give a form a label',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<legend>',
  description: 'Set a legend for a form',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<li>',
  description: 'Create a list item like a bullet point',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<link />',
  description: 'For a link to an external document like stylesheet',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<main>',
  description: 'Semantically identifies a main section of the document',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<map>',
  description: 'For a clickable image map',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<mark>',
  description: 'To mark text like a highlighter',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<menu>',
  description: 'Establish a clickable menu',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<meta />',
  description: 'For non-visible metadata about the document including SEO data, character encodings and third-party data',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<meter>',
  description: 'Show a progress meter graphic',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<nav>',
  description: 'Define navigational links',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<noscript>',
  description: 'Text to display when browser selects no scripting',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<object>',
  description: 'Embed an object like media',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<ol>',
  description: 'Set an ordered list',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<optgroup>',
  description: 'Set up an option group in a form',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<option>',
  description: 'For an option in a form',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<output>',
  description: 'For a calculated output area for a form',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<p>',
  description: 'Create a paragraph section',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<param>',
  description: 'For parameters for embedded plugins',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<picture>',
  description: 'Add flexibility with pictures and images',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<pre>',
  description: 'For preformatted text',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<progress>',
  description: 'Show a progress meter',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<q>',
  description: 'Include a quote in text',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<rp>',
  description: 'Add a ruby parentheses for text',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<rt>',
  description: 'Add a ruby tag for text',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<ruby>',
  description: 'Provide pronunciation for ruby text',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<s>',
  description: 'For strikethrough text',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<samp>',
  description: 'Show sample output',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<script>',
  description: 'To include a script like JavaScript',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<section>',
  description: 'Set a section of the document',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<select>',
  description: 'Establish a select list in a form',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<small>',
  description: 'Print using a smaller font',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<source>',
  description: 'Settings for media sources',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<span>',
  description: 'Set a span of text with different formatting',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<strong>',
  description: 'Make text stronger or more important',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<style>',
  description: 'Set a style for an HTML document',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<sub>',
  description: 'Print text in subscript',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<summary>',
  description: 'Show a summary within a details tag',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<sup>',
  description: 'Print text in superscript',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<table>',
  description: 'Present data in a table',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<tbody>',
  description: 'Add a table body',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<td>',
  description: 'Establish table data',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<textarea>',
  description: 'A multi-line text area for a form',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<tfoot>',
  description: 'For a table footer section',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<th>',
  description: 'For a table heading',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<thead>',
  description: 'For a table header section',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<time>',
  description: 'For time in a machine-readable form',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<title>',
  description: 'The title of a document',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<tr>',
  description: 'Establish a table row',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<ul>',
  description: 'For an unordered list',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<var>',
  description: 'Give text a variable name',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}, {
  title: '<video>',
  description: 'Insert media as a video',
  preview: ``,
  categories: ['Flow', 'Phrasing', 'Palpable']
}]