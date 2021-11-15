(function() {
  const fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      const element = document.getElementById("c0c36a2a-abc6-4d25-9e61-10ebdff56751");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c0c36a2a-abc6-4d25-9e61-10ebdff56751' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.1.min.js"];
      const css_urls = [];
      
    
      const inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  const docs_json = '{"07f44288-9e6a-41b6-bd71-95bfc98ae27e":{"defs":[],"roots":{"references":[{"attributes":{"fill_color":"#4a98c9","line_alpha":0.25,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23899","type":"Patch"},{"attributes":{"coordinates":null,"group":null},"id":"23912","type":"Title"},{"attributes":{},"id":"23863","type":"LinearScale"},{"attributes":{"coordinates":null,"data_source":{"id":"23904"},"glyph":{"id":"23905"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23907"},"nonselection_glyph":{"id":"23906"},"view":{"id":"23909"}},"id":"23908","type":"GlyphRenderer"},{"attributes":{"source":{"id":"23892"}},"id":"23897","type":"CDSView"},{"attributes":{},"id":"23870","type":"BasicTicker"},{"attributes":{"coordinates":null,"data_source":{"id":"23898"},"glyph":{"id":"23899"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23901"},"nonselection_glyph":{"id":"23900"},"view":{"id":"23903"}},"id":"23902","type":"GlyphRenderer"},{"attributes":{},"id":"23861","type":"LinearScale"},{"attributes":{"source":{"id":"23904"}},"id":"23909","type":"CDSView"},{"attributes":{"fill_color":"#1764ab","line_alpha":0.25,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23905","type":"Patch"},{"attributes":{},"id":"23879","type":"SaveTool"},{"attributes":{"axis":{"id":"23865"},"coordinates":null,"grid_line_color":null,"group":null,"ticker":null},"id":"23868","type":"Grid"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"23882","type":"PolyAnnotation"},{"attributes":{},"id":"23876","type":"WheelZoomTool"},{"attributes":{"children":[{"id":"23931"},{"id":"23929"}]},"id":"23932","type":"Column"},{"attributes":{"coordinates":null,"formatter":{"id":"23918"},"group":null,"major_label_policy":{"id":"23919"},"ticker":{"id":"23866"}},"id":"23865","type":"LinearAxis"},{"attributes":{"overlay":{"id":"23881"}},"id":"23875","type":"BoxZoomTool"},{"attributes":{},"id":"23920","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.2,"fill_color":"#1764ab","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23907","type":"Patch"},{"attributes":{"end":6.407268742545475,"start":-2.4966404730334304},"id":"23911","type":"Range1d"},{"attributes":{},"id":"23921","type":"Selection"},{"attributes":{},"id":"23873","type":"ResetTool"},{"attributes":{},"id":"23916","type":"AllLabels"},{"attributes":{},"id":"23866","type":"BasicTicker"},{"attributes":{"fill_color":"#94c4df","line_alpha":0.25,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23893","type":"Patch"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"23881","type":"BoxAnnotation"},{"attributes":{"source":{"id":"23898"}},"id":"23903","type":"CDSView"},{"attributes":{"fill_alpha":0.1,"fill_color":"#4a98c9","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23900","type":"Patch"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1764ab","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23906","type":"Patch"},{"attributes":{},"id":"23922","type":"UnionRenderers"},{"attributes":{},"id":"23878","type":"UndoTool"},{"attributes":{},"id":"23919","type":"AllLabels"},{"attributes":{"data":{"x":{"__ndarray__":"Se8HLZFm8T+wiuqKkuLwP5ogmoUckPA/tmVFzspu8D/qsLiDrILwPz/LyGcHvvA/FFA6A48V8T8Ck0bP73nxP5b5juL4jfE/nMjRXdsX8j8BW1cbm6fyPyhqEtpMqfI/Ix+Vshk38z9EWyiGLdXzP0tB3uSp2PM/uxqm5/6O9D9wGKrvBgj1P0LZ/bmldfU/lu91+mM39j+940MsP5z2P7zGQQXBZvc/NGRRc/nX9z/gnQ0QHpb4P6Aib96VAPk/BHXZGnvF+T+IzYoPYlL6PyhMpSXY9Po/UCNxMDUk/D90+jw7klP9PxLbQQxJbf4/mNEIRu+C/j/AqNRQTLL/P6LP7tMHRgBA8j/QrdRwAECEKzYzgwgBQBlZFNr0kwFAFhecuDGgAUCoAgI+4DcCQDzuZ8OOzwJAztnNSD1nA0BgxTPO6/4DQPSwmVOalgRAhpz/2EguBUD6DjgdEY4FQBiIZV73xQVAqnPL46VdBkCxxjsX3b0GQDxfMWlU9QZAmqUQoOxpB0DQSpfuAo0HQNqF1V5I3QdAZA82Fv0cCEBiNv1zsSQIQA37dR3mOghAMG4ud6FBCECG8naQND0IQBuBOVGoMwhAYjb9c7EkCED07msKISIIQD2l7+rkAghAUAjtl7rVB0Cb/22GYp8HQNBKl+4CjQdArqgclkpYB0Cx2H77kgEHQDxfMWlU9QZAzNGgppmUBkCqc8vjpV0GQPzgpjJ6GAZAGIhlXvfFBUDI02KKY5IFQIac/9hILgVAiH3MD1EJBUD0sJlTmpYEQFCwcnp9cwRAYMUzzuv+A0B0zOT22MwDQM7ZzUg9ZwNA1g6UYGsfA0A87mfDjs8CQNU2NbLZXgJAqAICPuA3AkAWF5y4MaABQKD6LdUFcQFAhCs2M4MIAUDyP9Ct1HAAQLLHzW6R/P8/wKjUUEyy/z+Y0QhG74L+P3T6PDuSU/0/UCNxMDUk/D8ETGEzddj7PyhMpSXY9Po/BHXZGnvF+T/gnQ0QHpb4P/sewJBng/c/vMZBBcFm9z+W73X6Yzf2P3AYqu8GCPU/TEHe5KnY8z9LyHBi3rrzPylqEtpMqfI/7QOmNPOR8j/RQKrt5vnxPwKTRs/vefE/Se8HLZFm8T8=","dtype":"float64","order":"little","shape":[106]},"y":{"__ndarray__":"hs5RwzPf9j+gbKnsXv73P7gKARaKHfk/0KhYP7U8+j/oRrBo4Fv7PwDlB5ILe/w/HINfuzaa/T/AtmgSCIj+PzQht+Rhuf4/TL8ODo3Y/z+yLrMb3HsAQC2hblFvfQBAvv1esHELAUDMzApFB5sBQMWdJEO+nQFA2Ju22ZwqAkAMWgcvFnoCQORqYm4yugJAcMh1pCkcA0DwOQ4DyEkDQGtIBvcWpQNA/Ai6l13ZA0BxGnN2wDQEQAjYZSzzaARAvooF3XDABEAWpxHBiPgEQFSDC9yKMQVAIna9VR6IBUDKqI7FZtMFQC5FaeqzFwZAOkQNbZIdBkCc8+UUrW4GQDoUFX9JpwZAyWiavXy9BkCdb0vA4QEHQEXjwBPfNgdAvij0xx07B0Dwu5SbqWkHQIB86UJ1hwdApKjULyyJB0CADm6D0XcHQAG08cvOYwdA4TpT/cFJB0BG48AT3zYHQBv0ieScKgdAbopJzL3tBkA6FBV/SacGQCre56YvegZALkVp6rMXBkDL31o52/MFQCJ2vVUeiAVAFqcRwYj4BEAQQOZ1H9kEQAjYZSzzaARA/Ai6l13ZA0DwOQ4DyEkDQORqYm4yugJAQRY1Zpg/AkDYm7bZnCoCQMzMCkUHmwFAvv1esHELAUCyLrMb3HsAQCNo9MwZUwBATL8ODo3Y/z80IbfkYbn+P1kutWtxlv4/HINfuzaa/T9c0BETLhz9PwDlB5ILe/w/GrJ5hLLO+z/oRrBo4Fv7Px66MEi0ifo/0KhYP7U8+j8noKCFclz5P7gKARaKHfk/NpOiVAhR+D+gbKnsXv73P5ZCuN24Uvc/hs5RwzPf9j8i/v3iJGH2P24w+pkIwPU/qIsxTQyM9T9sqjFNZNP0P1aSonDdoPQ/sLnAYQMy9D+oMmZQT7vzPzz0SkeygfM/Jl2xMzhu8z909MS0JiPzP7qgEL8wyvI/b7nnwx5y8j8kVvMdh2LyPyRI+aEANfI/6CIXjMYY8j/+gykB1iTyPyRW8x2HYvI/lBj1BPRp8j++YLDmPL7yP20QZQEuBPM/v6KnZkxw8z889EpHsoHzP9BjUhhQgPQ/VpKicN2g9D9uMPqZCMD1Pwww0bq3tvY/hs5RwzPf9j8=","dtype":"float64","order":"little","shape":[106]}},"selected":{"id":"23925"},"selection_policy":{"id":"23924"}},"id":"23904","type":"ColumnDataSource"},{"attributes":{"end":6.79514699647968,"start":-2.610897349331152},"id":"23910","type":"Range1d"},{"attributes":{"coordinates":null,"formatter":{"id":"23915"},"group":null,"major_label_policy":{"id":"23916"},"ticker":{"id":"23870"}},"id":"23869","type":"LinearAxis"},{"attributes":{},"id":"23915","type":"BasicTickFormatter"},{"attributes":{"children":[[{"id":"23856"},0,0]]},"id":"23929","type":"GridBox"},{"attributes":{"fill_alpha":0.1,"fill_color":"#94c4df","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23894","type":"Patch"},{"attributes":{"fill_alpha":0.2,"fill_color":"#4a98c9","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23901","type":"Patch"},{"attributes":{"axis":{"id":"23869"},"coordinates":null,"dimension":1,"grid_line_color":null,"group":null,"ticker":null},"id":"23872","type":"Grid"},{"attributes":{"coordinates":null,"data_source":{"id":"23892"},"glyph":{"id":"23893"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23895"},"nonselection_glyph":{"id":"23894"},"view":{"id":"23897"}},"id":"23896","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[316]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[316]}},"selected":{"id":"23923"},"selection_policy":{"id":"23922"}},"id":"23898","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"23880","type":"HoverTool"},{"attributes":{},"id":"23924","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"23882"}},"id":"23877","type":"LassoSelectTool"},{"attributes":{"toolbar":{"id":"23930"},"toolbar_location":"above"},"id":"23931","type":"ToolbarBox"},{"attributes":{},"id":"23923","type":"Selection"},{"attributes":{"toolbars":[{"id":"23883"}],"tools":[{"id":"23873"},{"id":"23874"},{"id":"23875"},{"id":"23876"},{"id":"23877"},{"id":"23878"},{"id":"23879"},{"id":"23880"}]},"id":"23930","type":"ProxyToolbar"},{"attributes":{"fill_alpha":0.2,"fill_color":"#94c4df","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23895","type":"Patch"},{"attributes":{},"id":"23918","type":"BasicTickFormatter"},{"attributes":{"tools":[{"id":"23873"},{"id":"23874"},{"id":"23875"},{"id":"23876"},{"id":"23877"},{"id":"23878"},{"id":"23879"},{"id":"23880"}]},"id":"23883","type":"Toolbar"},{"attributes":{"below":[{"id":"23865"}],"center":[{"id":"23868"},{"id":"23872"}],"height":500,"left":[{"id":"23869"}],"output_backend":"webgl","renderers":[{"id":"23896"},{"id":"23902"},{"id":"23908"}],"title":{"id":"23912"},"toolbar":{"id":"23883"},"toolbar_location":null,"width":500,"x_range":{"id":"23910"},"x_scale":{"id":"23861"},"y_range":{"id":"23911"},"y_scale":{"id":"23863"}},"id":"23856","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"23874","type":"PanTool"},{"attributes":{},"id":"23925","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[530]},"y":{"__ndarray__":"sKQcAl6r3D+Mjr1TBZTgP7zKbKZb0uI/7AYc+bEQ5T8gQ8tLCE/nP1B/ep5ejek/gLsp8bTL6z+099hDCwruP/IZRMswJPA/DLib9FtD8T8kVvMdh2LyPzz0SkeygfM/VpKicN2g9D9uMPqZCMD1P1Ah+7QRfPY/hs5RwzPf9j+gbKnsXv73P7gKARaKHfk/0KhYP7U8+j/oRrBo4Fv7PwDlB5ILe/w/4jIV8nuW/T8cg1+7Npr9PzQht+Rhuf4/TL8ODo3Y/z8zJm35VxsAQLIusxvcewBAvv1esHELAUCgwnYWEy8BQMzMCkUHmwFA489+knIWAkDYm7bZnCoCQORqYm4yugJAJTLYnJraAkDwOQ4DyEkDQMocGw2VwwNA/Ai6l13ZA0AI2GUs82gEQDL0pQoElgRAFqcRwYj4BECViiwC9WUFQCJ2vVUeiAVALkVp6rMXBkBcChQFhGYGQDoUFX9JpwZAln1aWAIwB0BG48AT3zYHQHAFWh67xQdAUrJsqHTGB0CQvvj0dUkIQGCBGD0KVghAz0qzujDiCEBsUMTRn+UIQHkfcGY1dQlA6qqBd7GrCUCE7hv7ygQKQGBefoUMjQpAkL3Hj2CUCkCcjHMk9iMLQAQWTAlhNQtAWOymct+sC0CqWx+5i7MLQPyVgMUrFwxAtirLTSFDDEBm8xFoaoAMQMH5duK20gxAiYSFgcLXDECMlIDVszsNQM7IIndMYg1Amtv7kz/WDUDal84L4vENQOZmeqB3gQ5Ag27LkVWGDkD0NSY1DREPQDPvSn1lFA9AGsOhrtuXD0AABdLJoqAPQFhU7COR/g9ABuo+LxwYEEAKfKqOGhwQQIB0J5joNBBABcN3X4hTEECM0ZT55l8QQJTgMB7CexBAErnqw7GnEEAIHZ+89KcQQFoMw/fq0BBAi8Dz1+PtEECYoECOfO8QQMgDRUlTHRFAIIiWWEc3EUB8IKTVS1URQKVv7CISfxFAwvy3S5GDEUBe4LOyxaQRQP+A9ORUwhFAK1dC7dzGEUAtDNR8QOwRQLE+mLenDhJA5vA3Q7MOEkBOQUZiiR8SQIZmkQ52IhJAC3MJXkc6EkA2Ju6BclYSQJw2LqjDWBJASAdcWpx8EkDrugwyWZkSQL4NREw9nhJA/mphV0KwEkBUOpWD5L8SQJz/CGqxyBJAUiC5lPvMEkB7uChEJs8SQPWe+z2R1xJARPWZFgjmEkBzBfSfnuwSQDpqbFqh/hJAlOTf0T4BE0Cm9ID5UgQTQBqozBo8CxNAbGHgnCYGE0Dssgvv4u8SQET1mRYI5hJAySPgmhrdEkB/dpPgWdISQPi00c8JxRJARbU+TfiiEkC+DURMPZ4SQI548fk3jRJAKJOYfRKHEkAuYjNdfIMSQCJ8zpi3dBJAgIrACk5lEkD55xNufVoSQDcm7oFyVhJAsT6Yt6cOEkCFui2wSgcSQFIke2xo0xFAK1dC7dzGEUBG4XIys8ARQOD32aTEmBFApW/sIhJ/EUAfiJZYRzcRQDg0XMOmLBFAmKBAjnzvEEBkDvpga78QQBK56sOxpxBAMK3Dui54EECM0ZT55l8QQAbqPi8cGBBAbjrX+hcCEEAABdLJoqAPQPQ1JjUNEQ9AaDAV2dWBDkDmZnqgd4EOQNqXzgvi8Q1Azsgid0xiDUDC+XbittIMQLYqy00hQwxAkc5mv5f0C0CqWx+5i7MLQJyMcyT2IwtAkL3Hj2CUCkCF7hv7ygQKQHgfcGY1dQlAbFDE0Z/lCEBggRg9ClYIQIYHh135+AdAUrJsqHTGB0BG48AT3zYHQDoUFX9JpwZAYGo5ZdVLBkAuRWnqsxcGQCJ2vVUeiAVA5xFSe8JmBUAWpxHBiPgEQAjYZSzzaARAxxs0sINQBED8CLqXXdkDQPA5DgPISQNA5GpibjK6AkDYm7bZnCoCQJdWJ5/zCgJAzMwKRQebAUA5F7kGKRgBQL79XrBxCwFAsi6zG9x7AEBMvw4Ojdj/Pz5V6MIduf8/NCG35GG5/j8cg1+7Npr9PwIH9LXTUP0/AOUHkgt7/D/KZWJpFcD7P+hGsGjgW/s/rgkqaWZJ+j/QqFg/tTz6P7gKARaKHfk/cIJg5ltP+D+gbKnsXv73P4bOUcMz3/Y/96qI/Csb9j9uMPqZCMD1P1aSonDdoPQ/xsRUtO6Q9D889EpHsoHzPyQil7qpRPM/JFbzHYdi8j9Nsq45ZibyPwy4m/RbQ/E/bEMh0zG/8D/yGUTLMCTwP6B6kB0fRe4/tPfYQwsK7j+AuynxtMvrP8F2HNcBtus/thaNDpOz6T9Qf3qeXo3pP5JLShfAtuc/IEPLSwhP5z8RqW0ELv3lP+wGHPmxEOU/xpGOWi5c5D+8ymymW9LiP0MaqyNzHeI/jI69UwWU4D8EaxHhMTPfP7CkHAJeq9w/EKMxVDT02j9QLL5csS7YP1mXI8sqztY/8LNftwSy0z+hBc4xK77SPxB3AiSwas4/kMhWm1i4zT9EAJluIiLHP1CGRdlWccU/ucy4S3+twT8bHElr+8K5PyArER3777g/Uhrxlx+TrT8AJl0eIvWbPy5rSBZzKJc/MC6Wdh1/l78AMMUb1Oqlv1oNsAQ7HLG/HGwAxj++u7+AeVyjHOi8v0QstPOar8O/kC1rnGdtx7//QTwIEg7JvzD9mG/FIM6/KA+Uc2Az0L9KcvywNUrRvwCCpJ9XiNO/iIfyGA2w1L8O3xKxbc/Vv/JkcGR67de/8P9Qvrks2b94ooyh5TTav0vsJu/X8ty/UHivY2ap3b+MhRIUdmjfvz1VaicbTeC/aFph+VCW4L8OF4bLj8/gvxi1wHcA+uC/WviGhAkT4b/FHymOwVfhv+CDJcesDOK/B8FrUqnd4r+KNDbXX1HjvyON4li7u+O/0veKmQ2X5L/sLchU4PfkvwgBOLQ5qeS/Wq2k3PCR5L9juYIkLFblv7xw5Sm2j+W/3BzzHJgs5r8e0EJEAfLlv7xw5Sm2j+W/ToCA2/0i5b8w212VUAnlvwhcx49jDeW/cfzQSjvA5L/+xjD40Ujkv0ipcTMYJeS/RBBM4qUp5L82oNdwetfjv4o0NtdfUeO/Pw0HP5cs4r9a+IaECRPhv03hW8QWjeC/2i4bI7gW4L8+dlPP7JLev1B4r2Nmqd2/MBBf8Bqa27/w/1C+uSzZv9NJe90aKNm/6uxz87i51r+Ih/IYDbDUvw7xmu2jydK/KA+Uc2Az0L9U4uTxblrOv5Ata5xnbce/P284f5AxxL+AeVyjHOi8vxyF17aRhrm/DdfCR4Shpr8AMMUb1OqlvwAmXR4i9Zs/ICsRHfvvuD+Ay971rNDDP1CGRdlWccU/EHcCJLBqzj/ws1+3BLLTP1AsvlyxLtg/cLttQxSl2j+wpBwCXqvcP6yaU4bebvA/8hlEyzAk8D+099hDCwruP4C7KfG0y+s/UH96nl6N6T9XInzANEPpPyBDy0sIT+c//DAGhhOx5T/sBhz5sRDlPzMq+UYGIOM/vMpsplvS4j8t39s21LDgP4yOvVMFlOA/sKQcAl6r3D+9RAYcBvHbP18dF6GVL9g/UCy+XLEu2D+L5Qc32K3VP/CzX7cEstM/hJaMZHaY0z9s9bJoNCTSP7wqAMksE9E/R6XcX9dp0D/J3e5CPOfPP5VGvIdEDM8/iRsVUGPCzj9BsbwUFBHPP9oc7sZxns8/+SxQSlMt0D9yFVIbFnzQP0ZPFLCJotA//jY32yTs0D/W7S/vurzRP+WHxFW79tI/8LNftwSy0z+C5u1u+njUPxpqbr0UC9Y/dOnVeDe/1z9QLL5csS7YP+H8fqrkpdk/56pHIfnd2z+wpBwCXqvcP2KmKj50590/UNJLo6jY3z+Mjr1TBZTgP36dmGJf8OA/xVptzWMR4j+8ymymW9LiP5/AVsNiUeM/zChXpbCw5D/sBhz5sRDlP8U+EFSCHuY/IEPLSwhP5z8p1yqJpKjnP2VvDWmcTuk/UH96nl6N6T9ijaVN+fzqP4C7KfG0y+s/gq9t/c6I7D+099hDCwruP+/WTF1uMe4/REj5zVsh8D/yGUTLMCTwP95UVlPmQfE/DLib9FtD8T8kVvMdh2LyPxiJ8aP6Y/I/PPRKR7KB8z/uPTSTwITzP1aSonDdoPQ/Fqla7MC69D9tMPqZCMD1P7qGjIZ0J/Y/hs5RwzPf9j9UGDsWlav3P6Bsqexe/vc/kFoG+3EI+T+4CgEWih35P9CoWD+1PPo/iIivlQCF+j/oRrBo4Fv7PyKA09fCVvw/AOUHkgt7/D8cg1+7Npr9PwlaK/RZVP4/NCG35GG5/j9Mvw4Ojdj/P7qYfVoTNwBAsi6zG9x7AEC+/V6wcQsBQJy56gL8dwFAzMwKRQebAUDYm7bZnCoCQORqYm4yugJA5xE2kIUjA0DwOQ4DyEkDQPwIupdd2QNACNhlLPNoBEAWpxHBiPgEQCJ2vVUeiAVAL0Vp6rMXBkA6FBV/SacGQEbjwBPfNgdAUrJsqHTGB0BggRg9ClYIQGxQxNGf5QhAeB9wZjV1CUDi6X6rVbEJQIPuG/vKBApAkL3Hj2CUCkA6P5WCv+gKQJyMcyT2IwtA1mNCvp+VC0CqWx+5i7MLQLYqy00hQwxAIjv1ZuNiDEDC+XbittIMQDKBmeJs+gxA1MDkn0pcDUDOyCJ3TGINQDJpuxXuoA1AP0io+ePFDUDal84L4vENQNBCKdii8w1AjE2eDltFDkDmZnqgd4EOQPUWRfTJgQ5AH98kuaqeDkB64+7a9qEOQPIJTog2mg5A6lifQ16UDkBpzAJEGJYOQGJho30MmQ5A5+lSrJiVDkDmZnqgd4EOQAIP6Nk3XQ5AgWaon6EzDkD7PzBC9hIOQB0w63u9+g1A2pfOC+LxDUAA2P5Zqd0NQE+56FKXsA1AlG0oxDp7DUDOyCJ3TGINQNL+bZ6cRw1ALe0gSXMGDUDC+XbittIMQLQcHHgdtAxAM1boKQpoDEC3KstNIUMMQEiw7BTFKQxAsM4CMWjjC0CqWx+5i7MLQAYyL20XiwtAIZfHjcEqC0CcjHMk9iMLQHy1EAPYzQpAkL3Hj2CUCkDyU2HCf3EKQHU8+x49DgpAhO4b+8oECkBM3GtOYZoJQHgfcGY1dQlAJjOlrasYCUBsUMTRn+UIQCozc/y/lQhAYIEYPQpWCECwnxEYLhAIQFKybKh0xgdAFYsOxUuFB0BG48AT3zYHQO5/j/KQ/wZAOhQVf0mnBkA8U8iIH3wGQC5FaeqzFwZA7jXq7TflBUAidr1VHogFQJjZMbjJMQVAFqcRwYj4BEAI2GUs82gEQD/XBry3aARA/Ai6l13ZA0BYKjivK6IDQPA5DgPISQNAMgfvRJLlAkDkamJuMroCQNibttmcKgJAujhTaFASAkDMzApFB5sBQL79XrBxCwFA5TxEQBLeAECyLrMb3HsAQEy/Dg6N2P8/bC2fDS9+/z80IbfkYbn+PxyDX7s2mv0/ZhvEGGbg/D8A5QeSC3v8P+hGsGjgW/s/0KhYP7U8+j+4CgEWih35P6Bsqexe/vc/6375+c7c9z+GzlHDM9/2P24w+pkIwPU/VpKicN2g9D889EpHsoHzPyRW8x2HYvI/DLib9FtD8T+smlOG3m7wPw==","dtype":"float64","order":"little","shape":[530]}},"selected":{"id":"23921"},"selection_policy":{"id":"23920"}},"id":"23892","type":"ColumnDataSource"}],"root_ids":["23932"]},"title":"Bokeh Application","version":"2.4.1"}}';
                  const render_items = [{"docid":"07f44288-9e6a-41b6-bd71-95bfc98ae27e","root_ids":["23932"],"roots":{"23932":"c0c36a2a-abc6-4d25-9e61-10ebdff56751"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();