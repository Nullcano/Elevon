export const HTMLTags = [
  {
    tag: '<a>',
    desc: 'Anchor or Hyperlink',
    previews: [{
      semantic: '<a href="/docs/tags/a">hyperlink</a>',
      example: '<a class="padding-all-small background-dark text-light-darken hover-text-light hover-reset-underline animate" href="/docs/tags/a">hyperlink</a>'
    }]
  }, {
    tag: '<abbr>',
    desc: 'Abbreviation or Acronym',
    previews: [{
      semantic: '<abbr>abbreviation</abbr>',
      example: '<abbr class="padding-all-small background-dark text-light-darken hover-text-light">abbreviation</abbr>'
    }]
  }, {
    tag: '<address>',
    desc: 'Contact Address',
    previews: [{
      semantic: `<address>
  Email: <a href="mailto:name@example.com">name@example.com</a>
  <hr>
  Phone: <a href="tel:+15555555555">(555) 555-5555</a>
</address>`,
      example: `<address>
  <a href="mailto:name@example.com" data-emoji>name@example.com</a>
  <hr>
  <a href="tel:+15555555555" data-emoji>(555) 555-5555</a>
</address>`
    }]
  }, {
    tag: '<article>',
    desc: 'article'
  }, {
    tag: '<aside>',
    desc: 'aside content'
  }, {
    tag: '<audio>',
    desc: 'Embedded Audio'
  }, {
    tag: '<b>',
    desc: 'Bring Attention'
  }, {
    tag: '<bdi>',
    desc: 'Bidirectional Isolation'
  }, {
    tag: '<bdo>',
    desc: 'text direction overriding'
  }, {
    tag: '<blockquote>',
    desc: ''
  }, {
    tag: '<body>',
    desc: ''
  }, {
    tag: '<button>',
    desc: ''
  }, {
    tag: '<canvas>',
    desc: ''
  }, {
    tag: '<caption>',
    desc: ''
  }, {
    tag: '<cite>',
    desc: 'cite',
    previews: [
      {
        semantic: '<cite>Cite</cite>',
        example: '<cite>Cite</cite>'  
      }
    ]
  }, {
    tag: '<h1> - <h6>',
    desc: 'headings',
    previews: [
      {
        semantic: '<h1>Heading 1</h1>',
        example: '<h1>Heading 1</h1>'  
      }, {
        semantic: '<h2>Heading 2</h2>',
        example: '<h2>Heading 2</h2>'  
      }, {
        semantic: '<h3>Heading 3</h3>',
        example: '<h3>Heading 3</h3>'  
      }, {
        semantic: '<h4>Heading 4</h4>',
        example: '<h4>Heading 4</h4>'  
      }, {
        semantic: '<h5>Heading 5</h5>',
        example: '<h5>Heading 5</h5>'  
      }, {
        semantic: '<h6>Heading 6</h6>',
        example: '<h6>Heading 6</h6>'  
      }
    ]
  }
]