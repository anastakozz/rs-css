import { LevelI } from "../utils/types";

export const levelsArr: LevelI[] = [
    {
        selectorName: 'select by tag',
        levelNumber: 1,
        order: 'select a square',
        selector: 'tag',
        syntax: 'A',
        help: 'TODO',
        svgMarkup: [
            {tag: 'circle'},
            {tag: 'triangle'},
            {tag: 'square', class: 'glowing'},
        ],
    },
    {
        selectorName: 'select by class',
        levelNumber: 2,
        order: 'select orange triangle',
        selector: 'class',
        syntax: '.',
        help: 'TODO',
        svgMarkup: [
            {tag: 'triangle'},
            {tag: 'square', children: [{tag: 'triangle', class: 'orange, glowing'}]},
            {tag: 'circle'}],
    },

    // {
    //     name: 'select firstchild',
    //     number: 3,
    //     order: 'select triangle in a square',
    //     selector: '>',
    // },
]
// '<circle class="shape"></circle>'


