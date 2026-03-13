import json
import os
from datetime import datetime

# You can name it .json, but we treat it as JSONLines for performance
LOG_FILE = "shared/log.json"

def log_to_shared_file(frame_id, analysis_result):
    """
    Appends a new log entry to log.json without loading the whole file.
    """
    log_entry = {
        "timestamp": datetime.now().isoformat(),
        "frame": frame_id,
        "data": analysis_result
    }

    # Open in 'a' (append) mode
    with open(LOG_FILE, "a", encoding="utf-8") as f:
        # Convert dict to a single-line string and add a newline
        f.write(json.dumps(log_entry) + "\n")

# Example Usage:
# log_to_shared_file("frame_001.jpg", {"verdict": "PASS", "reason": "Gloves detected"})

def read_all_logs():
    logs = []
    if not os.path.exists(LOG_FILE):
        return []
        
    with open(LOG_FILE, "r") as f:
        for line in f:
            if line.strip(): # Skip empty lines
                logs.append(json.loads(line))
    return logs