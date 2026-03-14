# Project Blueprint: AI-Powered "Prepared with Hygiene" Certification

## 1. Executive Summary & Vision
[span_0](start_span)The objective of this project is to build an automated, AI-driven hygiene monitoring system that grants a "Prepared with Hygiene" certification to restaurants[span_0](end_span). [span_1](start_span)The core philosophy is to establish an industry standard akin to an ISO certification for food preparation, or a high-trust label like "Amazon's Choice"[span_1](end_span). [span_2](start_span)Instead of acting as a punitive surveillance tool, this system is marketed to restaurants as a positive, trust-building advertisement[span_2](end_span). [span_3](start_span)For the end consumer, it manifests as a verifiable preference and badge on major food delivery platforms like Swiggy and Zomato[span_3](end_span). [span_4](start_span)To avoid feature creep during the hackathon, the scope is strictly limited to visual hygiene compliance[span_4](end_span).

## 2. The Core Engine: The AI Reasoning Layer
[span_5](start_span)Unlike traditional computer vision models that rely on rigid, hard-coded object detection, this system utilizes a sophisticated Multi-Agent AI architecture[span_5](end_span). [span_6](start_span)Hygiene standards are fed into the system as conversational policies (a "living constitution")[span_6](end_span). [span_7](start_span)To process this, the system uses a three-tier "Debate" mechanism[span_7](end_span):

* **[span_8](start_span)Agent A - The "Vision Inspector" (Observation):** Built on a fast, lightweight multimodal model (e.g., Gemini 1.5 Flash)[span_8](end_span). [span_9](start_span)Its sole job is to look at the kitchen footage and objectively state what is happening without passing judgment (e.g., "A person is touching raw chicken at timestamp 0:12. The person is not wearing gloves.")[span_9](end_span).
* **[span_10](start_span)Agent B - The "Policy Auditor" (Reasoning):** Built on a high-reasoning model (e.g., Gemini 3 Pro)[span_10](end_span). [span_11](start_span)It reads the text output from the Vision Inspector, cross-references it against the strict hygiene policies, and argues whether a violation occurred[span_11](end_span).
* **[span_12](start_span)Agent C - The "Final Judge" (Classification):** A fast text-based LLM that evaluates the debate between the Inspector and Auditor[span_12](end_span). [span_13](start_span)It distills the complex reasoning into a strict binary classification (Violated or Not Violated) and formats the final JSON output[span_13](end_span).

## 3. Video Processing Strategy: Frame Extraction
[span_14](start_span)To ensure a reliable, fast, and cost-effective prototype for the hackathon, the system avoids processing continuous 30-second video blocks[span_14](end_span). 
* **[span_15](start_span)Periodic Snapshots:** The system extracts frames from pre-recorded test clips at a set rate (e.g., 1 to 2 Frames Per Second)[span_15](end_span).
* **[span_16](start_span)Efficiency:** This discards redundant information (e.g., a static camera capturing an empty prep station) and focuses the AI's token limit strictly on moments of action[span_16](end_span).
* **[span_17](start_span)Concrete Evidence:** By using extracted pictures, the system can isolate the exact frame where a violation occurs, ensuring verifiable proof is always attached to the Audit Log[span_17](end_span).

## 4. Real-Time Intervention & The Audit Log
[span_18](start_span)The system features a closed, fully automated feedback loop designed to help restaurants correct issues immediately, maintaining their certification status without requiring a human-in-the-loop to verify the AI[span_18](end_span).
* **[span_19](start_span)The Audit Log:** As the AI agents debate, they generate a transparent transcript of their reasoning, justifying exactly why a hygiene label is awarded or revoked[span_19](end_span).
* **[span_20](start_span)The Telegram Prototype:** The moment the "Final Judge" agent classifies a frame as "Violated," the backend automatically triggers an instant Telegram message to the restaurant manager[span_20](end_span).
* **[span_21](start_span)Actionable Alerts:** The notification is not a vague warning[span_21](end_span). [span_22](start_span)It includes specific Evidence Markers[span_22](end_span):
  * [span_23](start_span)The exact timestamp and visual frame of the recorded violation[span_23](end_span).
  * [span_24](start_span)A summary of the AI debate, clearly explaining the reason why the policy was breached (e.g., "Cross-contamination detected: Policy 4 violated due to bare-hand contact with raw poultry")[span_24](end_span).

## 5. Technical Stack & Architecture

| Component | Technology / Strategy | Purpose |
| :--- | :--- | :--- |
| **Frontend** | React | [span_25](start_span)To display the "Prepared with Hygiene" badge and verifiable status to the end consumer.[span_25](end_span) |
| **Data Ingestion** | Python (OpenCV/FFmpeg) | [span_26](start_span)To process pre-recorded video clips and extract periodic frames (1-2 FPS) for the AI.[span_26](end_span) |
| **AI Backend** | Multi-Agent LLMs | [span_27](start_span)To facilitate the Inspector/Auditor/Judge debate and output a binary classification.[span_27](end_span) |
| **Intervention** | Telegram Bot API | [span_28](start_span)To automatically push timestamped evidence and debate summaries to restaurant managers.[span_28](end_span) |
| **Collaboration** | Git / Google Sheets | [span_29](start_span)Current active workspace for the team to manage prompts, policies, and code versioning.[span_29](end_span) |
