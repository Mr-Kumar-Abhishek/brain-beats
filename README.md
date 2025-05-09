# Brain Beats - Brainwave Entrainment Web Application

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Mr-Kumar-Abhishek/brain-beats)

Brain Beats is a web application designed to produce sounds that help alter brainwaves for various purposes such as meditation, sleep improvement, and relief from physical discomforts like headaches. It offers a range of sound types and generators to cater to different brainwave entrainment needs.

## Features

The web app currently features the following types of sounds and generators:

### Sound Types:

*   **Colours of Noise:** Includes presets for White Noise, Pink Noise, Brown Noise, and other noise colors, each with unique spectral characteristics for different effects like relaxation or focus.
*   **Solfeggio Frequencies:** A collection of ancient tones believed to have healing and spiritual properties, often used for meditation and chakra balancing.
*   **Angel Frequencies:** Modern tones believed to have positive and uplifting effects, suitable for meditation and creating a positive environment.
*   **Pure Tones:** Basic sine wave tones for generating specific frequencies, allowing users to experiment with different brainwave frequencies.
*   **Binaural Beats:** Two tones played in each ear at slightly different frequencies, creating a perceived beat frequency in the brain, used for inducing specific mental states.
*   **Monaural Beats:** Two tones mixed together and played in both ears, creating a beat frequency through amplitude modulation, also used for brainwave entrainment.
*   **Square Wave Monaural Beats:** Monaural beats generated using square waveforms instead of sine waves, offering a different harmonic content.
*   **3D Rife Frequencies:** Rife frequency presets with 3D spatial audio coordinates, designed to provide faster and less invasive relief.
*   **Monaural Rife Frequencies:** Monaural Rife frequency presets designed to provide mental relief by simultaneously playing frequencies associated with specific ailments.
*   **3D ALT Frequencies:** 3D spatial audio presets using ALT frequencies.
*   **Monaural ALT Frequencies:** Monaural presets using ALT frequencies.
*   **Rife Frequencies CAFL XREF:** A collection of pure tones based on the Consolidated Annotated Frequency List (CAFL), associated with the work of Royal Rife and believed to have therapeutic effects.

### Generators:

*   **Pure Tone Generator:** Allows users to generate a single pure tone at a specified frequency.
*   **Binaural Beats Generator:** Enables users to create custom binaural beats by setting frequencies for the left and right ears.
*   **Monaural Beats Generator:** Generates custom monaural beats by allowing users to set two frequencies that are mixed to create the beat.
*   **Square Wave Monaural Beats Generator:** Similar to the monaural beats generator but uses square waveforms.
*   **Isochronic Tone Generator:** Creates isochronic tones, which are pulses of a single tone, known for their effectiveness in brainwave entrainment.
*   **Sine Wave 3D Generators (Auto and Manual):** Generators for creating 3D spatial audio sine wave tones, with options for automatic or manual coordinate distribution.
*   **Rife 3D Generators (Auto and Manual):** 3D spatial audio generators using Rife frequencies.
*   **Sine Wave Monaural Generator:** Generator for creating monaural beats using sine waves.
*   **Rife Monaural Generator:** Generator for creating monaural beats using Rife frequencies.
*   **Dreamachine Generator:** A generator that produces flickering light patterns and binaural beats to induce altered states of consciousness, requiring closed eyes and a dark room for use.

### Custom Presets:

*   **Noise Colors:** Presets for different colors of noise (White, Pink, Brown, etc.) for sound masking and relaxation.
*   **Kundalini Ascension:** A special preset designed for spiritual practices, incorporating specific frequencies and rotating visual elements.

## Usage Instructions

1.  **Navigate the Website:** Use the navigation menu to explore different sections like "Single tones", "Beats", "Generators", and "Custom Presets".
2.  **Select a Sound or Generator:** Choose a preset sound or a generator based on your desired brainwave entrainment experience.
3.  **Adjust Volume:** Use the volume slider at the bottom of each page to set a comfortable listening level. **It is recommended to start with a low volume and gradually increase it.**
4.  **For Generators:** Input the required frequencies or parameters as indicated on the generator pages.
5.  **Play and Stop:** Use the "Play" and "Stop" buttons to control the audio playback.
6.  **Dreamachine Generator:** For the Dreamachine Generator, use in a dark room with eyes closed and follow the specific instructions provided on the page.
7.  **Favorites:** Save your preferred presets to the "Favorites" section for easy access.
8.  **Search:** Use the search bar in the navigation menu to quickly find specific presets or frequencies.
9.  **Instructions and Disclaimer:** Each section and generator page includes a modal with specific instructions and a disclaimer. Please read them before use.

