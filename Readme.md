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