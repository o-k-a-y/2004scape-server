import Entity from '#lostcity/entity/Entity.js';

export default class Obj extends Entity {
    type = -1;
    count = 0;

    despawn = -1;
    respawn = -1;

    // temp
    width = 1;
    length = 1;

    get id() {
        return this.type;
    }
}