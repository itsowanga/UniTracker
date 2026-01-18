student-module-tracker/
├─ README.md
├─ .gitignore
├─ package.json                # backend dependencies + scripts
├─ server/
│  ├─ index.js                 # Express server entry point
│  ├─ routes/
│  │  └─ modules.routes.js      # /api/modules endpoints
│  ├─ controllers/
│  │  └─ modules.controller.js  # request logic (get/add/delete/update)
│  ├─ services/
│  │  └─ modules.service.js     # data handling (read/write)
│  ├─ data/
│  │  └─ modules.json           # temporary storage (later DB)
│  └─ utils/
│     └─ id.js                  # helper to generate IDs
│
└─ public/
   ├─ index.html                # Dashboard (list + summary)
   ├─ add.html                  # Add module / deadline form
   ├─ styles.css                # App styling
   └─ app.js                    # Frontend JS (fetch + DOM updates)
