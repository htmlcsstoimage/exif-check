const axios = require('axios');
const ExifImage = require('exif').ExifImage;

module.exports = async (req, res) => {
  const { url } = req.query

  if (typeof url === "undefined") {
    return res.json({ usage: "url query param required. See https://github.com/htmlcsstoimage/exif-check" });
  }

  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' })

    new ExifImage({ image : response.data }, function (error, exifData) {
      if (error)
        res.json({ error: error.message });
      else
        res.json(exifData.image);
    });
  } catch (error) {
    return res.json({ error: "Could not download image" });
  }
}
