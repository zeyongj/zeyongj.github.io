# Rancho Project Search

A lightweight static site hosted on GitHub Pages that provides:

- 🔍 A **public search interface** to look up Rancho project numbers and return:
  - Project Number  
  - AP Name  
  - AR Name  
  - PM Name  
  - "Project is NLM." if listed in the NLM CSV  
  - "No result" if not found in the dataset  
- 👤 A **protected admin dashboard** to:
  - Log in (default credentials: `Rancho` / `apvan2024`)
  - Change your admin password
  - Manually manage **AP** and **AR** distribution entries
  - Upload or update:
    - `pm.csv` (Project # → PM)
    - `nlm.csv` (Project # list)
  
All data is stored in the `data/` folder and updated via the admin interface or GitHub upload.

## 🗂 Repository Structure

├── index.html # Public search page
├── admin.html # Protected admin interface
├── styles.css # Shared styles for both pages
├── script.js # Search logic for public page
├── admin.js # Login, admin UI & file uploads
├── papaparse.min.js # CSV parsing library (via CDN)
├── rancho-logo.png # Branding logo
└── data/
├── ap.json # AP distribution (managed via admin page)
├── ar.json # AR distribution (managed via admin page)
├── pm.csv # Project‑to‑PM mapping
└── nlm.csv # List of NLM projects



## ⚙️ Setup & Use

### Public Search
1. Open `index.html`
2. Enter the **4-digit** project number and click **Search**
3. Results display based on CSV/JSON data:
   - If listed in `nlm.csv`: shows **"Project XXXX is NLM."**
   - If found in `pm.csv`: displays **Project #, AP, AR, and PM fields**
   - Otherwise: displays **"No result"**

### Admin Dashboard
1. Navigate to `admin.html`
2. Use login credentials:
   - Username: `Rancho`
   - Password: `apvan2024` (default; changeable)
3. On successful login, manage:
   - **AP / AR distributions** manually (Name, Portfolio range, Include/Exclude)
   - **PM CSV** (`pm.csv`)
   - **NLM CSV** (`nlm.csv`)
   - Save or update changes via **Upload Files**

---

## 🚀 Deployment via GitHub Pages

Option A: **Use `main` branch with `docs/` folder**

1. Move all front-end files to a `docs/` folder (keeping `data/` folder accessible)
2. Go to **Settings → Pages → Source → main / docs/**
3. Commit and push; site lives at `https://<username>.github.io/<repo>/`

Option B: **Use `gh-pages` branch**

1. Create a branch: `gh-pages`
2. Add and commit front-end files
3. Go to **Settings → Pages → Source → gh-pages / root**
4. Deploy updates by pushing to `gh-pages`

---

## 💡 Notes & Tips

- CSVs and JSON files are loaded client-side using [PapaParse](https://www.papaparse.com).
- The AP/AR matching logic supports:
  - Ranges (e.g., `5218-5337`)
  - Open ranges (e.g., `5750+`)
  - Include/exclude lists to fine-tune assignment
- The search uses **only the first 4 digits** of any project number (e.g., `5164-10` maps to `5164`)
- Recommended to change the admin password immediately after initial login

---

## 📘 Contributions & Support

- Open to enhancements: better styling, validation, or back-end integration
- Reach out to **Zeyong Jin** for support or feature requests

---

## 🧾 License

All rights reserved by **Zeyong Jin**, 2025.  

Rancho logos and branding are proprietary assets of Rancho Management Services (B.C.) Ltd.