**Important Notes:**

*   **Headphones/Earphones:** While not always mandatory, using headphones or earphones is generally recommended for binaural and monaural beats to enhance the intended brainwave entrainment effects.
*   **Volume Levels:** Start with low volume levels and gradually adjust to avoid discomfort or hearing damage.
*   **Disclaimer:** The Brain Beats web application and its frequencies are **not a substitute for professional medical care.** Use the application and its presets at your own risk and discretion. Consult with a healthcare professional for any health concerns.
*   **Dreamachine Usage:** The Dreamachine Generator requires specific usage conditions (dark room, closed eyes) for safety and effectiveness.

## Development Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/brain-beats.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install Workbox CLI globally:
   ```bash
   npm install -g workbox-cli
   ```

### Running the Project
1. Start a local development server (you can use any static server like `http-server` or `live-server`):
   ```bash
   npx http-server
   ```
   or if you are changing something in the service worker use self-signed SSL in apache.
2. Open your browser to:
   ```
   http://localhost:8080
   ```
   or:
   ```
   https://localhost
   ```
   if you are using self-signed SSL in local apache apache server.

### Making Updates
1. After making changes to the project files, test them locally.
2. To update the service worker (if you've made changes to service worker files):
   ```bash
   npx workbox-cli injectManifest workbox-config.js
   ```
3. Commit your changes:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```

### Workbox CLI Usage
The project uses Workbox for service worker generation. After making changes to service worker files:
1. Run the Workbox CLI to regenerate the service worker:
   ```bash
   npx workbox-cli injectManifest workbox-config.js
   ```
2. This will update the `sw.js` file based on the configuration in `workbox-config.js`

## Contributing and Support

This web application is developed and maintained by Abhishek Kumar.

For support, questions, or feedback, you can:

*   **Email:** brainbeats (at) protonmail.com
*   **Chat:** [Discord Chat Link](https://discord.gg/JNRPJDFWdY)
*   **Support the Project:** [Coffee Donation Link](https://ko-fi.com/brainbeats)
*   **Blog:** [Blog Link](https://brain-beats.in/blog/)
*   **Privacy Policy:** [Privacy Policy Link](https://brain-beats.in/privacy-policy.html)

## Files and Directories

```
_redirects
.gitconfig
.gitignore
3d-alt-frequency.html
3d-rife-machine.html
ads.txt
angel-frequency.html
app-ads.txt
binaural-base-beats.html
binaural-beats-generator.html
binaural-mind-machine-generator.html
BingSiteAuth.xml
blog/
css/
dreamachine-generator.html
dreamachine-presets.html
favicon.ico
favorites.html
google7484c80835cfba45.html
img/
index.html
isochronic-tones-generator.html
isochronic-tones.html
js/
json/
kundalini-ascension.html
lab/
LICENSE
manifest.json
monaural-alt-frequency.html
monaural-base-beats.html
monaural-beats-generator.html
monaural-rife-machine.html
netlify.toml
noise-processor/
noise.html
node_modules/
privacy-policy.html
pure-tone-generator.html
pure-tones.html
README.md
rife-3d-auto-generator.html
rife-3d-generator.html
rife-frequencies-cafl-xref.html
rife-monaural-generator.html
robots.txt
search.html
sine-wave-3d-auto-generator.html
sine-wave-3d-generator.html
sine-wave-monaural-generator.html
sitemap-old.xml
solfeggio-frequency.html
square-wave-monaural-base-beats.html
square-wave-monaural-beats-generator.html
sw.js
```

This README.md provides a comprehensive overview of the Brain Beats web application. Use it to understand the features, usage, and important disclaimers before using the application.
