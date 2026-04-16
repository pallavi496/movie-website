const movies = [
    { title: "Avengers", genre: "Action" },
    { title: "Iron Man", genre: "Action" },
    { title: "Titanic", genre: "Romance" },
    { title: "Notebook", genre: "Romance" },
    { title: "Conjuring", genre: "Horror" }
];

function recommendMovie() {
    let input = document.getElementById("movieInput").value;

    let selected = movies.find(m => m.title.toLowerCase() === input.toLowerCase());

    let result = document.getElementById("result");
    result.innerHTML = "";

    if (!selected) {
        result.innerHTML = "Movie not found!";
        return;
    }

    let recs = movies.filter(m => m.genre === selected.genre && m.title !== selected.title);

    recs.forEach(m => {
        let li = document.createElement("li");
        li.textContent = m.title;
        result.appendChild(li);
    });
}