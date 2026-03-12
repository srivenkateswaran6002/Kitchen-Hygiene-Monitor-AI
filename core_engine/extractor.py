import cv2
import os

def extract_frames(video_path, output_folder, fps=1):
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
    
    vid = cv2.VideoCapture(video_path)
    video_fps = vid.get(cv2.CAP_PROP_FPS)
    hop_frames = int(video_fps / fps) # How many frames to skip to get 1 FPS
    
    count = 0
    success = True
    while success:
        # Jump to specific frame
        vid.set(cv2.CAP_PROP_POS_FRAMES, count * hop_frames)
        success, image = vid.read()
        
        if success:
            frame_name = f"frame_{count}.jpg"
            cv2.imwrite(os.path.join(output_folder, frame_name), image)
            print(f"Saved: {frame_name}")
            count += 1
            
    vid.release()