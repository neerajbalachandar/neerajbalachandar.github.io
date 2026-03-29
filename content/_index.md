---
# Leave the homepage title empty to use the site title
title: ""
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "3rem"

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: |-
        I am an undergraduate researcher in Mechanical Engineering (Robotics minor) at IIT Hyderabad.
        My work centers on data-driven modeling and optimal control for unsteady flows, aeroelasticity, and bio-inspired locomotion.
        I am preparing PhD applications in the US and welcome research discussions and collaborations.
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: uploads/resume.pdf
    design:
      css_class: dark
      background:
        color: black
        image:
          filename: bg.jpeg
          filters:
            brightness: 0.5
          size: cover
          position: center
          parallax: false

  - block: collection
    id: ongoing
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
      columns: 3
      fill_image: true

  - block: collection
    id: publications
    content:
      title: Recent Publications
      text: "Selected manuscripts and technical reports. [View all publications](/publication/)"
      count: 6
      filters:
        folders:
          - publication
        exclude_featured: false
    design:
      view: citation

  - block: collection
    id: past
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
      columns: 3
      fill_image: true

  - block: collection
    id: notes
    content:
      title: Course Notes
      count: 0
      archive:
        enable: false
      filters:
        folders:
          - notes
    design:
      view: article-grid
      columns: 3
      fill_image: true

  - block: collection
    id: blogs
    content:
      title: Blogs
      count: 0
      archive:
        enable: false
      filters:
        folders:
          - blog
    design:
      view: article-grid
      columns: 3
      fill_image: true

  - block: collection
    id: news
    content:
      title: Recent Activity
      subtitle: ""
      text: "[View all news](/post/)"
      # Page type to display. E.g. post, talk, publication...
      page_type: post
      # Choose how many pages you would like to display (0 = all pages)
      count: 3
      # Filter on criteria
      filters:
        author: ""
        category: ""
        tag: "news"
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ""
      # Choose how many pages you would like to offset by
      offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      # Choose a layout view
      view: date-title-summary
      # Reduce spacing
      spacing:
        padding: [0, 0, 0, 0]
---
