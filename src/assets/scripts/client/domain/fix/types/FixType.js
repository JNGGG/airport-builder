import t from 'tcomb';
import {
    Position2dCreationType,
    Position2dType
} from '../../base/PositionType';
import { BaseStateType } from '../../base/StateType';

export const FixUpdateType = t.struct({
    name: t.String,
    position: Position2dCreationType
}, 'FixUpdateType');

FixUpdateType.prototype.getPositionDisplay = function() {
    return this.position.getDisplayValue();
};

export const FixListType = t.list(t.maybe(FixUpdateType));

export const FixImportType = t.struct({
    data: t.String
}, 'FixImportType');


export const FixStateType = BaseStateType.extend({
    payload: t.maybe(FixUpdateType)
}, 'FixStateType');

export const FixListStateType = BaseStateType.extend({
    payload: FixListType
});

export const FixDict = t.dict(t.String, Position2dType, 'FixDict');
