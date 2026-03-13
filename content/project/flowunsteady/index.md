---
title: Aeroelastic Coupling of Variable-fidelity r-VPM Fluid Simulations with Structural Solver
date: 2025-09-11
summary: "Coupling variable-fidelity vortex particle flow models with structural dynamics for aeroelastic analysis."
tags:
  - ongoing
  - aeroelasticity
  - fluid-structure-interaction
  - vpm
links:
  - name: Code
    url: https://github.com/neerajbalachandar/reformulated-VPM-Julia-lang-simulations-FLOWUnsteady-
image:
  filename: featured.svg
  focal_point: Center
---

This project focuses on aeroelastic coupling between variable-fidelity vortex particle method (VPM) flow simulations and a structural solver. The goal is to enable efficient exploration of fluid-structure interaction phenomena without relying on fully high-fidelity CFD for every iteration.

## Research Questions
- How can variable-fidelity flow models be coupled to structural solvers without introducing instability?
- What is the fidelity threshold needed to capture key aeroelastic effects?

## Approach
- Two-way coupling between flow and structural solvers
- Stability analysis across a range of fidelity settings
- Validation against benchmark aeroelastic cases

## Current Status
Ongoing. Presently focused on coupling stability and time-stepping strategies.

## Tools
Julia-based flow solvers and custom structural dynamics modules.
