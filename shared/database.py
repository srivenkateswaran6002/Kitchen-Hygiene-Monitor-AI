import os
from datetime import datetime , timezone
from sqlalchemy import Column, Integer, String, DateTime, Text, JSON, create_engine
from sqlalchemy.orm import declarative_base, sessionmaker
from dotenv import load_dotenv

load_dotenv()

# Format: postgresql://user:password@localhost:5432/dbname
DATABASE_URL = os.getenv("DATABASE_URL")

Base = declarative_base()

class HygieneAudit(Base):
    __tablename__ = 'hygiene_audits'
    
    id = Column(Integer, primary_key=True)
    timestamp = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    frame_id = Column(String(255))
    verdict = Column(String(50))
    raw_analysis = Column(Text)

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def init_db():
    Base.metadata.create_all(bind=engine)