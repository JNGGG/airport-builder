import ava from 'ava';
import { AirportType } from '../../../src/assets/scripts/domain/airport/AirportType';
import { airportJsonMock } from '../../_mocks/airportJsonMock';

ava('AirportType', (t) => {
    t.notThrows(() => AirportType(airportJsonMock));
});
