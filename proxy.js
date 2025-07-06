// server.js 또는 proxy.js
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // ✅ 모든 Origin 허용 (기본 설정)
app.use(express.json());

app.post("/api/generate", async (req, res) => {
  const { prompt } = req.body;
  console.log("📥 요청된 프롬프트:", prompt);

  // 임시 응답 예시 (실제 LLM 서버와 연결 필요)
  res.json({ response: `목표: 꽃병` });
});

app.listen(3000, () => {
  console.log("🌐 프록시 서버 on http://localhost:3000");
});
