var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_DesaGrendeng_1 = new ol.format.GeoJSON();
var features_DesaGrendeng_1 = format_DesaGrendeng_1.readFeatures(json_DesaGrendeng_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaGrendeng_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaGrendeng_1.addFeatures(features_DesaGrendeng_1);
var lyr_DesaGrendeng_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaGrendeng_1,
maxResolution:28.00446615226196,
 
                style: style_DesaGrendeng_1,
                popuplayertitle: 'Desa Grendeng',
                interactive: true,
                title: '<img src="styles/legend/DesaGrendeng_1.png" /> Desa Grendeng'
            });
var format_Rw_2 = new ol.format.GeoJSON();
var features_Rw_2 = format_Rw_2.readFeatures(json_Rw_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rw_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rw_2.addFeatures(features_Rw_2);
var lyr_Rw_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rw_2,
maxResolution:14.00223307613098,
 
                style: style_Rw_2,
                popuplayertitle: 'Rw',
                interactive: true,
    title: 'Rw<br />\
    <img src="styles/legend/Rw_2_0.png" /> Rw 1<br />\
    <img src="styles/legend/Rw_2_1.png" /> RW 2<br />\
    <img src="styles/legend/Rw_2_2.png" /> RW 3<br />\
    <img src="styles/legend/Rw_2_3.png" /> Rw 4<br />\
    <img src="styles/legend/Rw_2_4.png" /> RW 5<br />\
    <img src="styles/legend/Rw_2_5.png" /> RW 6<br />\
    <img src="styles/legend/Rw_2_6.png" /> RW 7<br />\
    <img src="styles/legend/Rw_2_7.png" /> RW 8<br />\
    <img src="styles/legend/Rw_2_8.png" /> <br />' });
var format_BalaidesaGrendeng_3 = new ol.format.GeoJSON();
var features_BalaidesaGrendeng_3 = format_BalaidesaGrendeng_3.readFeatures(json_BalaidesaGrendeng_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BalaidesaGrendeng_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BalaidesaGrendeng_3.addFeatures(features_BalaidesaGrendeng_3);
var lyr_BalaidesaGrendeng_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BalaidesaGrendeng_3,
maxResolution:14.00223307613098,
 
                style: style_BalaidesaGrendeng_3,
                popuplayertitle: 'Balai desa Grendeng',
                interactive: true,
                title: '<img src="styles/legend/BalaidesaGrendeng_3.png" /> Balai desa Grendeng'
            });
var format_rumahsaya_4 = new ol.format.GeoJSON();
var features_rumahsaya_4 = format_rumahsaya_4.readFeatures(json_rumahsaya_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rumahsaya_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rumahsaya_4.addFeatures(features_rumahsaya_4);
var lyr_rumahsaya_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rumahsaya_4,
maxResolution:14.00223307613098,
 
                style: style_rumahsaya_4,
                popuplayertitle: 'rumah saya',
                interactive: true,
                title: '<img src="styles/legend/rumahsaya_4.png" /> rumah saya'
            });
var format_sekolah_5 = new ol.format.GeoJSON();
var features_sekolah_5 = format_sekolah_5.readFeatures(json_sekolah_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sekolah_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sekolah_5.addFeatures(features_sekolah_5);
var lyr_sekolah_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sekolah_5,
maxResolution:14.00223307613098,
 
                style: style_sekolah_5,
                popuplayertitle: 'sekolah',
                interactive: true,
                title: '<img src="styles/legend/sekolah_5.png" /> sekolah'
            });
var format_GORlapangannbola_6 = new ol.format.GeoJSON();
var features_GORlapangannbola_6 = format_GORlapangannbola_6.readFeatures(json_GORlapangannbola_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GORlapangannbola_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GORlapangannbola_6.addFeatures(features_GORlapangannbola_6);
var lyr_GORlapangannbola_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GORlapangannbola_6,
maxResolution:14.00223307613098,
 
                style: style_GORlapangannbola_6,
                popuplayertitle: 'GOR lapangann bola',
                interactive: true,
                title: '<img src="styles/legend/GORlapangannbola_6.png" /> GOR lapangann bola'
            });
var format_RumahTetangga_7 = new ol.format.GeoJSON();
var features_RumahTetangga_7 = format_RumahTetangga_7.readFeatures(json_RumahTetangga_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahTetangga_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahTetangga_7.addFeatures(features_RumahTetangga_7);
var lyr_RumahTetangga_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahTetangga_7,
maxResolution:14.00223307613098,
 
                style: style_RumahTetangga_7,
                popuplayertitle: 'Rumah Tetangga',
                interactive: true,
                title: '<img src="styles/legend/RumahTetangga_7.png" /> Rumah Tetangga'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_DesaGrendeng_1.setVisible(true);lyr_Rw_2.setVisible(true);lyr_BalaidesaGrendeng_3.setVisible(true);lyr_rumahsaya_4.setVisible(true);lyr_sekolah_5.setVisible(true);lyr_GORlapangannbola_6.setVisible(true);lyr_RumahTetangga_7.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_DesaGrendeng_1,lyr_Rw_2,lyr_BalaidesaGrendeng_3,lyr_rumahsaya_4,lyr_sekolah_5,lyr_GORlapangannbola_6,lyr_RumahTetangga_7];
lyr_DesaGrendeng_1.set('fieldAliases', {'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_Rw_2.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_BalaidesaGrendeng_3.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_rumahsaya_4.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_sekolah_5.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_GORlapangannbola_6.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_RumahTetangga_7.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_DesaGrendeng_1.set('fieldImages', {'GID_4': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', });
lyr_Rw_2.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_BalaidesaGrendeng_3.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_rumahsaya_4.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_sekolah_5.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_GORlapangannbola_6.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_RumahTetangga_7.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_DesaGrendeng_1.set('fieldLabels', {'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'inline label - always visible', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_Rw_2.set('fieldLabels', {'id': 'no label', 'nama': 'inline label - always visible', });
lyr_BalaidesaGrendeng_3.set('fieldLabels', {'id': 'no label', 'nama': 'inline label - always visible', });
lyr_rumahsaya_4.set('fieldLabels', {'id': 'no label', 'nama': 'inline label - always visible', });
lyr_sekolah_5.set('fieldLabels', {'id': 'no label', 'nama': 'inline label - always visible', });
lyr_GORlapangannbola_6.set('fieldLabels', {'id': 'no label', 'nama': 'inline label - always visible', });
lyr_RumahTetangga_7.set('fieldLabels', {'id': 'no label', 'nama': 'inline label - always visible', });
lyr_RumahTetangga_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});