import express from 'express'
import path from 'path'
import { createProxyMiddleware } from 'http-proxy-middleware'

const app = express()
const PORT = 3001 // Make sure this is a different port than the one used by Vite

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

console.log(__dirname)
app.use(express.static(path.join(__dirname, '../frontend')))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
