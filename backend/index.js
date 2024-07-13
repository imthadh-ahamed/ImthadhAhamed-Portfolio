import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "frontend/build")));

app.use(cors(
    {
        origin: "",
        methods: ["POST", "GET"],
        credentials: true
    }
));

app.use(express.json());

app.get("/", (req, res) => {
  res.json("Hello");
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
