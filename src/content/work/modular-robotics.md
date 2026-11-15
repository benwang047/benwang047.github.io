---
title: "Computational modular robotics"
summary: "Designing smaller robot modules and finding configurations that work under real load limits."
role: "Module design, coupler testing & configuration search"
date: 2026-10-01
tags: ["Module Design", "Evolutionary Search", "Coupler Testing", "Gait Optimization"]
featured: true
---

This graduation research asks how one standardized actuator module, paired with different printed links, could form robots for different tasks. I developed the module and coupling hardware alongside the simulation and load-checking workflow. The aim is not just to find a robot that reaches a target, but one whose motors and connections can carry the load.

## Hardware design

The early actuator module was roughly 110 × 110 × 110 mm and 500–600 g. Through packaging and interface redesign, I reduced it to approximately 68 × 68 × 72 mm and 290 g.

I designed tool-free magnetic couplers and built prototypes for axial and off-axis load testing. Those tests helped establish practical mechanical limits for the configuration search.

## Configuration search and results

The task-driven search evaluates reachability, joint limits, collision, payload, actuator torque, and loads at the couplers. Across the project, I evaluated approximately 80,000 simulated configurations.

Different workspaces produced different answers. For the open-table pick-and-place task, a four-module arm was a good solution. The CNC-loading setup required a different arrangement with six modules. Its simulated coupler bending load exceeded the tested limit, making the connector—not just reachability—a critical design constraint.

For legged configurations, I optimized open-loop gait parameters with the Cross-Entropy Method (CEM), running candidate motions in GPU-batched MuJoCo/MJX simulations and rechecking selected gaits in CPU MuJoCo. This controller optimization is separate from the task-driven robot-configuration search.

These are simulation results; a complete arm or walker has not yet been validated as an assembled hardware system. Coupler prototypes have been bench-tested separately.

[View the simulation results and GIFs](/projects/modular-robots/)
