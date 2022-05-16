var map; // Mapa
var baseMap; // Mapa Base

var ZoomMin; // Zoom minimo permitido
var ZoomMax; // Zoom maximo permitido
var AttributionConfig; // Contribuição
var TemplateConfig; // Template do Mapa

window.onload = function () {

    // Inicializa as vaiaveis necessarias
    InicializarVariaveis()

    // Inicializa o mapa
    InicializarMapa();

    // Configurar o Mapa para receber as marcações
    ConfigurarMapa();
};

function InicializarVariaveis() {
    ZoomMin = 3;
    ZoomMax = 20;
    AttributionConfig = "Daniel Polo Dev - Blog";
    TemplateConfig = "http://{s}.tile.osm.org/{z}/{x}/{y}.png";
}

function InicializarMapa() {
    map = L.map(document.getElementById('mapDIV'), {
        center: [-21.1767, -47.8208], // Define a localização inicial 
        zoom: 12 // Define o zoom inicial para o mapa
    });
}

function ConfigurarMapa() {
    baseMap = L.tileLayer(TemplateConfig,
        {
            attribution: AttributionConfig, // Define o layout do mapa
            maxZoom: ZoomMax, // Define o Zoom máximo
            minZoom: ZoomMin // Define o Zoom mínimo
        });

    baseMap.addTo(map);
}

function CriarMarcador() {
    // Capturando os input
    var inputLatitude = document.getElementById('latitudeID');
    var inputLongitude = document.getElementById('longitudeID');
    var inputPopup = document.getElementById('popupID');

    // Coletando os valores desse input
    var Latitude = inputLatitude.value;
    var Longitude = inputLongitude.value;
    var Popup = inputPopup.value;

    // Criando a marcação no Mapa
    L.marker([Latitude, Longitude])
        .bindPopup(Popup)
        .addTo(map);

    // Movimentando o mapa ate a marcação.    
    map.setView([Latitude, Longitude], 16);
}

function RemoverMarcadores() {
    map.eachLayer((layer) => {
        layer.remove();
    });

    MapaInicializado = false;

    ConfigurarMapa();

    map.setView([-21.1767, -47.8208], 12);
}

function AdicionarCirculo() {
    // Capturando os input
    var inputLatitudeCirculo = document.getElementById('latitudeCirculoID');
    var inputLongitudeCirculo = document.getElementById('longitudeCirculoID');
    var inputRaioCirculo = document.getElementById('raioCirculoID');
    var inputPopupCirculo = document.getElementById('popupCirculoID');

    // Coletando os valores desse input
    var Latitude = inputLatitudeCirculo.value;
    var Longitude = inputLongitudeCirculo.value;
    var Popup = inputPopupCirculo.value;
    var Raio = inputRaioCirculo.value;

    L.circle([Latitude, Longitude], {
        color: '#004647', // Cor do polígono
        fillColor: '#004647', // Cor do preenchimento do polígono
        fillOpacity: 0.5, // Opacidade do preenchimento
        radius: Raio
    })
        .bindPopup(Popup)
        .addTo(map);

    map.setView([Latitude, Longitude], 15);
}

function AdicionarPoligono() {
    // Capturando os input
    var inputLatitudePoligonoUm = document.getElementById('latitudePoligonoUmID');
    var inputLongitudePoligonoUm = document.getElementById('longitudePoligonoUmID');

    var inputLatitudePoligonoDois = document.getElementById('latitudePoligonoDoisID');
    var inputLongitudePoligonoDois = document.getElementById('longitudePoligonoDoisID');

    var inputLatitudePoligonoTres = document.getElementById('latitudePoligonoTresID');
    var inputLongitudePoligonoTres = document.getElementById('longitudePoligonoTresID');

    var inputPopupPoligono = document.getElementById('popupPoligonoID');

    // Coletando os valores desse input
    var LatitudeUm = inputLatitudePoligonoUm.value;
    var LongitudeUm = inputLongitudePoligonoUm.value;

    var LatitudeDois = inputLatitudePoligonoDois.value;
    var LongitudeDois = inputLongitudePoligonoDois.value;

    var LatitudeTres = inputLatitudePoligonoTres.value;
    var LongitudeTres = inputLongitudePoligonoTres.value;

    var Popup = inputPopupPoligono.value;

    L.polygon([
        [LatitudeUm, LongitudeUm],
        [LatitudeDois, LongitudeDois],
        [LatitudeTres, LongitudeTres]
    ], {
        color: '#004647', // Cor do polígono
        fillColor: '#004647', // Cor do preenchimento do polígono
        fillOpacity: 0.5 // Opacidade do preenchimento
    }).bindPopup(Popup).addTo(map);

    map.setView([LatitudeUm, LongitudeUm], 15);
}

    // var polygon = L.polygon([
    //     [-21.18690687334457, -47.80620659271258],
    //     [-21.18334821002794, -47.80313944061005],
    //     [-21.18319204610432, -47.80804453497586]
    // ],{
    //     color: '#004647', 
    //     fillColor: '#004647', 
    //     fillOpacity: 0.5, 
    //     radius: Raio 
    // }).bindPopup(Popup).addTo(map);