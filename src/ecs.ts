// Base Definitions
export type EntityId = string

export interface Entity {
    id: EntityId;
    components: Component[];
}

export interface Component {
    type: string;
}