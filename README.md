# EXIF Check API 🖼
Simple JavaScript/Node.js API for extracting EXIF data from an image.

## Usage

**Request:**
```
GET https://exif-check.hcti.io/?url=https://github.com/ianare/exif-samples/blob/master/jpg/mobile/jolla.jpg?raw=true
```

**Response:**

```json
{
  "XResolution": 72,
  "YResolution": 72,
  "Make": "Jolla",
  "Model": "Jolla",
  "Orientation": 1,
  "ModifyDate": "2014:09:21 16:00:56",
  "ExifOffset": 146
}
```

## Deployment
Setup to be deployed to Zeit.

Clone the repository, and run `now`.

## Built by
[HTML/CSS to Image](https://htmlcsstoimage.com)
