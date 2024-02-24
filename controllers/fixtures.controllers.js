import Fixture from "../models/fixture.schema.js";
import {
    response_200,
    response_404,
    response_500,
} from "../utils/responseCodes.js";

export async function getBySport(req, res) {
    const sportName = req.params.sport;
    try {
        const sportFixtures = await Fixture.find({
            Sport: sportName,
        });
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
    const sportName = req.params.sport; //cricket, football, swimming, athletics, tabletennis, tennis, etc. keep as dropdown
    const day = req.params.day; //1,2,3,4
    try {
        const checkDay = await Fixture.find({
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

export async function createFixture(req, res) {
    // drop down on admin side
    try {
        const sportName = req.body.sport;
        // 1,2,3,4
        const day = req.body.day;
        // date
        const date = req.body.date;
        // tinymce
        const data = req.body.htmlData;

        const addFixture = await Fixture.create({
            Sport: sportName,
            Day: day,
            Date: date,
            HTMLString: data,
        });

        if (addFixture) {
            console.log(
                `Successfully added fixture for Day ${day} of ${sportName}`
            );
            response_200(
                res,
                `Successfully added fixture for Day ${day} of ${sportName}`,
                addFixture
            );
        }
    } catch (err) {
        console.log(`Error occurred while creating fixture`);
        response_500(res, `Error occurred while creating fixture`, err);
    }
}
