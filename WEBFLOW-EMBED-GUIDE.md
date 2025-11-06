# Webflow Embed Guide

This guide shows you how to embed the Online School Readiness Quiz into your Webflow site.

## Quick Start

### Option 1: Embed in Webflow (Recommended)

1. **Upload the widget file** to your Webflow hosting or a CDN:
   - Upload `dist/quiz-widget.iife.js` to your hosting
   - Or use a service like GitHub Pages, Netlify, or Vercel

2. **In Webflow**, add an **Embed element** where you want the quiz to appear

3. **Paste this code** into the Embed element:

```html
<!-- Tailwind CSS (required) -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Poppins Font (optional) -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap">

<!-- Tailwind Config -->
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          'aia-blue': '#1c307b',
          'aia-gold': '#f7a11d',
        }
      }
    }
  }
</script>

<!-- The Quiz Widget -->
<aia-quiz></aia-quiz>

<!-- Load the widget script (UPDATE THIS URL to where you uploaded the file) -->
<script src="YOUR_URL_HERE/quiz-widget.iife.js"></script>
```

4. **Replace `YOUR_URL_HERE`** with the actual URL where you uploaded the widget file

5. **Publish your Webflow site**

### Option 2: Add to Site-Wide Custom Code

If you want the quiz available on multiple pages:

1. Go to **Webflow Project Settings** > **Custom Code**
2. Add this to the **Head Code** section:

```html
<script src="https://cdn.tailwindcss.com"></script>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap">
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          'aia-blue': '#1c307b',
          'aia-gold': '#f7a11d',
        }
      }
    }
  }
</script>
```

3. Add this to the **Footer Code** section:

```html
<script src="YOUR_URL_HERE/quiz-widget.iife.js"></script>
```

4. On any page where you want the quiz, add an Embed element with just:

```html
<aia-quiz></aia-quiz>
```

## Hosting the Widget File

### Option A: GitHub Pages (Free)

1. Create a new repository on GitHub
2. Upload `quiz-widget.iife.js` to it
3. Enable GitHub Pages in the repository settings
4. Your URL will be: `https://username.github.io/repo-name/quiz-widget.iife.js`

### Option B: Netlify (Free)

1. Drag and drop the `dist` folder to Netlify
2. Get your URL: `https://your-site.netlify.app/quiz-widget.iife.js`

### Option C: Webflow Hosting

1. Upload as a custom asset in your Webflow project
2. Use the asset URL in your embed code

## Testing Locally

Open `webflow-embed.html` in your browser to test the widget before deploying.

## Styling Notes

- The widget uses Tailwind CSS for styling (included via CDN in the embed code)
- The widget will inherit some styles from your Webflow page
- If you notice styling issues, you may need to add CSS isolation

## Need Help?

Check that:
1. The widget script URL is correct and accessible
2. Tailwind CDN is loading (check browser console)
3. The `<aia-quiz>` tag is present on the page
