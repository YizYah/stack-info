import test from 'ava';
const fs = require('fs-extra')

import {Schema} from '../../src/custom/schema'
const {buildSchema} = require('../../src/custom/buildSchema')

import {NsInfo}  from 'magicalstrings'
import {Configuration} from 'cogs-box'

test.skip('erring setup', async t => {
    const sampleSettings: NsInfo = await fs.readJson(__dirname + '/data/settings.json')
    const sampleConfig: Configuration = await fs.readJson(__dirname + '/data/config.json')
    const expectedSchema= await fs.readJson(__dirname + '/data/schema.json')
    console.log(`sampleSettings = ${JSON.stringify(sampleSettings)}`)
    console.log(`sampleConfig = ${JSON.stringify(sampleConfig)}`)

    const generatedSchema = await buildSchema(sampleSettings, sampleConfig)
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

