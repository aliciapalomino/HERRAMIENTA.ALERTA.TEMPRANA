ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32718").setExtent([243860.255912, 8645981.723405, 312655.878327, 8697252.173714]);
var wms_layers = [];


        var lyr_ESRI_0 = new ol.layer.Tile({
            'title': 'ESRI',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_SEMANA24LogCargaviraldeSARSCOV2_1 = new ol.format.GeoJSON();
var features_SEMANA24LogCargaviraldeSARSCOV2_1 = format_SEMANA24LogCargaviraldeSARSCOV2_1.readFeatures(json_SEMANA24LogCargaviraldeSARSCOV2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_SEMANA24LogCargaviraldeSARSCOV2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEMANA24LogCargaviraldeSARSCOV2_1.addFeatures(features_SEMANA24LogCargaviraldeSARSCOV2_1);
var lyr_SEMANA24LogCargaviraldeSARSCOV2_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SEMANA24LogCargaviraldeSARSCOV2_1, 
                style: style_SEMANA24LogCargaviraldeSARSCOV2_1,
                interactive: true,
    title: 'SEMANA 24: Log(Carga viral de SARS-COV-2)<br />\
    <img src="styles/legend/SEMANA24LogCargaviraldeSARSCOV2_1_0.png" /> 0 - 2.5 <br />\
    <img src="styles/legend/SEMANA24LogCargaviraldeSARSCOV2_1_1.png" /> 2.5 - 4 <br />\
    <img src="styles/legend/SEMANA24LogCargaviraldeSARSCOV2_1_2.png" /> 4 - 5 <br />\
    <img src="styles/legend/SEMANA24LogCargaviraldeSARSCOV2_1_3.png" /> 5 - 6 <br />\
    <img src="styles/legend/SEMANA24LogCargaviraldeSARSCOV2_1_4.png" /> 6 < <br />'
        });
var format_SEMANA23LogCargaviraldeSARSCOV2_2 = new ol.format.GeoJSON();
var features_SEMANA23LogCargaviraldeSARSCOV2_2 = format_SEMANA23LogCargaviraldeSARSCOV2_2.readFeatures(json_SEMANA23LogCargaviraldeSARSCOV2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_SEMANA23LogCargaviraldeSARSCOV2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEMANA23LogCargaviraldeSARSCOV2_2.addFeatures(features_SEMANA23LogCargaviraldeSARSCOV2_2);
var lyr_SEMANA23LogCargaviraldeSARSCOV2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SEMANA23LogCargaviraldeSARSCOV2_2, 
                style: style_SEMANA23LogCargaviraldeSARSCOV2_2,
                interactive: true,
    title: 'SEMANA 23: Log(Carga viral de SARS-COV-2)<br />\
    <img src="styles/legend/SEMANA23LogCargaviraldeSARSCOV2_2_0.png" /> 0 - 2.5 <br />\
    <img src="styles/legend/SEMANA23LogCargaviraldeSARSCOV2_2_1.png" /> 2.5 - 4 <br />\
    <img src="styles/legend/SEMANA23LogCargaviraldeSARSCOV2_2_2.png" /> 4 - 5 <br />\
    <img src="styles/legend/SEMANA23LogCargaviraldeSARSCOV2_2_3.png" /> 5 - 6 <br />\
    <img src="styles/legend/SEMANA23LogCargaviraldeSARSCOV2_2_4.png" /> 6 < <br />'
        });
var format_SEMANA22LogCargaviraldeSARSCOV2_3 = new ol.format.GeoJSON();
var features_SEMANA22LogCargaviraldeSARSCOV2_3 = format_SEMANA22LogCargaviraldeSARSCOV2_3.readFeatures(json_SEMANA22LogCargaviraldeSARSCOV2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_SEMANA22LogCargaviraldeSARSCOV2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEMANA22LogCargaviraldeSARSCOV2_3.addFeatures(features_SEMANA22LogCargaviraldeSARSCOV2_3);
var lyr_SEMANA22LogCargaviraldeSARSCOV2_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SEMANA22LogCargaviraldeSARSCOV2_3, 
                style: style_SEMANA22LogCargaviraldeSARSCOV2_3,
                interactive: true,
    title: 'SEMANA 22: Log(Carga viral de SARS-COV-2)<br />\
    <img src="styles/legend/SEMANA22LogCargaviraldeSARSCOV2_3_0.png" /> 0 - 2.5 <br />\
    <img src="styles/legend/SEMANA22LogCargaviraldeSARSCOV2_3_1.png" /> 2.5 - 4 <br />\
    <img src="styles/legend/SEMANA22LogCargaviraldeSARSCOV2_3_2.png" /> 4 - 5 <br />\
    <img src="styles/legend/SEMANA22LogCargaviraldeSARSCOV2_3_3.png" /> 5 - 6 <br />\
    <img src="styles/legend/SEMANA22LogCargaviraldeSARSCOV2_3_4.png" /> 6 < <br />'
        });
var format_DISTRITOS_4 = new ol.format.GeoJSON();
var features_DISTRITOS_4 = format_DISTRITOS_4.readFeatures(json_DISTRITOS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_DISTRITOS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DISTRITOS_4.addFeatures(features_DISTRITOS_4);
var lyr_DISTRITOS_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DISTRITOS_4, 
                style: style_DISTRITOS_4,
                interactive: true,
                title: '<img src="styles/legend/DISTRITOS_4.png" /> DISTRITOS'
            });
