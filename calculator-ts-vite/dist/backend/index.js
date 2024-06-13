"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = 3001; // Make sure this is a different port than the one used by Vite
// Proxy requests meant for the frontend to the Vite server
// app.use(
//   createProxyMiddleware({
//     target: 'http://localhost:5173', // Port where Vite dev server runs
//     pathRewrite: {
//       '^/frontend': '/', // Optional rewrite rule
//     },
//     router: {
//       // This can dynamically route to different targets
//       '/api': 'http://localhost:3001', // Local API requests handled by Express
//     },
//   })
// )
console.log(__dirname);
app.use(express_1.default.static(path_1.default.join(__dirname, '../frontend')));
app.get('*', (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../frontend', 'index.html'));
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
