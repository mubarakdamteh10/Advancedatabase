const { validationResult } = require('express-validator')

const mongodb = require('mongodb');
const Episode = require('../models/Episode');
const ObjectId = mongodb.ObjectId;
var mongoose = require('mongoose');

exports.getSearchEpisode = (req, res, next) => {
    Episode.fetchAll()
        .then(Episodes => {
            res.status(200).json({
                response: {
                    data: Episodes,
                    message: "success"
                }
            });
        })
        .catch(err => {
            res.status(500).json({
                response: {
                    data: [],
                    message: err
                }
            });
        });
}

exports.getMangaNamedb = (req, res, next) => {
    Episode.getMangadb()
        .then(Episodes => {
            res.status(200).json({
                response: {
                    data: Episodes,
                    message: "success"
                }
            });
        })
        .catch(err => {
            res.status(500).json({
                response: {
                    data: [],
                    message: err
                }
            });
        });
}


exports.postAddEpisode = (req, res, next) => {
    console.log(req.body);
    const { manga_id, manga_ep,ImagePath } = req.body;
    const errors = validationResult(req);
    var m_id = mongoose.Types.ObjectId(manga_id);
    if (!errors.isEmpty()) {
        res.status(200).json({
            response: {
                result: false,
                message: errors.array()
            }
        });
    } else {
        const episode = new Episode(parseInt(manga_ep), m_id ,ImagePath);
        episode
            .save()
            .then(result => {
                // console.log(result);
                console.log('Created Episode');
                res.status(200).json({
                    response: {
                        result: true,
                        message: "success"
                    }
                });
            })
            .catch(err => {
                console.log(err);
                res.status(200).json({
                    response: {
                        result: false,
                        message: err
                    }
                });
            });
    }
};

exports.postUpdateEpisode = (req, res, next) => {
    console.log(req.body);
    const { episode_id, manga_ep, manga_id,ImagePath} = req.body;
    const errors = validationResult(req);
    var m_id = mongoose.Types.ObjectId(manga_id)
    if (!errors.isEmpty()) {
        res.status(200).json({
            response: {
                result: false,
                message: errors.array()
            }
        });
    } else {
        const episode = new Episode(parseInt(manga_ep), m_id,ImagePath,  new ObjectId(episode_id));
        episode
            .save()
            .then(result => {
                console.log('Update Episode');
                res.status(200).json({
                    response: {
                        result: true,
                        message: "success"
                    }
                });
            })
            .catch(err => {
                console.log(err);
                res.status(200).json({
                    response: {
                        result: false,
                        message: err
                    }
                });
            });
    }
};

exports.getDeleteEpisode = (req, res, next) => {
    const { episode_id } = req.params;
    console.log(episode_id);
    Episode.deleteById(episode_id)
        .then(() => {
            console.log('Delete Episode');
            res.status(200).json({
                response: {
                    result: true,
                    message: "success"
                }
            });
        })
        .catch(err => {
            res.status(200).json({
                response: {
                    result: false,
                    message: err
                }
            });
        });
};

exports.getUpdateEpisode = (req, res, next) => {
    console.log(req.params);
    const { episode_id } = req.params;
    let manga_ep = '';
    let manga_id = '';
    let ImagePath = '';

    Episode.findById(episode_id)
        .then(episode => {
            console.log(episode);
            res.status(200).json({
                response: {
                    data: episode,
                    message: "success"
                }
            });
        })
        .catch(err => {
            res.status(200).json({
                response: {
                    data: [],
                    message: err
                }
            });
        });
};


exports.getEpisodebyMangaID = (req, res, next) => {
    //console.log(req.params);
    const { manga_id } = req.params;
    console.log(manga_id);
    let manga_ep = '';
    let ImagePath = '';
    Episode.findByMangaId(manga_id)
        .then(episode => {
            console.log(episode);
            res.status(200).json({
                response: {
                    data: episode,
                    message: "success"
                }
            });
        })
        .catch(err => {
            res.status(200).json({
                response: {
                    data: [],
                    message: err
                }
            });
        });
};

exports.getEpisode = (req, res, next) => {
    //console.log(req.params);
    const { manga_id } = req.params;
    const { manga_ep } = req.params;
    console.log(manga_ep);
    Episode.getEp(manga_id,parseInt(manga_ep))
        .then(episode => {
            console.log(episode);
            res.status(200).json({
                response: {
                    data: episode[0],
                    message: "success"
                }
            });
        })
        .catch(err => {
            res.status(200).json({
                response: {
                    data: [],
                    message: err
                }
            });
        });
};