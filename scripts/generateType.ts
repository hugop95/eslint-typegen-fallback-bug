import { pluginsToRulesDTS } from 'eslint-typegen/core'
import {writeFileSync} from "node:fs"

writeFileSync("typegen.d.ts", await pluginsToRulesDTS({
    plugin: {
        rules: {
            'schema-with-id-at-root': {
                create: () => null as any,
                meta: {
                    schema: {
                        id: 'schemaId',
                    },
                },
            },
        },
    }
}));
