const fs = require('fs');

const breeds = JSON.parse(fs.readFileSync(`${__dirname}/../data/breeds-list.json`))

exports.checkBreed = (req, res, next) => {
  console.log(req.params)
  if (!breeds.find(c => c.id === req.params.breed)) {
    return (res.status(400).json({
      status: 'failed',
      message: `Could not find ${req.params.breed}`
    }))
  };
  next();
}

exports.getDetails = (req, res) => {

  const id = req.params.breed;
  const breed = breeds.find(c => c.id === id)

  res.status(200).json({
    status: 'success',
    data: {
      breed
    }
  })
}