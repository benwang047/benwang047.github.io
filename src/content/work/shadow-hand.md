---
title: "21-DoF robotic hand"
summary: "Mechanical architecture and experimental infrastructure for visual self-modeling."
role: "Robot hardware, simulation & control"
date: 2026-07-01
tags: ["Mechanisms", "Actuation", "URDF / PyBullet"]
featured: true
---

A 21-DoF robotic hand developed for visual self-modeling research in Duke’s General Robotics Lab. The broader project studies how joint configuration, physical shape, and visual appearance relate, and uses that relationship to estimate robot state from images.

![Shadow robotic hand demonstration](/shadow.gif)

*Project media: Duke General Robotics Lab.*

## My contribution

My work focused on the physical robot and experimental system: finger mechanisms, palm and joint layout, actuator packaging, outer geometry, URDF/PyBullet modeling, motor control, and system integration. I also supported deployment of the visual inference pipeline and analysis of pose coverage.

## A design decision

The external geometry covers the motors and internal linkages. This made the robot’s visual embodiment more consistent for image-based experiments, while requiring the mechanisms and outer surfaces to be developed together.

## A debugging example

A communication bottleneck limited control frequency. I isolated joint groups to locate the constraint and restructured motor commands into batch updates.

## Public work

[Paper](https://arxiv.org/abs/2607.22434) · [Project](https://generalroboticslab.com/Shadow) · [Code](https://github.com/generalroboticslab/shadow-dance)
