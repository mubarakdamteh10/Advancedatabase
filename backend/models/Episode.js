const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class Episode {
    constructor(manga_ep,manga_id,ImagePath,id) {
        this.manga_ep = manga_ep;
        this.manga_id = manga_id;
        this.ImagePath = ImagePath;
        this._id = id;
    }

    save() {
        const db = getDb();
        let dbOp;
        if (this._id) {
            // Update the product
            dbOp = db
                .collection('Episode')
                .updateOne({ _id: new mongodb.ObjectId(this._id) }, { $set: this });
        } else {
            // Insert product
            dbOp = db.collection('Episode').insertOne(this);
        }
        return dbOp
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            });
    }

    static fetchAll() {
        const db = getDb();
        return db
            .collection('Episode')
            .find()
            .toArray()
            .then(episode => {
                console.log(episode);
                return episode;
            })
            .catch(err => {
                console.log(err);
            });
    }

    static getMangadb(){
        const db = getDb();
        return db
        .collection('Episode')
        .aggregate()
        .lookup({
            from: "Manga",
            localField: "manga_id",
            foreignField: "_id",
            as: "mangas"
        })
        .project({	
            _id:0,
            "mangas.name":1,
            manga_ep:1,
            ImagePath:1,
        })
        .toArray()
        .then(episode => {
            console.log(episode);
            return episode;
        })
        .catch(err => {
            console.log(err);
        });
    }

    static findById(prodId) {
        const db = getDb();
        return db
            .collection('Episode')
            .find({ _id : new mongodb.ObjectId(prodId) })
            .next()
            .then(Episode => {
                console.log(Episode);
                return Episode;
            })
            .catch(err => {
                console.log(err);
            });
    }

    static findByMangaId(prodId) {
        const db = getDb();
        return db
            .collection('Episode')
            .aggregate()
            .match({manga_id : new mongodb.ObjectId(prodId)})
            .toArray()
            .then(Episode => {
                console.log(Episode);
                return Episode;
            })
            .catch(err => {
                console.log(err);
            });
    }


    static deleteById(prodId,) {
        const db = getDb();
        return db
            .collection('Episode')
            .deleteOne({ _id: new mongodb.ObjectId(prodId) })
            .then(result => {
                console.log('Deleted');
            })
            .catch(err => {
                console.log(err);
            });
    }


    static getEp(prodId,prodEp) {
        const db = getDb();
        return db
            .collection('Episode')
            .aggregate()
            .match({manga_id: new mongodb.ObjectId(prodId) })
            .match({manga_ep : prodEp})
            .toArray()
            .then(Episode => {
                console.log(Episode);
                return Episode;
            })
            .catch(err => {
                console.log(err);
            });
    }
}


module.exports = Episode;