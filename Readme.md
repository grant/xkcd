# xkcd

A simple xkcd API.

```bash
npm install xkcd --save
```

## examples

```js
var xkcd = require('xkcd');

// Get the current xkcd
xkcd(function (err, data) {
  console.log(data);
});

// Get a specific xkcd
xkcd(532, function (err, data) {
  console.log(data);
});
```

### response example

```js
{
  month: "5",
  num: 1369,
  link: "",
  year: "2014",
  news: "",
  safe_title: "TMI",
  transcript: "",
  alt: "'TMI' he whispered, gazing into the sea.",
  img: "http://imgs.xkcd.com/comics/tmi.png",
  title: "TMI",
  day: "16"
}
```

## fields

- `alt` (String) Img alt text
- `day` (String) The day # as a string
- `img` (URL) Img URL
- `link` (String) External links (may be empty)
- `month` (String) Month number as a string
- `news` (String) News
- `num` (int) Id
- `safe_title` (String) Safe title
- `title` (String) Title
- `transcript` (String) Transcript
- `year` (String) Year

## notes

- xkcd 404 throws an error since there is no comic for this id.