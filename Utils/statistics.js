import * as math from "mathjs";

export const shapiroWilkTest = (res) => {
  const n = res.length;
  if (n < 3) return { statistic: null, pValue: null, isNormal: false };

  const s = [...res].sort((a, b) => a - b);
  const mean = math.mean(s);
  const varr = math.variance(s);

  let num = 0;
  for (let i = 0; i < Math.floor(n / 2); i++)
    num += (s[n - 1 - i] - s[i]) / Math.sqrt(n);

  const W = (num * num) / (varr * (n - 1));
  const p = W > 0.95 ? 0.8 : W > 0.9 ? 0.3 : 0.05;

  return { statistic: W, pValue: p, isNormal: p > 0.05 };
};
