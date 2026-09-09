# Updates Applied v2

This package contains the updated `index.html`.

## What was changed?
1. **Publications Logic**: Title links to Paper if `data-paper` exists, else links to `data-project`. Small keyword buttons (GitHub, Project) are injected directly below the title based on the presence of those attributes.
2. **CSS**: Section titles are now a dark red shade (`#8b0000`), size `1.6em`. Profile photo is 220x220. Education/Research titles are uppercase and highlighted in red.
3. **Fancy Numbering**: The script converts the publication list to an Ordered List (`<ol>`) and styles the numbers to be large, bold, and red, aligning neatly with the text.
4. **Order**: Publications list is automatically reversed to fix upside-down indexing.

## Action Required for Publications:
To make the links work, you MUST add these attributes to your `<li>` tags in your HTML:
- `data-paper="https://doi.org/..."` (The publication link)
- `data-project="projects/url"` (The project page link)
- `data-github="https://github.com/..."` (The GitHub repo link)

Example:
`<li data-paper="https://doi.org/xyz" data-project="/projects/proj1" data-github="https://github.com/user/proj1">`
  `<a href="#" class="pub-title">Your Publication Title</a>`
`</li>`

## Files:
- `index.html` -> Overwrite your current root index.html
- `README_UPDATES.md` -> This file

## Untouched:
- `.github/` (workflows) and all other files remain exactly as they were.
