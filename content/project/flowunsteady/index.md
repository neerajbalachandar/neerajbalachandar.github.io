---
title: VarFIExI - Variable Fidelity Aeroelastic Solver
date: 2025-09-11
weight: 1
summary: "Coupled meshless rVPM with FEM (FEniCS) using preCICE-based implicit coupling and in-house partitioned explicit schemes."
tags:
  - ongoing
  - aeroelasticity
  - fluid-structure-interaction
links:
  - name: GitHub
    url: https://github.com/neerajbalachandar/VarFLEXI-rVPM-Fenics
  - name: PPT
    url: /uploads/presentations/flowunsteady.pdf
image:
  filename: featured.png
  focal_point: Center
detail_image: detail.png
relevant_publications:
  - title: VarFIExI - A Variable-Fidelity Framework for Unsteady Aeroelastic Coupling
    url: /publication/journal-article/
---

## Problem

VarFIExI is a variable-fidelity aeroelastic framework that couples vortex particle flow models with structural solvers. The aim is to retain key aeroelastic physics while keeping the computational cost low enough for design and control studies.

{{< project-detail-image >}}

## Approach
- rVPM flow solver coupled to FEM via preCICE
- Implicit and partitioned explicit coupling strategies
- Validation on benchmark aeroelastic cases
