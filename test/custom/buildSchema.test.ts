import test from 'ava';

const fs = require('fs-extra')

import {Schema} from '../../src/custom/schema'

const {buildSchema} = require('../../src/custom/buildSchema')

// import {NsInfo}  from 'magicalstrings'
// import {Configuration} from 'cogs-box'
const {config} = require('./data/configStatic')
const {nsInfo} = require('./data/nsInfoStatic')

test('erring setup', async t => {
    const expectedSchema = {
        "userClasses": {"user": {"name": "user", "topSource": ""}},
        "sources": {},
        "types": {"user": {"name": "user", "dataType": "string", "sources": {}}},
        "actions": {},
        "topSource": "",
        "backend": {},
        "context": {"actionTypes": {}}
    }

    // console.log(`sampleSettings = ${JSON.stringify(sampleSettings)}`)
    // console.log(`sampleConfig = ${JSON.stringify(sampleConfig)}`)

    const generatedSchema = await buildSchema(nsInfo, config)
    console.log(`generatedSchema = ${JSON.stringify(generatedSchema)}`)
    t.deepEqual(generatedSchema, expectedSchema)

    // const error = await t.throwsAsync(async () => {
    //     await createStarter(
    //         erringSetup,
    //         noInstallationDir,
    //         {codeDir: noInstallationDir},
    //         removeExistingStarter
    //     );
    // });
    // t.regex(error.message,/error during setup/)
})

