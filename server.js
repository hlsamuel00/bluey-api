const express = require('express')
const app = express()
const PORT = 3005
const cors = require('cors')

app.use(cors())

function makeClass(...keys){
    return class {
        constructor(...values){
            keys.forEach((val, idx) => this[val] = values[idx]);
        }
    }
}

let Character = makeClass('name', 'breed', 'gender', 'age', 'firstAppearance', 'img', 'description')

let bluey = new Character('Bluey', 'Blue Heeler', 'female', 7, 'Episode: The Magic Xylophone', 'insertImageURL', `Bluey is a 6 year old Blue Heeler pup who loves to play. Her parents and teacher give her lots of time to practice, which means she’s become very good at inventing games, helping everyone choose their roles and deciding on the rules. Her favourite games are ones that involve lots of other kids and grown-ups (especially her dad) and she mainly likes to pretend she’s a grown up doing grownup things herself.`)
let bingo = new Character('Bingo', 'Red Heeler', 'female', 5, 'Episode: The Magic Xylophone', 'insertImageURL',`Bingo is Bluey's younger sister. She’s 4 years old, and a red heeler like her mum. Bingo also likes to play but she is a bit quieter than Bluey, so is more likely to be the customer than the shop owner. Sometimes though, when Bluey asks her to be the doctor, rather than the patient, she really enjoys it. When she’s not playing you can find her in the yard talking to tiny bugs or off lost in her own beautiful world.` )
let bandit = new Character('Bandit', 'Blue Heeler', 'male', 32, 'Episode: The Magic Xylophone', 'insertImageURL', `Dad is an archaeologist (he loves to dig up bones). As the devoted, yet tired father, he does his best to use whatever energy is left after interrupted sleep, work and household chores, to invent and play games with his two girls. He still tries to continue his own life amidst the chaos of child-rearing but often struggles to juggle these two competing tasks!`)
let chilli = new Character('Chilli', 'Red Heeler', 'female', 31, 'Episode: The Magic Xylophone', 'insertImageURL', `After having the kids, Mum’s recently gone back to her job working at Airport Security and juggles this with raising her two little kids. Mum often has a wry comment about the kids' antics or a kind word for an overwrought child, but she’s equally at home throwing herself into a game and always able to see the funny side.`)
let muffin = new Character('Muffin', 'Blue Heeler', 'female', 4, 'Episode: BBQ', 'insertImageURL', `Bluey’s non-stop cousin. Always speaks her mind.` )
let jack = new Character('Jack', 'Jack Russell Terrier', 'male', 7, 'Episode: Army', 'insertImageURL', `Jack Russell is a lively Jack Russell terrier. His best friend is Rusty.`)
let rusty = new Character('Rusty', 'Red Kelpie', 'male', 7, 'Episode: Calypso', 'insertImageURL', `Bluey’s friend from the bush. Already rides a motorbike.`)
let lucky = new Character('Lucky', 'Labrador Retriever', 'male', 9, 'Episode: Keepy Uppy', 'insertImageURL', `Adventurous next door neighbour. Can’t stop moving.`)
let mackenzie = new Character('Mackenzie', 'Border Collie', 'female', 7, 'Episode: Fruitbat', 'insertImageURL', `Quick, sociable and from New Zealand.`)
let indy = new Character('Indy', 'Afghan Hound', 'female', 7, 'Episode: Calypso', 'insertImageURL', `Super open and imaginative.`)
let honey = new Character('Honey', 'Beagle', 'female', 6, 'Episode: Spygame', 'insertImageURL', `Assertive, thoughtful and mindful.`)
let coco = new Character('Coco', 'Poodle', 'female', 7, 'Episode: Shadowlands', 'insertImageURL', `Enthusiastic, impatient.`)
let snickers = new Character('Snickers', 'Dachshund', 'male', 7, 'Episode: Shadowlands', 'insertImageURL', `Not the most physical kid but loves machines, atoms and the stars.`)
let chloe = new Character('Chloe', 'Dalmatian', 'female', 7, 'Episode: Spygame', 'insertImageURL', `Bluey’s Best Friend. Super kind, gentle and smart.`)
let judo = new Character('Judo', 'Chow Chow', 'female', 6, 'Episode: Butterflies', 'insertImageURL', `Bluey’s other neighbor.`)
let jeanluc = new Character('Jean Luc', 'Labrador', 'male', 6, 'Episode: Camping', 'insertImageURL', `Bluey’s French Canadian camping buddy.`)
let theTerriers = new Character('The Terriers', 'Scottish Terrier', 'all male', 7, 'Episode: Calypso', 'insertImageURL', `Unstoppable forces of nature. They’re little terriers.`)
let socks = new Character('Socks', 'Blue Heeler', 'female', 2, 'Episode: Frisky', 'insertImageURL', `Muffin’s baby sister is just starting to talk.`)
let missy = new Character('Missy', 'Shih Tzu', 'female', 5, 'Episode: Bob Bilby', 'insertImageURL', `Super brave when she’s ready.`)
let buddy = new Character('Buddy', 'Pug', 'male', 5, 'Episode: Bob Bilby', 'insertImageURL', `Patient for days.`)
let calypso = new Character('Calypso', 'Australian Shepherd', 'female', 37, 'Episode: Calypso', 'insertImageURL', `Bluey's teacher for Prep. An Aussie Shepherd.`)
let winton = new Character('Winton', 'English Bulldog', 'male', 'unknown', 'Episode: Markets', 'insertImageURL', `A very obedient breed.`)
let uncleStripe = new Character('Stripe', 'Blue Heeler', 'male', 30, 'Episode: BBQ', 'insertImageURL', `Dad’s Younger brother & Bluey & Bingo’s Uncle.`)
let auntTrixie = new Character('Trixie', 'Blue Heeler', 'female', 28, 'Episode: BBQ', 'insertImageURL', `Bluey & Bingo’s Aunt and Chilli’s hockey teammate.`)
let bently = new Character('Bently', 'Cavalier King Charles Spaniel', 'female', 3, 'Episode: Bike', 'insertImageURL', `Small, inventive and determined.`)
let nana = new Character('Christine', 'Blue Heeler', 'female', 67, 'Episode: Grannies', 'insertImageURL', `Bandit’s Mum and Bluey & Bingo’s Nana. Retired to the Gold Coast.`)
let grandad = new Character('Bob', 'Blue Heeler', 'male', 69, 'Episode: Grannies', 'insertImageURL', `Bluey & Bingo’s Grandad.`)
let mort = new Character('Mort', 'Red Heeler', 'male', 'unknown', 'Episode: Granddad', 'insertImageURL', `Chilli's father, and Bluey and Bingo's maternal grandfather. Served in the army when he was younger.`)

let characters = {bluey, bingo, bandit, chilli, muffin, jack, rusty, lucky, mackenzie, indy, honey, coco, snickers, chloe, judo, jeanluc, theTerriers, socks, missy, buddy, calypso, winton, uncleStripe, auntTrixie, bently, nana, grandad, mort}

app.get('/', (req,res) => {
    res.send("<h1>Welcome to the Bluey API</h1><h3>Please use [insertURL] to access API data</h3>")
})

app.get('/api/characters', (req,res) => {
    res.json(characters)
})

app.get('/api/characters/:name', (req,res) => {
    const characterName = req.params.name.toLowerCase().replace(/\s/g, '')
    characters[characterName] ? res.json(characters[characterName]) : res.status(404).end()
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}; you better go catch it!!`)
})