# Complete Deployment Guide for Rancho Project Search

## 📋 Pre-Deployment Checklist

- [ ] All code files downloaded
- [ ] CSV files prepared (pm.csv, nlm.csv, fa.csv)
- [ ] GitHub account ready
- [ ] Logo file (rancho-logo.png) available

## 📂 File Structure to Upload

```
your-repository/
├── index.html              ← Main search page
├── admin.html              ← Admin dashboard
├── rancho-logo.png         ← Your company logo
├── README.md               ← Documentation
└── data/
    ├── pm.csv              ← Rename from pm.txt
    ├── nlm.csv             ← Rename from nlm.txt
    ├── fa.csv              ← Rename from fa.txt
    ├── ap.json             ← Empty array: []
    └── ar.json             ← Empty array: []
```

## 🔄 Step 1: Prepare Your Files

### 1.1 Rename TXT to CSV

- `pm.txt` → `pm.csv`
- `nlm.txt` → `nlm.csv`
- `fa.txt` → `fa.csv`

### 1.2 Create JSON Files

Create two new files:

**data/ap.json**:
```json
[]
```

**data/ar.json**:
```json
[]
```

### 1.3 Organize Folder Structure

Create a folder locally with this structure:
```
rancho-project/
├── index.html
├── admin.html
├── rancho-logo.png
├── README.md
└── data/
    ├── pm.csv
    ├── nlm.csv
    ├── fa.csv
    ├── ap.json
    └── ar.json
```

## 🌐 Step 2: Upload to GitHub

### Method A: Using GitHub Web Interface (Easiest)

1. **Go to your repository**: https://github.com/zeyongj/zeyongj.github.io

2. **Upload files directly**:
   - Click "Add file" → "Upload files"
   - Drag all files from your local folder
   - Or use the file picker to select files
   - For the `data/` folder: Create it first, then upload files into it

3. **Create data folder**:
   - Click "Add file" → "Create new file"
   - In the name field, type: `data/pm.csv`
   - This creates the folder and file
   - Paste the content of pm.csv
   - Commit the file
   - Repeat for other data files

4. **Commit changes**:
   - Scroll down
   - Add commit message: "Deploy improved Rancho search platform"
   - Click "Commit changes"

### Method B: Using Git Command Line

If you're comfortable with Git:

```bash
# Navigate to your local folder
cd /path/to/rancho-project

# Initialize git (if not already a repo)
git init

# Add remote
git remote add origin https://github.com/zeyongj/zeyongj.github.io.git

# Add all files
git add .

# Commit
git commit -m "Deploy improved Rancho search platform"

# Push to main branch
git push -u origin main
```

## ⚙️ Step 3: Enable GitHub Pages

1. **Go to Settings**:
   - In your GitHub repository
   - Click "Settings" tab (top right)

2. **Navigate to Pages**:
   - Scroll down left sidebar
   - Click "Pages"

3. **Configure Source**:
   - Under "Build and deployment"
   - Source: Select "Deploy from a branch"
   - Branch: Select "main"
   - Folder: Select "/ (root)"
   - Click "Save"

4. **Wait for Deployment**:
   - GitHub will show "Your site is live at..."
   - Usually takes 1-2 minutes
   - Refresh the page to see status

5. **Visit Your Site**:
   - URL will be: `https://zeyongj.github.io/`
   - Or your custom domain if configured

## 🔐 Step 4: Configure Admin Access

1. **Open Admin Dashboard**:
   - Visit: `https://zeyongj.github.io/admin.html`

2. **Login with Default Credentials**:
   - Username: `Rancho`
   - Password: `apvan2024`

3. **Change Password Immediately**:
   - Click "Change Password" section
   - Enter a strong new password
   - Click "Update Password"
   - **Important**: Save this password securely!

4. **Add AP/AR Entries**:
   - Scroll to "AP Distribution" section
   - Click "+ Add AP Entry"
   - Fill in:
     - Name: Person's name
     - Portfolio: e.g., "5218-5337" or "5750+"
     - Include: Specific project numbers (comma-separated)
     - Exclude: Exceptions (comma-separated)
   - Repeat for AR Distribution
   - Data saves automatically

## ✅ Step 5: Test Your Deployment

### Test Search Functionality

1. **Go to**: `https://zeyongj.github.io/`

2. **Test Simple Search**:
   - Enter a known project number (e.g., "5164")
   - Click "Search Projects"
   - Verify all fields display correctly

3. **Test Multi-Project**:
   - Click "Multi-Project" tab
   - Enter: "5164, 5200, 5300"
   - Click "Search Projects"
   - Verify multiple results appear

4. **Test Strata Plan**:
   - Click "By Strata Plan" tab
   - Enter a strata plan number (e.g., "BCS1362")
   - Verify results show

5. **Test Advanced Filters**:
   - Click "Advanced Search"
   - Try filtering by PM name
   - Try NLM filter options

6. **Test NLM Display**:
   - Search for an NLM project
   - Verify red badge appears
   - Verify warning message shows

### Test Admin Dashboard

1. **Logout and Login**:
   - Test with new password
   - Verify access works

2. **Test AP/AR Management**:
   - Add a test entry
   - Edit it
   - Delete it
   - Verify changes save

## 🔄 Step 6: Updating Data

### Update Project Data

When you need to update CSV files:

1. **Edit Files Locally**:
   - Update pm.csv, nlm.csv, or fa.csv

2. **Upload to GitHub**:
   - Go to the file on GitHub
   - Click "Edit" (pencil icon)
   - Or upload replacement file
   - Commit changes

3. **Wait for Update**:
   - Changes typically live in 30-60 seconds
   - Hard refresh your browser: Ctrl+Shift+R

### Update AP/AR Rules

