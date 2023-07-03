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
        htmlMarkup: [
            '<circle></circle>',
            '<triangle></triangle>',
            '<square></square>'
        ]
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
        htmlMarkup: [
            '<triangle></triangle>',
            '<square>',
            '  <triangle class="orange"></triangle>',
            '</square>',
            '<circle></circle>',
            ]
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
        htmlMarkup: [
            '<square></square>',
            '<triangle></triangle>',
            '<circle>',
            '  <square id="romb"></square>',
            '</circle>'
        ]
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
        htmlMarkup: [
            '<square></square>',
            '<triangle></triangle>',
            '<circle></circle>'
        ]
    },
    {
        selectorName: 'select direct child',
        levelNumber: 5,
        order: 'Select a triangle in a circle:',
        selector: 'circle > triangle',
        syntax: 'A>B',
        help: 'TODO',
        svgMarkup: [
            {tag: 'square', children: [{tag: 'triangle', class: ['medium']}]},
            {tag: 'triangle'},
            {tag: 'circle', children: [{tag: 'triangle', class: ['medium', 'glowing']}]},
        ],
        htmlMarkup: [
            '<square>',
            '  <triangle class="medium"></triangle>',
            '</square>',
            '<triangle></triangle>',
            '<circle>',
            '  <triangle class="medium"></triangle>',
            '</circle>'
        ]
    },
    {
        selectorName: 'combine tags',
        levelNumber: 6,
        order: 'Select triangle and circle:',
        selector: 'triangle, circle',
        syntax: 'A, B',
        help: 'TODO',
        svgMarkup: [
            {tag: 'square'},
            {tag: 'triangle', class: ['glowing']},
            {tag: 'circle', class: ['glowing']}],
        htmlMarkup: [
            '<square></square>',
            '<triangle></triangle>',
            '<circle></circle>'
        ]
    },
    {
        selectorName: 'select first follower',
        levelNumber: 7,
        order: 'Select circle after triangle',
        selector: 'triangle + circle',
        syntax: 'A + B',
        help: 'TODO',
        svgMarkup: [
            {tag: 'triangle'},
            {tag: 'circle', class: ['glowing', 'medium']},
            {tag: 'square'},
            {tag: 'circle', class: ['medium']},
            {tag: 'triangle'},
            {tag: 'circle', class: ['glowing']},
        ],
        htmlMarkup: [
            '<triangle></triangle>',
            '<circle class="medium"></circle>',
            '<square></square>',
            '<circle class="medium"></circle>',
            '<triangle></triangle>',
            '<circle></circle>',
        ]
    },
    {
        selectorName: 'select all siblings',
        levelNumber: 8,
        order: 'Select all circles after triangle:',
        selector: 'triangle ~ circle',
        syntax: 'A~B',
        help: 'TODO',
        svgMarkup: [
            {tag: 'triangle'},
            {tag: 'circle', class: ['glowing', 'medium']},
            {tag: 'circle', class: ['glowing']},
            {tag: 'square', children: [{tag: 'circle', class: ['medium']}]},
            {tag: 'triangle'},
        ],
        htmlMarkup: [
            '<triangle></triangle>',
            '<circle class="medium"></circle>',
            '<circle></circle>',
            '<square>',
            '  <circle class="medium"></circle>',
            '</square>',
            '<triangle></triangle>',
        ]
    },
    {
        selectorName: 'empty slector',
        levelNumber: 9,
        order: 'Select all empty circles:',
        selector: 'circle:empty',
        syntax: ':empty',
        help: 'TODO',
        svgMarkup: [
            {tag: 'circle', class: ['glowing']},
            {tag: 'circle', children: [{tag: 'triangle', class: ['medium']}]},
            {tag: 'circle', class: ['glowing']},
        ],
        htmlMarkup: [
            '<circle></circle>',
            '<circle>',
            '  <triangle></triangle>',
            '</circle>',
            '<circle></circle>',
        ]
    },
    {
        selectorName: 'universal slector',
        levelNumber: 10,
        order: 'Select all inside the circles:',
        selector: 'circle *',
        syntax: 'A *',
        help: 'TODO',
        svgMarkup: [
            {tag: 'circle', children: [{tag: 'square', class: ['medium', 'glowing']}]},
            {tag: 'circle', children: [{tag: 'triangle', class: ['medium', 'glowing']}]},
            {tag: 'circle', children: [{tag: 'square', class: ['medium', 'glowing'], children: [{tag: 'triangle', class: ['small', 'glowing']}]}]},
        ],
        htmlMarkup: [
            '<circle>',
            '  <square></square>',
            '</circle>',
            '<circle>',
            '  <triangle></triangle>',
            '</circle>',
            '<circle>',
            '  <square>',
            '    <triangle></triangle>',
            '  </square>',
            '</circle>',
        ]
    },
]



