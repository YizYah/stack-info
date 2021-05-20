
[//]: # ( ns__file unit: standard, comp: README.md )

[//]: # ( ns__custom_start beginning )

[//]: # ( ns__custom_end beginning )

[//]: # ( ns__start_section intro )

[//]: # ( ns__custom_start description )
stack-info
======
returns a schema for an application stack.  Used by NoStack.

[//]: # ( ns__custom_end description )

[//]: # ( ns__custom_start afterDescription )

[//]: # ( ns__custom_end afterDescription )

[//]: # ( ns__custom_start badges )

[//]: # ( ns__start_section usageSection )

[![codecov](https://codecov.io/gh/YizYah/stack-info/branch/main/graph/badge.svg?token=019QO4XK1Z)](https://codecov.io/gh/YizYah/stack-info)
[![Version](https://img.shields.io/npm/v/stack-info.svg)](https://npmjs.org/package/stack-info)
[![Downloads/week](https://img.shields.io/npm/dw/stack-info.svg)](https://npmjs.org/package/stack-info)
[![License](https://img.shields.io/npm/l/stack-info.svg)](https://github.com/YizYah/stack-info/blob/master/package.json)

[![Geenee](https://img.shields.io/badge/maintained%20by-geenee-brightgreen)](https://npmjs.org/package/geenee)
[![Template](https://img.shields.io/badge/template-ts--packrat-blue)](https://npmjs.org/package/ts-packrat)

[//]: # ( ns__custom_end badges )

[//]: # ( ns__end_section intro )


[//]: # ( ns__start_section api )


[//]: # ( ns__custom_start Usage )

# What
A tool for specifying a schema for the data needs of an application.  Exports a [schema type](./src/custom/schema.ts).  Useful for templates for [NoStack](https://www.nostack.net/) applications, and for some templates that provide front end code for showing or using dynamic data.
 
# Usage
First, install the package:
```
npm i stack-info
```
Here is a sample usage:
```
const stack-info = require('stack-info')
```

[//]: # ( ns__custom_end Usage )



[//]: # ( ns__custom_start APIIntro )
# API

```
async function stackInfo: Schema (settings: NsInfo, config: Configuration)
```
* The `settings` parameter is a `NsInfo` as exposed in [magicalstrings](https://www.npmjs.com/package/magicalstrings).  It is the settings for a given code base generated by a template.
* The configuration is a`Configuration` type from [cogs-box](https://www.npmjs.com/package/cogs-box).  The template has the configuration, which specifies what is necessary for the settings.

The output is a `Schema` type.  Following are the keys for a Schema:
```
  topSource: string;
  userClasses: UserClasses;
  sources: Sources;
  types: Types;
  actions: ActionsByActionType;
  backend?: BackendData;
  context?: ContextSupport;
```
For more details, check out the [interface in the code](./src/custom/schema.ts).


[//]: # ( ns__custom_end APIIntro )


[//]: # ( ns__custom_start constantsIntro )

[//]: # ( ns__custom_end constantsIntro )



[//]: # ( ns__start_section types )


[//]: # ( ns__end_section types )


[//]: # ( ns__end_section api )

