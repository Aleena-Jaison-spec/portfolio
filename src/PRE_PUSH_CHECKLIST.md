# ✅ Pre-Push Checklist - Ready for GitHub?

Run through this checklist before pushing to ensure everything is secure!

---

## 🔐 Security Check (REQUIRED):

### Step 1: Verify .gitignore exists
Run in terminal:
```bash
ls -la | grep gitignore
```

**✅ Should see:** `.gitignore`

---

### Step 2: Check if .env will be ignored
Run in terminal:
```bash
git status
```

**✅ SAFE - Should NOT see `.env` in the list**
**❌ DANGER - If you see `.env` listed, STOP and fix .gitignore**

---

### Step 3: Verify .env protection
Run in terminal:
```bash
cat .gitignore | grep "\.env"
```

**✅ Should see:**
```
.env
.env.local
.env.development.local
```

---

## 📋 Optional: Add Your Real EmailJS Keys

If you want the contact form to work on your deployed site:

1. Open `.env` file
2. Replace placeholder values with your real EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=A1B2C3D4E5F6G7H8I
```

3. Save and restart dev server (`Ctrl+C` then `npm run dev`)

**Note:** Even if you skip this step, it's safe to push! The `.env` file has placeholder values.

---

## 🚀 Ready to Push!

If all checks pass, run:

```bash
git add .
git commit -m "Add portfolio website with secure contact form"
git push origin main
```

Or if your branch is called `master`:
```bash
git push origin master
```

---

## 📦 What Will Be Uploaded to GitHub:

### ✅ Will Upload (Public):
- All your code files
- `.gitignore` (protection file)
- `.env.example` (template with fake values)
- Setup guides (GITHUB_SETUP.md, SECURITY_CHECK.md, etc.)

### ❌ Will NOT Upload (Protected):
- `.env` (your actual keys)
- `node_modules` (dependencies)
- Build files

---

## 🌐 After Pushing - Deployment:

When you deploy to Vercel/Netlify/etc., you'll need to add environment variables in the hosting dashboard:

1. Go to your hosting platform
2. Find **Environment Variables** settings
3. Add these three variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

See `GITHUB_SETUP.md` for detailed deployment instructions!

---

## ✅ Final Verification:

Before clicking "push", confirm:
- [ ] `.gitignore` exists and contains `.env`
- [ ] `git status` does NOT show `.env`
- [ ] `.env.example` has placeholder values (safe to upload)
- [ ] Contact form code uses `import.meta.env.VITE_*` variables

**All checked? You're good to push! 🚀**
