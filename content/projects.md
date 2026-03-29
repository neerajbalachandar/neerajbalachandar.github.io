---
title: 'Research'
date: 2026-03-29
slug: research
aliases:
  - /projects/
type: landing

design:
  # Section spacing
  spacing: '3rem'

# Page sections
sections:
  - block: collection
    content:
      title: Ongoing Projects
      count: 0
      sort_by: weight
      sort_ascending: true
      archive:
        enable: false
      filters:
        folders:
          - project
        tag: ongoing
    design:
      view: article-grid
      fill_image: false
      columns: 3

  - block: collection
    content:
      title: Past Projects
      count: 0
      sort_by: weight
      sort_ascending: true
      archive:
        enable: false
      filters:
        folders:
          - project
        tag: past
    design:
      view: article-grid
      fill_image: false
      columns: 3
---
