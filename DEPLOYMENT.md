# Clothing Store Deployment Guide

## Vercel Deployment

This app is ready for deployment on Vercel! It's built with React, Vite, and uses Tailwind CSS.

### Quick Deploy

1. **Connect to GitHub:**
   ```bash
   git push origin main
   ```

2. **Import to Vercel:**
   - Go to https://vercel.com/new
   - Select this repository
   - Framework: Vite
   - Build Command: `npm run build` (should auto-detect)
   - Install Command: `npm install`
   - Output Directory: `dist`
   - Click Deploy!

### Environment Variables (Optional)

Add these if you need custom API endpoints:
- `VITE_API_URL` - Base URL for API calls (currently using fakestoreapi.com)

### Features

- ✅ E-commerce product catalog
- ✅ Shopping cart with Redux state management
- ✅ Product filtering and search
- ✅ Responsive design (Tailwind CSS)
- ✅ RTK Query for API caching
- ✅ React Router for navigation

### Build Info

- Build Time: ~3.6 seconds
- CSS Size: 17.58 KB (gzip: 4.17 KB)
- JS Size: 275.91 KB (gzip: 89.41 KB)
- Total Modules: 122

### Local Development

```bash
cd clothing-store

# Install dependencies
npm install

# Run dev server (port 5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Tech Stack

- React 18.3.1
- Vite 7.3.1
- React Router 6.30.1
- Redux Toolkit 1.9.7
- RTK Query (API caching)
- Tailwind CSS 3.4.18
- React Icons 4.12.0

---

**Status:** ✅ Ready for production deployment
