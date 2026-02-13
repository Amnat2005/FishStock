import { useEffect, useState } from "react";
import Papa from "papaparse";

function toNumber(v) {
  if (v === null || v === undefined) return null;
  const s = String(v).trim().replace(/,/g, "");
  if (s === "") return null;
  const n = Number(s);
  return Number.isFinite(n) ? n : null;
}

export default function useCsv(url, yearKey = "ปี") {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setError("");
        const res = await fetch(url);
        if (!res.ok) throw new Error(`โหลดไฟล์ไม่ได้: ${res.status}`);
        const text = await res.text();

        const parsed = Papa.parse(text, { header: true, skipEmptyLines: true });

        const rows = (parsed.data || [])
          .map((r) => {
            const obj = { ...r };
            obj[yearKey] = toNumber(obj[yearKey]);
            Object.keys(obj).forEach((k) => {
              if (k !== yearKey) obj[k] = toNumber(obj[k]);
            });
            return obj;
          })
          .filter((r) => r[yearKey] != null)
          .sort((a, b) => a[yearKey] - b[yearKey]);

        if (!cancelled) setData(rows);
      } catch (e) {
        if (!cancelled) setError(String(e?.message || e));
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [url, yearKey]);

  return { data, error };
}
