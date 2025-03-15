import express from 'express';  // Import Express
import { OpenAI } from 'openai'; // Import OpenAI SDK
import dotenv from 'dotenv';     // Import dotenv to manage environment variables
import cors from 'cors'; 
import fs from 'fs';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

// Create an OpenAI client instance using the API key from the .env file
const openAI = new OpenAI({
  apiKey: process.env.VITE_OPENAI_API_KEY,
});

// Enable JSON parsing for incoming requests
app.use(express.json());

// Endpoint to handle Whisper API requests
app.post('/api/whisper-test', async (req, res) => {
  try {
    // Read the file (hardcoded redcrayon.mp3)
    const filePath = 'chainsawman.wav';  // The hardcoded file path
    const fileStream = fs.createReadStream(filePath);

    // Send the audio file to the OpenAI Whisper API for transcription
    const transcription = await openAI.audio.transcriptions.create({
      file: fileStream,
      model: 'whisper-1',  // Whisper model for transcription
    });

    // Send the transcription result back to the client
    res.json({ transcription: transcription.text });
  } catch (error) {
    console.error('Error transcribing audio:', error);
    res.status(500).json({ error: 'Failed to transcribe audio' });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});