let heroes=[
    {
        id:1,
        name:'Spider-Man',
        alias:'Peter Parker',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:2,
        name:'Superman',
        alias:'Clark Kent',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:3,
        name:'Iron Man',
        alias:'Tony Stark',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:4,
        name:'Wonder Woman',
        alias:'Diana Prince',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:5,
        name:'Black Widow',
        alias:'Natasha Romanoff',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:6,
        name:'Batman',
        alias:'Bruce Wayne',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:7,
        name:'Aquaman',
        alias:'Arthur Curry',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:8,
        name:'Captain America',
        alias:'Steve Rogers',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:9,
        name:'Flash',
        alias:'Barry Allen',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:10,
        name:'Black Panther',
        alias:'TChalla',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:11,
        name:'Green Lantern',
        alias:'Hal Jordan',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:12,
        name:'Thor',
        alias:'Thor Odinson',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:13,
        name:'Batwoman',
        alias:'Kate Kane',
        team:'Bat Family',
        publisher:'DC',
    },
    {
        id:14,
        name:'Hulk',
        alias:'Bruce Banner',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:15,
        name:'Zatanna',
        alias:'Zatanna Zatara',
        team:'Justice League Dark',
        publisher:'DC',
    },
    {
        id:16,
        name:'Doctor Strange',
        alias:'Stephen Strange',
        team:'Defenders',
        publisher:'Marvel',
    },
    {
        id:17,
        name:'Green Arrow',
        alias:'Oliver Queen',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:18,
        name:'Scarlet Witch',
        alias:'Wanda Maximoff',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:19,
        name:'Martian Manhunter',
        alias:'Jonn Jonzz',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:20,
        name:'Deadpool',
        alias:'Wade Wilson',
        team:'None',
        publisher:'Marvel',
    },
]

db.heroes.insertMany([
    {
        id:1,
        name:'Spider-Man',
        alias:'Peter Parker',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:2,
        name:'Superman',
        alias:'Clark Kent',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:3,
        name:'Iron Man',
        alias:'Tony Stark',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:4,
        name:'Wonder Woman',
        alias:'Diana Prince',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:5,
        name:'Black Widow',
        alias:'Natasha Romanoff',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:6,
        name:'Batman',
        alias:'Bruce Wayne',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:7,
        name:'Aquaman',
        alias:'Arthur Curry',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:8,
        name:'Captain America',
        alias:'Steve Rogers',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:9,
        name:'Flash',
        alias:'Barry Allen',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:10,
        name:'Black Panther',
        alias:'TChalla',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:11,
        name:'Green Lantern',
        alias:'Hal Jordan',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:12,
        name:'Thor',
        alias:'Thor Odinson',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:13,
        name:'Batwoman',
        alias:'Kate Kane',
        team:'Bat Family',
        publisher:'DC',
    },
    {
        id:14,
        name:'Hulk',
        alias:'Bruce Banner',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:15,
        name:'Zatanna',
        alias:'Zatanna Zatara',
        team:'Justice League Dark',
        publisher:'DC',
    },
    {
        id:16,
        name:'Doctor Strange',
        alias:'Stephen Strange',
        team:'Defenders',
        publisher:'Marvel',
    },
    {
        id:17,
        name:'Green Arrow',
        alias:'Oliver Queen',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:18,
        name:'Scarlet Witch',
        alias:'Wanda Maximoff',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:19,
        name:'Martian Manhunter',
        alias:'Jonn Jonzz',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:20,
        name:'Deadpool',
        alias:'Wade Wilson',
        team:'None',
        publisher:'Marvel',
    },
])

db.heroes.find()
db.heroes.find({name:"Batman"})
db.heroes.find({publisher:"DC"})
db.heroes.find({id:{$gt:10}})
db.heroes.find({id:{$lte:8}, publisher:"Marvel"})
db.heroes.find({
    $or:[
        {id:{$lte:8}, publisher:"Marvel"},
        {id:{$gte:15}, publisher:"DC"},
    ]
})


// https://www.mongodb.com/docs/manual/reference/operator/query/

db.heroes.find({name:{$in:["Batman", "Superman", "Flash"]}})
db.heroes.find({name:{$in:["Batman2", "Superman2", "Flash2"]}})

load("C:\\Users\\diego\\dev\\Coder-M1-Flex-75245-master\\clases\\clase07-mongoDB-CRUDmongoDB\\clase\\01-mongoDB\\script.js")

db.heroes.findOne({publisher:"DC"})

db.heroes.countDocuments()
db.heroes.find().count()
db.heroes.find({publisher:"DC"}).count()
db.heroes.estimatedDocumentCount()


db.heroes.find({}, {name:1, team:1})
db.heroes.find({publisher:"Marvel"}, {name:1, team:1})
db.heroes.find({}, {name:1, team:1, alias:0})  // error
db.heroes.find({}, {name:0, team:0, alias:0})

db.heroes.find({}, {name:1, team:1, _id: 0})


db.autos.insertMany([
    {_id:5, marca: "Ford"},
    {_id:4, marca: "Ford II"},
])


db.heroes.find({}, {name:1, team:1, _id: 0}).sort({name: -1})
db.heroes.find({}, {name:1, team:1, _id: 0}).sort({team: -1, name: 1})
db.heroes.find({publisher:"Marvel"}, {name:1, team:1, _id: 0}).sort({team: -1, name: 1})


db.heroes.find({publisher:"Marvel"}, {name:1, team:1, _id: 0}).sort({team: -1, name: 1}).limit(3)
db.heroes.find({publisher:"Marvel"}, {name:1, team:1, _id: 0}).limit(3)
db.heroes.find({publisher:"Marvel"}, {name:1, team:1, _id: 0})
db.heroes.find({publisher:"Marvel"}, {name:1, team:1, _id: 0}).limit(3).skip(5)


// pag 1
db.heroes.find({publisher:"Marvel"}, {name:1, team:1, _id: 0}).limit(3).skip(0)
// pag 2
db.heroes.find({publisher:"Marvel"}, {name:1, team:1, _id: 0}).limit(3).skip(3)  // 4=(n.pag-1) x limit
// pag 3
db.heroes.find({publisher:"Marvel"}, {name:1, team:1, _id: 0}).limit(3).skip(6)  // 6=(n.pag-1) x limit

db.heroes.findOne({name:"Hulk"})

// [ 'Superhuman strength', 'Invulnerability', 'Regenerative healing' ]

db.heroes.updateOne({name:"Hulk"}, {$unset:{powers:1}})
db.heroes.updateOne({name:"Hulk"}, {$set:{powers: [ 'Superhuman strength', 'Invulnerability', 'Regenerative healing' ]}})
db.heroes.updateOne({name:"Hulk"}, {$set:{edad: 41}})
db.heroes.updateOne({name:"Hulk"}, {$inc:{edad: 3}})
db.heroes.updateOne({name:"Hulk"}, {$mul:{edad: 2}})
db.heroes.updateOne({name:"Hulk"}, {$min:{edad: 100}})

db.heroes.findOne({name:"Gamora"})
db.heroes.updateOne({name:"Gamora"}, {$set:{edad: 100}}, {upsert:true})

db.heroes.deleteOne({publisher:"Marvel"})
db.heroes.deleteMany({publisher:"Marvel"})

db.heroes.deleteMany({publisher:"DC", id:{$gt:15}})






