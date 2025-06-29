console.log("student_result.js loaded");

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("resultContainer");
  const loader = document.getElementById("loader");

  try {
    const res = await fetch(`/student/result/${quiz_id}/${student_email}`);
    const data = await res.json();

    loader.remove();

    if (!data.success) {
      container.innerHTML = `<p class="cheated">${data.message}</p>`;
      return;
    }

    const html = `
      <h2>🎉 Quiz Result</h2>
      <p><strong>Quiz:</strong> ${data.quiz_title}</p>
      <p><strong>Email:</strong> ${data.student_email}</p>
      <p><strong>Score:</strong> <span class="highlight">${data.score}</span></p>
      <p>${data.cheating_detected 
        ? `<span class="cheated">Cheating Detected</span><br/><small>Reason: ${data.reason}</small>` 
        : `<span class="success">No Cheating Detected</span>`}
      </p>
    `;
    container.innerHTML = html;

  } catch (err) {
    console.error("Error loading result:", err);
    container.innerHTML = `<p class="cheated">Failed to load result.</p>`;
  }
});
