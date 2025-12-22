import { Database, Brain, AlertCircle } from "lucide-react";

export default function UploadPanel({
  geoData, meo1Data, meo2Data,
  handleUpload, modelType, setModelType, runPrediction, processing
}) {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-4 rounded border">
        <AlertCircle className="inline mr-2" />
        Upload GEO + 2 MEO CSV files
      </div>

      {["GEO", "MEO-1", "MEO-2"].map((t, i) => (
        <div key={t} className="border-dashed border-2 p-4 text-center">
          <Database className="mx-auto" />
          <input type="file" hidden id={t}
            onChange={e => handleUpload(e.target.files[0], t)} />
          <label htmlFor={t} className="cursor-pointer">Upload {t}</label>
        </div>
      ))}

      <div className="grid grid-cols-3 gap-3">
        {["lstm", "arima", "ensemble"].map(m => (
          <button key={m}
            onClick={() => setModelType(m)}
            className={modelType === m ? "bg-purple-200" : "bg-gray-100"}>
            {m.toUpperCase()}
          </button>
        ))}
      </div>

      <button onClick={runPrediction} disabled={processing}
        className="bg-blue-600 text-white p-3 w-full">
        Run Prediction
      </button>
    </div>
  );
}
    