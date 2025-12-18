var APP_DATA = {
  "scenes": [
    {
      "id": "0-fachada",
      "name": "Fachada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3880,
      "initialViewParameters": {
        "yaw": -1.5904914217081902,
        "pitch": -0.10703326785650091,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": -1.9006847157339788,
          "pitch": 0.02442216313303014,
          "rotation": 0,
          "target": "1-sala"
        },
        {
          "yaw": -1.6042504088998353,
          "pitch": -0.684318056662816,
          "rotation": 0,
          "target": "16-vista-area-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-sala",
      "name": "Sala",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3880,
      "initialViewParameters": {
        "yaw": -1.8813611667735088,
        "pitch": 0.2172191771901737,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": -1.1522520404597234,
          "pitch": 0.1859666214865463,
          "rotation": 0,
          "target": "2-comedor"
        },
        {
          "yaw": -2.5910477879770646,
          "pitch": 0.06126010084470934,
          "rotation": 0,
          "target": "0-fachada"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6435287070654105,
          "pitch": -0.5115938017429063,
          "title": "Aire acondicionado",
          "text": "Tonelada y media"
        }
      ]
    },
    {
      "id": "2-comedor",
      "name": "Comedor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3880,
      "initialViewParameters": {
        "yaw": -0.9611404015011118,
        "pitch": 0.3314610618021092,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": -0.4467594141424396,
          "pitch": 0.21166569166559412,
          "rotation": 0,
          "target": "3-cocina"
        },
        {
          "yaw": 3.1172301256046424,
          "pitch": 0.22812415559262256,
          "rotation": 0,
          "target": "1-sala"
        },
        {
          "yaw": -1.857278670120376,
          "pitch": 0.09691139018408279,
          "rotation": 0,
          "target": "4-bao-1"
        },
        {
          "yaw": -1.6041720508742419,
          "pitch": -0.035660660597777394,
          "rotation": 0.7853981633974483,
          "target": "8-escaleras"
        },
        {
          "yaw": -2.5555483699350585,
          "pitch": 0.04169064598779926,
          "rotation": 0,
          "target": "0-fachada"
        },
        {
          "yaw": -0.9445725640896416,
          "pitch": 0.03246075710097607,
          "rotation": 1.5707963267948966,
          "target": "5-habitacin-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-cocina",
      "name": "Cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3880,
      "initialViewParameters": {
        "yaw": -1.832752686214345,
        "pitch": 0.0477103043503071,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": -0.38942085801197024,
          "pitch": 0.22606730442978495,
          "rotation": 0,
          "target": "2-comedor"
        },
        {
          "yaw": 3.102557593773178,
          "pitch": 0.11373696813923573,
          "rotation": 0,
          "target": "6-salida-al-patio"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.1274157543751944,
          "pitch": 0.4560454834123071,
          "title": "Lava platos",
          "text": "Muy pocas casas lo tienen&nbsp;"
        },
        {
          "yaw": -2.7135366753719214,
          "pitch": -0.16157519033650836,
          "title": "Centro de lavado",
          "text": "Lavadora y secadora de gas"
        },
        {
          "yaw": -1.3716630920554849,
          "pitch": -0.2912346219269999,
          "title": "Cocina integral",
          "text": "Acabado en chapa de Tzalam"
        }
      ]
    },
    {
      "id": "4-bao-1",
      "name": "Baño 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3880,
      "initialViewParameters": {
        "yaw": -2.2187313888144935,
        "pitch": 0.33458488482984805,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": 0.7679783216148159,
          "pitch": 0.37942832260092096,
          "rotation": 0,
          "target": "2-comedor"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.5021898792978394,
          "pitch": -0.1950944640071448,
          "title": "Cristal templado",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "5-habitacin-1",
      "name": "Habitación 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3880,
      "initialViewParameters": {
        "yaw": -2.3329286947907715,
        "pitch": 0.30584810549128605,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": 2.7312763530525945,
          "pitch": 0.15338552077550816,
          "rotation": 0,
          "target": "2-comedor"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.8444557102989805,
          "pitch": -0.091171547185537,
          "title": "Closet",
          "text": "Acabado en madera de Tzalam"
        },
        {
          "yaw": -0.6772594496364128,
          "pitch": 0.05652301457493003,
          "title": "Iluminacion natural",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "6-salida-al-patio",
      "name": "Salida al patio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3880,
      "initialViewParameters": {
        "yaw": 1.7816931880587745,
        "pitch": 0.07499953034385598,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": -1.718908043765591,
          "pitch": 0.5907440945529814,
          "rotation": 0,
          "target": "3-cocina"
        },
        {
          "yaw": 1.6943345711394944,
          "pitch": 0.18215742382939304,
          "rotation": 0,
          "target": "7-patio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-patio",
      "name": "Patio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3880,
      "initialViewParameters": {
        "yaw": -1.526882379107338,
        "pitch": -0.10233136680827748,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": -1.4037866644848727,
          "pitch": 0.07594010670355544,
          "rotation": 0,
          "target": "3-cocina"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.3950384948338375,
          "pitch": 0.5201143938720776,
          "title": "Amplio espacio",
          "text": "Oportunidad para colocar una alberca"
        },
        {
          "yaw": -1.9916758277584705,
          "pitch": 0.015971795431903857,
          "title": "Pasillo a la salida",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "8-escaleras",
      "name": "Escaleras",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3880,
      "initialViewParameters": {
        "yaw": -1.4988654803815464,
        "pitch": 0.34291027720767353,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": -1.0720094482531195,
          "pitch": 0.7129123148682392,
          "rotation": 4.71238898038469,
          "target": "2-comedor"
        },
        {
          "yaw": -1.7077295484219661,
          "pitch": -0.2723820889611197,
          "rotation": 1.5707963267948966,
          "target": "13-master-"
        },
        {
          "yaw": -2.006039504841283,
          "pitch": -0.2921141686516826,
          "rotation": 0,
          "target": "12-bao-2"
        },
        {
          "yaw": -2.3466910249646205,
          "pitch": -0.34144889332099027,
          "rotation": 0,
          "target": "11-habitacin-3"
        },
        {
          "yaw": -2.541849601884234,
          "pitch": -0.37150064186586107,
          "rotation": 4.71238898038469,
          "target": "10-habitacin-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-pasillo",
      "name": "Pasillo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3880,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9436639462221859,
          "pitch": 0.13150357775949928,
          "rotation": 0,
          "target": "11-habitacin-3"
        },
        {
          "yaw": 0.29586917114287203,
          "pitch": 0.16573053090105105,
          "rotation": 0,
          "target": "10-habitacin-2"
        },
        {
          "yaw": 1.7352012637284808,
          "pitch": 0.26701959129286656,
          "rotation": 0,
          "target": "12-bao-2"
        },
        {
          "yaw": 2.643067336299225,
          "pitch": 0.22107263117730014,
          "rotation": 0,
          "target": "13-master-"
        },
        {
          "yaw": -0.8946749506060119,
          "pitch": 0.9258961367354885,
          "rotation": 0,
          "target": "8-escaleras"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-habitacin-2",
      "name": "Habitación 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3880,
      "initialViewParameters": {
        "yaw": -1.4524456442243512,
        "pitch": 0.22723008675373002,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": -2.573035632907553,
          "pitch": 0.22306745973297737,
          "rotation": 0,
          "target": "9-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-habitacin-3",
      "name": "Habitación 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3880,
      "initialViewParameters": {
        "yaw": -0.9541061872634913,
        "pitch": 0.38087142637430915,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": 0.20425849349440028,
          "pitch": 0.14733090487954748,
          "rotation": 1.5707963267948966,
          "target": "9-pasillo"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.7552194125854506,
          "pitch": 0.13429879164259617,
          "title": "Balcón",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "12-bao-2",
      "name": "Baño 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3880,
      "initialViewParameters": {
        "yaw": -1.8382787040281237,
        "pitch": 0.5376520792849,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": -0.37166746242196247,
          "pitch": 0.482061954788767,
          "rotation": 0,
          "target": "9-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-master-",
      "name": "Master ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3880,
      "initialViewParameters": {
        "yaw": 1.8278170442819235,
        "pitch": 0.40679312130258616,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": -0.4595278504147622,
          "pitch": 0.22419395197003844,
          "rotation": 0,
          "target": "9-pasillo"
        },
        {
          "yaw": -2.3362882174430837,
          "pitch": 0.2288135057827123,
          "rotation": 0,
          "target": "15-bao-master"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-master-11",
      "name": "Master 1.1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3880,
      "initialViewParameters": {
        "yaw": -1.8316027332991816,
        "pitch": 0.16321946225103545,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": -0.7258940337980597,
          "pitch": 0.1973967497500979,
          "rotation": 1.5707963267948966,
          "target": "9-pasillo"
        },
        {
          "yaw": -1.3511854267173078,
          "pitch": 0.2886136431001525,
          "rotation": 0,
          "target": "13-master-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-bao-master",
      "name": "Baño master",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3880,
      "initialViewParameters": {
        "yaw": 1.3441879605405163,
        "pitch": 0.3415053364021716,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": -1.5641726722087839,
          "pitch": 0.6415844681732281,
          "rotation": 0,
          "target": "13-master-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-vista-area-",
      "name": "Vista aérea ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "yaw": -1.5712699322958308,
        "pitch": 1.5207387762939995,
        "fov": 0.4362789437352975
      },
      "linkHotspots": [
        {
          "yaw": -0.9917423105946135,
          "pitch": 1.5647155698988628,
          "rotation": 0,
          "target": "0-fachada"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.9404418769410405,
          "pitch": 0.3623084887884147,
          "title": "Carretera federal 307",
          "text": "<br>"
        },
        {
          "yaw": 2.950947184817897,
          "pitch": 0.19282765170296834,
          "title": "Super AKI",
          "text": "<br>"
        },
        {
          "yaw": -0.7168193104148344,
          "pitch": 0.3275807487605107,
          "title": "Deportivo&nbsp;",
          "text": "<br>"
        },
        {
          "yaw": -0.8067767687333092,
          "pitch": 0.6128263468045514,
          "title": "Puesto de Tacos",
          "text": "<br>"
        },
        {
          "yaw": 1.2924249417934917,
          "pitch": 1.0460794340336896,
          "title": "Amenidades",
          "text": "Alberca y area de juegos para niños"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
