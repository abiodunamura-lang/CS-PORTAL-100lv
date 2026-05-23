<script>
let files = JSON.parse(localStorage.getItem("files")) || [];
let quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];

function displayFiles() {
  let container = document.getElementById("fileList");
  container.innerHTML = "";

  files.forEach(file => {
    container.innerHTML += `
      <div class="card">
        <a href="${file.link}" target="_blank">${file.name}</a>
      </div>
    `;
  });
}

function displayQuiz() {
  let container = document.getElementById("quizList");
  container.innerHTML = "";

  quizzes.forEach((quiz, index) => {
    container.innerHTML += `
      <div class="card">
        <p>${quiz.q}</p>
        <button onclick="alert('Answer: ${quiz.a}')">Show Answer</button>
      </div>
    `;
  });
}

displayFiles();
displayQuiz();
</script>