# 🚀 GNSS Error Prediction System

An AI/ML-based web application designed to analyze and predict time-varying GNSS satellite errors using historical datasets. The system preprocesses satellite clock and ephemeris data, applies multiple prediction models, and evaluates prediction performance using statistical analysis.

---

# 📌 Project Overview

Global Navigation Satellite Systems (GNSS) provide positioning services used in aviation, smartphones, and navigation systems. However, accuracy is affected by:

- **Ephemeris Errors** — Differences between predicted and true satellite orbital positions.
- **Clock Errors** — Deviations between satellite onboard clocks and GNSS reference time.

This project builds an intelligent system to:

✅ Analyze historical GNSS error datasets  
✅ Remove anomalies through preprocessing  
✅ Predict future satellite errors using AI/ML models  
✅ Visualize prediction outputs interactively  
✅ Evaluate prediction quality through statistical testing  

---

# 🎯 Objectives

- Predict satellite errors for future timestamps based on historical data.
- Reduce systematic errors using preprocessing techniques.
- Evaluate whether residual errors follow a normal distribution.
- Provide an intuitive dashboard for analysis and visualization.

---

# 🧠 Key Features

## 📂 Data Upload Interface

- Upload multiple satellite datasets:
  - GEO orbit data
  - MEO orbit datasets
- CSV parsing handled using PapaParse.
- Dynamic handling of uploaded files.

---

## ⚙️ Data Preprocessing

- Outlier detection using IQR (Interquartile Range).
- Median-based replacement for anomalous values.
- Statistical summary generation:
  - Mean
  - Standard deviation
- Cleaning pipeline preserves both original and processed datasets.

---

## 🤖 Prediction Models

Users can switch between different prediction approaches:

- **LSTM (Long Short-Term Memory)** — For time-series prediction.
- **ARIMA** — Classical statistical forecasting model.
- **Ensemble Model** — Combined approach for improved stability.

---

## 📊 Interactive Visualization

Charts implemented using Recharts:

- X-axis position error
- Y-axis position error
- Z-axis position error
- Satellite clock error

Interactive graphs allow visual comparison of predicted trends.

---

## 📈 Statistical Evaluation

- Residual analysis after prediction.
- Normality evaluation (Shapiro-Wilk inspired test).
- Helps determine if systematic error has been reduced.

---

# 🏗️ Project Architecture

```
src/
│
├── components/
│   ├── GNSSErrorPredictor.jsx     # Main controller logic
│   ├── UploadPanel.jsx            # File upload interface
│   └── ResultsPanel.jsx           # Visualization & results
│
├── utils/
│   ├── preprocessing.js           # Data cleaning & statistics
│   ├── models.js                  # Prediction models
│   └── statistics.js              # Statistical evaluation
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# 🛠️ Technologies Used

### Frontend

- React (Vite setup)
- Tailwind CSS
- Lucide React (icons)

### Data Handling

- PapaParse — CSV parsing
- Math.js — statistical calculations

### Visualization

- Recharts — interactive graphing

---

# 🚀 Installation

## 1️⃣ Clone Repository

```
git clone <repository-url>
cd <project-folder>
```

## 2️⃣ Install Dependencies

```
npm install
```

## 3️⃣ Run Development Server

```
npm run dev
```

---

# 📊 Usage

1. Upload GEO and MEO CSV datasets.
2. Select prediction model (LSTM / ARIMA / Ensemble).
3. Click **Run Prediction**.
4. View visualized prediction results.

---

# 📈 Evaluation Criteria

Prediction performance is evaluated by:

- Comparing predicted vs actual values.
- Residual analysis.
- Checking normality of residual distribution using statistical testing.

---

# 🔮 Future Improvements

- Backend integration for real ML model execution.
- Full statistical Shapiro-Wilk implementation.
- Residual distribution visualization.
- Automated anomaly detection.
- Multi-GNSS constellation comparison.
- Real-time GNSS data ingestion.

---

# 🤝 Contributing

Contributions and suggestions are welcome.

1. Fork repository
2. Create feature branch
3. Submit pull request

---

# 📄 License

MIT License

---

# ⭐ Acknowledgements

This project is inspired by GNSS satellite navigation challenges and aims to improve understanding of satellite error modeling through AI/ML techniques.
