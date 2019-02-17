export interface InterventionStats {
    vehicle: string;
    last_intervention: any;
    stats_timeline: {
        interventions_today: number;
        interventions_yesterday: number;
        interventions_this_week: number;
        interventions_last_week: number;
        interventions_this_month: number;
        interventions_last_month: number;
        intervention_this_year: number;
    };
}
