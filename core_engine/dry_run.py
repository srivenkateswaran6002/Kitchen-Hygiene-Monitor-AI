import time

from extractor import extract_frames
from agents.agent_inspector import get_observation
import os


def dry_run(video_path, output_folder, fps=1):
    extract_frames(video_path, output_folder, fps)
    
    frames = sorted([f for f in os.listdir(output_folder) if f.endswith('.jpg')])

    print(f"\n\n>>> Processing frames of size : {len(frames)}\n")

    for frame in frames :
        frame_path = os.path.join(output_folder, frame)
        observation = get_observation(frame_path)
        print(f"Observation for {frame} : {observation}\n\n")
        time.sleep(1)

dry_run("test2.mov", "extracted_frames")