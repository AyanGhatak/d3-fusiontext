import { fusiontext } from 'd3-fusiontext';
import { select } from 'd3-selection';

fusiontext().label('<FT style="fill:coral;">The quick brown</FT><FT style="fill:blue;">Fox jumps</FT><FT style="fill:orange;">Over the</FT><FT  style="fill:brown;">Lazy dog</FT>',{
    valign: 'top'
  })
  .draw(select('#container1'), {
    x: 50,
    y: 50
  });


fusiontext()
  .label('The quick brown fox jumps over the lazy dog',{
    valign: 'top'
  })
  .draw(select('#container2'), {
    x: 50,
    y: 100,
    width: 150,
    height: 580
  });

