export class RangeSlider {

    // ==== Variables
    // @param id:string => ID of the DOM element where you want to display rangeslider. Required
    // @param range:object => define max and min range. default {min: 0, max: 100}
    // @param width:number => specify the width of the rangeslider. Default 150px
    // @param handles:array => Number of handles you need maximum 10 handles allowed
    // => Default [0] specify the position of handles in array by comma separated 
    // @param displayValues => True to make valuse visible over the handle , false to makes values invisible 
    // => Default false;

    // ==== Constructor
    constructor(options) {
        
        // Get Container
        this.id = options.id;
        this.container = document.getElementById(this.id);

        // Set Default values
        this.range = (options.range) ? options.range : {min:0, max:100};
        this.width = (options.width) ? options.width : 150;
        this.handles = (options.handles) ? options.handles : [0];
        this.displayValue = (options.displayValue) ? options.displayValue : false;

        this.init();

    }
}