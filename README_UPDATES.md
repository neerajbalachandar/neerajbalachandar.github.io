# Updates Applied v3

## What was changed?
1. **Blogs Section**: Added a new "Blogs" section with block layouts for small blogs and course notes. Course notes prompt for a password. (You must edit index.html to put your real links and passwords in the JS template).
2. **Removed Sections**: Photography, Extracurricular Activities, Technical Skills, and Relevant Coursework have been completely removed from the DOM.
3. **Experience / Past Projects**: Bullet points under Experience were moved to a new "Past Projects" section. Experience now only shows titles/roles.
4. **Recent Activity**: Made engaging with a side border and dynamic 'arXiv' badges added to any list item containing the word 'arxiv'.
5. **Photos**: Profile photo increased to 280x280px. Project photos increased to 150x150px.

## Action Required:
Open `index.html` and search for `<!-- Blog Block Example -->` and `<!-- Course Note Block Example -->`. Replace the dummy URLs (`/blog/YOUR_POST_SLUG/`, `https://drive.google.com/YOUR_LINK`) and `YOUR_PASSWORD` with your actual data.

## Files:
- `index.html` -> Overwrite your current root index.html
- `README_UPDATES.md` -> This file
