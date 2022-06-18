var map = L.map("map").setView([27.7172, 85.324], 12);
const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Coded by coder\'s gyan with ♥';

const tiles = L.tileLayer(tileUrl, { attribution });

tiles.addTo(map);

function generateList() {
  const ul = document.querySelector(".list");
  locLists.forEach((data) => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    const a = document.createElement("a");
    const p = document.createElement("p");
    div.classList.add("data-item");
    a.innerText = data.properties.name;
    a.href = "#";
    p.innerText = data.properties.address;
    div.appendChild(a);
    div.appendChild(p);
    li.appendChild(div);
    ul.appendChild(li);
  });
}
function popUpContent(location) {
  return `
  <div>
    <h4> ${location.properties.name} </h4>
    <p> ${location.properties.address}</p>
    <div class="callNumber"> 
      <a href="tel:${location.properties.phone}">${location.properties.phone}</a>
    </div>
  </div>
  `;
}
generateList();
function onEachFeature(feature, layer) {
  layer.bindPopup(popUpContent(feature));
}
const treeIcon = L.icon({
  iconUrl: "park.png",
  iconSize: [40, 40],
  className: "tree",
});
const locationLayer = L.geoJSON(locLists, {
  onEachFeature: onEachFeature,
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, { icon: treeIcon });
  },
}).addTo(map);

// const CircleLayer = L.circle([27.7172, 85.324], {
//   radius: 2000,
//   color: "darkgreen",
//   fillOpacity: 0.25,
// });

// CircleLayer.addTo(map);

// // var bounds = [
// //   [27.75, 85.304],
// //   [27.8, 85.4],
// // ];
// // const Rectangle = L.rectangle(bounds, { color: "red" });
// // Rectangle.addTo(map);

// const BermudaTriangle = [
//   [25.774, -80.19],
//   [18.446, -66.118],
//   [32.321, -64.757],
// ];
// const Polygon = L.polygon(BermudaTriangle);
// Polygon.addTo(map);

// var latlngs = [
//   [45.51, -122.68],
//   [37.77, -122.43],
//   [34.04, -118.2],
// ];
// const PolyLine = L.polyline(latlngs, { color: "black" });

// PolyLine.addTo(map);

// // const icon = L.icon({
// //   iconUrl: "marker.png",
// //   iconSize: [80, 100],
// // });
// const marker = L.marker([27.7172, 85.324])
//   .bindPopup("<h4>Kathmandu</h4>")
//   .addTo(map);

// const icon = L.icon({
//   iconUrl: "park.png",
//   iconSize: [45, 45],
//   backgoundColor: "transparent",
// });

// const FirstGovernmentalArea = L.marker([27.793, 85.392], { icon });

// FirstGovernmentalArea.bindPopup("<h4>This is first governmental area</h4>");

// FirstGovernmentalArea.addTo(map);

// const SecondGovernmentalArea = L.marker([27.698, 85.398], { icon })
//   .bindPopup("<h4>This is second governmental area</h4>")
//   .addTo(map);
// const ThirdGovernmentalArea = L.marker([27.71, 85.251], { icon })
//   .bindPopup("<h4>This is third governmental area</h4>")
//   .addTo(map);
