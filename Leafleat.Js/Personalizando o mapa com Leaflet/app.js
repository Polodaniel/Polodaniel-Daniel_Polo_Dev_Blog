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

function InicializarVariaveis()
{
    ZoomMin = 1;
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

function CriarMarcador()
{
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

function RemoverMarcadores()
{
    map.eachLayer((layer) => {
        layer.remove();
    });

    MapaInicializado = false;

    ConfigurarMapa();

    map.setView([-21.1767, -47.8208], 12);
}