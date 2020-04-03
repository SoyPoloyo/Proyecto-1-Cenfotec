mapboxgl.accessToken = 'pk.eyJ1IjoiYWJsYW5jb2NlbmZvIiwiYSI6ImNrODNud2lrdzB6NDQzZnBxZzh1cmZ6ZnEifQ.zM2OTXbSt4-hq2FzCB7WkQ';
    var map = new mapboxgl.Map({
      container: 'map', // Especifico el ID del contenedor
      style: 'mapbox://styles/mapbox/streets-v11', // Especifico el estilo del mapa
      center: [-84.03116608099936,9.932827376420036], // Especifico las coordenadas adonde inicia el mapa
      zoom: 14.5, // Especifico el zoom inicial
    });
    var draw = new MapboxDraw({
      displayControlsDefault: false, //Muestro solo las herramientas que necesito
      controls: {
        line_string: true,
        trash: true
      },
      styles: [
        {
          "id": "linea",
          "type": "line",
          "layout": {
            "line-cap": "round",
            "line-join": "round"
          },
          "paint": {
            "line-color": "#438EE4",
            "line-dasharray": [0.2, 2],
            "line-width": 4,
            "line-opacity": 0.7
          }
        },
        {
          "id": "punto",
          "type": "circle",
          "paint": {
            "circle-radius": 8,
            "circle-color": "#438EE4",
          }
        }
      ]
    });
    map.addControl(draw);
    map.on('draw.create', obtenerInicioFinal);
    map.on('draw.update', obtenerInicioFinal);
    map.on('draw.delete', removerRuta);

    function obtenerInicioFinal() {
      var profile = "driving"; // El perfil de la ruta
      var data = draw.getAll(); // Se obtienen las coordenadas dibujadas en el mapa
      var lastFeature = data.features.length - 1;
      var coords = data.features[lastFeature].geometry.coordinates;
      var newCoords = coords.join(';'); // Se le da formato a las coordenadas
      var radius = []; // Se le da de radio a las coordenadas de 25 metros
      coords.forEach(element => {
        radius.push(25);
      });
      console.log("Punto de inicio y final para salvar en la base de datos: "+coords);
      obtenerRuta(newCoords, radius, profile);
    }

    function obtenerRuta(coordinates, radius, profile) {
      var radiuses = radius.join(';')
      var query = 'https://api.mapbox.com/matching/v5/mapbox/' + profile + '/' + coordinates + '?geometries=geojson&radiuses=' + radiuses + '&steps=true&access_token=' + mapboxgl.accessToken;

      fetch(query)
        .then(function(response) {
          return response.json();
        })
        .then(function(json) {
          var coords = json.matchings[0].geometry;
          console.log("Coordenadas para pintar la ruta: "+coords.coordinates);
          pintarRuta(coords);
        });
    }

    function pintarRuta(coords) {
      map.addLayer({
        "id": "route",
        "type": "line",
        "source": {
          "type": "geojson",
          "data": {
            "type": "Feature",
            "geometry": coords
          }
        },
        "layout": {
          "line-join": "round",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#03AA46",
          "line-width": 4,
          "line-opacity": 0.8
        }
      });
    }
    
    function removerRuta() {
      map.removeLayer('route');
      map.removeSource('route');
    }
