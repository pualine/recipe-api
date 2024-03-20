import { Router } from "express";




// initialize router
const router = Router()
const uri = process.env.MONGO_URI;


// Define routes
router.post('/', (req, res) =>{
    res.send('Add recipes');
});

// single recipe
router.get('/:id', (req, res) =>{
    res.send(`Single recipes:${req.params.id}`);
});

router.delete('/:id', (req, res) =>{
    res.send(`Delete one:${req.params.id}`);
});

router.patch('/:id', (req, res) =>{
    res.send(`Update one:${req.params.id}`);
});

export default router;
