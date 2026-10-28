:root {
  --bg: #0f172a;
  --bg-2: #111827;
  --card: #1f2937;
  --line: #374151;
  --text: #f8fafc;
  --muted: #cbd5e1;
  --primary: #2563eb;
  --primary-2: #3b82f6;
  --warning: #f59e0b;
  --warning-soft: rgba(245, 158, 11, 0.14);
  --success: #22c55e;
}

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  min-height: 100%;
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(180deg, var(--bg), var(--bg-2));
  color: var(--text);
}

body {
  display: flex;
  justify-content: center;
  padding: 24px;
}

.app-shell {
  width: min(100%, 720px);
  display: grid;
  gap: 18px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.eyebrow {
  margin: 0 0 6px;
  color: #93c5fd;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 11px;
}

h1 {
  margin: 0;
  font-size: clamp(28px, 4vw, 42px);
}

h2 {
  margin: 0 0 10px;
  font-size: 20px;
}

.card {
  background: rgba(31, 41, 55, 0.9);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 18px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.warning {
  background: var(--warning-soft);
  border-color: rgba(245, 158, 11, 0.5);
}

.warning p,
.info li,
label,
input,
select,
button,
.status,
.row span,
code {
  font-size: 15px;
}

.controls {
  display: grid;
  gap: 12px;
}

.row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.row input {
  flex: 1;
}

input,
select {
  width: 100%;
  background: #111827;
  border: 1px solid var(--line);
  color: var(--text);
  border-radius: 10px;
  padding: 12px 14px;
}

button {
  border: none;
  border-radius: 10px;
  padding: 12px 16px;
  font-weight: 700;
  cursor: pointer;
  color: white;
  background: var(--primary);
  transition: transform 0.1s ease, opacity 0.2s ease;
}

button:hover {
  transform: translateY(-1px);
  opacity: 0.96;
}

button.secondary {
  background: #374151;
}

button.primary {
  background: var(--primary);
}

.button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 8px;
}

.status {
  margin: 0;
  color: #93c5fd;
  min-height: 22px;
}

.hidden {
  display: none;
}

code {
  background: rgba(148, 163, 184, 0.08);
  border-radius: 6px;
  padding: 2px 6px;
}

ol {
  margin: 0;
  padding-left: 20px;
  display: grid;
  gap: 8px;
}
