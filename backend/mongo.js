const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://sujalkoirala404:${password}@cluster0.lwbn76w.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.set("strictQuery", false);

mongoose.connect(url);

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

const note = new Note([
  {
    content: "HTML is easy",
    date: Date,
    important: true,
  },
  {
    content: "CSS is hard",
    date: Date,
    important: false,
  },
  {
    content: "Mongoose makes things easy",
    date: Date,
    important: true,
  },
]);

Note.find({}).then((result) => {
  result.forEach((note) => {
    console.log(note);
  });
  //   mongoose.connection.close();
});

// note.save().then((result) => {
//   console.log("note saved!");
//   mongoose.connection.close();
// });
