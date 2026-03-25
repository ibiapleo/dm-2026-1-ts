export const colors = {
  light: {
    background: "#f7fafc",
    text: "#0f172a",
    card: "#ffffff",
    border: "#e6eef8",
    subtitle: "#475569",
    switch: {
      track: "#6b7280",
      thumb: "#eeeeeeff",
    },
  },
  dark: {
    background: "#0b1220",
    text: "#f1f5f9",
    card: "#111827",
    border: "#334155",
    subtitle: "#94a3b8",
    switch: {
      track: "#6b7280",
      thumb: "#eeeeeeff",
    },
  },
};

export type Theme = keyof typeof colors;
