'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

/*
 styles can be overridden by the user in setDefaults:

 setDefaults(
   inline: true,
   stylesheet: {
     header: {h1: {color: 'orange'}},
     PropVal: {string: {color: 'red'}}
   }
 );
*/
var baseStylesheet = exports.baseStylesheet = {
  baseFont: {
    fontFamily: '\n    -apple-system, ".SFNSText-Regular", "San Francisco", "Roboto",\n    "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif\n  ',
    color: '#444',
    WebkitFontSmoothing: 'antialiased'
  },
  link: {
    base: {
      fontFamily: 'sans-serif',
      fontSize: '12px',
      display: 'block',
      position: 'fixed',
      textDecoration: 'none',
      background: '#28c',
      color: '#fff',
      padding: '5px 15px',
      cursor: 'pointer'
    },
    topRight: {
      top: 0,
      right: 0,
      borderRadius: '0 0 0 5px'
    }
  },
  info: {
    position: 'absolute',
    background: 'white',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    padding: '0 40px',
    overflow: 'auto'
  },
  children: {
    position: 'relative',
    zIndex: 0
  },
  infoBody: {
    fontWeight: 300,
    lineHeight: 1.45,
    fontSize: '15px'
  },
  infoContent: {
    marginBottom: 0
  },
  header: {
    h1: {
      margin: '20px 0 0 0',
      padding: 0,
      fontSize: '35px',
      color: 'blue'
    },
    h2: {
      margin: '0 0 10px 0',
      padding: 0,
      fontWeight: 400,
      fontSize: '22px',
      color: 'green'
    },
    body: {
      borderBottom: '1px solid #eee',
      marginBottom: 10
    }
  },
  source: {
    h1: {
      margin: '20px 0 0 0',
      padding: '0 0 5px 0',
      fontSize: '25px',
      borderBottom: '1px solid #EEE'
    }
  },
  propTableHead: {
    margin: '20px 0 0 0'
  },

  // components
  Node: {
    containerStyle: {},
    tagStyle: {
      color: '#777'
    }
  },

  Props: {
    propStyle: {// currently unused
    },
    propNameStyle: {},
    propValueStyle: {}
  },

  PropVal: {
    func: {
      color: '#170'
    },

    attr: {
      color: '#666'
    },

    object: {
      color: '#666'
    },

    array: {
      color: '#666'
    },

    number: {
      color: '#a11'
    },

    string: {
      color: '#22a',
      wordBreak: 'break-word'
    },

    bool: {
      color: '#a11'
    },

    empty: {
      color: '#777'
    }
  },
  PropTable: {
    table: {
      marginLeft: -10,
      borderSpacing: '10px 5px',
      borderCollapse: 'separate'
    }
  }
};