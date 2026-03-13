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

  - block: features
    id: research-focus
    content:
      title: Research Focus
      items:
        - name: Reduced-Order Modeling
          description: Fast, interpretable models grounded in PDEs.
          icon: chart-bar
        - name: Optimal Control
          description: Constraint-aware trajectories and stabilization.
          icon: adjust-horizontal
        - name: Unsteady Aerodynamics
          description: Vortex dynamics, wakes, and flow control.
          icon: wind
        - name: Fluid-Structure Interaction
          description: Coupled flow and structural dynamics.
          icon: arrows-right-left
        - name: Data-driven Modeling
          description: System identification and surrogate models.
          icon: cpu-chip
        - name: Nonlinear Dynamics
          description: Stability, bifurcations, and complex systems.
          icon: sparkles
    design:
      columns: 3

  - block: collection
    id: ongoing
    content:
      title: Ongoing Research
      text: "Active projects in progress. [View all projects](/projects/)"
      filters:
        folders:
          - project
        tag: ongoing
    design:
      view: article-grid
      columns: 2
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
      title: Past / Small Projects
      text: "Completed or exploratory work. [View all projects](/projects/)"
      filters:
        folders:
          - project
        tag: past
    design:
      view: article-grid
      columns: 2
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
