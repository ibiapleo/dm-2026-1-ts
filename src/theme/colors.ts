export const colors = {
  light: {
    background: '#f4f7fb',
    text: '#0f172a',
    card: '#ffffff',
    border: '#d9e2ec',
    subtitle: '#475569',
    switch: {
      track: '#cfd0d2',
      thumb: '#ffffff',
    },
  },
  dark: {
    background: '#0f172a',
    text: '#f4f7fb',
    card: '#1e293b',
    border: '#475569',
    subtitle: '#94a3b8',
    switch: {
      track: '#60a5fa',
      thumb: '#dcdcdc',
    },
  },
};

export type Theme = keyof typeof colors;