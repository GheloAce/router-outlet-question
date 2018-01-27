export interface HeroChoice {
    id: number;
    name: string;
}

export const heroList: HeroChoice[] = [
    {id: 5, name: 'Batman'},
    {id: 6, name: 'Wonder Woman'},
    {id: 7, name: 'Joker'},
];

export const heroMap = {
    5: {id: 5, name: 'Batman'},
    6: {id: 6, name: 'Wonder Woman'},
    7: {id: 7, name: 'Joker'},
};
