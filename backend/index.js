require("dotenv").config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Post = require('./models/post');
const User = require('./models/user');
const bcrypt = require('bcrypt');
const { sendStatus } = require("express/lib/response");
const saltRounds = 10;
const url = process.env.DATABASE_URL;


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.json());
mongoose.set('strictQuery', false);

app.get('/', (req, res) => {
    res.send('Working');
});

//_________________________________________ POST METHODS

app.post('/posts', async(req, res) => {
    const post = new Post({
        'author': req.body.author,
        'title': req.body.title,
        'text': req.body.text
    });

    try{
        await post.save();
        res.send('Added');
    } catch(err){
        res.statusCode(400);
    }
});

app.post('/users', async(req, res) => {

    console.log(req.body.name, req.body.email, req.body.password);

    await bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash
        });

        try{
            user.save();
            res.sendStatus(200);
        } catch(err){
            console.log(err);
            res.sendStatus(400);
        }
    });
});

//__________________________________________  GET METHODS

app.get('/posts', async(req, res) => {

    const postsResults = await Post.find();

    res.json({
        "posts": postsResults
    });
});

app.get('/posts/:id', async(req, res) => {

    const id = req.params.id;
    const postResult = await Post.findById(id);

    res.json({
        post: postResult
    });
});

//_________________________________________ LogIn basic logic

app.get('/users', async (req, res) => {

    const { name, password } = req.query;
    console.log('Received request:', req.query);
  
    try {
      const user = await User.findOne({ name });
      if(user){
        const result = await bcrypt.compare(password, user.password);
        if(result) res.sendStatus(200);
      }

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }

});










const start = async () => {
    await mongoose.connect(url);
    app.listen('8000');
}

start();





