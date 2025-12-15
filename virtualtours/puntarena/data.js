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
        "yaw": -1.332738132985714,
        "pitch": -0.2441517199960117,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": -1.3362840957374154,
          "pitch": 0.06695185720765195,
          "rotation": 0,
          "target": "1-entrada-al-pasillo"
        },
        {
          "yaw": -1.8272025261044043,
          "pitch": 0.009845529533114572,
          "rotation": 0,
          "target": "6-recibidor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entrada-al-pasillo",
      "name": "Entrada al pasillo",
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
        "yaw": -1.1763090403181522,
        "pitch": -0.06027602794232578,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": -1.1293725464052837,
          "pitch": 0.3216612858296557,
          "rotation": 0,
          "target": "0-fachada"
        },
        {
          "yaw": 1.2499202388349406,
          "pitch": 0.4875076521903061,
          "rotation": 0,
          "target": "2-pasillo-exterior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-pasillo-exterior",
      "name": "Pasillo exterior",
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
        "yaw": -1.329120027403448,
        "pitch": -0.09597862395616197,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": -0.7396471390196986,
          "pitch": -0.11802828231497031,
          "rotation": 0,
          "target": "5-shala-2"
        },
        {
          "yaw": -1.6332495591633531,
          "pitch": -0.3756684008995741,
          "rotation": 0,
          "target": "1-entrada-al-pasillo"
        },
        {
          "yaw": 1.4535390597868005,
          "pitch": 0.011142083075753817,
          "rotation": 0,
          "target": "3-patio-trasero"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-patio-trasero",
      "name": "Patio trasero",
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
        "yaw": -1.5688175829961502,
        "pitch": 0.031395118526461374,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": -1.8690568379803416,
          "pitch": 0.3297847241327805,
          "rotation": 0,
          "target": "4-shala"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.1741340995242986,
          "pitch": -0.35920003754812413,
          "title": "Naturaleza",
          "text": "Rodeada de naturaleza, el silencio y la armonia de la selva te acompañan en cada amanecer"
        },
        {
          "yaw": -2.3988454436200453,
          "pitch": -0.27778377084232986,
          "title": "Ventanales",
          "text": "Listos para opacar el ruido exterior y protegerte de los huracanes"
        }
      ]
    },
    {
      "id": "4-shala",
      "name": "Shala",
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
        "yaw": 1.687634538296689,
        "pitch": 0.15306024583772881,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": 1.687634538296689,
          "pitch": 0.15306024583772881,
          "rotation": 0,
          "target": "3-patio-trasero"
        },
        {
          "yaw": -1.4178169630623643,
          "pitch": 0.04911531754803633,
          "rotation": 0,
          "target": "5-shala-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.4552523731560267,
          "pitch": -0.19932442591093924,
          "title": "Aire acondicionado",
          "text": "Con capacidad de 2 toneladas y tecnologia inverter para ahorrar dinero&nbsp;"
        },
        {
          "yaw": 1.7037895925383015,
          "pitch": 0.8890879813378216,
          "title": "Meditacion",
          "text": "Espacio dedicado a Yoga y meditación"
        }
      ]
    },
    {
      "id": "5-shala-2",
      "name": "Shala 2",
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
        "yaw": 1.3846802764747999,
        "pitch": 0.05664774846399112,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": -2.9458248479496856,
          "pitch": 0.055392115377543405,
          "rotation": 0,
          "target": "2-pasillo-exterior"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.510118607278999,
          "pitch": 0.3252815325860432,
          "title": "Amplio espacio",
          "text": "Este increible lugar puedes dedicarlo a un area de juegos, sala de cine, y al mismo tiempo disfrutar de la alberca interior sin sacrificar la privacidad"
        },
        {
          "yaw": -1.3722659630946197,
          "pitch": 0.48843854814239407,
          "title": "Alberca",
          "text": "Increíble diseño con una profundidad mas alla de lo estándar, ideal para ejercitarse y relajarse en familia"
        },
        {
          "yaw": -0.5971928607051655,
          "pitch": -0.7103208241951684,
          "title": "Doble altura",
          "text": "Adorno de raiz que le da un toque de naturaleza al espacio junto al muro de celosia&nbsp;"
        },
        {
          "yaw": -2.0194914857579764,
          "pitch": -0.1462449574014979,
          "title": "Baño completo",
          "text": "<br>"
        },
        {
          "yaw": -1.5724270473495245,
          "pitch": 0.029261846279176495,
          "title": "Espacio extra",
          "text": "Puedes tener una habitacion extra, una bodega un estudio o lo que tu necesites para satisfacer tus necesidades"
        }
      ]
    },
    {
      "id": "6-recibidor",
      "name": "Recibidor",
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
        "yaw": -2.1938268858839614,
        "pitch": 0.2682382485302064,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": -1.7424529879590267,
          "pitch": 0.11458919531656164,
          "rotation": 0,
          "target": "7-cocina"
        },
        {
          "yaw": 0.5924439785824269,
          "pitch": -0.09661971492913324,
          "rotation": 0.7853981633974483,
          "target": "9-pasillo-1er-nivel"
        },
        {
          "yaw": 2.539223411160429,
          "pitch": 0.027834709250019074,
          "rotation": 0,
          "target": "0-fachada"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.2074266225624823,
          "pitch": -0.0828594202604851,
          "title": "Medio baño",
          "text": "<br>"
        },
        {
          "yaw": 1.4863900030441393,
          "pitch": -0.1022354333473583,
          "title": "Almacen",
          "text": "Area utilizada para almacenar o bedega"
        }
      ]
    },
    {
      "id": "7-cocina",
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
        "yaw": 2.777699228452441,
        "pitch": 0.28045927163770834,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": 1.5593310207535191,
          "pitch": 0.2085799437943816,
          "rotation": 0,
          "target": "8-balcon-cocina"
        },
        {
          "yaw": -1.8821451194380607,
          "pitch": 0.0689013083967982,
          "rotation": 0,
          "target": "6-recibidor"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.579419565474809,
          "pitch": -0.24620407948247092,
          "title": "Cocina",
          "text": "Totalmente equipada, si eres amante de cocinar entonces este espacio es ideal para ti, pasaras momentos increibles y disfrutaras de cada receta que prepares."
        },
        {
          "yaw": 2.5232519878149606,
          "pitch": 0.7782019895684336,
          "title": "Espacio de sobra",
          "text": "Toda la cocina esta planeada para que todo tenga su lugar&nbsp;"
        }
      ]
    },
    {
      "id": "8-balcon-cocina",
      "name": "Balcon Cocina",
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
        "yaw": 1.571834346188485,
        "pitch": 0.171267336434191,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": 1.4998163662518085,
          "pitch": 0.3563938974566625,
          "rotation": 0,
          "target": "7-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-pasillo-1er-nivel",
      "name": "Pasillo 1er nivel",
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
        "yaw": 1.7009443306500263,
        "pitch": 0.1420524172535771,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": -1.0739504942634603,
          "pitch": -0.02533716419866039,
          "rotation": 0,
          "target": "13-habitacin-principal"
        },
        {
          "yaw": 1.2360714873204834,
          "pitch": 0.26032706917732007,
          "rotation": 3.9269908169872414,
          "target": "6-recibidor"
        },
        {
          "yaw": 2.172996952515481,
          "pitch": 0.34492128549213774,
          "rotation": 1.5707963267948966,
          "target": "10-oficina-habitacin-1"
        },
        {
          "yaw": -1.0064371410248363,
          "pitch": 0.12223655390017996,
          "rotation": 13.351768777756625,
          "target": "14-pasillo-2do-nivel"
        },
        {
          "yaw": -1.6436169209626676,
          "pitch": 0.11992935433182161,
          "rotation": 4.71238898038469,
          "target": "11-habitacin-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.2934790447505353,
          "pitch": -0.16156734188350974,
          "title": "Iluminación natural",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "10-oficina-habitacin-1",
      "name": "Oficina (Habitación 1)",
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
        "yaw": 1.599353704770814,
        "pitch": 0.2283695004541979,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": 0.028725311555056976,
          "pitch": 0.191010782273203,
          "rotation": 0,
          "target": "9-pasillo-1er-nivel"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.3519435632224255,
          "pitch": 0.2550039914243243,
          "title": "Espacio Multiuso",
          "text": "Este espacio esta siendo usado como oficina, sin embargo puede funcionar como una habitación o estudio o biblioteca. Se ajusta a lo que necesites de el,."
        },
        {
          "yaw": -1.6825601565310748,
          "pitch": -0.41741340074902666,
          "title": "Aire acondicionado",
          "text": "1 tonelada con tecnologia inverter"
        }
      ]
    },
    {
      "id": "11-habitacin-2",
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
        "yaw": 1.7145613129444515,
        "pitch": 0.040232215175780794,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": -2.7217008579739534,
          "pitch": 0.01739774788018522,
          "rotation": 4.71238898038469,
          "target": "13-habitacin-principal"
        },
        {
          "yaw": -2.1172672013441556,
          "pitch": -0.006297153204961603,
          "rotation": 0.7853981633974483,
          "target": "9-pasillo-1er-nivel"
        },
        {
          "yaw": -1.6922849088639396,
          "pitch": 0.3287714808426383,
          "rotation": 1.5707963267948966,
          "target": "14-pasillo-2do-nivel"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.9947646547401492,
          "pitch": -0.05357252062205475,
          "title": "Baño completo",
          "text": "<br>"
        },
        {
          "yaw": 1.4394287172643008,
          "pitch": -0.7159114810592726,
          "title": "Tapanco",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "12-bao-principal",
      "name": "Baño principal",
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
        "yaw": 2.7463699277617213,
        "pitch": 0.5589236027408901,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": -0.41668093133378115,
          "pitch": 0.15478298658669765,
          "rotation": 1.5707963267948966,
          "target": "13-habitacin-principal"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.0044298438141137,
          "pitch": 0.7242956007159496,
          "title": "Bañera",
          "text": "Lista para consentirte"
        },
        {
          "yaw": 1.9545143240456273,
          "pitch": 0.047141171088638245,
          "title": "Ducha",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "13-habitacin-principal",
      "name": "Habitación principal",
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
        "yaw": 2.4298071825513903,
        "pitch": 0.25191199965330746,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": -0.022201430383717025,
          "pitch": 0.08882212331395678,
          "rotation": 0,
          "target": "9-pasillo-1er-nivel"
        },
        {
          "yaw": 2.4815069237771628,
          "pitch": 0.030633664757313994,
          "rotation": 4.71238898038469,
          "target": "12-bao-principal"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.11214711255646748,
          "pitch": -0.12608704733693266,
          "title": "Closet",
          "text": "<br>"
        },
        {
          "yaw": -2.982340957940865,
          "pitch": -0.3546315093045873,
          "title": "Aire acondicionado",
          "text": "Tonelada y media con tecnologia inverter"
        },
        {
          "yaw": 2.9394630223313705,
          "pitch": 0.26736476325334735,
          "title": "Balcon",
          "text": "<br>"
        },
        {
          "yaw": 1.6181631925536015,
          "pitch": 0.06827261687263153,
          "title": "King size",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "14-pasillo-2do-nivel",
      "name": "Pasillo 2do nivel",
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
        "yaw": -0.7098266401651578,
        "pitch": 0.25145743645722973,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": 1.7593015781424945,
          "pitch": 0.18877863874862832,
          "rotation": 1.5707963267948966,
          "target": "16-habitacin-3"
        },
        {
          "yaw": 0.08316488755172458,
          "pitch": -0.028546104429702623,
          "rotation": 13.351768777756625,
          "target": "20-lavanderia-"
        },
        {
          "yaw": -1.6581971485335973,
          "pitch": 0.15892178786423372,
          "rotation": 1.5707963267948966,
          "target": "15-pasillo-2-nivel"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.5785419334137378,
          "pitch": -0.14939882229181656,
          "title": "Iluminación natural",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "15-pasillo-2-nivel",
      "name": "Pasillo 2 nivel",
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
        "yaw": 0.8911938064121401,
        "pitch": 0.40930418995261597,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": -2.1647368090351726,
          "pitch": 0.10370783758019364,
          "rotation": 0,
          "target": "17-habitacin-4"
        },
        {
          "yaw": -2.6057080548249267,
          "pitch": 0.2097497590901387,
          "rotation": 4.71238898038469,
          "target": "19-bao-4"
        },
        {
          "yaw": 1.0026343356180831,
          "pitch": 0.169340103249219,
          "rotation": 0,
          "target": "14-pasillo-2do-nivel"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.04999725006999611,
          "pitch": -0.045136229322235266,
          "title": "Baño&nbsp;",
          "text": "Este baño esta dividido en el inodoro y la regadera, para comodidad de todos los habitantes de la casa."
        }
      ]
    },
    {
      "id": "16-habitacin-3",
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
        "yaw": -1.1906492705385716,
        "pitch": 0.14313091305091064,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": 0.0067314233298780835,
          "pitch": 0.19496141544087564,
          "rotation": 0,
          "target": "14-pasillo-2do-nivel"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.55256605884178,
          "pitch": -0.25180430136579623,
          "title": "Aire acondicionado",
          "text": "Capacidad de una tonelada con tecnologia inverter"
        }
      ]
    },
    {
      "id": "17-habitacin-4",
      "name": "Habitación 4",
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
        "yaw": 1.057956430147243,
        "pitch": 0.48465114508654494,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": 0.5767417138635018,
          "pitch": 0.05948822626990946,
          "rotation": 0,
          "target": "15-pasillo-2-nivel"
        },
        {
          "yaw": 0.7890715351232931,
          "pitch": 0.10661818164499337,
          "rotation": 1.5707963267948966,
          "target": "19-bao-4"
        },
        {
          "yaw": 2.331492284072075,
          "pitch": 0.08933510655411503,
          "rotation": 0,
          "target": "18-habitacin-41"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-habitacin-41",
      "name": "Habitación 4.1",
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
        "yaw": 1.6371535441374503,
        "pitch": 0.11632337627926859,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": 0.7755689792884191,
          "pitch": 0.1107112012388285,
          "rotation": 0,
          "target": "17-habitacin-4"
        },
        {
          "yaw": 1.6437102110282371,
          "pitch": 0.06251629762604338,
          "rotation": 0,
          "target": "15-pasillo-2-nivel"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-bao-4",
      "name": "Baño 4",
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
        "yaw": 1.0705527366061869,
        "pitch": 0.17825486924634504,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": -1.9039616924089984,
          "pitch": 0.012684068917025115,
          "rotation": 0,
          "target": "18-habitacin-41"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-lavanderia-",
      "name": "Lavanderia ",
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
        "yaw": 1.4004867238886671,
        "pitch": 0.3999390136404326,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": 2.927193871778261,
          "pitch": 0.5534847363426145,
          "rotation": 0,
          "target": "14-pasillo-2do-nivel"
        },
        {
          "yaw": 0.6822823137569429,
          "pitch": 0.08437077431301176,
          "rotation": 0,
          "target": "21-terraza"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-terraza",
      "name": "Terraza",
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
        "yaw": -1.7220905547298742,
        "pitch": 0.21115333566255856,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": 1.5611862168500803,
          "pitch": 0.13384793481134416,
          "rotation": 0,
          "target": "20-lavanderia-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.724184895164976,
          "pitch": -0.05528911116209301,
          "title": "Vista al manglar",
          "text": "Esta vista inigualable al manglar te regalara los mejores amaneceres y los mejores atardeceres en Puero Morelos"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
