export interface Intervention {
    id: number;
    intervention: number;
    type: string;
    beginning: any;
    engine: any;
    message: string;
    description: string;
    caller: string;
    ag: boolean;
    cis: number;
    destination: any;
    destination_info: string;
    destination_map: string;
    arrival: any;
    arrival_info: string;
    arrival_map: string;
    alarmed_resources: any;
    body: string;
    created: any;
}
