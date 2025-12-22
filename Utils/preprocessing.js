import * as math from "mathjs";

// Outlier detection (IQR)
export const detectOutliers = (values) => {
  const sorted = [...values].sort((a, b) => a - b);
  const q1 = sorted[Math.floor(sorted.length * 0.25)];
  const q3 = sorted[Math.floor(sorted.length * 0.75)];
  const iqr = q3 - q1;
  const lower = q1 - 1.5 * iqr;
  const upper = q3 + 1.5 * iqr;
  return values.map(v => v < lower || v > upper);
};

// Data preprocessing
export const preprocessData = (data) => {
  if (!data) return null;

  const x = data.map(d => d.x_error).filter(v => !isNaN(v));
  const y = data.map(d => d.y_error).filter(v => !isNaN(v));
  const z = data.map(d => d.z_error).filter(v => !isNaN(v));
  const c = data.map(d => d.satclockerror).filter(v => !isNaN(v));

  const xo = detectOutliers(x);
  const yo = detectOutliers(y);
  const zo = detectOutliers(z);
  const co = detectOutliers(c);

  const cleaned = data.map((r, i) => ({
    ...r,
    x_error: xo[i] ? math.median(x) : r.x_error,
    y_error: yo[i] ? math.median(y) : r.y_error,
    z_error: zo[i] ? math.median(z) : r.z_error,
    satclockerror: co[i] ? math.median(c) : r.satclockerror
  }));

  return {
    original: data,
    cleaned,
    stats: {
      x: { mean: math.mean(x), std: math.std(x) },
      y: { mean: math.mean(y), std: math.std(y) },
      z: { mean: math.mean(z), std: math.std(z) },
      clock: { mean: math.mean(c), std: math.std(c) }
    }
  };
};