var format_PTOS_PTAR_5 = new ol.format.GeoJSON();
var features_PTOS_PTAR_5 = format_PTOS_PTAR_5.readFeatures(json_PTOS_PTAR_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_PTOS_PTAR_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTOS_PTAR_5.addFeatures(features_PTOS_PTAR_5);
var lyr_PTOS_PTAR_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PTOS_PTAR_5, 
                style: style_PTOS_PTAR_5,
                interactive: true,
                title: '<img src="styles/legend/PTOS_PTAR_5.png" /> PTOS_PTAR'
            });

lyr_ESRI_0.setVisible(true);lyr_SEMANA24LogCargaviraldeSARSCOV2_1.setVisible(true);lyr_SEMANA23LogCargaviraldeSARSCOV2_2.setVisible(true);lyr_SEMANA22LogCargaviraldeSARSCOV2_3.setVisible(true);lyr_DISTRITOS_4.setVisible(true);lyr_PTOS_PTAR_5.setVisible(true);
var layersList = [lyr_ESRI_0,lyr_SEMANA24LogCargaviraldeSARSCOV2_1,lyr_SEMANA23LogCargaviraldeSARSCOV2_2,lyr_SEMANA22LogCargaviraldeSARSCOV2_3,lyr_DISTRITOS_4,lyr_PTOS_PTAR_5];
lyr_SEMANA24LogCargaviraldeSARSCOV2_1.set('fieldAliases', {'COD_PMONIT': 'COD_PMONIT', 'SEMANA': 'SEMANA', 'CÓDIGO': 'CÓDIGO', 'VALOR': 'VALOR', });
lyr_SEMANA23LogCargaviraldeSARSCOV2_2.set('fieldAliases', {'COD_PMONIT': 'COD_PMONIT', 'SEMANA': 'SEMANA', 'NOMBRE': 'NOMBRE', 'VALOR': 'VALOR', });
lyr_SEMANA22LogCargaviraldeSARSCOV2_3.set('fieldAliases', {'COD_PMONIT': 'COD_PMONIT', 'SEMANA': 'SEMANA', 'NOMBRE': 'NOMBRE', 'VALOR': 'VALOR', });
lyr_DISTRITOS_4.set('fieldAliases', {'DISTRITO': 'DISTRITO', });
lyr_PTOS_PTAR_5.set('fieldAliases', {'FACILITYID': 'FACILITYID', 'NAME': 'NAME', 'STRUCTTYPE': 'STRUCTTYPE', 'OPDATE': 'OPDATE', 'LOCDESC': 'LOCDESC', 'COD_PMONIT': 'COD_PMONIT', 'POB_CONTRI': 'POB_CONTRI', 'UBIC_PTO': 'UBIC_PTO', });
lyr_SEMANA24LogCargaviraldeSARSCOV2_1.set('fieldImages', {'COD_PMONIT': 'TextEdit', 'SEMANA': 'TextEdit', 'CÓDIGO': 'TextEdit', 'VALOR': 'TextEdit', });
lyr_SEMANA23LogCargaviraldeSARSCOV2_2.set('fieldImages', {'COD_PMONIT': 'TextEdit', 'SEMANA': 'TextEdit', 'NOMBRE': 'TextEdit', 'VALOR': 'TextEdit', });
lyr_SEMANA22LogCargaviraldeSARSCOV2_3.set('fieldImages', {'COD_PMONIT': 'TextEdit', 'SEMANA': 'TextEdit', 'NOMBRE': 'TextEdit', 'VALOR': 'TextEdit', });
lyr_DISTRITOS_4.set('fieldImages', {'DISTRITO': 'TextEdit', });
lyr_PTOS_PTAR_5.set('fieldImages', {'FACILITYID': 'TextEdit', 'NAME': 'TextEdit', 'STRUCTTYPE': 'TextEdit', 'OPDATE': 'DateTime', 'LOCDESC': 'TextEdit', 'COD_PMONIT': 'TextEdit', 'POB_CONTRI': 'Range', 'UBIC_PTO': 'TextEdit', });
lyr_SEMANA24LogCargaviraldeSARSCOV2_1.set('fieldLabels', {'COD_PMONIT': 'no label', 'SEMANA': 'no label', 'CÓDIGO': 'no label', 'VALOR': 'no label', });
lyr_SEMANA23LogCargaviraldeSARSCOV2_2.set('fieldLabels', {'COD_PMONIT': 'no label', 'SEMANA': 'no label', 'NOMBRE': 'no label', 'VALOR': 'no label', });
lyr_SEMANA22LogCargaviraldeSARSCOV2_3.set('fieldLabels', {'COD_PMONIT': 'no label', 'SEMANA': 'no label', 'NOMBRE': 'no label', 'VALOR': 'no label', });
lyr_DISTRITOS_4.set('fieldLabels', {'DISTRITO': 'inline label', });
lyr_PTOS_PTAR_5.set('fieldLabels', {'FACILITYID': 'no label', 'NAME': 'no label', 'STRUCTTYPE': 'no label', 'OPDATE': 'no label', 'LOCDESC': 'no label', 'COD_PMONIT': 'no label', 'POB_CONTRI': 'no label', 'UBIC_PTO': 'header label', });
lyr_PTOS_PTAR_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});