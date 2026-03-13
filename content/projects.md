---
title: 'Research'
date: 2024-05-19
type: landing

design:
  # Section spacing
  spacing: '5rem'

# Page sections
sections:
  - block: markdown
    content:
      title: Research Portfolio
      text: |-
        This page collects my ongoing and past research projects. Each project includes a short overview, methods, and links to code or reports when available.

  - block: collection
    content:
      title: Ongoing Projects
      text: "Active projects that I am currently developing."
      filters:
        folders:
          - project
        tag: ongoing
    design:
      view: article-grid
      fill_image: true
      columns: 2

  - block: collection
    content:
      title: Past Projects
      text: "Completed or archived projects."
      filters:
        folders:
          - project
        tag: past
    design:
      view: article-grid
      fill_image: true
      columns: 2
---
