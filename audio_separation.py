import openunmix
import torch
import soundfile as sf
from openunmix import predict

# Path to your input audio file
audio_file = 'happy-birthday-25448.wav'

# Read audio with soundfile and convert to PyTorch tensor
audio_data, rate = sf.read(audio_file)
audio_tensor = torch.from_numpy(audio_data.T).float()  # Shape: (channels, samples)

# Handle device placement
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
audio_tensor = audio_tensor.to(device)

# Perform separation
estimates = predict.separate(audio_tensor, rate=rate)

# Fix the shape before saving
vocals = estimates['vocals'].squeeze(0).cpu().numpy().T  # Remove batch dim + transpose
other = estimates['other'].squeeze(0).cpu().numpy().T

# Save results
sf.write('separated_vocals.wav', vocals, rate)
sf.write('instrumental.wav', other, rate)

print("Separation complete!")