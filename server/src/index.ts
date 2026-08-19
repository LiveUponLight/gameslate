import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", app: "GameSlate" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`GameSlate API running on http://localhost:${PORT}`);
});

