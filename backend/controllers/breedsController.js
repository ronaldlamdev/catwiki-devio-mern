const fs = require('fs');

const breeds = JSON.parse(fs.readFileSync(`${__dirname}/../data/breeds-list.json`))

exports.getBreeds = (req, res) => {
  res.status(200).json({
    status: 'success',
    length: breeds.length,
    data: {
      breeds
    }
  })
}