# 🚀 Hero Section AI – Angular + TailwindCSS

A beautiful, editable, and interactive Hero Section built using Angular and TailwindCSS. Users can edit the content inline and simulate AI-generated text by regenerating random dummy content locally.

---

## ✨ Features

- 🔤 **Editable Text:** Headline and subheadline can be edited inline using `contenteditable`.
- 🔁 **AI Regeneration Simulation:** Click a button to load random new dummy content.
- 🖼️ **Responsive Design:** Fully responsive layout with image support.
- 🧠 **API-like Service:** Uses RxJS Observables to simulate a backend.
- ⚡ **TailwindCSS Styling:** Clean and modern styling with utility-first classes.
- 🛠️ **No Backend Required:** Everything works locally, perfect for prototyping or demos.

---

## 🧩 Tech Stack

- [Angular](https://angular.io/)
- [TailwindCSS](https://tailwindcss.com/)
- [RxJS](https://rxjs.dev/)

---

## 📁 Project Structure

```
src/
│
├── app/
│   ├── components/
│   │   ├── hero-section/
│   │   │   ├── hero-section.component.ts
│   │   │   ├── hero-section.component.html
│   │   │   ├── hero-section.component.css
│   │   │   └── hero-section.component.spec.ts
│   ├── services/
│   │   ├── hero-data/
│   │   │   ├── hero-data.service.ts
│   │   │   └── hero-data.service.spec.ts
│   ├── interfaces/
│   │   ├── hero-content/
│   │   │   └── hero-content.ts
│
└── .postcssrc.json
```

---

## 🔧 Setup Instructions

### ✅ Requirements

- Node.js **^18.19.1 || ^20.11.1 || ^22.0.0**
- Angular **v19.2.x**

1. **Clone the repository**
   ```bash
   git clone https://github.com/ahmedsmaha/hero-section.git
   cd hero-section
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   ng serve
   ```

4. **Open the app in your browser**
   ```
   http://localhost:4200
   ```

---

## 🛠️ Customization

- To change the dummy content, edit the `dummyData` array in `hero-data.service.ts`.
- To customize animations, adjust the `styles.css` with your own `keyframes` and `animation` settings.

---

## 📄 License

This project is open source and free to use under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

**Ahmed SMaha**  
Frontend & MEAN Stack Developer  
Let’s connect on [LinkedIn](https://www.linkedin.com/in/ahmedsmaha)

---

Made with ❤️ using Angular & TailwindCSS
