require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { S3Client, PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const app = express();
app.use(cors());
app.use(express.json());

// AWS config
const s3 = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY
  }
});

// TEST route
app.get('/', (req, res) => {
  res.send("Server running");
});

// Upload URL
app.get('/upload-url', async (req, res) => {
  try {
    const fileName = `uploads/${Date.now()}.jpg`;

    const command = new PutObjectCommand({
      Bucket: process.env.BUCKET_NAME,
      Key: fileName,
      ContentType: "image/jpeg"
    });

    const url = await getSignedUrl(s3, command, { expiresIn: 60 });

    res.json({ uploadUrl: url, fileName });

  } catch (err) {
    console.log(err);
    res.status(500).send("Error generating upload URL");
  }
});

// Download URL
app.get('/download-url', async (req, res) => {
  try {
    const { fileName } = req.query;

    const command = new GetObjectCommand({
      Bucket: process.env.BUCKET_NAME,
      Key: fileName
    });

    const url = await getSignedUrl(s3, command, { expiresIn: 300 });

    res.json({ downloadUrl: url });

  } catch (err) {
    console.log(err);
    res.status(500).send("Error generating download URL");
  }
});

// SERVER START
app.listen(3000, () => {
  console.log("🔥 Server started on port 3000");
});