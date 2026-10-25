---
title: "Computational modular robotics"
summary: "Finding robot configurations that can reach the target and carry the load."
role: "Graduation research: hardware & computational design"
date: 2026-10-01
tags: ["Configuration search", "Load analysis", "MuJoCo"]
featured: true
---

I’m exploring how a shared set of actuated modules and passive links could be assembled into robots for different tasks. This is my graduation research.

I work on both the physical modules—their connections and links—and the simulation workflow that searches for useful configurations. The two inform each other: a promising arrangement in simulation has to be something we can actually build.

Reachability alone isn’t enough. The search also checks joint limits, task geometry, payload, motor torque, and loads at the couplers. I’m building those checks into the evaluation so an overloaded design doesn’t look like a good answer just because it reaches the target.

The work is ongoing, with physical arm demonstrations next. I’ll share more when the research is public.
