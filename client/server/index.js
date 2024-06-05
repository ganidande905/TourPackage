const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const crypto= require('crypto');
const cors = require('cors');
const port = 7000;

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true  // This allows cookies to be sent to the client
  }));
  
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(express.static('public'));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));




const secret_key=crypto.randomBytes(32).toString('hex');

const generateToken = (user) => {
    return jwt.sign(user, secret_key, { expiresIn: '1h' });
};

function checkauth(req,res,next){
    if (req.path==="/" || req.path==="/loginsubmit" || req.path==="/register" || req.path==='/api/place'){
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
        Imger:"./france/France.jpg",
        dest1: { destinationName: "Paris", imageSrc: "./france/France.jpg" },
        dest2: { destinationName: "ggu", imageSrc: "./france/France.jpg" },
        dest3: { destinationName: "ggu", imageSrc: "./france/France.jpg" },

        dest4: { destinationName: "ggu", imageSrc: "./france/France.jpg" },

        dest5: { destinationName: "ggu", imageSrc: "./france/France.jpg" },

        dest6: { destinationName: "ggu", imageSrc: "./france/France.jpg" },

        

        // dest2: { destinationName: "Provence", imageSrc: "imgsrclink" },
        // dest3: { destinationName: "French Riviera", imageSrc: "imgsrclink" },
        // dest4: { destinationName: "Loire Valley", imageSrc: "../../../public/assets/france/Loire\ Valley.jpg" },
        // dest5: { destinationName: "Mont Saint-Michel", imageSrc: "imgsrclink" },
        // dest6: { destinationName: "Bordeaux", imageSrc: "imgsrclink" }
    },
    {
        Place: "Ladakh",
        Imger:"./ladakh/ladakh_main.jpeg",

        dest1: { destinationName: "Hemis Monastry", imageSrc: "./ladakh/Hemis_Monastry.jpg" },
        dest2: { destinationName: "Khardung la", imageSrc: "./ladakh/Khardung_La.jpg" },
        dest3: { destinationName: "Nubra vally", imageSrc: "./ladakh/Nubra_vally.jpg" },

        dest4: { destinationName: "pangong", imageSrc: "./ladakh/pangong.jpeg" },

        dest5: { destinationName: "Shanti stupa", imageSrc: "./ladakh/Shanti_Stupa.jpg" },

        dest6: { destinationName: "Thiksey monastry", imageSrc: "./ladakh/Thiksey_monastry.jpg" },

    },
    {
        Place: "Munnar",
        Imger:"./munnar/munnar_main.jpg",
        dest1: { destinationName: "Tea Gardens", imageSrc: "./munnar/tea_plantation.png" },
        dest2: { destinationName: "Eravikulam National Park", imageSrc: "./munnar/eravikulam_national_park.jpg" },
        dest3: { destinationName: "Mattupetty Dam", imageSrc: "./munnar/maattupetty.jpg" },
        dest4: { destinationName: "Attukal Waterfalls", imageSrc: "./munnar/Attukal_Waterfalls.jpg" },
        dest5: { destinationName: "Anamudi Peak", imageSrc: "./munnar/Anamudi-Peak.jpg" },
        dest6: { destinationName: "Kundala Lake", imageSrc: "./munnar/kundala_lake.jpg" }
    },
    {
        Place: "Varanasi",
        Imger:"./varanasi/varanasi_main.jpg",
        dest1: { destinationName: "Kashi Vishwanath Temple", imageSrc: "./varanasi/kasi_temple.jpg" },
        dest2: { destinationName: "Dashashwamedh Ghat", imageSrc: "./varanasi/Dashashwamedh_Ghat.jpg" },
        dest3: { destinationName: "Manikarnika Ghat", imageSrc: "./varanasi/" },
        dest4: { destinationName: "Sarnath", imageSrc: "./varanasi/Sarnath.jpg" },
        dest5: { destinationName: "Assi Ghat", imageSrc: "./varanasi/Assi_Ghat.jpg" },
        dest6: { destinationName: "Gyanvapi", imageSrc: "./varanasi/gyanvapi.jpg" }
    },
    {
        Place: "Kanyakumari",
        Imger:"./kanyakumari/Kanyakumari_main.jpg",
        dest1: { destinationName: "Vivekananda Rock Memorial", imageSrc: "./kanyakumari/Vivekananda_Rock_memorial.jpg" },
        dest2: { destinationName: "Thiruvalluvar Statue", imageSrc: "./kanyakumari/Thiruvalluvar_Statue.jpg" },
        dest3: { destinationName: "Kanyakumari Beach", imageSrc: "./kanyakumari/Kanyakumari_Beach1.jpg" },
        dest4: { destinationName: "Padmanabhapuram Palace", imageSrc: "./kanyakumari/Padmanabhapuram_Palace.jpg" },
        dest5: { destinationName: "Gandhi Memorial", imageSrc: "./kanyakumari/Gandhi_Memorial.jpg" },
        dest6: { destinationName: "Thanumalayan Temple", imageSrc: "./kanyakumari/Thanumalayan_Temple.jpg" }
    },
    {
        Place: "Delhi",
        Imger:"./Delhi/delhi_main.jpg",
        dest1: { destinationName: "India Gate", imageSrc: "./delhi/India_gate.jpg" },
        dest2: { destinationName: "Qutub Minar", imageSrc: "./delhi/Qutub_Minar.jpg" },
        dest3: { destinationName: "Red Fort", imageSrc: "./delhi/red_fort.jpeg" },
        dest4: { destinationName: "Lotus Temple", imageSrc: "./delhi/Lotus_Temple.jpg" },
        dest5: { destinationName: "Humayun's Tomb", imageSrc: "./delhi/Humayun's_Tomb.jpg" },
        dest6: { destinationName: "Akshardham Temple", imageSrc: "./delhi/Akshardham_Temple.jpeg" }
    }
];






app.get('/api/place', (req, res) => {
    const { place } = req.query;
    const selectedPlace = placesList.find(item => item.Place.toLowerCase() === place.toLowerCase());
    
    if (selectedPlace) {
        res.json(selectedPlace);
    } else {
        res.status(404).json({ error: 'Place not found' });
    }
});


app.get('/',(req, res) => {
    res.render('login');
});


app.get('/package/:place',(req,res)=>{
    const place= req.params;
    console.log("got",place);
    res.render('package');
});

app.post('/api/loginsubmit',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    console.log(username);
    console.log(password);
    if (users[username]) {
        if (users[username].password === password) {
            const token=generateToken({username});
            res.cookie('token',token,{httpOnly:true});
            
            // res.redirect('/homepage');
            return res.status(200).json({ message: 'Login successful' });

        } else {
            // res.send('Invalid username or password');
            return res.status(401).json({ message: 'Invalid username or password' });
        }
    } else {
        // res.send('Invalid username or password');
        return res.status(401).json({ message: 'Invalid username or password' });
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
