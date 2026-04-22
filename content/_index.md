---
# Leave the homepage title empty to use the site title
title: ""
date: 2026-03-29
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
        My name is Neeraj Balachandar, and I am a dual-degree student in Mechanical and Aerospace Engineering with a minor in Robotics at the Indian Institute         of Technology Hyderabad. My primary areas of research are scientific computing, nonlinear dynamics, optimal control, and the mathematical modeling of          complex dynamical systems.
        Currently, I am pursuing my research in the Dynamics and Control lab under the guidance of Dr. Vishnu R. Unni. My ongoing research focuses on two main         categories: system modeling and control. I work on developing computational methods for complex systems, data-driven methods for model order                   reduction, and operator learning to solve partial differential equations arising in fluid flow interactions and related natural phenomena.                     Additionally, I work on developing analytical and data-driven strategies to control dynamical systems. Some of the practical systems I study exhibit           collective behavior, such as multi-soft robotic swimmers, multi-agent drone swarms, and N-vortex problems.
        Following my graduation, I intend to pursue doctoral studies in applied mathematics, dynamics, and control, with the goal of advancing computational           and theoretical methods for complex physical systems.

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
      columns: 3
      fill_image: false

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
      columns: 3
      fill_image: false

  - block: collection
    id: news
    content:
      title: Recent Activity
      subtitle: ""
      text: ""
      page_type: post
      count: 3
      filters:
        author: ""
        category: ""
        tag: "news"
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ""
      offset: 0
      order: desc
    design:
      view: date-title-summary
      spacing:
        padding: [0, 0, 0, 0]

  - block: collection
    id: notes-blogs
    content:
      title: Course Notes & Blogs
      count: 0
      archive:
        enable: false
      filters:
        folders:
          - notes
          - blog
    design:
      view: article-grid
      columns: 3
      fill_image: false
---
