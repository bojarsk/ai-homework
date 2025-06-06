import { useState, useEffect } from "react";

export default function Dashboard() {
  const [d, setD] = useState<number | null>(null);

  useEffect(() => {
    const workerCode = `
      self.onmessage = function() {
        let t = 0;
        for (let i = 0; i < 1e8; i++) {
          t += i;
        }
        self.postMessage(t);
      };
    `;

    const blob = new Blob([workerCode], { type: "application/javascript" });
    const url = URL.createObjectURL(blob);
    const worker = new Worker(url);

    worker.onmessage = (e: MessageEvent<number>) => {
      setD(e.data);
      worker.terminate();
      URL.revokeObjectURL(url);
    };

    worker.postMessage(null);

    return () => {
      worker.terminate();
      URL.revokeObjectURL(url);
    };
  }, []);

  return <div>{d}</div>;
}
