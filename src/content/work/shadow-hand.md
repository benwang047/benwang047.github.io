---
title: "21-DoF robotic hand"
summary: "Building a robotic hand and helping it estimate its state from images."
role: "Robot hardware, simulation & control"
date: 2026-07-01
tags: ["Mechanisms", "Actuation", "URDF / PyBullet"]
featured: true
---

A 21-DoF hand built for visual self-modeling research at Duke. The project asks how a robot’s joint positions relate to its shape and appearance—and how images can be used to estimate its state.

![Shadow robotic hand demonstration](/shadow.gif)

*Project media: Duke General Robotics Lab.*

I worked on the finger mechanisms, palm and joint layout, actuator packaging, and outer geometry. I also built the URDF/PyBullet model and worked on motor control and data logging. On the perception side, I helped deploy the visual inference pipeline and analyze pose coverage.

The outside of the hand mattered to the experiment. Covering the motors and linkages gave it a more consistent visible shape, so I had to develop the mechanisms and outer surfaces together.

Getting it moving reliably took some debugging. When motor communication limited the control rate, I tested joint groups separately to find the bottleneck, then reorganized the commands into batch updates.

## More on the project

[Paper](https://arxiv.org/abs/2607.22434) · [Project](https://generalroboticslab.com/Shadow) · [Code](https://github.com/generalroboticslab/shadow-dance)
