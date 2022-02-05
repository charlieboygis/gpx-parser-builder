export default class Bounds {
  constructor(object) {
    this.$ = {};
    this.$.minlat = object.minlat;
    this.$.minlon = object.minlon;
    this.$.maxlat = object.maxlat;
    this.$.maxlon = object.maxlon;
  }
}
