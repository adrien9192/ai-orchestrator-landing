# Remotion Video Rendering Setup

## Overview

This document explains how to render the Formation AI case study video using Remotion.

## Files Included

- `app/components/TestimonialVideo.tsx` — Video component (copy from drafts/content)
- `app/components/VideoTestimonial.tsx` — Landing page video embed (checks for `/videos/sophie-testimonial.mp4`)

## Quick Start (5 minutes)

### Option 1: Using Remotion CLI (Recommended)

```bash
# 1. Install Remotion globally (if not already installed)
npm install -g @remotion/cli

# 2. Copy the Remotion component to your project
cp /data/.openclaw/workspace/drafts/content/remotion-testimonial.tsx ./app/components/RemotionTestimonial.tsx

# 3. Create a temporary Remotion project for rendering
npx create-video@latest remotion-render
cd remotion-render

# 4. Install dependencies
npm install

# 5. Copy the component
cp ../app/components/RemotionTestimonial.tsx src/RemotionTestimonial.tsx

# 6. Register in src/Root.tsx
# Add to the <Compositions> section:
# <Composition id="TestimonialVideo" component={RemotionTestimonial} />

# 7. Render the video
npx remotion render src/Root.tsx TestimonialVideo ../public/videos/sophie-testimonial.mp4 --height=1080 --width=1920

# 8. Return to main project
cd ..

# 9. Test the video on the landing page
npm run dev
# Visit http://localhost:3000 and check the video section
```

### Option 2: Using Remotion Lambda (Cloud Rendering)

```bash
# Coming soon — requires AWS setup
# For now, use Option 1
```

## Manual Rendering Steps

If the CLI doesn't work:

1. **Create Remotion Project**
   ```bash
   npx create-video@latest
   cd my-video
   npm install
   ```

2. **Add Component**
   - Copy `remotion-testimonial.tsx` to `src/RemotionTestimonial.tsx`
   - Register in `src/Root.tsx`

3. **Render**
   ```bash
   npx remotion render src/Root.tsx TestimonialVideo output.mp4
   ```

4. **Move Video**
   ```bash
   mkdir -p ../public/videos
   cp output.mp4 ../public/videos/sophie-testimonial.mp4
   ```

## Directory Structure

```
ai-orchestrator-landing/
├── app/
│   ├── components/
│   │   ├── VideoTestimonial.tsx     # Landing page embed
│   │   └── TestimonialVideo.tsx     # Remotion component (copy here after render)
│   └── page.tsx                      # Uses VideoTestimonial
├── public/
│   ├── videos/
│   │   └── sophie-testimonial.mp4    # Output video file (generated)
│   └── ...other assets
└── package.json
```

## Troubleshooting

### "Video not found" error
- Check that `public/videos/sophie-testimonial.mp4` exists
- Run the render command again
- Verify file path is correct

### "Module not found" error (Remotion component)
- Make sure `@remotion/google-fonts` is installed: `npm install @remotion/google-fonts`
- Verify the component file is in the correct location

### Video plays but looks wrong
- Check video dimensions (should be 1920x1080)
- Verify FPS (should be 30fps)
- Re-render with: `npx remotion render --height=1080 --width=1920 --fps=30`

## Video Specifications

- **Duration:** 75 seconds
- **Resolution:** 1920 x 1080 (16:9)
- **FPS:** 30
- **Format:** MP4 (H.264)
- **Bitrate:** Default (Remotion optimizes automatically)

## Next Steps

1. Run the render command
2. Test the video on localhost
3. Commit to GitHub
4. Vercel auto-deploys
5. Monitor performance (should be <5MB file size)

## Support

If rendering fails:
1. Check Node.js version: `node --version` (should be 16+)
2. Clear node_modules: `rm -rf node_modules && npm install`
3. Try the Remotion documentation: https://www.remotion.dev/docs
