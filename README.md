# UN SDG Paper Classifier 🌍📄

A full-stack web application that classifies uploaded research papers or documents into the top 4 most relevant **United Nations Sustainable Development Goals (SDGs)** using Natural Language Processing (NLP).

## 🔥 Live Demo
[View Frontend on Vercel](https://eulnext.vercel.app/login)

## 🛠 Tech Stack

**Frontend:** Next.js (React)  
**Backend:** Flask (Python)  
**Database:** Firebase Firestore  
**File Storage:** Cloudinary  
**Deployment:** Vercel (FE), Render.com (BE)  
**ML/NLP:** TF-IDF + Cosine Similarity

---

## ✨ Features

- Upload any  text-based document.
- Automatically classifies into top 4 matching SDGs with percentage weights.
- Realtime file upload to Cloudinary.
- Stores classification results in Firestore.
- Clean, responsive UI using modern React architecture.

---

## 🧠 How It Works

1. User uploads a document from the UI.
2. Frontend sends it to the Flask backend.
3. Flask processes the document:
   - Cleans text
   - Computes TF-IDF vector
   - Compares it against SDG target descriptions using cosine similarity
4. Returns top 4 SDGs with scores (e.g. Goal 3 - 78%, Goal 4 - 65%...).
5. Frontend displays results in a simple dashboard view.

---

## 📊 Sample Output

| SDG Goal | Title                       | Relevance (%) |
|----------|-----------------------------|----------------|
| 3        | Good Health & Well-being    | 78%            |
| 4        | Quality Education           | 65%            |
| 10       | Reduced Inequalities        | 42%            |
| 17       | Partnerships for the Goals  | 37%            |

---

## 🚀 Local Setup

```bash
# Frontend
cd frontend
npm install
npm run dev

# Backend
cd backend
pip install -r requirements.txt
python app.py