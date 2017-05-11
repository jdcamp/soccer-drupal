(function ($) {
  Drupal.behaviors.geofieldMapInit = {
    attach: function (context, settings) {

      // Init all maps in Drupal.settings.
setTimeout(function() {
      if (settings.geofield_gmap) {
        $.each(settings.geofield_gmap, function(mapid, options) {
          geofield_gmap_initialize({
            lat: options.lat,
            lng: options.lng,
            zoom: options.zoom,
            latid: options.latid,
            lngid: options.lngid,
            searchid: options.searchid,
            mapid: options.mapid,
            widget: options.widget,
            map_type: options.map_type,
            confirm_center_marker: options.confirm_center_marker,
            click_to_place_marker: options.click_to_place_marker,
          });
        });
      }
}, 500);

    }
  };
})(jQuery);
