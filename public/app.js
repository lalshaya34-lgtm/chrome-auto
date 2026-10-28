:root {
  --bg: #0f172a;
  --bg-alt: #111827;
  --panel: #1f2937;
  --line: #374151;
  --text: #f8fafc;
  --muted: #cbd5e1;
  --primary: #2563eb;
  --secondary: #374151;
  --danger: #dc2626;
  --success: #22c55e;
}

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  min-height: 100%;
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(180deg, var(--bg), var(--bg-alt));
  color: var(--text);
}

body {
  display: flex;
  justify-content: center;
  padding: 24px;
}

.app-shell {
  width: min(100%, 760px);
  display: grid;
  gap: 20px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.eyebrow {
  margin: 0 0 8px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #93c5fd;
  font-size: 11px;
}

h1 {
  margin: 0;
  font-size: clamp(28px, 4vw, 42px);
}

h2 {
  margin: 0 0 12px;
  font-size: 20px;
}

.card {
  background: rgba(31, 41, 55, 0.92);
  padding: 20px;
  border-radius: 16px;
  border: 1px solid var(--line);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.22);
}

.input-row,
.button-row,
.grid {
  display: flex;
  gap: 10px;
}

.input-row {
  align-items: center;
}

input,
select,
button {
  border-radius: 10px;
  border: 1px solid var(--line);
  font-size: 15px;
}

input,
select {
  width: 100%;
  background: #111827;
  color: var(--text);
  padding: 12px 14px;
}

button {
  padding: 12px 16px;
  cursor: pointer;
  color: #fff;
  font-weight: 700;
}

button.primary {
  background: var(--primary);
}

button.secondary {
  background: var(--secondary);
}

button.danger {
  background: var(--danger);
}

.controls {
  display: grid;
  gap: 12px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.button-row {
  flex-wrap: wrap;
  margin-top: 8px;
}

.status {
  margin: 10px 0 0;
  min-height: 20px;
  color: #93c5fd;
}

ul {
  margin: 0;
  padding-left: 20px;
  display: grid;
  gap: 9px;
}
