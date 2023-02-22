const Anime_Images = require('anime-images-api')
const API = new Anime_Images()
async function getIMG(){
    let { image } = await API.sfw.wink()
    console.log(image)
}
getIMG()