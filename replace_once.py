import os

src_dir = r"c:\Users\jackc\Downloads\prueba\neo-step-store\src\components"

for root, _, files in os.walk(src_dir):
    for file in files:
        if file.endswith('.tsx'):
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = content.replace("once: true", "once: false")
            
            if content != new_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {file_path}")
