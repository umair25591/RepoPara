const correctPassword = "DUAapril19@";

function checkPassword() {
    const storedPassword = localStorage.getItem('storedPassword');
    if (storedPassword !== correctPassword) {
        window.location.href = "index.html";
    }
}

onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  $("#mainText").on('click', function(){
    window.location.href = "question.html";
  })