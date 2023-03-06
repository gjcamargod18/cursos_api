const express = require('express')
const { REGEX_BACKSLASH } = require('picomatch/lib/constants')
const routes = express.Router()
//GET
routes.get('/curso', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query("SELECT * FROM cursos", (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.get('/temas/:id', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query("SELECT * FROM temas WHERE id_curso = ?",[req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.get('/tema/:id', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query("SELECT * FROM temas where id=?",[req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
routes.get('/videos/:id', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query("SELECT * FROM videos  where id_tema=?",[req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
routes.get('/video/:id', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query("SELECT * FROM videos  where id=?",[req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})



//POST
routes.post('/', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query("INSERT INTO temas (titulo, descripcion) VALUES (?)",[req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('registrado')
        })
    })
})
module.exports = routes