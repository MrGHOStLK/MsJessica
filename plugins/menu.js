const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'help', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://telegra.ph/file/e43cdef96dd9e936c2ea4.jpg";
    r_text[1] = "https://telegra.ph/file/e43cdef96dd9e936c2ea4.jpg";
    r_text[2] = "https://telegra.ph/file/e43cdef96dd9e936c2ea4.jpg";
    r_text[3] = "https://telegra.ph/file/e43cdef96dd9e936c2ea4.jpg";
    r_text[4] = "https://telegra.ph/file/e43cdef96dd9e936c2ea4.jpg";
    r_text[5] = "https://telegra.ph/file/e43cdef96dd9e936c2ea4.jpg";
    
    var i = Math.floor(5*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `πΉββββββπMsJessicaπββββββπΉ


π π ππ¦ π π°π‘ππ­π¬ππ©π© user ππ¨π­.π
βββββββββββββββββββββββββββββββββ
ββ
βπΉ *πππππ πΎπ€π’π’ππ£ππ¨* πΉ
β
β­πΈππΎπ€π’π’ππ£πβ !song <text>
β°π«ππ¨πβ Downloads song for you.
β
β­πΈππΎπ€π’π’ππ£πβ !video <yt link>
β°π«ππ¨πβ Downloads video from YouTube link.
β
β­πΈππΎπ€π’π’ππ£πβ !profinsta<username>
β°π«ππ¨πβ Shows the ig profile of the person.
β
β­πΈππΎπ€π’π’ππ£πβ  !insta <link>
β°π«ππ¨πβ   Downloads content from instagram.
β
β­πΈππΎπ€π’π’ππ£πβ  !yt<text>
β°π«ππ¨πβ   Gives you YT links.
β
β­πΈππΎπ€π’π’ππ£πβ  !show <show name>
β°π«ππ¨πβ   Get info related to tv series and shows.
β
β­πΈππΎπ€π’π’ππ£πβ !gif 
β°π«ππ¨πβ Converts video to gif.
β
β­πΈππΎπ€π’π’ππ£πβ !tomp3 
β°π«ππ¨πβ Converts video into audio.
β
β­πΈππΎπ€π’π’ππ£πβ !tts <text>
β°π«ππ¨πβ Converts text into voice.
β
β­πΈππΎπ€π’π’ππ£πβ !img <text>
β°π«ππ¨πβ It sends image from google.
β
β­πΈππΎπ€π’π’ππ£πβ !trt <language code>
β°π«ππ¨πβ Translate the text you tag.
β
β­πΈππΎπ€π’π’ππ£πβ !wiki <text>
β°π«ππ¨πβ It sends Wikipedia result.
β
β­πΈππΎπ€π’π’ππ£πβ !lyric <text>
β°π«ππ¨πβ Finds the lyrics of the song.
β
β­πΈππΎπ€π’π’ππ£πβ !covid <country code>
β°π«ππ¨πβ Send the covid stats of your country.
β
β­πΈππΎπ€π’π’ππ£πβ !weather <city>
β°π«ππ¨πβ Tells you about the weather of your place.
β
β­πΈππΎπ€π’π’ππ£πβ !removebg 
β°π«ππ¨πβ Removes the background of tge image.
β
β­πΈππΎπ€π’π’ππ£πβ !ocr
β°π«ππ¨πβ Finds the text written on the image.
β
β­πΈππΎπ€π’π’ππ£πβ !wallpaper
β°π«ππ¨πβ It sends you random wallpaper.
β
β ββββββββββββββββββββββββββββββββ
ββ
βπΉ *ππͺπ£ πΎπ€π’π’ππ£ππ¨* πΉ
β
β­πΈππΎπ€π’π’ππ£πβ !joke 
β°π«ππ¨πβ It sends a random joke.
β
β­πΈππΎπ€π’π’ππ£πβ !meme <text>
β°π«ππ¨πβ Cations the image into a meme.
β
β­πΈππΎπ€π’π’ππ£πβ !quote 
β°π«ππ¨πβ It sends a random quote.
β
β­πΈππΎπ€π’π’ππ£πβ !ss <website link>
β°π«ππ¨πβ It sends the screenshot of the website.
β
β­πΈππΎπ€π’π’ππ£πβ !changesay <text>
β°π«ππ¨πβ Converts text into changesay meme image.
β
β­πΈππΎπ€π’π’ππ£πβ !trumpsay
β°π«ππ¨πβ Convert text into Trump's tweet.
β
β­πΈππΎπ€π’π’ππ£πβ !compliment 
β°π«ππ¨πβ Gives you a compliment.
β
β­πΈππΎπ€π’π’ππ£πβ  !bitly <link>
β°π«ππ¨πβ   Shorten your link.
β
β­πΈππΎπ€π’π’ππ£πβ  !dict 
β°π«ππ¨πβ   Dictionary [!dict en;anime]
β
β­πΈππΎπ€π’π’ππ£πβ  !zodiac <leo> 
β°π«ππ¨πβ   Tells you about your horoscope.
β
β­πΈππΎπ€π’π’ππ£πβ  !qr <text>
β°π«ππ¨πβ   Converts text into qr code.
β
β­πΈππΎπ€π’π’ππ£πβ  !movie 
β°π«ππ¨πβ  Gives you info about movie.
β
β­πΈππΎπ€π’π’ππ£πβ  !anime <text>
β°π«ππ¨πβ  Gives you info about anime.
β
β ββββββββββββββββββββββββββββββββ
ββ
βπΉ *ππ©πππ ππ§ πΎπ€π’π’ππ£ππ¨* πΉ
β
β­πΈππΎπ€π’π’ππ£πβ !sticker 
β°π«ππ¨πβ Converts img/gif into a sticker.
β
β­πΈππΎπ€π’π’ππ£πβ !stk 
β°π«ππ¨πβ Converts img/gif into a square sticker.
β
β­πΈππΎπ€π’π’ππ£πβ !imagesticker 
β°π«ππ¨πβ Converts sticker into image.
β
β­πΈππΎπ€π’π’ππ£πβ !attp <text>
β°π«ππ¨πβ Converts text into glowing sticker.
β
ββββββββββββββββββββββββββββββββββ

`}) 

}));
