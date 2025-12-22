import { useState } from "react";
import Papa from "papaparse";
import UploadPanel from "./UploadPanel";
import ResultsPanel from "./ResultsPanel";
import { preprocessData } from "../utils/preprocessing";
import { lstmPredict, arimaPredict, ensemblePredict } from "../utils/models";
import { shapiroWilkTest } from "../utils/statistics";

export default function GNSSErrorPredictor() {
  const [data, setData] = useState({});
  const [modelType, setModelType] = useState("lstm");
  const [results, setResults] = useState(null);

  const handleUpload = (file, type) => {
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: r => setData(d => ({ ...d, [type]: r.data }))
    });
  };

  const runPrediction = () => {
    const models = { lstm: lstmPredict, arima: arimaPredict, ensemble: ensemblePredict };

    const res = Object.entries(data).map(([k, v]) => {
      const p = preprocessData(v);
      const pred = models[modelType](p.cleaned);
      return { name: k, predictions: pred };
    });

    setResults(res);
  };

  return (
    <>
      <UploadPanel
        handleUpload={handleUpload}
        modelType={modelType}
        setModelType={setModelType}
        runPrediction={runPrediction}
      />
      <ResultsPanel results={results} modelType={modelType} />
    </>
  );
}
