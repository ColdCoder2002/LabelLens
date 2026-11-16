import app from './app.js';

const PORT = process.env.PORT || 5000;

app.listen(PORT, (error) => {
    if (error) {
        console.error("Server start failed:", error.message);
        process.exit(1);
    }
    console.log(`Server running on http://localhost:${PORT}`);
});