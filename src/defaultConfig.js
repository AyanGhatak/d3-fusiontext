var id = 1,
  UNDEFINED;
export default {
  group: {
      className: 'container',
      style: {
          fill: '#C8C8C8'
      }
  },
  label: {
      customTagName: 'FT',
      customTagClassName: 'fusioncharts-yAxis-custom-name' + id,
      /*text: 'G<br /><FT style="color:blue;">G<FT>C</FT></FT>A<FT>D</FT>',*/
      /*text: 'A<br/>A<FT style="fill:red; font-size:30px;">B<br/>B<FT style="fill:blue;">C'+
      '</FT></FT>D<FT style="fill:green;">E</FT>',*/
      /*text: 'A<FT style="fill:red; font-size:20px;">B<FT style="fill:blue;">C</FT></FT>D'+
      '<FT style="fill:green;">E</FT>',*/
      text: '',
      // text: 'ABC',
      className: 'fusioncharts-yAxis-name' + id,
      style: {
          'font-size': '12px'
      },
      valign: 'middle'
  },
  margin: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
  },
  padding: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
  },
  interaction: {
      hide: false,
      listeners: [{
          action: 'click'/*,
          callback: function () {
              console.log('click');
          }*/
      }],
      tooltip: {
          hide: false,
          text: 'ABC'
      },
      className: 'fusioncharts-navigator-standardTimeZone-tracker-rect' + id,
      style: {
          'fill': 'rgba(192,192,192,0)',
          'stroke-width': '0',
          cursor: 'pointer'
      }
  },
  labelBound: {
      hide: false,
      className: 'fusioncharts-navigator-standardTimeZone-label-bound' + id,
      style: {
          'fill': 'NONE',
          'stroke-width': '1',
          'stroke': '#000'
      },
      /*
       * User defined logical space fn.
      */
      customLogicalSpace: UNDEFINED,
      /*
       * default configurations - comes handy if user gives wrong or no input.
      */
      defaultConfig: {
          pathFn: function (x, y, width, height) {
              return ['M', x, y, 'L', x + width, y, 'L', x + width, y + height, 'L', x,
              y + height, 'Z'];
          },
          getLogicalSpace: function (width, height, styleObj) {
              var excess = styleObj['stroke-width'] * 2;
              width += excess;
              height += excess;
              return {
                  width: width,
                  height: height
              };
          }
      },
      /*
       * This creates a custom path for the boundary function.
      */
      customPathFn: UNDEFINED
  }
};
