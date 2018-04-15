# AgmPedometer2

Try this live at 
<a href="MattPayne.org/agm-pedometer2">MattPayne.org/agm-pedometer2</a>

# Things I've learned so far:
1. `agm-map { height: 500px; }` is needed in the `*.component.css` file to get the map to show up.  
<a href="https://angular-maps.com/guides/getting-started/">AGM Getting Started points this out.</a>
2. The `agm-map` tag has a mapClick event that supplies the lat & lng of the place clicked.
3. The `agm-kml-layer` tag works well with KML created by MapMyDrive (an iPhone app).
4. This works well: the `agm-polyline` tag with `agm-polyline-point` nested in side of it with a `*nfFor` over a plain
array containing objects with lat & lng fields.  Clicking around on the map uses the mapClick event to add points 
to the array.  Yay!  Angular & AGM.

# Misc
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.


