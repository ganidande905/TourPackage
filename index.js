const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const crypto= require('crypto');
const port = 7000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));

const secret_key=crypto.randomBytes(32).toString('hex');

const generateToken = (user) => {
    return jwt.sign(user, secret_key, { expiresIn: '1h' });
};

function checkauth(req,res,next){
    if (req.path==="/" || req.path==="/loginsubmit" || req.path==="/register"){
        return next();
    }
    const token= req.cookies.token;
    if (!token){
        res.status(401).send("unauthorized, try logging in again!");
        setTimeout(()=>{
            res.redirect("/");
        },3000);
        
    }

    jwt.verify(token,secret_key,(err,decoded)=>{
        if (err){
            return res.status(401).send("unauthorized");
        }
        req.user=decoded;
        next();
    });
}
app.use(checkauth);

const users = {
    "admin": {
        password: 'admin',
        email:''
    },
    "demo": {
        password: 'abcd123',
        email:''
    }
};

let placesList = [
    {
        Place: "France",
        dest1: { destinationName: "Paris", imageSrc: "imgsrclink" },
        dest2: { destinationName: "Provence", imageSrc: "imgsrclink" },
        dest3: { destinationName: "French Riviera", imageSrc: "imgsrclink" },
        dest4: { destinationName: "Loire Valley", imageSrc: "imgsrclink" },
        dest5: { destinationName: "Mont Saint-Michel", imageSrc: "imgsrclink" },
        dest6: { destinationName: "Bordeaux", imageSrc: "imgsrclink" }
    },
    {
        Place: "Ladakh",
        dest1: { destinationName: "Pangong Lake", imageSrc: "imgsrclink" },
        dest2: { destinationName: "Nubra Valley", imageSrc: "imgsrclink" },
        dest3: { destinationName: "Thiksey Monastery", imageSrc: "imgsrclink" },
        dest4: { destinationName: "Hemis Monastery", imageSrc: "imgsrclink" },
        dest5: { destinationName: "Khardung La Pass", imageSrc: "imgsrclink" },
        dest6: { destinationName: "Shanti Stupa", imageSrc: "imgsrclink" }
    },
    {
        Place: "Munnar",
        dest1: { destinationName: "Tea Gardens", imageSrc: "imgsrclink" },
        dest2: { destinationName: "Eravikulam National Park", imageSrc: "imgsrclink" },
        dest3: { destinationName: "Mattupetty Dam", imageSrc: "imgsrclink" },
        dest4: { destinationName: "Attukal Waterfalls", imageSrc: "imgsrclink" },
        dest5: { destinationName: "Anamudi Peak", imageSrc: "imgsrclink" },
        dest6: { destinationName: "Kundala Lake", imageSrc: "imgsrclink" }
    },
    {
        Place: "Varanasi",
        dest1: { destinationName: "Kashi Vishwanath Temple", imageSrc: "imgsrclink" },
        dest2: { destinationName: "Dashashwamedh Ghat", imageSrc: "imgsrclink" },
        dest3: { destinationName: "Manikarnika Ghat", imageSrc: "imgsrclink" },
        dest4: { destinationName: "Sarnath", imageSrc: "imgsrclink" },
        dest5: { destinationName: "Assi Ghat", imageSrc: "imgsrclink" },
        dest6: { destinationName: "Banaras Hindu University", imageSrc: "imgsrclink" }
    },
    {
        Place: "Kanyakumari",
        dest1: { destinationName: "Vivekananda Rock Memorial", imageSrc: "imgsrclink" },
        dest2: { destinationName: "Thiruvalluvar Statue", imageSrc: "imgsrclink" },
        dest3: { destinationName: "Kanyakumari Beach", imageSrc: "imgsrclink" },
        dest4: { destinationName: "Padmanabhapuram Palace", imageSrc: "imgsrclink" },
        dest5: { destinationName: "Gandhi Memorial", imageSrc: "imgsrclink" },
        dest6: { destinationName: "Thanumalayan Temple", imageSrc: "imgsrclink" }
    },
    {
        Place: "Delhi",
        dest1: { destinationName: "India Gate", imageSrc: "imgsrclink" },
        dest2: { destinationName: "Qutub Minar", imageSrc: "imgsrclink" },
        dest3: { destinationName: "Red Fort", imageSrc: "imgsrclink" },
        dest4: { destinationName: "Lotus Temple", imageSrc: "imgsrclink" },
        dest5: { destinationName: "Humayun's Tomb", imageSrc: "imgsrclink" },
        dest6: { destinationName: "Akshardham Temple", imageSrc: "imgsrclink" }
    }
];

app.get('/',(req, res) => {
    res.render('login');
});


app.get('/package/:place',(req,res)=>{
    const place= req.params;
    console.log("got",place);
    res.render('package');
});

app.post('/loginsubmit',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    console.log(username);
    console.log(password);
    if (users[username]) {
        if (users[username].password === password) {
            const token=generateToken({username});
            res.cookie('token',token,{httpOnly:true});

            res.redirect('/homepage');
        } else {
            res.send('Invalid username or password');
        }
    } else {
        res.send('Invalid username or password');
    }
});

app.get('/homepage',(req,res)=>{
    res.render('homecheck');
});

app.post('/register',(req,res)=>{
    const username=req.body.username;
    const password1=req.body.password1;
    const password2=req.body.password2;
    const email=req.body.email;
    if (password1 !== password2){
        res.send("Password not matching. Try again");
    }
    
    if (!users[username]){
        users[username]={'password':password1};
        res.redirect('/');
    } else {
        res.send("Username exist. Try again with different name");
    }
});

app.listen(port, () => {
    console.log("running at http://localhost:" + port);
});
