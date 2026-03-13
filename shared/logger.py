import json
import os
from datetime import datetime


LOG_FILE = "shared/log.json"

def log_to_shared_file(frame_id, analysis_result):
    
    log_entry = {
        "timestamp": datetime.now().isoformat(),
        "frame": frame_id,
        "data": analysis_result
    }

    with open(LOG_FILE, "a", encoding="utf-8") as f:
        f.write(json.dumps(log_entry) + "\n")

def read_all_logs():
    logs = []
    if not os.path.exists(LOG_FILE):
        return []
        
    with open(LOG_FILE, "r") as f:
        for line in f:
            if line.strip(): # Skip empty lines
                logs.append(json.loads(line))
    return logs

def save_to_db()