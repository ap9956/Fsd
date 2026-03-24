const express = require("express");
const bodyParser = require("body-parser");
const { validateUser } = require("./helper");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Login API
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Email and password required"
        });
    }

    const user = validateUser(email, password);

    if (user) {
        res.json({
            message: "Login successful",
            user: {
                id: user.id,
                email: user.email
            }
        });
    } else {
        res.status(401).json({
            message: "Invalid credentials"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});