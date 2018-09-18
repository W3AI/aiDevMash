import { Plan } from "../project/plan.model";
import { Talent } from "../skill/talent.model";
import { Context } from "./Context";
import { Problem } from "./Problem";
import { VentureService } from "../venture/venture.service";
import * as ops from "../logic/helper";

export class Adventure {

    private ventureService: VentureService;

    problem: Problem;

    dbProject: Plan;

    dbServices: Array<Talent>;

    contexts: Array<Context> = [];

    // Constrictor for the case of one service/function/operator to be apply for the problem
    // TODO - extend constructor for Array of services relevant(by tags) to project 
    constructor(
        name: string,
        duration: number,
        cost: number,
        startScript: string,
        checkScript: string,
        inputScript: string,
        changeScript: string,
        outputScript: string
    ) {
        // First Generate a Plan via the Problem Solver
        this.problem = new Problem(startScript, checkScript);
        
    }
}