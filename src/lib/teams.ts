export const teams = {
    red_bull: {
        color: '#121f45',
        accent: '#c10020',
        name: 'Red Bull Racing',
        image: 'https://www.themanual.com/tachyon/sites/9/2025/02/Red-Bull-Racing-RB21-F1-car-for-the-2025-season-right-front-three-quarter-view.jpg?fit=2001%2C1200',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Logo_of_Red_bull.svg/960px-Logo_of_Red_bull.svg.png',
        base: 'Milton Keynes, United Kingdom',
        powerUnit: 'Honda RBPT',
        drivers: [
            { first: 'Max', last: 'Verstappen', num: '3', img: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png' },
            { first: 'Isack', last: 'Hadjar', num: '17', img: 'https://www.formulaonehistory.com/wp-content/uploads/2024/12/Isack-Hadjar-F1-2026-RedBull.webp' }
        ],
        description: 'Oracle Red Bull Racing remains a dominant force in Formula 1. Following a highly successful era under the new regulations, they enter 2026 with a heavily evolved aerodynamic package and the continued reliance on the Honda RBPT power unit, which will be their last before transitioning to Ford in the future. The team pairs the formidable World Champion Max Verstappen with rising star Isack Hadjar, aiming to maintain their grip on the constructors\' title.',
        sourceName: 'Formula1.com - Red Bull Racing',
        sourceUrl: 'https://www.formula1.com/en/teams/Red-Bull-Racing.html'
    },
    ferrari: {
        color: '#ef1a2d',
        accent: '#fff200',
        name: 'Scuderia Ferrari',
        image: 'https://media.formula1.com/image/upload/t_16by9Centre/c_lfill,w_3392/q_auto/v1740000000/fom-website/2025/Ferrari/Ferrari%20SF-25%20launch%20renders/F677_still_02_v11_169.webp',
        logo: 'https://www.anciensautocollants.com/1134-large_default/autocollant-ferrari-logo-script-noir-l90-h-20-mm.jpg',
        base: 'Maranello, Italy',
        powerUnit: 'Ferrari',
        drivers: [
            { first: 'Charles', last: 'Leclerc', num: '16', img: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png' },
            { first: 'Lewis', last: 'Hamilton', num: '44', img: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png' }
        ],
        description: 'Scuderia Ferrari enters 2026 with arguably the most historically significant driver lineup in the modern era: established star Charles Leclerc and 7-time World Champion Lewis Hamilton. Operating out of Maranello, Ferrari is leveraging this blockbuster driver pairing and intense development under Fred Vasseur to end their long championship drought.',
        sourceName: 'Scuderia Ferrari Official',
        sourceUrl: 'https://www.ferrari.com/en-EN/formula1'
    },
    mercedes: {
        color: '#000000',
        accent: '#00a19c',
        name: 'Mercedes-AMG PETRONAS',
        image: 'https://media.formula1.com/image/upload/t_16by9Centre/c_lfill,w_3392/q_auto/v1740000000/fom-website/2023/Mercedes/W15%20launch/Mercedes-AMG%20W15%20E%20PERFORMANCE%20-%20Lewis%20Hamilton%20-%20Front%20Quarter.webp',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Mercedes_AMG_Petronas_F1_Logo.svg',
        base: 'Brackley, United Kingdom',
        powerUnit: 'Mercedes',
        drivers: [
            { first: 'George', last: 'Russell', num: '63', img: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png' },
            { first: 'Kimi', last: 'Antonelli', num: '12', img: 'https://f1mavericks.com/wp-content/uploads/2025/12/andant01.png' }
        ],
        description: 'Following the departure of Lewis Hamilton, Mercedes ushers in a new era. George Russell steps up as the definitive team leader, joined by Italian prodigy Kimi Antonelli. With robust 2026 power regulations matching the Mercedes engineering ethos, the Silver Arrows are focused on reclaiming their absolute dominance from the early hybrid era.',
        sourceName: 'Mercedes-AMG F1',
        sourceUrl: 'https://www.mercedesamgf1.com/'
    },
    mclaren: {
        color: '#ff8000',
        accent: '#5cb6e5',
        name: 'McLaren Racing',
        image: 'https://www.topgear.com/sites/default/files/2024/01/1-McLaren-MCL38-2024-F1-livery.jpg',
        logo: 'https://upload.wikimedia.org/wikipedia/en/6/66/McLaren_Racing_logo.svg',
        base: 'Woking, United Kingdom',
        powerUnit: 'Mercedes',
        drivers: [
            { first: 'Lando', last: 'Norris', num: '1', img: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png' },
            { first: 'Oscar', last: 'Piastri', num: '81', img: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png' }
        ],
        description: 'McLaren has completed their incredible resurgence. With reigning World Drivers\' Champion Lando Norris carrying the prestigious number 1 on his car, and the sensationally fast Oscar Piastri alongside him, the Woking squad is the team to beat. Their aerodynamic efficiency coupled with Mercedes power makes them the pinnacle of current F1 engineering.',
        sourceName: 'McLaren Official',
        sourceUrl: 'https://www.mclaren.com/racing/formula-1/'
    },
    aston_martin: {
        color: '#229971',
        accent: '#cedc00',
        name: 'Aston Martin F1',
        image: 'https://www.astonmartin.com/-/media/models---amr25/heros/amr25_hero_desktop.jpg?mw=1920&rev=-1&hash=252FBA9A3B1DE9CEDFE9C415C87C9970',
        logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/c/c2/Logo_Aston_Martin.svg/1280px-Logo_Aston_Martin.svg.png',
        base: 'Silverstone, United Kingdom',
        powerUnit: 'Honda',
        drivers: [
            { first: 'Fernando', last: 'Alonso', num: '14', img: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png' },
            { first: 'Lance', last: 'Stroll', num: '18', img: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png' }
        ],
        description: '2026 is a massive year for Aston Martin as they reunite Fernando Alonso with Honda power, in an exclusive works engine partnership. Having heavily invested in their new Silverstone campus and wind tunnel, the team led by Lawrence Stroll aims to finally bridge the gap to regular championship contention.',
        sourceName: 'Aston Martin F1',
        sourceUrl: 'https://www.astonmartinf1.com/en-GB/'
    },
    alpine: {
        color: '#0090ff',
        accent: '#fd4bc7',
        name: 'Alpine',
        image: 'https://cdn-7.motorsport.com/images/amp/Yv8pjn10/s6/formula-1-alpine-launch-2022-a-2.jpg',
        logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/1/1f/Alpine.svg/1200px-Alpine.svg.png',
        base: 'Enstone, United Kingdom',
        powerUnit: 'Mercedes',
        drivers: [
            { first: 'Pierre', last: 'Gasly', num: '10', img: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png' },
            { first: 'Franco', last: 'Colapinto', num: '43', img: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/F/FRACOL01_Franco_Colapinto/fracol01.png' }
        ],
        description: 'Alpine undergoes a massive transition in 2026, dropping the Renault power unit program to become a Mercedes customer team. Hoping this engine parity will cure their straight-line deficits, the French squad pairs the experienced Pierre Gasly with exciting Argentinian talent Franco Colapinto.',
        sourceName: 'Alpine Cars F1',
        sourceUrl: 'https://www.alpinecars.com/en/formula-1/'
    },
    williams: {
        color: '#005aff',
        accent: '#ffffff',
        name: 'Williams Racing',
        image: 'https://assets.promediateknologi.id/crop/0x0:0x0/1200x0/webp/photo/p3/83/2026/02/04/Williams-FW48-2026-866683945.jpg',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Logo_Williams_F1.png',
        base: 'Grove, United Kingdom',
        powerUnit: 'Mercedes',
        drivers: [
            { first: 'Carlos', last: 'Sainz', num: '55', img: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png' },
            { first: 'Alex', last: 'Albon', num: '23', img: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png' }
        ],
        description: 'Williams boasts one of the strongest driver pairings on the grid with Carlos Sainz and Alex Albon. Under the leadership of James Vowles and powered by Mercedes, the historic Grove outfit continues its aggressive rebuilding phase towards the front of the midfield.',
        sourceName: 'Williams Racing',
        sourceUrl: 'https://www.williamsf1.com/'
    },
    rb: {
        color: '#1534ec',
        accent: '#ffffff',
        name: 'RB F1 Team',
        image: 'https://www.autohebdo.fr/app/uploads/2025/03/DPPI_00125001_1058-753x494.jpg',
        logo: 'https://upload.wikimedia.org/wikipedia/ru/thumb/6/69/Racing_Bulls_logo.svg/960px-Racing_Bulls_logo.svg.png',
        base: 'Faenza, Italy',
        powerUnit: 'Honda RBPT',
        drivers: [
            { first: 'Liam', last: 'Lawson', num: '30', img: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LIALAW01_Liam_Lawson/lialaw01.png' },
            { first: 'Arvid', last: 'Lindblad', num: '35', img: '/assets/arvid.png' }
        ],
        description: 'As Red Bull\'s sister team, RB (formerly AlphaTauri) leans heavily into synergistic development with Milton Keynes. Featuring a completely new driver lineup in Liam Lawson and highly anticipated rookie Arvid Lindblad, the energetic Faenza squad continues to punch above its weight in tight midfield battles.',
        sourceName: 'Red Bull Racing (RB)',
        sourceUrl: 'https://www.visacashapprb.com/'
    },
    audi: {
        color: '#f00000',
        accent: '#ffffff',
        name: 'Audi F1 Team',
        image: 'https://www.blackxperience.com/assets/content/blackauto/autonews/e3ef89a0134a4a208a745b882fbdc938.jpg',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg',
        base: 'Neuburg, Germany',
        powerUnit: 'Audi',
        drivers: [
            { first: 'Nico', last: 'Hülkenberg', num: '27', img: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png' },
            { first: 'Gabriel', last: 'Bortoleto', num: '85', img: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GABBOR01_Gabriel_Bortoleto/gabbor01.png' }
        ],
        description: '2026 marks the monumental arrival of German automotive giant Audi into Formula 1. Having completely taken over the Sauber entry, Audi fields their very own works power unit alongside drivers Nico Hülkenberg and Brazilian hotshot Gabriel Bortoleto. Expectations are sky-high for this massive new project.',
        sourceName: 'Audi Formula Racing',
        sourceUrl: 'https://www.audi.com/en/company/audi-formula-racing.html'
    },
    haas: {
        color: '#b60000',
        accent: '#ffffff',
        name: 'Haas F1 Team',
        image: 'https://c.files.bbci.co.uk/f457/live/3a58c070-f527-11f0-ba75-29a1bdf58498.jpg',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Haas_F1_Team_Logo.svg/1280px-Haas_F1_Team_Logo.svg.png',
        base: 'Kannapolis, United States',
        powerUnit: 'Ferrari',
        drivers: [
            { first: 'Esteban', last: 'Ocon', num: '31', img: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png' },
            { first: 'Oliver', last: 'Bearman', num: '87', img: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OLIBEA01_Oliver_Bearman/olibea01.png' }
        ],
        description: 'The sole American team on the grid (prior to Cadillac) enters 2026 under the pragmatic leadership of Ayao Komatsu. Utilizing Ferrari machinery and a strong alliance with Maranello, Haas combines the race-winning pedigree of Esteban Ocon with the raw speed of Ferrari-backed youth Oliver Bearman.',
        sourceName: 'Haas F1 Team Official',
        sourceUrl: 'https://www.haasf1team.com/'
    },
    cadillac: {
        color: '#000000',
        accent: '#c5a059',
        name: 'Cadillac F1 Team',
        image: 'https://www.blackxperience.com/assets/content/blackauto/autonews/11830391.jpg',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Cadillac_Formula_1_Team_logo.png',
        base: 'Fishers, Indiana, USA',
        powerUnit: 'Ferrari',
        drivers: [
            { first: 'Sergio', last: 'Pérez', num: '11', img: 'https://www.formulaonehistory.com/wp-content/uploads/2023/10/Sergio-Perez-Cadillac.webp' },
            { first: 'Valtteri', last: 'Bottas', num: '77', img: 'https://www.formulaonehistory.com/wp-content/uploads/2023/10/Valtteri-Bottas-Cadillac.webp' }
        ],
        description: 'The huge 11th entry! Cadillac Formula 1 Team makes its historic debut in 2026. Backed by General Motors and TWG Motorsports, the new organization brings over 1000 employees and multiple campuses globally. Initially using Ferrari power units before transitioning to GM power in 2029, they boast massive experience with veterans Sergio Pérez and Valtteri Bottas behind the wheel of the inaugural MAC-26 car.',
        sourceName: 'Formula 1 - Cadillac Entry Approved',
        sourceUrl: 'https://www.formula1.com/'
    },
    zytherion: {
        color: '#8a2be2',
        accent: '#ffffff',
        name: 'Zytherion F1 Racing',
        image: '/assets/Zytherion%20car.jpeg',
        logo: '/assets/logo.png',
        base: 'Jakarta, Indonesia',
        powerUnit: 'Yamaha',
        drivers: [
            { first: 'Zhao', last: 'han', num: '28', img: '/assets/rihan.png' },
            { first: 'Gracia', last: 'Angelina', num: '27', img: '/assets/gracia.png' }
        ],
        description: 'In a massive breakthrough for motorsport, Indonesian constructor Zytherion F1 Racing enters Formula 1 for the 2026 season! Operating out of Jakarta, the team brings a fresh new energy and massive ambition to the grid alongside Audi and Cadillac. Spearheaded by Indonesian superstar Rayhan Aziel Abbrar and talented rising star Gracia Angelina.',
        sourceName: 'Zytherion F1 Racing Official',
        sourceUrl: 'https://www.zytherionf1.com/'
    }
};

export function getTeamStyle(constructorId: string) {
    if (Object.prototype.hasOwnProperty.call(teams, constructorId)) {
        return teams[constructorId as keyof typeof teams];
    }

    // Fallback style
    return {
        color: '#555555',
        accent: '#ffffff',
        name: constructorId,
        image: '',
        logo: '',
        base: 'Unknown',
        powerUnit: 'Unknown',
        drivers: [],
        description: 'No detailed data available.',
        sourceName: '',
        sourceUrl: ''
    };
}
