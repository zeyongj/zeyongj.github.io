# Rancho Project Search Platform

A modern, high-performance web application for searching and managing Rancho project information.

## 🌟 Features

### Public Search Interface
- **Simple Search**: Quick lookup by 4-digit project number
- **Multi-Project Search**: Search multiple projects simultaneously (comma-separated)
- **Strata Plan Search**: Find projects by strata plan number
- **Advanced Filters**: Filter by PM name, FA name, or NLM status
- **Real-time Statistics**: View total projects, NLM count, and search performance
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

### Admin Dashboard
- **Secure Login**: Password-protected admin access
- **AP/AR Management**: Add, edit, and delete AP/AR distribution entries
- **CSV Upload**: Upload PM, NLM, and FA data files
- **Password Management**: Change admin password from the dashboard

## 🚀 Performance

- **Sub-5ms Search**: Optimized in-memory indexing for instant results
- **Data Caching**: One-time data load with persistent cache
- **Concurrent Users**: Supports multiple simultaneous searches
- **Lightweight**: No backend required, pure static deployment

## 📁 Repository Structure

```
rancho-search/
├── index.html          # Main search interface
├── admin.html          # Admin dashboard
├── rancho-logo.png     # Company logo
├── README.md           # This file
└── data/
    ├── pm.csv          # Project Manager assignments
    ├── nlm.csv         # No Longer Managed projects list
    ├── fa.csv          # FA assignments
    ├── ap.json         # AP distribution rules
    └── ar.json         # AR distribution rules
```

## 🛠️ Setup Instructions

### 1. Prepare Data Files

Ensure your CSV files are in the correct format:

**pm.csv** - Must include columns:
- `PROJ #` or `Proj#`: Project number
- `PM`: Project Manager name
- `STRATA PLAN` or `STRATA \nPLAN`: Strata plan number

**nlm.csv** - Must include column:
- `PROJ #` or `Proj#`: Project number

**fa.csv** - Must include columns:
- First column: Project number
- `FA`: FA name

### 2. Create JSON Files

Create two empty JSON files in the `data/` folder:

**data/ap.json**:
```json
[]
```

**data/ar.json**:
```json
[]
```

You can populate these later via the admin dashboard.

### 3. Deploy to GitHub Pages

#### Method 1: Main Branch (Recommended)

1. Upload all files to your GitHub repository
2. Go to **Settings** → **Pages**
3. Under "Source", select **main** branch and **/ (root)** folder
4. Click **Save**
5. Wait 1-2 minutes for deployment

Your site will be available at: `https://yourusername.github.io/`

#### Method 2: gh-pages Branch

1. Create a new branch: `gh-pages`
2. Push your files to this branch
3. Go to **Settings** → **Pages**
4. Select **gh-pages** branch
5. Click **Save**

### 4. Configure Admin Access

1. Navigate to `https://yourusername.github.io/admin.html`
2. Login with default credentials:
   - Username: `Rancho`
   - Password: `apvan2024`
3. **Important**: Change the password immediately after first login!

### 5. Add AP/AR Distribution Rules

In the admin dashboard, add entries for AP and AR with:
- **Name**: Person's name
- **Portfolio**: Range (e.g., `5218-5337`) or open-ended (e.g., `5750+`)
- **Include**: Comma-separated specific project numbers to include
- **Exclude**: Comma-separated specific project numbers to exclude

Example:
```
Name: John Doe
Portfolio: 5200-5300
Include: 5150,5155
Exclude: 5250,5275
```

## 📊 Data Update Process

### Updating CSV Files

1. Edit CSV files locally
2. Commit changes: `git add data/ && git commit -m "Update project data"`
3. Push to GitHub: `git push origin main`
4. Changes will be live in 30-60 seconds

### Updating AP/AR Rules

1. Go to admin dashboard
2. Make changes to AP/AR lists
3. Changes are saved automatically in browser localStorage
4. To persist across devices, export data and update `ap.json` and `ar.json`

## 🎨 Features Breakdown

### Search Modes

1. **Simple Search**
   - Enter a single 4-digit project number
   - Instant results with all project details
   - Shows NLM status prominently

2. **Multi-Project**
   - Search multiple projects at once
   - Comma-separated input (e.g., `5164, 5200, 5300`)
   - Results displayed in cards

3. **Strata Plan**
   - Search by strata plan number
   - Case-insensitive partial matching
   - Returns all matching projects

### Advanced Filters

- **PM Name**: Filter results by Project Manager
- **FA Name**: Filter results by FA
- **NLM Status**: Show only NLM, exclude NLM, or show all

### Result Display

Each result shows:
- Project Number
- Strata Plan (if available)
- AP Name
- AR Name
- FA Name
- PM Name
- NLM status (with warning if applicable)

## 🔒 Security Notes

- Admin password is stored in browser localStorage
- No server-side authentication required
- Change default password immediately
- AP/AR data is stored client-side
- CSV files are publicly accessible (by design)

## 🌐 Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Full support

## 📱 Mobile Optimization

- Responsive grid layouts
- Touch-friendly buttons
- Optimized font sizes
- Smooth scrolling
- Collapsible sections

## ⚡ Performance Metrics

Typical performance on modern hardware:
- Initial data load: 500-1000ms (one-time)
- Simple search: <5ms
- Multi-project (10 items): <10ms
- Strata plan search: <50ms
- Index size: ~500+ projects

## 🛡️ Data Privacy

- All data processing happens client-side
- No tracking or analytics
- No cookies used
- No data sent to third parties

## 🔧 Troubleshooting

### Data not loading
- Check that CSV files are in the `data/` folder
- Verify file names are exactly: `pm.csv`, `nlm.csv`, `fa.csv`
- Check browser console for errors
- Try hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### Search returns no results
- Verify project exists in `pm.csv`
- Check that project number is 4 digits
- Ensure CSV formatting is correct

### Admin login fails
- Default username: `Rancho`
- Default password: `apvan2024`
- Check for typos
- Clear browser cache if changed recently

## 📞 Support

For issues or questions, contact:
- **Developer**: Zeyong Jin
- **Repository**: [GitHub](https://github.com/zeyongj/zeyongj.github.io)

## 📄 License

© 2025 Zeyong Jin. All Rights Reserved.

Rancho logos and branding are proprietary assets of Rancho Management Services (B.C.) Ltd.

## 🎯 Future Enhancements

Potential features for future versions:
- Export search results to CSV
- Bookmark favorite projects
- Search history
- Dark mode toggle
- Project comparison view
- Email notifications for NLM changes

## 🙏 Acknowledgments

Built with:
- [PapaParse](https://www.papaparse.com/) - CSV parsing
- Pure vanilla JavaScript - No frameworks
- GitHub Pages - Free hosting

---

**Version**: 2.0  
**Last Updated**: November 2025  
**Status**: Production Ready ✅
