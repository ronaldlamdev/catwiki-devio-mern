const fs = require('fs');

const breeds = JSON.parse(fs.readFileSync(`${__dirname}/../data/breeds-list.json`))

exports.getDetails = (req, res) => {

  console.log(req.params.breed)

  const id = req.params.breed;
  const breed = breeds.find(c => c.id === id)

  res.status(200).json({
    status: 'success',
    data: {
      breed
    }
  })
}