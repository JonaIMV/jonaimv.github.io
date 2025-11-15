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
      "faceSize": 3000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.028295629460117766,
          "pitch": 0.932217305291033,
          "rotation": 0,
          "target": "2-cocina"
        },
        {
          "yaw": -1.1218423972041762,
          "pitch": 0.003856576948928492,
          "rotation": 0,
          "target": "1-areas-comnes"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.7924901333703076,
          "pitch": 0.7969014342480563,
          "title": "Area pet friendly",
          "text": "Area especial para mascotas&nbsp;"
        },
        {
          "yaw": -0.8360652502877901,
          "pitch": -0.02499295474649621,
          "title": "Naturaleza",
          "text": "Rodeado de naturaleza y tranquilidad, libre de ruido y con seguridad 24hrs"
        }
      ]
    },
    {
      "id": "1-areas-comnes",
      "name": "Areas comúnes",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9346954845716997,
          "pitch": 0.29983099135772306,
          "rotation": 0,
          "target": "0-fachada"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.934010714810107,
          "pitch": 0.15486395704370715,
          "title": "Ubicacion",
          "text": "<br>"
        },
        {
          "yaw": -0.1377453450087529,
          "pitch": 1.1003890378288883,
          "title": "Amenidades",
          "text": "Cancha de tennis<br>Cancha de football<br>gimnasio equipado<br>Alberca<br>Casa club"
        }
      ]
    },
    {
      "id": "2-cocina",
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
        "yaw": -1.34549431315188,
        "pitch": 0.5353699298527701,
        "fov": 1.3468096107558716
      },
      "linkHotspots": [
        {
          "yaw": -3.0755306499389903,
          "pitch": 0.06456130970145324,
          "rotation": 0,
          "target": "3-comedor"
        },
        {
          "yaw": 1.0570342342664691,
          "pitch": 0.11788006055300393,
          "rotation": 0,
          "target": "6-habitacin-1"
        },
        {
          "yaw": 0.7666085218633008,
          "pitch": 0.10714413041581139,
          "rotation": 5.497787143782138,
          "target": "8-escaleras-primer-nivel"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.112520893350233,
          "pitch": -0.21236664851729614,
          "title": "Cocina integral",
          "text": "Gabinetes diseñados para almacenar todo lo necesario para cocinar hechos de madera de tzalam"
        },
        {
          "yaw": 2.447349656526998,
          "pitch": 0.5179677014148254,
          "title": "Isla",
          "text": "Practica para preparar alimentos o servirlos, tanto la barra como la isla estan cubiertos por granito resistente al calor&nbsp;"
        }
      ]
    },
    {
      "id": "3-comedor",
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
        "yaw": 2.288655855510979,
        "pitch": 0.6117375034252017,
        "fov": 1.3468096107558716
      },
      "linkHotspots": [
        {
          "yaw": 3.101807167435515,
          "pitch": -0.07496629102827157,
          "rotation": 0,
          "target": "4-sala"
        },
        {
          "yaw": 1.3346831836244117,
          "pitch": 0.058376257389063824,
          "rotation": 0,
          "target": "2-cocina"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5847409967659924,
          "pitch": 0.12446617331399246,
          "title": "Madera tzalam",
          "text": "Los detalles en madera de los muebles en su mayoria son de maderas de la reguion"
        },
        {
          "yaw": -2.6344499973325384,
          "pitch": -0.06889846947857592,
          "title": "Cortinas blackout",
          "text": "Ambas cortinas diseñadas para impedir la entrada de la luz del sol&nbsp;"
        }
      ]
    },
    {
      "id": "4-sala",
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
        "yaw": -1.8842977910344132,
        "pitch": 0.26173971364602444,
        "fov": 1.3468096107558716
      },
      "linkHotspots": [
        {
          "yaw": 2.4026550586588344,
          "pitch": -0.02270274615209722,
          "rotation": 0,
          "target": "3-comedor"
        },
        {
          "yaw": -3.1335969197791886,
          "pitch": 0.23339376810500312,
          "rotation": 0,
          "target": "2-cocina"
        },
        {
          "yaw": 1.4091485165128486,
          "pitch": 0.18698869692016373,
          "rotation": 0,
          "target": "5-alberca"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.1295870280270943,
          "pitch": -0.24955634463784548,
          "title": "TV",
          "text": "Pantalla de 80 pulgadas"
        },
        {
          "yaw": -0.00012893845006800575,
          "pitch": 0.4873800093608658,
          "title": "Sala",
          "text": "Sala de 3 piezas de piel"
        }
      ]
    },
    {
      "id": "5-alberca",
      "name": "Alberca",
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
        "yaw": 1.533429889968021,
        "pitch": 0.8331109033736244,
        "fov": 1.3468096107558716
      },
      "linkHotspots": [
        {
          "yaw": -0.09669196283781112,
          "pitch": -0.0001938488710955255,
          "rotation": 0,
          "target": "3-comedor"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.2502960152493934,
          "pitch": 0.017874394385430037,
          "title": "Cuarto de maquinas",
          "text": "<br>"
        },
        {
          "yaw": 1.2888263207280914,
          "pitch": 0.40143404597221277,
          "title": "Alberca",
          "text": "5,000 litros&nbsp;"
        },
        {
          "yaw": 0.41949973063989177,
          "pitch": -0.15133053118000106,
          "title": "Ventanales",
          "text": "Cada ventanal y ventanas cuenta con pelicula entintada reflejante que permite solo ver desde el interior"
        }
      ]
    },
    {
      "id": "6-habitacin-1",
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
        "yaw": 2.39863228547451,
        "pitch": 0.5494713388213608,
        "fov": 1.3468096107558716
      },
      "linkHotspots": [
        {
          "yaw": -2.4580753963645847,
          "pitch": 0.04227534743023753,
          "rotation": 0,
          "target": "2-cocina"
        },
        {
          "yaw": 3.1009659071411857,
          "pitch": -0.09294702777452812,
          "rotation": 0,
          "target": "7-bao-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.141052356603965,
          "pitch": -0.11432750741141007,
          "title": "Habitacion 1er nivel",
          "text": "Cama matrimonial<br>Closet<br>Pantalla de TV 50\"<br>Aire Acondicionado Inverter<br>"
        }
      ]
    },
    {
      "id": "7-bao-1",
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
        "yaw": 2.240939014219782,
        "pitch": 0.19013377654023778,
        "fov": 1.3468096107558716
      },
      "linkHotspots": [
        {
          "yaw": -0.4939515438182145,
          "pitch": 0.3035695004531114,
          "rotation": 0,
          "target": "6-habitacin-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.898386480207729,
          "pitch": 1.0107471938324295,
          "title": "Deshumidificador",
          "text": "Necesario para mantener seco tanto baño como la habitacion<br><br>"
        },
        {
          "yaw": 1.8193837411154163,
          "pitch": -0.17951866306314201,
          "title": "Ducha",
          "text": "Cancel con cristal templado recubierto con porcelanato"
        }
      ]
    },
    {
      "id": "8-escaleras-primer-nivel",
      "name": "Escaleras primer nivel",
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
          "yaw": -1.4363802246314528,
          "pitch": 0.4086825480395184,
          "rotation": 1.5707963267948966,
          "target": "2-cocina"
        },
        {
          "yaw": -0.9828074413314631,
          "pitch": -0.321976680524255,
          "rotation": 0.7853981633974483,
          "target": "9-sala-tv"
        },
        {
          "yaw": -1.649529978096659,
          "pitch": 0.43361500269277364,
          "rotation": 4.71238898038469,
          "target": "0-fachada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-sala-tv",
      "name": "Sala TV",
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
        "yaw": 1.2061585622651236,
        "pitch": 0.2671386672362104,
        "fov": 1.3468096107558716
      },
      "linkHotspots": [
        {
          "yaw": 2.9328958261656606,
          "pitch": 0,
          "rotation": 0,
          "target": "10-habitacin-2"
        },
        {
          "yaw": -2.6102912358189876,
          "pitch": 0.10774292303724664,
          "rotation": 0,
          "target": "11-bao-2"
        },
        {
          "yaw": -2.0198666698917034,
          "pitch": 0.03976061514278939,
          "rotation": 0,
          "target": "12-habitacin-master"
        },
        {
          "yaw": 2.1983090182447826,
          "pitch": 0.2623919672812054,
          "rotation": 3.9269908169872414,
          "target": "8-escaleras-primer-nivel"
        },
        {
          "yaw": 2.1954518218518153,
          "pitch": -0.006743051280063028,
          "rotation": 5.497787143782138,
          "target": "14-escaleras-segundo-nivel"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.39955951094107256,
          "pitch": -0.17416126438763158,
          "title": "Sala de tv",
          "text": "Sofacama<div>Ventilador<br>Aire Acondicionado<br>Pantalla de 55\"<br>Closet&nbsp;</div>"
        }
      ]
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
        "yaw": 2.2357712478096,
        "pitch": 0.5307577289200598,
        "fov": 1.3468096107558716
      },
      "linkHotspots": [
        {
          "yaw": -3.1286744004824456,
          "pitch": 0.1073390850949778,
          "rotation": 0,
          "target": "11-bao-2"
        },
        {
          "yaw": -2.6771721008051497,
          "pitch": 0.15506820418098322,
          "rotation": 1.5707963267948966,
          "target": "9-sala-tv"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.4527575462782414,
          "pitch": -0.07142186086777969,
          "title": "Habitación 2do nivel",
          "text": "Closet<br>Aire Acondicionado<br>Ventilador<br>Cortinas Blackout<br>Pantalla TV 50\""
        }
      ]
    },
    {
      "id": "11-bao-2",
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
        "yaw": 2.0547933764316113,
        "pitch": 0.46527967355354605,
        "fov": 1.3468096107558716
      },
      "linkHotspots": [
        {
          "yaw": -1.5296266404004495,
          "pitch": 0.22342317431885306,
          "rotation": 0,
          "target": "9-sala-tv"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.994590986880233,
          "pitch": 0.9785141775567325,
          "title": "Deshumidificador",
          "text": "<br>"
        },
        {
          "yaw": 2.21262088260407,
          "pitch": 0.1728449689878353,
          "title": "Ducha",
          "text": "Cancel con cristal templado recubierto con porcelanato"
        }
      ]
    },
    {
      "id": "12-habitacin-master",
      "name": "Habitación Master",
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
        "yaw": -0.7190517432017707,
        "pitch": 0.37022253594582644,
        "fov": 1.3468096107558716
      },
      "linkHotspots": [
        {
          "yaw": 0.5472635746524084,
          "pitch": 0.24664652670255194,
          "rotation": 0,
          "target": "9-sala-tv"
        },
        {
          "yaw": 0.9570951678318256,
          "pitch": 0.2022588946506847,
          "rotation": 1.5707963267948966,
          "target": "13-bao-principal"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.9370621616424799,
          "pitch": 0.019219624567556437,
          "title": "Walkingcloset",
          "text": "Increíble espacio para la ropa de ella y suficiente espacio para el"
        },
        {
          "yaw": -1.3170532486866442,
          "pitch": -0.12145295334341277,
          "title": "Habitación principal",
          "text": "Cama kingsize&nbsp;<br>Aire acondicionado<br>Ventilador<br>Pantalla de 50\"<br>Cortinas Blackout<br>muebles de tzalam"
        }
      ]
    },
    {
      "id": "13-bao-principal",
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
        "yaw": -0.4841495527792432,
        "pitch": 0.12257367744152603,
        "fov": 1.3468096107558716
      },
      "linkHotspots": [
        {
          "yaw": 2.8727187288790965,
          "pitch": 0.008599972234343056,
          "rotation": 0,
          "target": "9-sala-tv"
        },
        {
          "yaw": 2.884659863429242,
          "pitch": 0.2681700656606427,
          "rotation": 4.71238898038469,
          "target": "12-habitacin-master"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9822414050270964,
          "pitch": -0.04407121871879127,
          "title": "Ducha",
          "text": "Cancel con cristal templado recubierto con porcelanato"
        }
      ]
    },
    {
      "id": "14-escaleras-segundo-nivel",
      "name": "Escaleras segundo nivel",
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
        "yaw": 2.718044026514299,
        "pitch": 0.18853600427407713,
        "fov": 1.3468096107558716
      },
      "linkHotspots": [
        {
          "yaw": -2.961663739800702,
          "pitch": 0.5583749694739133,
          "rotation": 1.5707963267948966,
          "target": "9-sala-tv"
        },
        {
          "yaw": -2.779299679481886,
          "pitch": -0.44897200863828424,
          "rotation": 1.5707963267948966,
          "target": "15-habitacin-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-habitacin-3",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9537773574493595,
          "pitch": 0,
          "rotation": 0,
          "target": "16-bao-3"
        },
        {
          "yaw": -2.151349039908327,
          "pitch": 0.16359010487969528,
          "rotation": 0,
          "target": "14-escaleras-segundo-nivel"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.578203414512907,
          "pitch": -0.15125370010747474,
          "title": "Habitacion 3er piso&nbsp;",
          "text": "Litera<br>Closet<br>Aire acondicionado<br>Ventilador&nbsp;<br>Pantalla 50\"<br>Usada para huespedes"
        }
      ]
    },
    {
      "id": "16-bao-3",
      "name": "Baño 3",
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
          "yaw": 3.0046797807063097,
          "pitch": 0.04639995876992664,
          "rotation": 0,
          "target": "15-habitacin-3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.46680308195591813,
          "pitch": 0.9817518123641804,
          "title": "Deshumidificador",
          "text": "<br>"
        },
        {
          "yaw": -1.3619020339191152,
          "pitch": -0.01753299689059773,
          "title": "Ducha",
          "text": "Cancel con cristal templado recubierto con porcelanato"
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
