import time
import os
import sys
import json

# Add project root to sys.path to allow importing from 'shared'
project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
if project_root not in sys.path:
    sys.path.insert(0, project_root)

from shared.logger import log_to_shared_file, save_to_db
from core_engine.frames.extractor import extract_frames
from core_engine.agents.agent_inspector import get_observation
from core_engine.agents.unified_judge import get_judgement

def dry_run(video_path, output_folder, fps=1):
    # Ensure paths are correct relative to this script's directory
    base_dir = os.path.dirname(__file__)
    abs_video_path = os.path.join(base_dir, video_path)
    abs_output_folder = os.path.join(base_dir, output_folder)
    abs_policies_path = os.path.join(base_dir, 'policies.json')

    if not os.path.exists(abs_video_path):
        print(f"Error: {abs_video_path} not found.")
        return

    extract_frames(abs_video_path, abs_output_folder, fps)
    
    frames = sorted([f for f in os.listdir(abs_output_folder) if f.endswith('.jpg')])

    if not os.path.exists(abs_policies_path):
        print(f"Error: {abs_policies_path} not found.")
        return

    with open(abs_policies_path, 'r') as f:
        policies = json.load(f)

    print(f"\n\n>>> Processing frames of size : {len(frames)}\n")

    for frame in frames :
        frame_path = os.path.join(abs_output_folder, frame)
        observation = get_observation(frame_path)
        print(f"Observation for {frame} : {observation}\n")
        print('>>> Moving to the Judging phase now...\n')
        verdict = get_judgement(observation_text=observation, json_input=policies)
        log_to_shared_file(frame, verdict)
        save_to_db(frame, time.strftime("%Y-%m-%dT%H:%M:%S"), verdict)
        print(f"Verdict for {frame} : {verdict}\n")
        print(f">>> END OF FRAME ANALYSIS FOR FRAME : {frame}\n")
        time.sleep(1)

if __name__ == "__main__":
    dry_run("test2.mov", "extracted_frames")