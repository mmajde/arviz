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
    
      
      
    
      const element = document.getElementById("79753acc-7e4a-444e-84b8-8735d0f1c6a3");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '79753acc-7e4a-444e-84b8-8735d0f1c6a3' but no matching script tag was found.")
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
                    
                  const docs_json = '{"f933af0c-9993-481d-a0cf-dfe20babe3f6":{"defs":[],"roots":{"references":[{"attributes":{},"id":"18231","type":"Selection"},{"attributes":{"coordinates":null,"dimension":"height","group":null,"line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"18220","type":"Span"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18177","type":"BoxAnnotation"},{"attributes":{"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18199","type":"MultiLine"},{"attributes":{"coordinates":null,"formatter":{"id":"18223"},"group":null,"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"18224"},"ticker":{"id":"18188"}},"id":"18165","type":"LinearAxis"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18178","type":"PolyAnnotation"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18237"},"selection_policy":{"id":"18236"}},"id":"18214","type":"ColumnDataSource"},{"attributes":{},"id":"18157","type":"LinearScale"},{"attributes":{"axis":{"id":"18161"},"coordinates":null,"group":null,"ticker":null},"id":"18164","type":"Grid"},{"attributes":{"data":{"xs":[[-32.052286212415325,-29.322294424364305],[-32.23721121836336,-29.383537134836743]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"18235"},"selection_policy":{"id":"18234"}},"id":"18208","type":"ColumnDataSource"},{"attributes":{},"id":"18229","type":"Selection"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18210","type":"MultiLine"},{"attributes":{},"id":"18162","type":"BasicTicker"},{"attributes":{},"id":"18227","type":"AllLabels"},{"attributes":{"below":[{"id":"18161"}],"center":[{"id":"18164"},{"id":"18168"}],"height":500,"left":[{"id":"18165"}],"output_backend":"webgl","renderers":[{"id":"18194"},{"id":"18200"},{"id":"18206"},{"id":"18212"},{"id":"18218"},{"id":"18220"}],"title":{"id":"18221"},"toolbar":{"id":"18179"},"toolbar_location":null,"width":500,"x_range":{"id":"18153"},"x_scale":{"id":"18157"},"y_range":{"id":"18155"},"y_scale":{"id":"18159"}},"id":"18152","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18175","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"black"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18217","type":"Circle"},{"attributes":{"toolbar":{"id":"18242"},"toolbar_location":"above"},"id":"18243","type":"ToolbarBox"},{"attributes":{},"id":"18153","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18198","type":"MultiLine"},{"attributes":{},"id":"18234","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"18179"}],"tools":[{"id":"18169"},{"id":"18170"},{"id":"18171"},{"id":"18172"},{"id":"18173"},{"id":"18174"},{"id":"18175"},{"id":"18176"}]},"id":"18242","type":"ProxyToolbar"},{"attributes":{"source":{"id":"18214"}},"id":"18219","type":"CDSView"},{"attributes":{},"id":"18159","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"KQWarnTPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"18229"},"selection_policy":{"id":"18228"}},"id":"18190","type":"ColumnDataSource"},{"attributes":{},"id":"18228","type":"UnionRenderers"},{"attributes":{},"id":"18237","type":"Selection"},{"attributes":{},"id":"18172","type":"WheelZoomTool"},{"attributes":{},"id":"18169","type":"ResetTool"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18197","type":"MultiLine"},{"attributes":{"coordinates":null,"data_source":{"id":"18196"},"glyph":{"id":"18197"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18199"},"nonselection_glyph":{"id":"18198"},"view":{"id":"18201"}},"id":"18200","type":"GlyphRenderer"},{"attributes":{"source":{"id":"18190"}},"id":"18195","type":"CDSView"},{"attributes":{},"id":"18233","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"18208"},"glyph":{"id":"18209"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18211"},"nonselection_glyph":{"id":"18210"},"view":{"id":"18213"}},"id":"18212","type":"GlyphRenderer"},{"attributes":{},"id":"18174","type":"UndoTool"},{"attributes":{},"id":"18170","type":"PanTool"},{"attributes":{"source":{"id":"18208"}},"id":"18213","type":"CDSView"},{"attributes":{"children":[[{"id":"18152"},0,0]]},"id":"18241","type":"GridBox"},{"attributes":{"overlay":{"id":"18177"}},"id":"18171","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18216","type":"Circle"},{"attributes":{"source":{"id":"18202"}},"id":"18207","type":"CDSView"},{"attributes":{},"id":"18223","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18192","type":"Scatter"},{"attributes":{"coordinates":null,"group":null},"id":"18221","type":"Title"},{"attributes":{"data":{"xs":[[-30.896420573800544,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"18231"},"selection_policy":{"id":"18230"}},"id":"18196","type":"ColumnDataSource"},{"attributes":{},"id":"18224","type":"AllLabels"},{"attributes":{"coordinates":null,"data_source":{"id":"18202"},"glyph":{"id":"18203"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18205"},"nonselection_glyph":{"id":"18204"},"view":{"id":"18207"}},"id":"18206","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18215","type":"Circle"},{"attributes":{},"id":"18236","type":"UnionRenderers"},{"attributes":{},"id":"18235","type":"Selection"},{"attributes":{"tools":[{"id":"18169"},{"id":"18170"},{"id":"18171"},{"id":"18172"},{"id":"18173"},{"id":"18174"},{"id":"18175"},{"id":"18176"}]},"id":"18179","type":"Toolbar"},{"attributes":{"data":{"x":{"__ndarray__":"eFcgQvKvPsApBZqudM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18233"},"selection_policy":{"id":"18232"}},"id":"18202","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"18214"},"glyph":{"id":"18215"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18217"},"nonselection_glyph":{"id":"18216"},"view":{"id":"18219"}},"id":"18218","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18193","type":"Scatter"},{"attributes":{"line_alpha":{"value":0.2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18211","type":"MultiLine"},{"attributes":{"callback":null},"id":"18176","type":"HoverTool"},{"attributes":{},"id":"18226","type":"BasicTickFormatter"},{"attributes":{},"id":"18232","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18203","type":"Circle"},{"attributes":{"children":[{"id":"18243"},{"id":"18241"}]},"id":"18244","type":"Column"},{"attributes":{"coordinates":null,"data_source":{"id":"18190"},"glyph":{"id":"18191"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18193"},"nonselection_glyph":{"id":"18192"},"view":{"id":"18195"}},"id":"18194","type":"GlyphRenderer"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"18188","type":"FixedTicker"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18191","type":"Scatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18204","type":"Circle"},{"attributes":{},"id":"18230","type":"UnionRenderers"},{"attributes":{"source":{"id":"18196"}},"id":"18201","type":"CDSView"},{"attributes":{"overlay":{"id":"18178"}},"id":"18173","type":"LassoSelectTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":null},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18205","type":"Circle"},{"attributes":{"end":0.5,"start":-1.5},"id":"18155","type":"DataRange1d"},{"attributes":{"axis":{"id":"18165"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"18168","type":"Grid"},{"attributes":{"axis_label":"Log","coordinates":null,"formatter":{"id":"18226"},"group":null,"major_label_policy":{"id":"18227"},"ticker":{"id":"18162"}},"id":"18161","type":"LinearAxis"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18209","type":"MultiLine"}],"root_ids":["18244"]},"title":"Bokeh Application","version":"2.4.1"}}';
                  const render_items = [{"docid":"f933af0c-9993-481d-a0cf-dfe20babe3f6","root_ids":["18244"],"roots":{"18244":"79753acc-7e4a-444e-84b8-8735d0f1c6a3"}}];
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