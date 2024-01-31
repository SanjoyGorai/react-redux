import { createSlice } from '@reduxjs/toolkit';

const newsSlice = createSlice({
    name: 'blog',
    initialState: [
        {
            heading: `‘Introspect, utilise opportunity to discuss issues’: PM Modi tells MPs`,
            author: 'BySaptarshi Das',
            date: 'Jan 31, 2024 12:37 PM IST',
            subHeading: 'Prime Minister Narendra Modi said that those MPs who brought a negative mindset and created disorder in Parliament would be hardly remembered            ',
            image: 'https://www.hindustantimes.com/ht-img/img/2024/01/31/550x309/Prime-Minister-Narendra-Modi-addresses-media-perso_1706684820366.jpg',
            description: 'Prime Minister Narendra Modi on Wednesday urged members of Parliament (MPs) to utilise the opportunity given to them to discuss issues in Parliament and said that those who have developed a habit of disrupting House proceedings should introspect.'
        },
        {
            heading: 'Report coercive calls asking to work overtime: Air India unions to pilots',
            author: 'By Neha LM Tripathi',
            date: 'Jan 31, 2024 12:45 PM IST',
            subHeading: 'Terming the forced Flight Duty Time Limitations (FDTL) extension as a grave concern, the unions said they will be able to show call records as proof of being coerced by the airline',
            image: 'https://www.hindustantimes.com/ht-img/img/2024/01/31/550x309/Flight-duty-time-limitations-stipulate-conditions-_1706684819750.jpg',
            description: 'New Delhi: The Air India pilots’ unions, Indian Pilots’ Guild (consists of Boeing pilots) and Indian Commercial Pilots’ Association (that has Airbus pilots), on Wednesday, appealed to their pilots to immediately inform them in case the airline forces them to work overtime time.',
        },
        {
            heading: 'Arrest those accused of attacking school teachers by Feb 2: Calcutta HC',
            author: 'By HT Correspondent',
            date: 'Jan 30, 2024 09:59 PM IST',
            subHeading: 'Police said the four persons named in the FIR are still missing but investigators have arrested four other suspects in connection with the alleged assault',
            image: 'https://www.hindustantimes.com/ht-img/img/2024/01/30/550x309/A-bench-of-Justice-Biswajit-Basu-has-told-the-West_1706632188572.jpg',
            description: `KOLKATA: The Calcutta high court on Tuesday directed the West Bengal police to arrest all accused in connection with the attack on some teachers inside a school near Kolkata before the class 10 board exams start on February 2.
            A bench of Justice Biswajit Basu on Monday directed the police to arrest the accused before the end of the day. The court, however, was told that the police could arrest only four persons till Tuesday afternoon. 
            “Four persons were named along with 50 others. We have arrested four persons. They were not the persons who were named in the FIR. They are among the other people. Separate teams have been formed and searches are being carried out to arrest the accused persons,” said a senior police officer.
            On Saturday, a group of people allegedly barged into classrooms of Balarampur Manmathanath Vidyamandir school, around 20 km south of Kolkata in South 24 Parganas and assaulted some teachers. The attack followed allegations that a teacher had sexually assaulted a student and the institution kept the incident under wraps.
            The teachers who were assaulted lodged a complaint with the police. The four persons named in the FIR include two TMC panchayat members Akbar Ali Khan and Alok Naru and the headmaster of the school Syed Imtiyaz Ahmed. The court has barred the headmaster from entering the school.........`,
        },
        {
            heading: '5 more Indian wetlands added to Ramsar list',
            author: '',
            date: 'Updated On Jan 31, 2024 12:58 PM IST',
            subHeading: 'Five more Indian wetlands have been added to the global list of wetlands of international importance under the Ramsar Convention.',
            image: 'https://www.hindustantimes.com/ht-img/img/2024/01/31/550x309/pexels-anna-tarazevich-6796897_1706685675492_1706685875050.jpg',
            description: `Of the five wetlands added to the Ramsar list, Magadi Kere Conservation Reserve, Ankasamudra Bird Conservation Reserve, 
            and Aghanashini Estuary are in Karnataka and Karaivetti Bird Sanctuary and Longwood
            Shola Reserve Forest are in Tamil Nadu.(Representative Photo (Unsplash))`,
        }
    ],
    reducers: {
        addNews: state => {
            state.value = state.value;
        }
    }

});


export default newsSlice.reducer;
export const { addNews } = newsSlice.actions;

console.log();