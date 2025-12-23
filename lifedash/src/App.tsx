import React, { useState } from 'react';

function App() {
  const [page, setPage] = useState<"notes" | "timetable" | "diary">("notes");

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <aside style={{ width: 200, background: "#111", color: "white", padding: 16}}>
        <button style={{ display : "block", marginBottom: 8}} onClick={() => setPage("notes")}>Notes</button>
        <button style={{ display : "block", marginBottom: 8}} onClick={() => setPage("timetable")}>Timetable</button>
        <button style={{ display : "block", marginBottom: 8}} onClick={() => setPage("diary")}>Diary</button>
      </aside>
    </div>
  );
}

export default App;