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

## fields

- `month` (String) Month number as a string
- `num` (int) Id
- `link` (String) External links (may be empty)
- `year` (String) Year
- `news` (String) News
- `safe_title` (String) Safe title
- `transcript` (String) Transcript
- `alt` (String) Img alt text
- `img` (URL) Img URL
- `title` (String) Title
- `day` (String) The day # as a string