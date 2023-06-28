import { LevelI } from "../utils/types";

export const levelsArr: LevelI[] = [
    {
        selectorName: 'select by tag',
        levelNumber: 1,
        order: 'Select a square:',
        selector: 'square',
        syntax: 'A',
        help: 'TODO',
        svgMarkup: [
            {tag: 'circle'},
            {tag: 'triangle'},
            {tag: 'square', class: ['glowing']},
        ],
    },
    {
        selectorName: 'select by classname',
        levelNumber: 2,
        order: 'Select orange triangle:',
        selector: '.orange',
        syntax: '.classname',
        help: 'TODO',
        svgMarkup: [
            {tag: 'triangle'},
            {tag: 'square', children: [{tag: 'triangle', class: ['medium','orange', 'glowing']}]},
            {tag: 'circle'}],
    },
    {
        selectorName: 'select by id',
        levelNumber: 3,
        order: 'Select a romb:',
        selector: '#romb',
        syntax: '#id',
        help: 'TODO',
        svgMarkup: [
            {tag: 'square'},
            {tag: 'triangle'},
            {tag: 'circle', children: [{tag: 'square', class:['medium', 'glowing'], id: 'romb' }]}],
    },
    {
        selectorName: 'select all',
        levelNumber: 4,
        order: 'Select all shapes:',
        selector: '*',
        syntax: '*',
        help: 'TODO',
        svgMarkup: [
            {tag: 'square', class: ['glowing']},
            {tag: 'triangle', class: ['glowing']},
            {tag: 'circle', class: ['glowing']}],
    },
    {
        selectorName: 'select direct child',
        levelNumber: 5,
        order: 'Select small triangle in a circle:',
        selector: '>',
        syntax: 'A>B',
        help: 'TODO',
        svgMarkup: [
            {tag: 'square', children: [{tag: 'triangle', class: ['medium']}]},
            {tag: 'triangle'},
            {tag: 'circle', children: [{tag: 'triangle', class: ['medium', 'glowing']}]},
        ]
    },
    {
        selectorName: 'combine tags',
        levelNumber: 6,
        order: 'Select triangle and circle:',
        selector: ',',
        syntax: 'A, B',
        help: 'TODO',
        svgMarkup: [
            {tag: 'square'},
            {tag: 'triangle', class: ['glowing']},
            {tag: 'circle', class: ['glowing']}],
    },
    {
        selectorName: 'select first follower',
        levelNumber: 7,
        order: 'Select circle after triangle',
        selector: '+',
        syntax: 'A +B',
        help: 'TODO',
        svgMarkup: [
            {tag: 'triangle'},
            {tag: 'circle', class: ['glowing', 'medium']},
            {tag: 'square'},
            {tag: 'circle', class: ['medium']},
            {tag: 'triangle'},
            {tag: 'circle', class: ['glowing']},
        ]
    },
    {
        selectorName: 'select all siblings',
        levelNumber: 8,
        order: 'Select all circles after triangle:',
        selector: '~',
        syntax: 'A~B',
        help: 'TODO',
        svgMarkup: [
            {tag: 'triangle'},
            {tag: 'circle', class: ['glowing', 'medium']},
            {tag: 'circle', class: ['glowing']},
            {tag: 'square'},
            {tag: 'circle', class: ['medium']},
            {tag: 'triangle'},
        ]
    },
]



