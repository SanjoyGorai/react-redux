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
            heading: '',
            author: '',
            date: '',
            subHeading: '',
            image: '',
            description: '',
        }
        ,
        {
            heading: '',
            author: '',
            date: '',
            subHeading: '',
            image: '',
            description: '',
        }
    ],
    reducers: {
        addNews: state => {
            state.value = state.value;
        }
    }

});


export default newsSlice.reducer;
export const {addNews} = newsSlice.actions;

console.log();