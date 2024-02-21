FROM gitpod/workspace-full
                    
USER gitpod 

RUN bash -lc "gem install jekyll bundler jekyll-mentions jemoji jekyll-redirect-from jekyll-sitemap jekyll-feed jekyll-coffeescript jekyll-gist jekyll-github-metadata jekyll-paginate jekyll-relative-links jekyll-optional-front-matter jekyll-readme-index jekyll-titles-from-headings jekyll-feed jekyll-redirect-from jekyll-sitemap jekyll-avatar jekyll-mentions jekyll-include-cache jekyll-coffeescript jekyll-seo-tag"

# Install custom tools, runtime, etc. using apt-get
# For example, the command below would install "bastet" - a command line tetris clone:
#
# RUN sudo apt-get -q update && #     sudo apt-get install -yq bastet && #     sudo rm -rf /var/lib/apt/lists/*
#
# More information: https://www.gitpod.io/docs/config-docker/
