import google.generativeai as genai
import os
from PIL import Image
from dotenv import load_dotenv

load_dotenv()
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel('gemini-1.5-flash')

def get_observation(image_path):
    img = Image.open(image_path)
    prompt = "Describe the hygiene-related actions in this kitchen frame. Be objective. Use neutral language."
    response = model.generate_content([prompt, img])
    return response.text