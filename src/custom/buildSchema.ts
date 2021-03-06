'use strict'

import {NsInfo}  from 'magicalstrings'
import {Configuration} from 'cogs-box'
import {Schema} from './schema'
import {addUserClass} from './newUserClass'

import {addUnits} from './addUnits'
import {addJoins} from './addJoins'
import {setSelectionRoots} from './setSelectionRoots'
const {allCaps} = require('magicalstrings').inflections
const emptySchema: Schema = {
  userClasses: {},
  sources: {},
  types: {},
  actions: {},
  topSource: '',
}

export const buildSchema: (nsInfo: NsInfo, config: Configuration) => Promise<Schema> = async (nsInfo: NsInfo, config: Configuration) => {
  let schema: Schema = emptySchema

  schema.backend = Object.assign({}, nsInfo.backend)

  const actionsByType: any = {}
  if (nsInfo.backend) {
    const actionsInfo = nsInfo.backend.ids.actions
    if (actionsInfo) {
      const actionUnits = Object.keys(actionsInfo)
      actionUnits.map(unit => {
        const unitInfo = actionsInfo[unit]
        const unitTypes = Object.keys(unitInfo)
        unitTypes.map(type => {
          const typeInfo = unitInfo[type]
          const actionTypes = Object.keys(typeInfo)
          actionTypes.map(actionType => {
            const actionId = typeInfo[actionType]
            const actionConst = `${allCaps(actionType)}_${allCaps(type)}_FOR_${allCaps(unit)}_ACTION_ID`
            if (actionsByType[actionType])
              actionsByType[actionType].actions[actionId] = {actionId, actionConst}
            else actionsByType[actionType] = {
              actionType: actionType,
              actions: {
                [actionId]: {actionId, actionConst},
              },
            }
          })
        })
      })
    }
  }

  schema.context = {actionTypes: actionsByType}

  const {units, userClass, joins} = nsInfo
  schema = addUserClass(schema, userClass)

  schema = addUnits(
    units, schema, config
  )
  if (joins) {
    schema = addJoins(joins, schema)
  }

  schema = setSelectionRoots(schema)

  // console.log(`schema = ${JSON.stringify(schema, null, 2)}`)

  return schema
}
