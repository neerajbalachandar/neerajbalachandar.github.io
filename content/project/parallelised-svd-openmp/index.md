---
title: Parallelised SVD (C, OpenMP)
date: 2024-06-01
weight: 10
summary: "Achieved 5x speedup under strong scaling while maintaining near-linear weak scaling performance."
tags:
  - past
  - hpc
links:
  - name: GitHub
    url: https://github.com/neerajbalachandar
  - name: PPT
    url: /uploads/presentations/parallelised-svd-openmp.pdf
image:
  filename: featured.png
  focal_point: Center
detail_image: detail.png
relevant_publications:
  - title: View Publications
    url: /publication/
---

## Problem

Implemented and optimized a parallel SVD routine in C with OpenMP, focusing on scaling behavior and performance profiling.

{{< project-detail-image >}}

## Approach
- Parallelized core matrix decomposition steps using OpenMP and optimized workload partitioning.
- Benchmarked strong and weak scaling to identify bottlenecks and quantify speedup.
