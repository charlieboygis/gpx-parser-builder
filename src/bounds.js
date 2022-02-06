export default class Bounds {
  constructor(object) {
    this.$ = {
      minlat: object.$ ? object.$.minlat : object.minlat,
      minlon: object.$ ? object.$.minlon : object.minlon,
      maxlat: object.$ ? object.$.maxlat : object.maxlat,
      maxlon: object.$ ? object.$.maxlon : object.maxlon
    };
  }
}
