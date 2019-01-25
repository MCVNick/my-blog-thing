const things = ['red', 'blue', 'green']

module.exports = {
    getAllBlogs: (req, res) => {
        req.app.get('db').get_all_blogs()
            .then(blogs => {
                res.status(200).send(blogs)
            })
            .catch((error) => { errorMessage = 'O snap something went wrong with getting all blogs' })
    },
    getThingsSearch: (req, res) => {
        const { index, color, age } = req.query
        console.log(index, color, age)

        let foundThings = things.find((c, i) => {
            return (i === index || c === color || console.log(age))
        })
        res.status(200).send(foundThings)
    }
}