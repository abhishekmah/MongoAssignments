const post = (model) => async(req, res) => {

    const book = await model.create(req.body);
    return res.status(201).json({ book })
}

const get = (model) => async(req, res) => {

    const books = await model.find().lean().exec();
    return res.status(200).json({ books })
}

const getOne = (model) => async(req, res) => {

    const book = await model.findById(req.params.id).lean().exec()
    return res.status(200).json({ book })
}

const updateOne = (model) => async(req, res) => {

    const book = await model.findByIdAndUpdate(req.params.id, req.body, { new: true })
    return res.status(200).json({ book })
}

const deleteOne = (model) => async(req, res) => {

    const book = await model.findByIdAndDelete(req.params.id);
    return res.status(200).json({ book })
}

module.exports = {
    post,
    get,
    getOne,
    updateOne,
    deleteOne
}