1. **Via Admin Dashboard**:
   - Login to admin.html
   - Make changes
   - Saves automatically to localStorage

2. **To Persist Across Devices**:
   - Export from localStorage (browser console):
     ```javascript
     console.log(localStorage.getItem('rz_ap_data'));
     console.log(localStorage.getItem('rz_ar_data'));
     ```
   - Copy the JSON
   - Update `data/ap.json` and `data/ar.json`
   - Commit to GitHub

## 🎨 Step 7: Customization (Optional)

### Custom Domain

If you want `rancho.yourdomain.com`:

1. **Buy a Domain**: From Namecheap, GoDaddy, etc.

2. **Add CNAME File**:
   - Create file named `CNAME` (no extension)
   - Content: `rancho.yourdomain.com`
   - Upload to repository root

3. **Configure DNS**:
   - At your domain provider
   - Add CNAME record:
     - Name: `rancho`
     - Value: `zeyongj.github.io`

4. **Enable HTTPS**:
   - In GitHub Pages settings
   - Check "Enforce HTTPS"
   - Wait 24 hours for SSL certificate

### Update Logo

- Replace `rancho-logo.png` with your logo
- Recommended size: 250-300px wide
- PNG format with transparency
- Commit to GitHub

### Change Colors

Edit the CSS variables in `index.html` and `admin.html`:

```css
:root {
  --primary: #2c5aa0;        /* Main brand color */
  --primary-dark: #1e4278;   /* Darker shade */
  --secondary: #4a90e2;      /* Accent color */
  /* etc. */
}
```

## 🐛 Troubleshooting

### Problem: Site shows 404

**Solution**:
- Wait 2-3 minutes after enabling GitHub Pages
- Check that files are in root directory (not in a subfolder)
- Verify GitHub Pages is enabled in Settings

### Problem: Data not loading

**Solution**:
- Check browser console for errors (F12)
- Verify CSV files are in `data/` folder
- Check file names are exactly: `pm.csv`, `nlm.csv`, `fa.csv`
- Verify files have proper headers

### Problem: Search returns no results

**Solution**:
- Check that project exists in pm.csv
- Verify CSV formatting (no extra quotes or line breaks)
- Check browser console for parsing errors
- Try hard refresh: Ctrl+Shift+R

### Problem: Admin login fails

**Solution**:
- Clear browser cache
- Check localStorage in browser console:
  ```javascript
  localStorage.getItem('rz_admin_pwd')
  ```
- Reset to default:
  ```javascript
  localStorage.setItem('rz_admin_pwd', 'apvan2024')
  ```

### Problem: Slow loading

**Solution**:
- Check CSV file sizes (should be <5MB)
- Verify internet connection
- Clear browser cache
- Try different browser

## 📊 Monitoring & Maintenance

### Regular Tasks

**Monthly**:
- Update project data (CSV files)
- Verify all links work
- Check for broken searches
- Review and update NLM list

**Quarterly**:
- Backup AP/AR rules
- Review access logs (if needed)
- Update documentation
- Check for browser compatibility

**Annually**:
- Update copyright year in footer
- Review security settings
- Audit data accuracy
- Consider feature updates

### Performance Monitoring

Check these metrics occasionally:
- Search time (shown in stats)
- Page load time (browser dev tools)
- User feedback on speed
- Mobile performance

### Data Backup

**What to Backup**:
- All CSV files
- AP/AR JSON files
- Admin password (securely!)
- Logo and assets

**How to Backup**:
- Clone repository periodically:
  ```bash
  git clone https://github.com/zeyongj/zeyongj.github.io.git
  ```
- Export localStorage data
- Store securely offline

## 🎓 Training Users

### For Search Users

**Quick Start**:
1. Go to website
2. Enter project number
3. Click Search
4. View results

**Advanced Features**:
- Use tabs for different search modes
- Click "Advanced Search" for filters
- Search multiple projects with commas

### For Admins

**Quick Start**:
1. Go to /admin.html
2. Login with credentials
3. Make changes
4. Changes save automatically

**Best Practices**:
- Change password regularly
- Keep AP/AR rules organized
- Document changes
- Test after updates

## 📞 Support & Resources

### Documentation
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [PapaParse Docs](https://www.papaparse.com/docs)

### Getting Help
- Check browser console (F12) for errors
- Review this deployment guide
- Contact developer: Zeyong Jin

### Useful Commands

**Hard Refresh**:
- Windows: `Ctrl + Shift + R`
- Mac: `Cmd + Shift + R`

**View Console**:
- Windows: `F12` or `Ctrl + Shift + I`
- Mac: `Cmd + Option + I`

**Export localStorage**:
```javascript
// In browser console
console.log(JSON.stringify({
  ap: localStorage.getItem('rz_ap_data'),
  ar: localStorage.getItem('rz_ar_data'),
  pwd: localStorage.getItem('rz_admin_pwd')
}, null, 2));
```

## ✨ Success Criteria

Your deployment is successful when:
- [ ] Website loads at your GitHub Pages URL
- [ ] Search returns correct results
- [ ] All three search modes work
- [ ] NLM projects show red badge
- [ ] Admin login works
- [ ] AP/AR rules can be edited
- [ ] Mobile view looks good
- [ ] Statistics display correctly
- [ ] Footer shows copyright
- [ ] Logo displays properly

## 🎉 You're Done!

Your Rancho Project Search platform is now live and ready to use!

**Quick Links**:
- 🏠 Main Site: `https://zeyongj.github.io/`
- 🔐 Admin: `https://zeyongj.github.io/admin.html`
- 📚 Docs: README.md in your repository

---

**Need Help?** Contact Zeyong Jin  
**Last Updated**: November 2025  
**Version**: 2.0
