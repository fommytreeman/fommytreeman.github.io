# fommytreeman.github.io
Thomas Freeman's Github Pages Repository

## Portfolio Website

This is a professional portfolio website showcasing Thomas Freeman's work, education, and experience.

### Customization Guide

To personalize your portfolio, update the following sections in `index.html`:

1. **Contact Information** (Lines 290, 302, 317-319):
   - Replace `your.email@example.com` with your actual email address
   - Replace `https://linkedin.com/in/yourprofile` with your LinkedIn profile URL
   - Update social media links in the footer

2. **Education Section** (Lines 111-114):
   - Replace "University Name" with your actual university
   - Update "Expected Graduation: Year" with your graduation date
   - Customize the description of your studies

3. **Projects Section** (Lines 143-290):
   - Replace project titles, descriptions, and tags for each of the 8 projects
   - Update the **Code** button links from `href="#"` to actual GitHub repository URLs:
     ```html
     <a href="https://github.com/username/repo-name" class="project-link"><i class="fab fa-github"></i> Code</a>
     ```
   - Update the **Screenshots** button links from `href="#"` to screenshot image URLs or gallery pages:
     ```html
     <!-- Option 1: Link to a single screenshot image -->
     <a href="path/to/screenshot.png" class="project-link"><i class="fas fa-images"></i> Screenshots</a>
     
     <!-- Option 2: Link to a folder or gallery of screenshots -->
     <a href="https://github.com/username/repo-name/tree/main/screenshots" class="project-link"><i class="fas fa-images"></i> Screenshots</a>
     
     <!-- Option 3: Link to an external image hosting service -->
     <a href="https://imgur.com/a/your-album-id" class="project-link"><i class="fas fa-images"></i> Screenshots</a>
     ```
   - Customize project icons by changing the Font Awesome icon class (e.g., `fa-code`, `fa-mobile-alt`, `fa-database`, etc.)
   - Add or remove project cards as needed by duplicating or deleting the project-card div blocks

4. **Resume Section** (Lines 243-276):
   - Update job titles, companies, and dates
   - Replace placeholder achievements with your actual experience
   - Update certifications and achievements
   - Add a link to your actual resume PDF (line 276)

5. **About Section** (Lines 51-78):
   - Customize your personal bio and interests
   - Update current status information

### Viewing Your Website

Your website will be live at: `https://fommytreeman.github.io`

After pushing changes to the `main` branch, GitHub Pages will automatically deploy your updates.

### Local Development

To preview your changes locally:
```bash
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

