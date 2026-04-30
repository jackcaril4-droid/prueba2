import os
import re

src_dir = r"c:\Users\jackc\Downloads\prueba\neo-step-store\src"

def replace_colors(content):
    # Replace red-[400-800] with santo-red
    content = re.sub(r'red-[1-9]00', 'santo-red', content)
    # Replace green-[400-800] with santo-green
    content = re.sub(r'green-[1-9]00', 'santo-green', content)
    return content

for root, _, files in os.walk(src_dir):
    for file in files:
        if file.endswith('.tsx'):
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = replace_colors(content)
            
            if content != new_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {file_path}")
