import { flatConfigsToRulesDTS } from 'eslint-typegen/core'
import { default as pluginPerfectionist } from 'eslint-plugin-perfectionist'

const config = {
    name: 'test',
    plugins: {
        perfectionist: pluginPerfectionist,
    },
    rules: {
        'perfectionist/sort-imports': ['error']
    }
}

await flatConfigsToRulesDTS([config], { // Should fail here
  includeAugmentation: false,
})
