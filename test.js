const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const config = require('./config');

test('it generates direction variants', () => {
  const input = `
		@variants rtl {
			.ml-5 { margin-left: 1.25rem; }
			.ml-4 { margin-left: 1rem; }
		}
	`;

  const output = `.ml-5 { margin-left: 1.25rem;
}

.ml-4 { margin-left: 1rem;
}

html:lang(ar) .rtl\\:ml-5 { margin-left: 1.25rem;
}

html:lang(ar) .rtl\\:ml-4 { margin-left: 1rem;
}`;

  return postcss([tailwindcss(config)])
    .process(input, { from: undefined })
    .then((result) => {
      expect(result.css).toMatch(output);
      expect(result.warnings().length).toBe(0);
    });
});
