---
title: 'Research'
date: 2024-05-19
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
      sort_by: Params.weight
      sort_ascending: true
      archive:
        enable: false
      filters:
        folders:
          - project
        tag: ongoing
    design:
      view: article-grid
      fill_image: true
      columns: 3

  - block: collection
    content:
      title: Past Projects
      count: 0
      sort_by: Params.weight
      sort_ascending: true
      archive:
        enable: false
      filters:
        folders:
          - project
        tag: past
    design:
      view: article-grid
      fill_image: true
      columns: 3
---
