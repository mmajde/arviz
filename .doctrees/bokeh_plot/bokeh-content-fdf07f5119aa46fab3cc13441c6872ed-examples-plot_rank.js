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
    
      
      
    
      const element = document.getElementById("0dd9c410-893a-47b3-a44d-f8b41bd7cd5a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '0dd9c410-893a-47b3-a44d-f8b41bd7cd5a' but no matching script tag was found.")
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
                    
                  const docs_json = '{"f85e9fbc-f203-4b1e-b7d6-a5446f390903":{"defs":[],"roots":{"references":[{"attributes":{},"id":"48087","type":"PanTool"},{"attributes":{"overlay":{"id":"48095"}},"id":"48090","type":"LassoSelectTool"},{"attributes":{},"id":"48213","type":"UnionRenderers"},{"attributes":{},"id":"48214","type":"Selection"},{"attributes":{},"id":"48228","type":"UnionRenderers"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48224"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48225"},"ticker":{"id":"48113"}},"id":"48112","type":"LinearAxis"},{"attributes":{},"id":"48229","type":"Selection"},{"attributes":{"tools":[{"id":"48086"},{"id":"48087"},{"id":"48088"},{"id":"48089"},{"id":"48090"},{"id":"48091"},{"id":"48092"},{"id":"48093"}]},"id":"48096","type":"Toolbar"},{"attributes":{},"id":"48076","type":"LinearScale"},{"attributes":{},"id":"48091","type":"UndoTool"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"48169","type":"Title"},{"attributes":{},"id":"48215","type":"UnionRenderers"},{"attributes":{},"id":"48108","type":"LinearScale"},{"attributes":{},"id":"48216","type":"Selection"},{"attributes":{},"id":"48072","type":"DataRange1d"},{"attributes":{"overlay":{"id":"48094"}},"id":"48088","type":"BoxZoomTool"},{"attributes":{},"id":"48070","type":"DataRange1d"},{"attributes":{"below":[{"id":"48078"}],"center":[{"id":"48081"},{"id":"48085"},{"id":"48145"},{"id":"48152"},{"id":"48159"},{"id":"48166"}],"height":331,"left":[{"id":"48082"}],"output_backend":"webgl","renderers":[{"id":"48143"},{"id":"48150"},{"id":"48157"},{"id":"48164"}],"title":{"id":"48169"},"toolbar":{"id":"48096"},"toolbar_location":null,"width":496,"x_range":{"id":"48070"},"x_scale":{"id":"48074"},"y_range":{"id":"48072"},"y_scale":{"id":"48076"}},"id":"48069","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48207"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48208"},"ticker":{"id":"48079"}},"id":"48078","type":"LinearAxis"},{"attributes":{"ticks":[0,1,2,3]},"id":"48167","type":"FixedTicker"},{"attributes":{},"id":"48230","type":"UnionRenderers"},{"attributes":{},"id":"48231","type":"Selection"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48140","type":"VBar"},{"attributes":{"callback":null},"id":"48093","type":"HoverTool"},{"attributes":{"children":[{"id":"48239"},{"id":"48237"}]},"id":"48240","type":"Column"},{"attributes":{},"id":"48086","type":"ResetTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"48094","type":"BoxAnnotation"},{"attributes":{},"id":"48074","type":"LinearScale"},{"attributes":{},"id":"48232","type":"UnionRenderers"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48204"},"group":null,"major_label_policy":{"id":"48205"},"ticker":{"id":"48167"}},"id":"48082","type":"LinearAxis"},{"attributes":{},"id":"48233","type":"Selection"},{"attributes":{},"id":"48089","type":"WheelZoomTool"},{"attributes":{},"id":"48079","type":"BasicTicker"},{"attributes":{"axis":{"id":"48082"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"48085","type":"Grid"},{"attributes":{"axis":{"id":"48078"},"coordinates":null,"group":null,"ticker":null},"id":"48081","type":"Grid"},{"attributes":{},"id":"48092","type":"SaveTool"},{"attributes":{"axis":{"id":"48112"},"coordinates":null,"group":null,"ticker":null},"id":"48115","type":"Grid"},{"attributes":{},"id":"48110","type":"LinearScale"},{"attributes":{},"id":"48113","type":"BasicTicker"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"48095","type":"PolyAnnotation"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48154","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4166666666666665},"id":"48152","type":"Span"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.41666666666666663},"id":"48145","type":"Span"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.4166666666666665},"id":"48159","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48212"},"selection_policy":{"id":"48211"}},"id":"48146","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"48146"},"glyph":{"id":"48147"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48149"},"nonselection_glyph":{"id":"48148"},"view":{"id":"48151"}},"id":"48150","type":"GlyphRenderer"},{"attributes":{"source":{"id":"48146"}},"id":"48151","type":"CDSView"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48149","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48148","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48161","type":"VBar"},{"attributes":{"callback":null},"id":"48127","type":"HoverTool"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.4166666666666665},"id":"48166","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48214"},"selection_policy":{"id":"48213"}},"id":"48153","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"48153"},"glyph":{"id":"48154"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48156"},"nonselection_glyph":{"id":"48155"},"view":{"id":"48158"}},"id":"48157","type":"GlyphRenderer"},{"attributes":{},"id":"48204","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"48153"}},"id":"48158","type":"CDSView"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48156","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48155","type":"VBar"},{"attributes":{},"id":"48205","type":"AllLabels"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48221"},"group":null,"major_label_policy":{"id":"48222"},"ticker":{"id":"48199"}},"id":"48116","type":"LinearAxis"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48179","type":"VBar"},{"attributes":{},"id":"48207","type":"BasicTickFormatter"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48216"},"selection_policy":{"id":"48215"}},"id":"48160","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"48160"},"glyph":{"id":"48161"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48163"},"nonselection_glyph":{"id":"48162"},"view":{"id":"48165"}},"id":"48164","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"48116"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"48119","type":"Grid"},{"attributes":{"source":{"id":"48160"}},"id":"48165","type":"CDSView"},{"attributes":{},"id":"48208","type":"AllLabels"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"48201","type":"Title"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48163","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48210"},"selection_policy":{"id":"48209"}},"id":"48139","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48162","type":"VBar"},{"attributes":{"overlay":{"id":"48128"}},"id":"48122","type":"BoxZoomTool"},{"attributes":{"ticks":[0,1,2,3]},"id":"48199","type":"FixedTicker"},{"attributes":{},"id":"48121","type":"PanTool"},{"attributes":{},"id":"48120","type":"ResetTool"},{"attributes":{},"id":"48126","type":"SaveTool"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48227"},"selection_policy":{"id":"48226"}},"id":"48171","type":"ColumnDataSource"},{"attributes":{},"id":"48123","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"48129"}},"id":"48124","type":"LassoSelectTool"},{"attributes":{"source":{"id":"48171"}},"id":"48176","type":"CDSView"},{"attributes":{},"id":"48125","type":"UndoTool"},{"attributes":{"coordinates":null,"data_source":{"id":"48171"},"glyph":{"id":"48172"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48174"},"nonselection_glyph":{"id":"48173"},"view":{"id":"48176"}},"id":"48175","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48172","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48139"},"glyph":{"id":"48140"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48142"},"nonselection_glyph":{"id":"48141"},"view":{"id":"48144"}},"id":"48143","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4807692307692308},"id":"48184","type":"Span"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48174","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48173","type":"VBar"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"48128","type":"BoxAnnotation"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48186","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48141","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.48076923076923067},"id":"48177","type":"Span"},{"attributes":{"source":{"id":"48139"}},"id":"48144","type":"CDSView"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.480769230769231},"id":"48191","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48229"},"selection_policy":{"id":"48228"}},"id":"48178","type":"ColumnDataSource"},{"attributes":{},"id":"48221","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"data_source":{"id":"48178"},"glyph":{"id":"48179"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48181"},"nonselection_glyph":{"id":"48180"},"view":{"id":"48183"}},"id":"48182","type":"GlyphRenderer"},{"attributes":{"tools":[{"id":"48120"},{"id":"48121"},{"id":"48122"},{"id":"48123"},{"id":"48124"},{"id":"48125"},{"id":"48126"},{"id":"48127"}]},"id":"48130","type":"Toolbar"},{"attributes":{"source":{"id":"48178"}},"id":"48183","type":"CDSView"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48181","type":"VBar"},{"attributes":{},"id":"48222","type":"AllLabels"},{"attributes":{},"id":"48209","type":"UnionRenderers"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48180","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48193","type":"VBar"},{"attributes":{},"id":"48224","type":"BasicTickFormatter"},{"attributes":{},"id":"48210","type":"Selection"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.480769230769231},"id":"48198","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48231"},"selection_policy":{"id":"48230"}},"id":"48185","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"48185"},"glyph":{"id":"48186"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48188"},"nonselection_glyph":{"id":"48187"},"view":{"id":"48190"}},"id":"48189","type":"GlyphRenderer"},{"attributes":{},"id":"48225","type":"AllLabels"},{"attributes":{"source":{"id":"48185"}},"id":"48190","type":"CDSView"},{"attributes":{"children":[[{"id":"48069"},0,0],[{"id":"48105"},0,1]]},"id":"48237","type":"GridBox"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48188","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48187","type":"VBar"},{"attributes":{"below":[{"id":"48112"}],"center":[{"id":"48115"},{"id":"48119"},{"id":"48177"},{"id":"48184"},{"id":"48191"},{"id":"48198"}],"height":331,"left":[{"id":"48116"}],"output_backend":"webgl","renderers":[{"id":"48175"},{"id":"48182"},{"id":"48189"},{"id":"48196"}],"title":{"id":"48201"},"toolbar":{"id":"48130"},"toolbar_location":null,"width":496,"x_range":{"id":"48070"},"x_scale":{"id":"48108"},"y_range":{"id":"48072"},"y_scale":{"id":"48110"}},"id":"48105","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48233"},"selection_policy":{"id":"48232"}},"id":"48192","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"48192"},"glyph":{"id":"48193"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48195"},"nonselection_glyph":{"id":"48194"},"view":{"id":"48197"}},"id":"48196","type":"GlyphRenderer"},{"attributes":{"source":{"id":"48192"}},"id":"48197","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48142","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48195","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48194","type":"VBar"},{"attributes":{"toolbars":[{"id":"48096"},{"id":"48130"}],"tools":[{"id":"48086"},{"id":"48087"},{"id":"48088"},{"id":"48089"},{"id":"48090"},{"id":"48091"},{"id":"48092"},{"id":"48093"},{"id":"48120"},{"id":"48121"},{"id":"48122"},{"id":"48123"},{"id":"48124"},{"id":"48125"},{"id":"48126"},{"id":"48127"}]},"id":"48238","type":"ProxyToolbar"},{"attributes":{"toolbar":{"id":"48238"},"toolbar_location":"above"},"id":"48239","type":"ToolbarBox"},{"attributes":{},"id":"48211","type":"UnionRenderers"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48147","type":"VBar"},{"attributes":{},"id":"48212","type":"Selection"},{"attributes":{},"id":"48226","type":"UnionRenderers"},{"attributes":{},"id":"48227","type":"Selection"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"48129","type":"PolyAnnotation"}],"root_ids":["48240"]},"title":"Bokeh Application","version":"2.4.1"}}';
                  const render_items = [{"docid":"f85e9fbc-f203-4b1e-b7d6-a5446f390903","root_ids":["48240"],"roots":{"48240":"0dd9c410-893a-47b3-a44d-f8b41bd7cd5a"}}];
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