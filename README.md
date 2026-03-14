# Prepared with Hygiene — AI-Powered Kitchen Certification System

## Overview

Prepared with Hygiene is an automated, AI-driven hygiene monitoring system designed to grant a trust-based certification to restaurants. The system establishes an industry standard comparable to ISO certification for food preparation, providing a verifiable badge displayed to consumers on major food delivery platforms such as Swiggy and Zomato.

The core philosophy positions this system not as a punitive surveillance tool, but as a positive, trust-building advertisement for partner restaurants. The current scope is strictly limited to visual hygiene compliance.

---

## How It Works

### The AI Reasoning Engine

The system is built on a Multi-Agent AI architecture. Rather than relying on rigid, hard-coded object detection models, hygiene standards are ingested as conversational policies — a living constitution — processed through a three-tier Debate mechanism.

#### Agent A — Vision Inspector (Observation)
Built on a fast, lightweight multimodal model (e.g., Gemini 1.5 Flash). This agent observes kitchen footage and objectively describes what is occurring at each moment, without passing judgment.

Example output: "A person is touching raw chicken at timestamp 0:12. The person is not wearing gloves."

#### Agent B — Policy Auditor (Reasoning)
Built on a high-reasoning model (e.g., Gemini 3 Pro). This agent reads the Vision Inspector's output, cross-references it against the defined hygiene policies, and constructs an argument for whether a violation has occurred.

#### Agent C — Final Judge (Classification)
A fast text-based LLM that evaluates the debate between the Inspector and Auditor. It produces a strict binary classification — Violated or Not Violated — and formats the final structured JSON output.

---

## Video Processing Strategy

To ensure a reliable and cost-effective prototype, the system avoids processing continuous video blocks.

- **Periodic Snapshots:** Frames are extracted from pre-recorded test clips at a rate of 1 to 2 frames per second.
- **Efficiency:** Redundant frames (such as an empty prep station) are discarded, directing the AI's token budget toward moments of action.
- **Concrete Evidence:** Each extracted frame serves as verifiable proof, which is directly attached to the Audit Log when a violation is detected.

---

## Real-Time Intervention and the Audit Log

The system features a closed, fully automated feedback loop that allows restaurants to correct issues immediately without requiring human-in-the-loop verification.

### Audit Log
As the AI agents debate each frame, they generate a transparent reasoning transcript that justifies why a hygiene label is awarded or revoked.

### Telegram Alerts
The moment the Final Judge classifies a frame as Violated, the backend automatically sends an instant Telegram message to the restaurant manager.

### Actionable Notifications
Alerts are not vague warnings. Each notification includes:
- The exact timestamp and visual frame of the recorded violation.
- A summary of the AI debate explaining the specific policy breach.

Example: "Cross-contamination detected: Policy 4 violated due to bare-hand contact with raw poultry."

---

## Technical Stack

| Component | Technology | Purpose |
|---|---|---|
| Frontend | React | Displays the Prepared with Hygiene badge and verifiable status to the end consumer |
| Data Ingestion | Python (OpenCV / FFmpeg) | Processes pre-recorded video clips and extracts periodic frames (1-2 FPS) for the AI |
| AI Backend | Multi-Agent LLMs | Facilitates the Inspector / Auditor / Judge debate and outputs a binary classification |
| Intervention | Telegram Bot API | Automatically pushes timestamped evidence and debate summaries to restaurant managers |
| Collaboration | Git / Google Sheets | Active workspace for managing prompts, policies, and code versioning |

---

## Project Scope

This project was scoped for a hackathon environment. Feature development is intentionally constrained to visual hygiene compliance to avoid feature creep. All modules are designed to be fast, verifiable, and production-demonstrable within the hackathon timeline.
