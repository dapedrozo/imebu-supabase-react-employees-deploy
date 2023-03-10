import express from "express";
import cors from 'cors';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url'
import {PORT} from "./config.js"

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(express.json());


app.use(express.static(join(__dirname, '../imebu-supabase-react-employees/dist/')));

app.get('/*', function(req, res) {
    res.sendFile('index.html', { root:join (__dirname, '../imebu-supabase-react-employees/dist/') }, function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

app.listen(process.env.PORT || PORT)
console.log("Server is running on port "+PORT);