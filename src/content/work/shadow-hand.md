---
title: "21-DoF robotic hand"
summary: "Designing, building, and testing an anthropomorphic hand for visual self-modeling."
role: "Hand design, simulation & motor control"
date: 2026-07-01
tags: ["Mechanisms", "Actuation", "URDF / PyBullet"]
featured: true
---

This 21-DoF anthropomorphic hand was developed for visual self-modeling research at Duke. The goal is to relate joint positions to the hand’s appearance and use visual observations to estimate its state.

![Shadow robotic hand demonstration](/shadow.gif)

*Project media: Duke General Robotics Lab.*

## What I built

I designed and built the hand’s mechanical hardware from the ground up: finger mechanisms, palm and joint layout, actuator packaging, and the outer TPU covers. I then completed two major hardware revisions as testing exposed packaging and range-of-motion limits.

The TPU covers were part of my design from the beginning. Early prototypes did not compress around the joints as intended, and the fingertip attachments could come loose. I iterated the covers into foldable joint sections and added screw-retained fingertip attachments, then tested the changes on the physical hand.

## Simulation and integration

I built corresponding URDF/PyBullet models, calibrating the joint limits, collision geometry, and inertial properties for simulation and mechanical design iteration. I also developed the multithreaded Python motor-control and data-logging pipeline.

Motor communication became a bottleneck as the number of actuators increased. I tested joint groups separately, traced the issue to the serial bus, and switched to batched commands to improve high-DoF operation. I also worked on connecting the physical hand to the visual inference pipeline and analyzing pose-space coverage.

The project combines mechanical design, control, simulation, and learned visual self-modeling. My contribution centered on the hardware, sim-to-real setup, motor control, and physical testing; the learned model was a team research effort.

## Public links

[Paper](https://arxiv.org/abs/2607.22434) · [Project](https://generalroboticslab.com/Shadow)
