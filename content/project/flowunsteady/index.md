---
title: VarFIExI - Variable Fidelity Aeroelastic Solver
date: 2025-09-11
summary: "Coupled meshless rVPM with FEM (FEniCS) using preCICE-based implicit coupling and in-house partitioned explicit schemes."
tags:
  - ongoing
  - aeroelasticity
  - fluid-structure-interaction
links:
  - name: Code
    url: https://github.com/neerajbalachandar/reformulated-VPM-Julia-lang-simulations-FLOWUnsteady-
image:
  filename: solver.png
  focal_point: Center
---

VarFIExI is a variable-fidelity aeroelastic framework that couples vortex particle flow models with structural solvers. The aim is to retain key aeroelastic physics while keeping the computational cost low enough for design and control studies.

## Highlights
- rVPM flow solver coupled to FEM via preCICE
- Implicit and partitioned explicit coupling strategies
- Validation on benchmark aeroelastic cases
