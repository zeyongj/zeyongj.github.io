# Quick Reference Card

## 🚀 Fast Deployment (5 Minutes)

1. **Upload files to GitHub**
   - Go to: https://github.com/zeyongj/zeyongj.github.io
   - Upload all files including data folder

2. **Enable GitHub Pages**
   - Settings → Pages → Select "main" branch → Save

3. **Change admin password**
   - Visit: /admin.html
   - Login: `Rancho` / `apvan2024`
   - Change password immediately

4. **Done!** Visit: https://zeyongj.github.io/

---

## 📁 Required Files

```
✅ index.html
✅ admin.html
✅ rancho-logo.png
✅ README.md
✅ data/pm.csv
✅ data/nlm.csv
✅ data/fa.csv
✅ data/ap.json (empty: [])
✅ data/ar.json (empty: [])
```

---

## 🔍 Search Modes

| Mode | Usage | Example |
|------|-------|---------|
| **Simple** | Single project | `5164` |
| **Multi-Project** | Multiple (comma-separated) | `5164, 5200, 5300` |
| **Strata Plan** | By strata number | `BCS1362` |

---

## 🔐 Admin Credentials

| Field | Default | Action |
|-------|---------|--------|
| Username | `Rancho` | ⚠️ Cannot be changed |
| Password | `apvan2024` | ⚠️ MUST change on first login |

---

## 🎯 AP/AR Portfolio Format

| Format | Example | Meaning |
|--------|---------|---------|
| Range | `5218-5337` | Projects 5218 through 5337 |
| Open-ended | `5750+` | Projects 5750 and above |
| Include | `5150,5155` | Specific projects to include |
| Exclude | `5250,5275` | Specific exceptions |

---

## 🔄 Updating Data

### Update CSV Files
1. Edit file locally
2. Upload to GitHub (replace existing)
3. Wait 30-60 seconds
4. Hard refresh: `Ctrl+Shift+R`

### Update AP/AR Rules
1. Login to admin dashboard
2. Add/edit/delete entries
3. Saves automatically

---

## 🐛 Quick Fixes

| Problem | Solution |
|---------|----------|
| 404 Error | Wait 2 minutes, check GitHub Pages enabled |
| No results | Check CSV files in `data/` folder |
| Login fails | Reset password in browser console |
| Slow load | Check CSV file sizes (<5MB) |

---

## 🌐 Important URLs

- **Main Site**: https://zeyongj.github.io/
- **Admin**: https://zeyongj.github.io/admin.html
- **Repository**: https://github.com/zeyongj/zeyongj.github.io
- **Settings**: Repository → Settings → Pages

---

## ⌨️ Keyboard Shortcuts

| Action | Windows | Mac |
|--------|---------|-----|
| Search | `Enter` | `Enter` |
| Hard Refresh | `Ctrl+Shift+R` | `Cmd+Shift+R` |
| Dev Console | `F12` | `Cmd+Option+I` |

---

## 📊 Expected Performance

| Metric | Target |
|--------|--------|
| Initial Load | <1 second |
| Simple Search | <5ms |
| Multi-Project | <10ms |
| Strata Search | <50ms |

---

## ✅ Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] Search works for known project
- [ ] Admin login successful
- [ ] Password changed from default
- [ ] Logo displays
- [ ] Mobile view looks good
- [ ] Statistics show correct counts
- [ ] NLM badges appear

---

## 🆘 Emergency Contact

**Developer**: Zeyong Jin  
**Repository**: github.com/zeyongj/zeyongj.github.io

---

## 💾 Backup Commands

**Export AP/AR data** (browser console):
```javascript
console.log(localStorage.getItem('rz_ap_data'));
console.log(localStorage.getItem('rz_ar_data'));
```

**Reset admin password** (browser console):
```javascript
localStorage.setItem('rz_admin_pwd', 'apvan2024');
```

---

## 📱 Mobile Testing

Test on:
- ✅ iPhone Safari
- ✅ Android Chrome
- ✅ iPad
- ✅ Tablet devices

---

## 🎨 Customization Quick Tips

**Change colors**: Edit CSS `:root` variables  
**Update logo**: Replace `rancho-logo.png`  
**Custom domain**: Add `CNAME` file with domain name  

---

**Version**: 2.0  
**Last Updated**: November 2025

🚀 **You're all set!**
