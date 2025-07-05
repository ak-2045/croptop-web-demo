# CropTop

**CropTop** is a smart web application that suggests the optimal crop (or the _top_ crop) to cultivate based on soil nutrients and environmental conditions using a machine learning model served via a Flask API.

---

## Tech Stack

| Frontend           | Backend        | ML Model               | Deployment                 |
| ------------------ | -------------- | ---------------------- | -------------------------- |
| React + TypeScript | Flask (Python) | Random Forest (Pickle) | Render (API)               |
| TailwindCSS        | Flask-CORS     | NumPy, scikit-learn    | Vercel (Frontend optional) |

---

## API Endpoint

```
POST https://crop-rec-api-idup.onrender.com/predict
```

**Request Body:**

```json
{
  "N": 90,
  "P": 42,
  "K": 43,
  "temperature": 22.5,
  "humidity": 80.5,
  "ph": 6.5,
  "rainfall": 200.0
}
```

**Response:**

```json
{
  "prediction": "maize"
}
```

---

## Getting Started

### 1. Clone this Repo

```bash
git clone https://github.com/your-username/croptop.git
cd croptop
```

### 2. Backend Setup (Flask)

```bash
cd backend
pip install -r requirements.txt
python app.py
```

> Ensure `crop_rec_model.pkl` is in the same directory.

### 3. Frontend Setup (Next.js / React)

```bash
cd frontend
npm install
npm run dev
```

---

## Credits

* Dataset: [Kaggle – Crop Recommendation Dataset](https://www.kaggle.com/datasets/atharvaingle/crop-recommendation-dataset/data)
* Icons: [Lucide](https://lucide.dev/)

---

## License

MIT © 2025 \[Your Name]

---

Let me know if you want this saved as a markdown file or want to extend it with instructions for mobile/desktop builds.
