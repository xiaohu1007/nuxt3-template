/*
 * @Author: 吴昊虎 wuhaohu@zhangzhongyun.com
 * @Date: 2024-10-29 15:56:35
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-10-30 10:07:26
 * @Description:
 * @FilePath: \joyreels-h5\commitlint.config.ts
 */
import type { UserConfig } from '@commitlint/types'
import { RuleConfigSeverity } from '@commitlint/types'

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  formatter: '@commitlint/format',
  rules: {
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      [
        'feat',
        'fix',
        'perf',
        'style',
        'docs',
        'test',
        'refactor',
        'build',
        'ci',
        'chore',
        'revert',
        'wip',
        'workflow',
        'types',
        'release',
      ],
    ],
  },
}

export default Configuration
