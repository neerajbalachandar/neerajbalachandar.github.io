---
# Leave the homepage title empty to use the site title
title: ""
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "5rem"

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
        url: uploads/neeraj_cv.pdf
    design:
      background:
        color: "#f7f7f5"

  - block: markdown
    id: research
    content:
      title: Research Focus
      subtitle: "Physics-informed models that remain practical for control and design"
      text: |-
        I work at the intersection of physics-based modeling and data-driven methods for complex, unsteady dynamics. My goal is to build models that are fast, interpretable, and grounded in the governing equations.

        **Core themes**
        - Partial differential equations and reduced-order modeling
        - Optimal control for underactuated and bio-inspired systems
        - Unsteady aerodynamics, vortex dynamics, and wake control
        - Fluid-structure interaction and aeroelasticity
        - Complex systems and nonlinear dynamics

        **Methods I use**
        - Low- and variable-fidelity simulation (e.g., vortex particle methods)
        - Data-driven system identification and surrogate modeling
        - Numerical optimization, stability analysis, and control design

  - block: collection
    id: ongoing
    content:
      title: Ongoing Research
      text: "Active projects that I am currently developing."
      filters:
        folders:
          - project
        tag: ongoing
    design:
      view: article-grid
      columns: 2
      fill_image: true

  - block: collection
    id: past
    content:
      title: Past Research and Explorations
      text: "Completed or archived projects."
      filters:
        folders:
          - project
        tag: past
    design:
      view: article-grid
      columns: 2
      fill_image: true

  - block: collection
    id: publications
    content:
      title: Publications and Manuscripts
      text: "Selected manuscripts and technical reports (details below)."
      filters:
        folders:
          - publication
        exclude_featured: false
    design:
      view: citation

  - block: collection
    id: news
    content:
      title: Recent News
      subtitle: ""
      text: ""
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
