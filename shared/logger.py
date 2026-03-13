import json
import os
from datetime import datetime
from shared.database import SessionLocal, HygieneAudit , init_db


LOG_FILE = "shared/log.json"

def parse_verdict(data_string):
    s = data_string.upper()
    if "VIOLATION" in s: return "VIOLATION"
    if "WARNING" in s: return "WARNING"
    if "PASS" in s or "NO ACTIVITY" in s: return "PASS"
    return "UNKNOWN"

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

def save_to_db(frame_id, timestamp_str, data_string):
    init_db()

    db = SessionLocal()
    try:
        new_audit = HygieneAudit(
            timestamp=datetime.fromisoformat(timestamp_str),
            frame_id=frame_id,
            verdict=parse_verdict(data_string),
            raw_analysis=data_string
        )
        db.add(new_audit)
        db.commit()
    except Exception as e:
        print(f"DB Error: {e}")
        db.rollback()
    finally:
        db.close()