const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// app.use(express.static(path.join(__dirname, 'assets')));
// app.use(express.static(path.join(__dirname, 'style')));
// app.use(express.static(path.join(__dirname, 'script')));

app.use(express.static(path.join(__dirname,'public')));

const users = {
    user1: {
        username: 'admin',
        password: 'password',
    },
    user2: {
        username: 'user',
        password: 'passworduser',
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





app.get('/', (req, res) => {
    // res.sendFile(__dirname + '/html/homepage.html');
    res.render('homepage')
});
app.get('/package',(req,res)=>{
    res.render('package')
})
app.get('/login',(req,res)=>{
    res.render('login')
})

app.post('/loginsubmit',(req,res)=>{
    const username = req.body.name;
    const password = req.body.password;
    if (users[username]) {
        if (users[username].password === password) {
            req.session.username = username;
            res.redirect('/homepage');
        } else {
            res.send('Invalid username or password');
        }
    } else {
        res.send('Invalid username or password');
    }
})

app.listen(port, () => {
    console.log("running at http://localhost:" + port);
});
