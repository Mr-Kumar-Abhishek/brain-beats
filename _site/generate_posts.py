import json
import os
import re
from datetime import datetime, timedelta

def slugify(text):
    text = text.lower()
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')

def main():
    # Load all json files
    json_dir = 'json'
    json_files = [f for f in os.listdir(json_dir) if f.endswith('.json')]
    
    presets = []
    for jf in json_files:
        with open(os.path.join(json_dir, jf), 'r') as f:
            try:
                data = json.load(f)
                if isinstance(data, list):
                    presets.extend(data)
                elif 'data' in data: # Some might have a wrapper
                    presets.extend(data['data'])
            except Exception as e:
                print(f"Error loading {jf}: {e}")
                
    print(f"Loaded {len(presets)} presets.")
    
    # Get existing posts and their slugs
    posts_dir = '_posts'
    existing_posts = os.listdir(posts_dir)
    existing_slugs = set()
    last_date_str = "2023-01-01"
    
    for post in existing_posts:
        if not post.endswith('.md'): continue
        
        # Format is YYYY-MM-DD-slug.md
        match = re.match(r'^(\d{4}-\d{2}-\d{2})-(.*)\.md$', post)
        if match:
            date_str = match.group(1)
            slug = match.group(2)
            existing_slugs.add(slug)
            
            if date_str > last_date_str:
                last_date_str = date_str
                
    last_date = datetime.strptime(last_date_str, "%Y-%m-%d")
    print(f"Last published date: {last_date_str}")
    
    # Generate new posts
    new_posts = 0
    current_date = last_date
    
    for preset in presets:
        if 'data_name' not in preset:
            continue
            
        name = preset['data_name']
        slug = slugify(name)
        
        # Some existing posts might have slightly different slugs, let's just check if slug is in existing_slugs
        # Or maybe check if name is in any existing post title? 
        # Actually exact slug match is fine, or we can check prefix
        found = False
        for es in existing_slugs:
            if slug in es or es in slug:
                found = True
                break
                
        if found:
            continue
            
        desc = preset.get('data_description', '')
        if not desc:
            desc = name
            
        current_date += timedelta(days=1)
        date_str = current_date.strftime("%Y-%m-%d")
        
        post_filename = f"{date_str}-{slug}.md"
        post_path = os.path.join(posts_dir, post_filename)
        
        content = f"""---
layout: post
title: "{name}"
description: "{desc.replace('"', "'")}"
subject: "{name}"
apple-title: "{name}"
app-name: "{name}"
tweet-title: "{name}"
tweet-description: "{desc.replace('"', "'")}"
date: {date_str}
keywords: "frequency benefits, Brain Beats, Frequencies, brainwave entrainment, sound therapy"
---

{desc}

### What is {name}?
This frequency is part of the Brain Beats presets collection. 
Listen to this track to experience its reported benefits.

"""
        with open(post_path, 'w') as f:
            f.write(content)
            
        existing_slugs.add(slug)
        new_posts += 1
        
    print(f"Generated {new_posts} new blog posts. Next date would be {current_date.strftime('%Y-%m-%d')}")

if __name__ == '__main__':
    main()
