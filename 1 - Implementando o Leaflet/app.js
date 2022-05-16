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