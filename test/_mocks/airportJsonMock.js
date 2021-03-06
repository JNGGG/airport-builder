export const airportJsonMock = {
    radio: {
        twr: 'Las Vegas Tower',
        app: 'Las Vegas Approach',
        dep: 'Las Vegas Departure'
    },
    icao: 'KLAS',
    iata: 'LAS',
    magnetic_north: 11.9,
    ctr_radius: 80,
    ctr_ceiling: 19000,
    initial_alt: 19000,
    position: ['N36.080056', 'W115.15225', '2181ft'],
    rr_radius_nm: 5.0,
    rr_center: ['N36.080056', 'W115.15225'],
    has_terrain: true,
    wind: {
        angle: 220,
        speed: 6
    },
    airspace: [
        {
            floor: 0,
            ceiling: 190,
            airspace_class: 'B',
            poly: [
                ['N35d57m50.000', 'W115d51m15.000'],
                ['N35d34m30.000', 'W115d29m00.000']
            ]
        }
    ],
    fixes: {
        _RWY19L02DME: [36.12883621109, -115.13620132796],
        _RWY19R02DME: [36.12992510899, -115.13907057136],
        BAKRR: ['N36.07582112978773', 'W114.95309917207562'],
        BCE: ['N37.68918661436860', 'W112.30389943797489'],
        BESSY: ['N36.10772192196994', 'W115.28956463349111'],
        BETHL: ['N36.88434886833625', 'W112.44043432584908'],
        BIKKR: ['N36.56666216331978', 'W116.75003219453492']
    },
    runways: [
        {
            name: ['07L', '25R'],
            end: [
                ['N36d4m34.82', 'W115d10m16.98', '2179ft'],
                ['N36d4m35.05', 'W115d7m15.93', '2033ft']
            ],
            ils: [false, true]
        },
        {
            name: ['07R', '25L'],
            end: [
                ['N36d4m25.04', 'W115d9m41.15', '2157ft'],
                ['N36d4m25.17', 'W115d7m32.96', '2049ft']
            ],
            ils: [false, true]
        }
    ],
    airways: {
        J100: ['HEC', 'CLARR', 'LAS', 'NORRA', 'BCE'],
        J146: ['LAS', 'NOOTN'],
        J9: ['HEC', 'CLARR', 'LAS', 'NORRA', 'AVERS', 'URIAH', 'BERYL', 'MLF'],
        J92: ['BTY', 'BLD', 'KADDY', 'PRFUM', 'CADDU', 'DRK'],
        Q15: ['CHILY', 'DOVEE', 'BIKKR'],
        V8: ['PHYLI', 'MMM', 'MEADS', 'ACLAM', 'WINDS', 'LYNSY', 'SHUSS', 'GFS', 'HEC']
    },
    sids: {
        COWBY6: {
            icao: 'COWBY6',
            name: 'Cowboy Six',
            suffix: {
                '1L': '',
                '1R': '',
                '28L': '',
                '28R': ''
            },
            rwy: {
                '01L': ['_RWY19R02DME', 'NAPSE', ['RIOOS', 'A130+'], 'COMPS'],
                '01R': ['_RWY19L02DME', 'NAPSE', ['RIOOS', 'A130+'], 'COMPS'],
                '07L': ['WASTE', ['BAKRR', 'A70'], 'COMPS'],
                '07R': ['JESJI', ['BAKRR', 'A70'], 'COMPS'],
                '19L': ['FIXIX', ['ROPPR', 'A70'], ['CEASR', 'A80+'], ['HITME', 'A110+']],
                '19R': ['JAKER', ['ROPPR', 'A70'], ['CEASR', 'A80+'], ['HITME', 'A110+']],
                '25L': ['PIRMD', ['ROPPR', 'A70'], ['CEASR', 'A80+'], ['HITME', 'A110+']],
                '25R': ['RBELL', ['ROPPR', 'A70'], ['CEASR', 'A80+'], ['HITME', 'A110+']]
            },
            body: ['COWBY'],
            exitPoints: {
                DRK: ['NAVHO', 'DRK'],
                GUP: [['MOSBI', 'A150+'], 'GUP'],
                INW: [['CUTRO', 'A150+'], 'INW']
            },
            draw: [
                ['ROPPR', 'CEASR', 'HITME', 'COWBY', 'MOSBI', 'GUP*'],
                ['BAKRR', 'COMPS', 'COWBY', 'CUTRO', 'INW*'],
                ['_RWY19L02DME', 'NAPSE'],
                ['_RWY19R02DME', 'NAPSE', 'RIOOS', 'COMPS'],
                ['COWBY', 'NAVHO', 'DRK*']
            ]
        }
    },
    stars: {
        GRNPA1: {
            icao: 'GRNPA1',
            name: 'Grandpa One',
            suffix: {'1L':'', '1R':'', '28L':'', '28R':''},
            entryPoints: {
                BETHL: ['BETHL', ['HOLDM', 'A270']],
                BCE: ['BCE'],
                DVC: ['DVC', 'BETHL', ['HOLDM', 'A270']],
                MLF: ['MLF']
            },
            body: [
                ['KSINO', 'A170'],
                ['LUXOR', 'A120|S250'],
                ['GRNPA', 'A110'],
                ['DUBLX', 'A90'],
                ['FRAWG', 'A80|S210'],
                'TRROP',
                'LEMNZ'
            ],
            rwy: {
                '01L': [],
                '01R': [],
                '07L': [],
                '07R': [],
                '19L': [],
                '19R': [],
                '25L': [],
                '25R': []
            },
            draw: [['ENI*', 'PYE'], ['MXW*', 'PYE'], ['PYE', 'STINS', 'HADLY', 'OSI']]
        }
    },
    spawnPatterns: [
        {
            origin: 'KLAS',
            destination: '',
            category: 'DEPARTURE',
            route: 'KLAS.COWBY6.GUP',
            altitude: 0,
            method: 'RANDOM',
            entrail: [10, 22],
            rate: 5,
            airlines: [
                ['amx', 2],
                ['aca/long', 4],
                ['asa', 3],
                ['aay', 15]
            ]
        },
        {
            origin: '',
            destination: 'KLAS',
            category: 'ARRIVAL',
            route: 'BETHL.GRNPA1.KLAS',
            altitude: [30000, 40000],
            speed: 320,
            method: 'RANDOM',
            entrail: [10, 22],
            rate: 10,
            airlines: [
                ['aca/long', 4],
                ['aay', 15],
                ['aal', 10]
            ]
        }
    ],
    maps: {
        base: [
            ['N36d38m01.199', 'W114d36m17.219', 'N36d36m32.337', 'W114d34m19.673'],
            ['N36d36m27.904', 'W114d36m12.534', 'N36d38m06.271', 'W114d34m20.227'],
            ['N35d56m01.371', 'W114d51m25.735', 'N35d57m09.977', 'W114d51m43.334'],
            ['N35d56m42.691', 'W114d52m17.075', 'N35d56m28.981', 'W114d50m51.994']
        ]
    }
}
