import express from "express";


const app = express();

// Middleware: JSON body ko parse karke req.body mein daalta hai
app.use(express.json());


//Health Check route
app.get("/api/health", (req, res) => {
    res.status(200)
        .json({
            status: "ok",
            uptime: process.uptime(),
            timestamp: new Date().toISOString(),
        });
});



//404 Handler: hamesha saare routes ke Baad
app.use((req, res) => {
    res.status(404).json({
        message: `Route not found: ${req.method} ${req.originalUrl}`,
    });
});

export default app;