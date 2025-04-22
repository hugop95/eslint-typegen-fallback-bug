import { flatConfigsToRulesDTS } from 'eslint-typegen/core'
import { default as pluginPerfectionist } from 'eslint-plugin-perfectionist'
import {writeFileSync} from "node:fs"

const config = {
    name: 'test',
    plugins: {
        perfectionist: pluginPerfectionist,
    },
    rules: {
        'perfectionist/sort-imports': ['error']
    }
}

writeFileSync("typegen.d.ts", await flatConfigsToRulesDTS([config], {
  includeAugmentation: false,
}))
