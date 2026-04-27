// Deps
import { useEffect, useRef, useState } from "react";

const useScramble = (text: string, trigger: boolean) => {
  // States
  const [out, setOut] = useState(text);

  // Constants
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%";

  // Refs
  const ref = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!trigger) return;
    let i = 0;
    clearInterval(ref.current!);
    ref.current = setInterval(() => {
      setOut(
        text
          .split("")
          .map((ch, idx) => {
            if (ch === " ") return " ";
            if (idx < i) return text[idx];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join(""),
      );
      if (i >= text.length) clearInterval(ref.current!);
      i += 0.6;
    }, 28);
    return () => clearInterval(ref.current!);
  }, [trigger, text]);

  return out;
};

export default useScramble;
