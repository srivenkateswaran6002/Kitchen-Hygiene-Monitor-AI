import os
import base64
from groq import Groq
from dotenv import load_dotenv

load_dotenv()
client = Groq(api_key=os.getenv("GROQ_API_KEY"))

def encode_image(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode('utf-8')

def get_observation(image_path):
    
    base64_image = encode_image(image_path)
    
    try:
        chat_completion = client.chat.completions.create(
            messages=[
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "text",
                            "text": "Describe the hygiene actions in this frame. If NONE, STRICTLY say 'No activity' and NOTHING ELSE. I want you to describe exactly what the person if any in the image is doing , related to and specific to hygiene related actions like wearing gloves or wearing hair nets or handling meat with bare hands etc."
                        },
                        {
                            "type": "image_url",
                            "image_url": {
                                "url": f"data:image/jpeg;base64,{base64_image}",
                            },
                        },
                    ],
                }
            ],
            model=os.getenv("INSPECTOR_MODEL"),
        )
        return chat_completion.choices[0].message.content
    except Exception as e:
        print(f"Groq Error: {e}")
        return "Error"