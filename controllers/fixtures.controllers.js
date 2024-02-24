import Fixture1 from "../models/fixture1.schema.js";
import Fixture2 from "../models/fixture2.schema.js";
import {
    response_200,
    response_404,
    response_500,
} from "../utils/responseCodes.js";

async function getSchemaType(sportName) {
    const checkIn1 = await Fixture1.findOne({ Sport: sportName });
    if (checkIn1) return Fixture1;
    else {
        const checkIn2 = await Fixture2.findOne({ Sport: sportName });
        if (checkIn2) return Fixture2;
        else return null;
    }
}

export async function getBySport(req, res) {
    const sportName = req.params.sport;
    try {
        const sportSchema = getSchemaType(sportName);
        if (!sportSchema) {
            console.log("Invalid sport name.");
            response_404(res, "Invalid sport name. Please contact admins");
        }
        const sportFixtures = await sportSchema.findOne({ Sport: sportName });
        response_200(
            res,
            `Successfully fetched ${sportName} fixtures`,
            sportFixtures
        );
    } catch (err) {
        console.log(`Error occurred while fetching ${sportName}`);
        response_500(res, `Error occurred while fetching ${sportName}`, err);
    }
}

export async function getByDay(req, res) {
    const sportName = req.params.sport; //cricket, football, swimming, athletics, tabletennis, tennis, etc.
    const day = req.params.day; //1,2,3,4
    try {
        const sportSchema = getSchemaType(sportName);
        const checkDay = await sportSchema.find({
            Sport: sportName,
            Day: day,
        });
        if (checkDay.length === 0) {
            response_404(
                res,
                `No fixtures available for Day ${day} of ${sportName}`
            );
        } else {
            response_200(
                res,
                `Successfully fetched Day ${day} fixtures of ${sportName}`,
                checkDay
            );
        }
    } catch (err) {
        console.log(err);
        response_500(res, "Error while fetching sport results by day", err);
    }
}
