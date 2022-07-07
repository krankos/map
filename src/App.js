import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marker: [
        {
          title: "The marker`s title will appear as a tooltip.",
          name: "SOMA",
          position: { lat: 37.778519, lng: -122.40564 },
          showInfo: false,
        },
      ],
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(t, map, coord) {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();
    console.log(lat, lng);

    this.setState((previousState) => {
      return {
        marker: [
          {
            title: "",
            name: "",
            position: { lat, lng },
          },
        ],
      };
    });
  }

  render() {
    return (
      <div>
        <h1 className="text-center">My Maps</h1>
        <Map
          google={this.props.google}
          style={{ width: "80%", margin: "auto" }}
          className={"map"}
          zoom={14}
          onClick={this.onClick}
        >
          {this.state.marker.map((marker, index) => (
            <Marker
              key={index}
              title={marker.title}
              name={marker.name}
              position={marker.position}
            />
          ))}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDDP8cQX_OYLg5fbPduqkytP0zAc5Fv_lA",
})(MapContainer);
