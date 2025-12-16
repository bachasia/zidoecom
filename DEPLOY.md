# Deploy to Cloudflare Pages

This guide explains how to deploy the Zido Ecom website to Cloudflare Pages.

## Prerequisites

- GitHub repository: https://github.com/bachasia/zidoecom.git
- Cloudflare account (free): https://dash.cloudflare.com/

## Deployment Steps

### 1. Access Cloudflare Dashboard

1. Go to https://dash.cloudflare.com/
2. Log in or create a free account

### 2. Create New Pages Project

1. Click **"Workers & Pages"** in the left sidebar
2. Click **"Create application"**
3. Select the **"Pages"** tab
4. Click **"Connect to Git"**

### 3. Connect GitHub Repository

1. Click **"Connect GitHub"** and authorize Cloudflare
2. Select repository: **`bachasia/zidoecom`**
3. Click **"Begin setup"**

### 4. Configure Build Settings

Use these exact settings:

```
Project name:           zidoecom (or your preferred name)
Production branch:      main
Framework preset:       Next.js (Static HTML Export)
Build command:          npm run build
Build output directory: out
Root directory:         (leave empty)
```

### 5. Environment Variables

No environment variables needed for this project.

### 6. Deploy

1. Click **"Save and Deploy"**
2. Wait 2-5 minutes for the build to complete
3. Your site will be live at: `https://zidoecom.pages.dev`

## Custom Domain (Optional)

To use a custom domain:

1. Go to your Pages project settings
2. Click **"Custom domains"**
3. Click **"Set up a custom domain"**
4. Follow the DNS configuration instructions

## Build Information

- **Framework**: Next.js 14 with App Router
- **Export Mode**: Static HTML Export
- **Build Output**: Static files in `/out` directory
- **Node Version**: Automatically detected from `package.json`

## Automatic Deployments

Every push to the `main` branch will automatically trigger a new deployment.

## Troubleshooting

### Build fails

If the build fails, check:
- Build logs in Cloudflare dashboard
- Ensure `npm run build` works locally
- Check Node.js version compatibility

### Pages not loading correctly

- Ensure `output: 'export'` is set in `next.config.js`
- Check browser console for errors
- Verify all assets are loading (check Network tab)

## Support

For Cloudflare Pages support, visit:
- Documentation: https://developers.cloudflare.com/pages/
- Community: https://community.cloudflare.com/

## Project URLs

- **GitHub**: https://github.com/bachasia/zidoecom.git
- **Cloudflare Pages**: https://zidoecom.pages.dev (after deployment)
