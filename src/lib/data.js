export const HTMLTags = [
  {
    tag: '<a>',
    desc: 'Anchor or Hyperlink',
    previews: [{
      semantic: '<a href="/docs/tags/a">hyperlink</a>',
      example: '<a class="padding-2 background-dark text-light-darken hover-text-light hover-reset-underline animate" href="/docs/tags/a">hyperlink</a>'
    }]
  }, {
    tag: '<abbr>',
    desc: 'Abbreviation or Acronym',
    previews: [{
      semantic: '<abbr>abbreviation</abbr>',
      example: '<abbr class="padding-2 background-dark text-light-darken hover-text-light">abbreviation</abbr>'
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
    desc: 'Article Contents',
    previews: [{
      semantic: '<article>Placeholder text</article>',
      example: '<article>Placeholder text</article>'
    }]
  }, {
    tag: '<aside>',
    desc: 'Aside',
    previews: [{
      semantic: '<aside>Placeholder text</aside>',
      example: '<aside>Placeholder text</aside>'
    }]
  }, {
    tag: '<audio>',
    desc: 'Embedded Audio',
    previews: [{
      semantic: '<audio>Placeholder text</audio>',
      example: '<audio>Placeholder text</audio>'
    }]
  }, {
    tag: '<b>',
    desc: 'Bring Attention',
    previews: [{
      semantic: '<b>Placeholder text</b>',
      example: '<b>Placeholder text</b>'
    }]
  }, {
    tag: '<bdi>',
    desc: 'Bidirectional Isolation',
    previews: [{
      semantic: '<bdi>Placeholder text</bdi>',
      example: '<bdi>Placeholder text</bdi>'
    }]
  }, {
    tag: '<bdo>',
    desc: 'text direction overriding',
    previews: [{
      semantic: '<bdo>Placeholder text</bdo>',
      example: '<bdo>Placeholder text</bdo>'
    }]
  }, {
    tag: '<blockquote>',
    desc: '',
    previews: [{
      semantic: '<blockquote>Placeholder text</blockquote>',
      example: '<blockquote class="padding-3 background-dark">placeholder text</blockquote>'
    }]
  }, {
    tag: '<body>',
    desc: '',
    previews: [{
      semantic: '<body>Placeholder text</body>',
      example: '<body>Placeholder text</body>'
    }]
  }, {
    tag: '<button>',
    desc: '',
    previews: [{
      semantic: '<button>Placeholder text</button>',
      example: '<button class="padding-2 background-dark hover-background-dark-lighten text-light-lighten animate reset-border">Placeholder text</button>'
    }]
  }, {
    tag: '<canvas>',
    desc: '',
    previews: [{
      semantic: '<canvas>Placeholder text</canvas>',
      example: '<canvas>Placeholder text</canvas>'
    }]
  }, {
    tag: '<caption>',
    desc: '',
    previews: [{
      semantic: '<caption>Placeholder text</caption>',
      example: '<caption>Placeholder text</caption>'
    }]
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

export const sizing = [
  { id: 'none', value: '0', related: ['border', 'height', 'margin', 'padding', 'text', 'width'] }, 
  { id: 'pixel', value: '1px', related: ['border', 'height', 'margin', 'padding', 'text', 'width'] }, 
  { id: 'prose', value: '60ch', related: ['width'] },
  { id: '075', value: '.75rem', related: ['border', 'height', 'margin', 'padding', 'text', 'width'] }, 
  { id: '100', value: '1rem', related: ['border', 'height', 'margin', 'padding', 'text', 'width'] }, 
  { id: '125', value: '1.25rem', related: ['border', 'height', 'margin', 'padding', 'text', 'width'] }, 
  { id: '150', value: '1.5rem', related: ['border', 'height', 'margin', 'padding', 'text', 'width'] },
]