import React, { Component, useRef, useEffect } from 'react';
import { loadModules } from "esri-loader";
/**
 * create a Map container that loads the module of mapview, 
 * webmap and geojsonlayer for show the geojson data of crime statistic in US.
 */
interface ContainerProps {
    id: string;
}

const Map: React.FC<ContainerProps> = ({ id }) => {
    const mapEl = useRef(null);
 // use a side effect to create the map after react has rendered the DOM
 useEffect(
    () => {
      // define the view here so it can be referenced in the clean up function
      let view: { destroy: () => void; } | null;
      let geojsonLayer;
      // the following code is based on this sample:
      // https://developers.arcgis.com/javascript/latest/sample-code/webmap-basic/index.html
      // first lazy-load the esri classes
      loadModules(["esri/views/MapView", "esri/WebMap", "esri/layers/GeoJSONLayer"], {
        css: true
      }).then(([MapView, WebMap, GeoJSONLayer]) => {
        // then we load a web map from an id
        const webmap = new WebMap({
          // autocasts as new PortalItem()
          portalItem: {
            // get item id from the props
            id
          },
          basemap: "topo-vector"
        });
        const renderer = {
          type: "simple",
          field: "arrest_charge",
          symbol: {
            type: "simple-marker",
            color: "orange",
            outline: {
              color: "white"
            }
          },
          visualVariables: [
            {
              type: "color",
              field: "arrest_charge",
              stops: [
                {
                  value: "12000",
                  color: "#493D26"
                },
                {
                  value: "20000",
                  color: "red"
                },
                {
                  value: "26003",
                  color: "green"
                },
                {
                  value: "38003",
                  color: "#C85A17"
                },
                {
                  value: "26009",
                  color: "purple"
                },
                {
                  value: "70000",
                  color: "#565051"
                },
                {
                  value: "24001",
                  color: "brown"
                },
                {
                  value: "13002",
                  color: "#F75D59"
                },
              
              ]
            }
          ]
        };

        const Template = {
            title: "Crime Information",
            content: "Crime Category: {offense_description} at {address}"

        }

        // and we show that map in a container
        view = new MapView({
          map: webmap,
          zoom: 8,
          
          // use the ref as a container
          container: mapEl.current
        });
        
          geojsonLayer = new GeoJSONLayer({
            url: "https://raw.githubusercontent.com/adarshvarma15/mygeojson/main/RMS_Crime_Incidents%20edited.geojson",
            renderer: renderer,
            popupTemplate: Template
        });
        webmap.add(geojsonLayer);
      });
      return () => {
        // clean up the map view
        if (!!view) {
          view.destroy();
          view = null;
        }
      };
    },
    // only re-load the map if the id has changed
    [id]
  );
  return <div style={{ height: 800 }} ref={mapEl} />;
};


export default Map;
