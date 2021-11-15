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
    
      
      
    
      const element = document.getElementById("8dc98afa-483b-4ce7-a03d-5eb0e2a40ef7");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '8dc98afa-483b-4ce7-a03d-5eb0e2a40ef7' but no matching script tag was found.")
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
                    
                  const docs_json = '{"51afae14-67d5-4a0d-a984-3530a58cc4ab":{"defs":[],"roots":{"references":[{"attributes":{},"id":"17377","type":"WheelZoomTool"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"17401"},"group":null,"major_label_policy":{"id":"17402"},"ticker":{"id":"17371"}},"id":"17370","type":"LinearAxis"},{"attributes":{},"id":"17401","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"17382"}},"id":"17376","type":"BoxZoomTool"},{"attributes":{"source":{"id":"17394"}},"id":"17396","type":"CDSView"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17382","type":"BoxAnnotation"},{"attributes":{},"id":"17407","type":"Selection"},{"attributes":{"toolbar":{"id":"17412"},"toolbar_location":"above"},"id":"17413","type":"ToolbarBox"},{"attributes":{"overlay":{"id":"17383"}},"id":"17378","type":"LassoSelectTool"},{"attributes":{},"id":"17405","type":"AllLabels"},{"attributes":{},"id":"17364","type":"LinearScale"},{"attributes":{},"id":"17362","type":"LinearScale"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"17393","type":"Scatter"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIkKht05k7+A2X/x9IekPwAArX2oaFM/QNQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"17407"},"selection_policy":{"id":"17406"}},"id":"17394","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"17370"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"17373","type":"Grid"},{"attributes":{"children":[{"id":"17413"},{"id":"17411"}]},"id":"17414","type":"Column"},{"attributes":{"coordinates":null,"group":null,"text":"centered model - non centered model"},"id":"17397","type":"Title"},{"attributes":{},"id":"17402","type":"AllLabels"},{"attributes":{},"id":"17371","type":"BasicTicker"},{"attributes":{"tools":[{"id":"17374"},{"id":"17375"},{"id":"17376"},{"id":"17377"},{"id":"17378"},{"id":"17379"},{"id":"17380"},{"id":"17381"}]},"id":"17384","type":"Toolbar"},{"attributes":{},"id":"17367","type":"BasicTicker"},{"attributes":{"children":[[{"id":"17357"},0,0]]},"id":"17411","type":"GridBox"},{"attributes":{},"id":"17374","type":"ResetTool"},{"attributes":{},"id":"17404","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"17381","type":"HoverTool"},{"attributes":{"coordinates":null,"data_source":{"id":"17394"},"glyph":{"id":"17393"},"group":null,"hover_glyph":null,"view":{"id":"17396"}},"id":"17395","type":"GlyphRenderer"},{"attributes":{},"id":"17379","type":"UndoTool"},{"attributes":{"toolbars":[{"id":"17384"}],"tools":[{"id":"17374"},{"id":"17375"},{"id":"17376"},{"id":"17377"},{"id":"17378"},{"id":"17379"},{"id":"17380"},{"id":"17381"}]},"id":"17412","type":"ProxyToolbar"},{"attributes":{"below":[{"id":"17366"}],"center":[{"id":"17369"},{"id":"17373"}],"height":288,"left":[{"id":"17370"}],"output_backend":"webgl","renderers":[{"id":"17395"}],"title":{"id":"17397"},"toolbar":{"id":"17384"},"toolbar_location":null,"width":432,"x_range":{"id":"17358"},"x_scale":{"id":"17362"},"y_range":{"id":"17360"},"y_scale":{"id":"17364"}},"id":"17357","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17380","type":"SaveTool"},{"attributes":{"coordinates":null,"formatter":{"id":"17404"},"group":null,"major_label_policy":{"id":"17405"},"ticker":{"id":"17367"}},"id":"17366","type":"LinearAxis"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17383","type":"PolyAnnotation"},{"attributes":{"axis":{"id":"17366"},"coordinates":null,"group":null,"ticker":null},"id":"17369","type":"Grid"},{"attributes":{},"id":"17406","type":"UnionRenderers"},{"attributes":{},"id":"17375","type":"PanTool"},{"attributes":{},"id":"17360","type":"DataRange1d"},{"attributes":{},"id":"17358","type":"DataRange1d"}],"root_ids":["17414"]},"title":"Bokeh Application","version":"2.4.1"}}';
                  const render_items = [{"docid":"51afae14-67d5-4a0d-a984-3530a58cc4ab","root_ids":["17414"],"roots":{"17414":"8dc98afa-483b-4ce7-a03d-5eb0e2a40ef7"}}];
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