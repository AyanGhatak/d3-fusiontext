# d3-fusiontext

d3-fusiontext allows to draw a SVG text with customised inline styling. It also can wrap and display a text within a fixed logical area.

## Installing

If you use NPM, `npm install d3-fusiontext`. Otherwise, download the [latest release](https://github.com/AyanGhatak/d3-fusiontext/releases/latest).  AMD and CommonJS environments are supported.

A sample implementation would be:

``` js
import { fusiontext } from 'd3-fusiontext';
import { select } from 'd3-selection';

fusiontext().label('<FT style="fill:coral;">The quick brown</FT><FT style="fill:blue;">Fox jumps</FT><FT style="fill:orange;">Over the</FT><FT  style="fill:brown;">Lazy dog</FT>',{
    valign: 'top'
  })
  .draw(select('#container1'), {
    x: 50,
    y: 50
  });
```


[Try d3-fusiontext in your browser.](https://rawgit.com/AyanGhatak/d3-fusiontext/master/example/index.html)

## API Reference

* Configuring the parameters
* Draw the text
* Get the logical space

### Configuring the parameters
d3-fusiontext comes with an ample flexibility to configure the text. After instantiating the fusiontext.
Please refer to the [default config file](https://rawgit.com/AyanGhatak/d3-fusiontext/master/src/defaultConfig.js) to get default values and corresponding names of the properties.

* <b>Customise the tag names and classes</b>
```js
// container is the id of the selector where the scroller is to be rendered.
fusiontext()
  .label('The quick brown fox jumps over the lazy dog',{
    customTagName: 'FT',
    customTagClassName: 'custom-label-container'
  })
  .draw(select('#container1'), {
    x: 50,
    y: 100
  });
```
* <b>Customise the text content, alignment and className</b>
```js
fusiontext()
  .label('The quick brown fox jumps over the lazy dog',{
    className: 'dummy-className',
    valign: 'middle'
  })
  .draw(select('#container1'), {
    x: 50,
    y: 100
  });
```
* <b>Customise the margin and padding of the text</b>
```js
// draws a text 10px from the top.
fusiontext()
  .label('The quick brown fox jumps over the lazy dog')
  .margin({
  top: 10
   })
   .padding({
    bottom: 10
   })
  .draw(select('#container1'), {
    x: 50,
    y: 100
  });
```

### Draw the text
```js
fusiontext()
  .draw(select('#container1'), {
    x: 50,
    y: 100
  });
```
The `draw()` accepts the selection as the first parameter and then an optional positional parameter as the second argument.

### Fetch the logical occupied space
Sometimes its very much required to compute the space filled by the text. We refer this to as the logical space of the text. In order to fetch it,
```js
fusiontext()
  .getLogicalSpace(select('#container1'), {
    width: 200,
    height: 40
  })
```
The second argument is optional, which if not stated, takes the maxDimensional information from the default config.
