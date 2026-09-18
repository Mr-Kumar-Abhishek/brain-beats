# Developer Guide

Welcome to the developer documentation for Brain Beats! This guide provides the necessary information to set up the development environment, build the project, and contribute to the codebase.

## Architecture Overview

Brain Beats is a static web application composed of HTML, CSS, JavaScript (client-side), and JSON data files. It incorporates a Service Worker for offline functionality and Progressive Web App (PWA) features. The project now also includes a unified Jekyll build system for managing the blog content alongside the main web application.

*   **Frontend:** Vanilla HTML, CSS, and JS. Uses Bootstrap for some UI elements.
*   **Audio Generation:** Uses the Web Audio API for generating binaural beats, isochronic tones, monaural beats, and various noise colors.
*   **Data:** Presets and configurations are stored in `json/` and loaded dynamically.
*   **Blog Engine:** Jekyll (Ruby-based static site generator).
*   **Service Worker:** Generated using Workbox CLI for caching and offline support.

## Prerequisites

To work on Brain Beats locally, you will need the following installed on your machine:

1.  **Node.js & npm** (v14+ recommended) - Required for Workbox and managing JS dependencies.
2.  **Ruby & Bundler** (Ruby v2.7+ recommended) - Required for running the Jekyll blog engine.

## Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mr-Kumar-Abhishek/brain-beats.git
   cd brain-beats
   ```

2. **Install Node dependencies:**
   ```bash
   npm install
   ```

3. **Install Ruby dependencies (for Jekyll):**
   ```bash
   bundle install
   ```

4. **Install Workbox CLI globally (optional, for PWA updates):**
   ```bash
   npm install -g workbox-cli
   ```

## Running the Project

Because the project now utilizes Jekyll to build the blog and serve the main site simultaneously, you should use Jekyll's built-in development server.

1. **Start the Jekyll development server:**
   ```bash
   bundle exec jekyll serve
   ```

2. **Access the application:**
   Open your browser and navigate to `http://localhost:4000/`.
   The blog is accessible at `http://localhost:4000/blog/`.

*Note: Jekyll will automatically watch for changes in most files and regenerate the site.*

## Updating the Service Worker

If you make changes to static assets or the service worker logic, you must regenerate the `sw.js` file using Workbox to ensure caching works correctly offline.

1. **Regenerate the Service Worker:**
   ```bash
   npx workbox-cli injectManifest workbox-config.js
   ```

## Project Structure

*   `blog/`: Contains the Jekyll blog infrastructure (`_posts`, `_layouts`, `_includes`, etc. are unified at the root, but blog specific assets may reside here).
*   `css/`, `js/`, `img/`: Core static assets.
*   `json/`: Contains all frequency presets and configuration data.
*   `noise-processor/`: Audio worklets for noise generation.
*   `_config.yml`: Jekyll configuration file.
*   `package.json`: Node dependencies and scripts.
*   `workbox-config.js`: Configuration for generating the Service Worker.

## Security Considerations

When contributing, ensure you follow these security guidelines:
*   **No `.innerHTML`:** Avoid using `.innerHTML` when rendering data from JSON or user input to prevent DOM-based XSS. Use `textContent` or `DOMParser` for safe HTML insertion.
*   **Link Validation:** Ensure all external links or dynamic URLs use safe schemes (`http:`, `https:`).

## Generating Blog Posts (Automated)

If you need to regenerate the automated blog posts from JSON presets, you can use the included python script:
```bash
python3 generate_posts.py
```
This will parse the `json/` directory and create front-matter markdown files in `_posts/`.
