// Membuat Element H1
var judul = document.createElement("h1");
// Membuat Element P 
var paragraph = document.createElement("p");

// Mengisi Konten Element
judul.textContent = "Create Element H1";
document.body.append(judul);
paragraph.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime architecto ipsa ab, doloribus hic dolores sequi quibusdam tenetur velit aliquid temporibus voluptatum nulla, fuga blanditiis eius. In voluptates voluptas, sit dicta, debitis repellat necessitatibus impedit, quos optio consequuntur repudiandae et.";
document.body.append(paragraph);