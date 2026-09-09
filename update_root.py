import os
import zipfile

def update_repo():
    if not os.path.exists("index.html"):
        print("Error: index.html not found. Please run this script in your repo root.")
        return

    with open("index.html", "r", encoding="utf-8") as f:
        html = f.read()

    # 1. CSS Additions (Red shade titles, fancy list, bigger photo, highlights)
    css_additions = """
    /* --- UPDATES: Red shade, slightly smaller section titles --- */
    h1, h2, h3, .section-title {
        font-size: 1.6em !important;
        font-weight: 700 !important;
        color: #8b0000 !important; /* Dark Red Shade */
        margin-top: 1.5em !important;
        border-bottom: 2px solid #f0e0e0 !important;
        padding-bottom: 0.3em !important;
    }

    /* --- UPDATES: Highlight Education & Research Interest --- */
    #education h2, #research-interest h2, 
    .education .section-title, .research-interest .section-title,
    section.education h2, section.research-interest h2 {
        color: #ab0505 !important; 
        text-transform: uppercase !important;
        letter-spacing: 0.05em !important;
        border-bottom: 3px solid #8b0000 !important;
    }

    /* --- UPDATES: Bigger profile photo --- */
    img.profile-photo, img.author-avatar, img.photo, .profile img, header img {
        width: 220px !important;
        height: 220px !important;
        border-radius: 50% !important;
        object-fit: cover !important;
    }

    /* --- UPDATES: Fancy Publication List Styling --- */
    #publications ol, .publications ol {
        counter-reset: fancy-counter;
        list-style: none !important;
        padding-left: 0 !important;
    }
    #publications li, .publications li {
        counter-increment: fancy-counter;
        margin-bottom: 2em !important;
        display: flex !important;
        align-items: flex-start !important;
    }
    #publications li::before, .publications li::before {
        content: counter(fancy-counter) ".";
        font-weight: 800 !important;
        color: #8b0000 !important;
        font-size: 1.5em !important;
        margin-right: 0.8em !important;
        min-width: 40px !important;
        line-height: 1.2 !important;
    }

    /* --- UPDATES: Publication small links --- */
    .pub-links {
        font-size: 0.85em !important;
        margin-top: 6px !important;
        margin-bottom: 12px !important;
    }
    .pub-links a {
        margin-right: 15px !important;
        color: #a02020 !important;
        text-decoration: none !important;
        font-weight: 600 !important;
        border: 1px solid #a02020 !important;
        padding: 2px 8px !important;
        border-radius: 4px !important;
        transition: all 0.2s ease !important;
    }
    .pub-links a:hover { 
        background-color: #8b0000 !important; 
        color: white !important; 
        text-decoration: none !important; 
    }
    """

    # 2. JS Logic (Reordering, UL to OL, Links)
    js_logic = """
    <script>
    document.addEventListener("DOMContentLoaded", function () {
        // 1. Find publication list, convert UL to OL for proper numbering
        var pubList = document.querySelector("#publications ul, .publications ul, #publications .pub-list, .publications .pub-list");
        if (pubList) {
            var newOl = document.createElement('ol');
            newOl.className = pubList.className; // retain classes
            while (pubList.firstChild) {
                newOl.appendChild(pubList.firstChild); // move items
            }
            pubList.parentNode.replaceChild(newOl, pubList);
            
            // 2. Reverse publication order (fix upside down)
            var items = Array.from(newOl.children);
            items.reverse().forEach(function (item) { newOl.appendChild(item); });
        }

        // 3. Apply Title Links and Small Keywords Logic
        var pubItems = document.querySelectorAll("#publications li, .publications li");
        pubItems.forEach(function (li) {
            var titleLink = li.querySelector(".pub-title, a.title, h3 a, li > a:first-child");
            if (!titleLink) return;

            var paper = li.getAttribute("data-paper");
            var project = li.getAttribute("data-project");
            var github = li.getAttribute("data-github");

            var linksDiv = document.createElement("div");
            linksDiv.className = "pub-links";

            if (paper) {
                // Publication exists: Title -> Paper, add Project & Github links
                titleLink.href = paper;
                titleLink.target = "_blank";
                
                if (project) {
                    var projA = document.createElement("a");
                    projA.href = project; projA.textContent = "Project"; projA.target = "_blank";
                    linksDiv.appendChild(projA);
                }
                if (github) {
                    var ghA = document.createElement("a");
                    ghA.href = github; ghA.textContent = "GitHub"; ghA.target = "_blank";
                    linksDiv.appendChild(ghA);
                }
            } else {
                // No publication: Title -> Project, add Github link alone
                if (project) {
                    titleLink.href = project;
                    titleLink.target = "_blank";
                }
                if (github) {
                    var ghA = document.createElement("a");
                    ghA.href = github; ghA.textContent = "GitHub"; ghA.target = "_blank";
                    linksDiv.appendChild(ghA);
                }
            }

            if (linksDiv.children.length > 0) {
                titleLink.insertAdjacentElement("afterend", linksDiv);
            }
        });
    });
    </script>
    """

    # Inject CSS
    if "<style>" in html:
        html = html.replace("</style>", css_additions + "\n</style>")
    else:
        html = html.replace("</head>", f"<style>{css_additions}</style>\n</head>") if "</head>" in html else html + f"<style>{css_additions}</style>"

    # Inject JS
    if "</body>" in html:
        html = html.replace("</body>", js_logic + "\n</body>")
    else:
        html += js_logic

    with open("index.html", "w", encoding="utf-8") as f:
        f.write(html)

    # Create README for the zip
    readme_content = """# Updates Applied v2\n\nThis package contains the updated `index.html`.\n\n## What was changed?\n1. **Publications Logic**: Title links to Paper if `data-paper` exists, else links to `data-project`. Small keyword buttons (GitHub, Project) are injected directly below the title based on the presence of those attributes.\n2. **CSS**: Section titles are now a dark red shade (`#8b0000`), size `1.6em`. Profile photo is 220x220. Education/Research titles are uppercase and highlighted in red.\n3. **Fancy Numbering**: The script converts the publication list to an Ordered List (`<ol>`) and styles the numbers to be large, bold, and red, aligning neatly with the text.\n4. **Order**: Publications list is automatically reversed to fix upside-down indexing.\n\n## Action Required for Publications:\nTo make the links work, you MUST add these attributes to your `<li>` tags in your HTML:\n- `data-paper="https://doi.org/..."` (The publication link)\n- `data-project="projects/url"` (The project page link)\n- `data-github="https://github.com/..."` (The GitHub repo link)\n\nExample:\n`<li data-paper="https://doi.org/xyz" data-project="/projects/proj1" data-github="https://github.com/user/proj1">`\n  `<a href="#" class="pub-title">Your Publication Title</a>`\n`</li>`\n\n## Files:\n- `index.html` -> Overwrite your current root index.html\n- `README_UPDATES.md` -> This file\n\n## Untouched:\n- `.github/` (workflows) and all other files remain exactly as they were.\n"""
    with open("README_UPDATES.md", "w", encoding="utf-8") as f:
        f.write(readme_content)

    # Create ZIP
    with zipfile.ZipFile("final_update.zip", "w") as z:
        z.write("index.html")
        z.write("README_UPDATES.md")
    
    print("Success! 'final_update.zip' created with your updated files.")

if __name__ == "__main__":
    update_repo()