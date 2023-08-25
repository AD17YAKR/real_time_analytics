const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middlewares/async');
const Event = require('../models/event');

//@desc     Create Event Data
//@routes   POST /events
//@access   Public
exports.createEvent = asyncHandler(async (req, res, next) => {
    const event = new Event(req.body);
    await event.save();
    res.status(200).json({ message: 'Event received and saved' });
});

//@desc     Get Aggregated Event Data
//@routes   GET /metrics
//@access   Public
exports.getAggregatedEventData = asyncHandler(async (req, res, next) => {
    const opensByCountries = await aggregateByField('geo_ip.country');
    const opensByDeviceFamily = await aggregateByField('user_agent_parsed.device_family');
    const opensByType = await aggregateByField('type');
    const opensByCampaign = await aggregateByField('campaign_id');
    const opensByTransactionalType = await aggregateByField('transactional');
    const opensByIPAddress = await aggregateByField('ip_address');
    const opensByFriendlyFrom = await aggregateByField('friendly_from');
    const opensBySubject = await aggregateByField('subject');
    const opensByTemplateId = await aggregateByField('template_id');

    // Format timeseries data
    const timeseries = await Event.aggregate([
        {
            $group: {
                _id: {
                    $dateToString: { format: '%Y-%m-%d %H:%M:%S', date: '$timestamp' }
                },
                totalOpens: { $sum: 1 }
            }
        }
    ]);

    const formattedTimeseries = timeseries.map((entry) => {
        return {
            totalOpens: entry.totalOpens,
            time: new Date(entry._id).toLocaleString()
        };
    });

    // Return aggregated data
    res.status(200).json({
        opensByCountries,
        opensByDeviceFamily,
        opensByType,
        opensByCampaign,
        opensByTransactionalType,
        opensByIPAddress,
        opensByFriendlyFrom,
        opensBySubject,
        opensByTemplateId,
        timeseries: formattedTimeseries
    });
});

const aggregateByField = async (fieldName) => {
    return await Event.aggregate([
        {
            $group: {
                _id: `$${fieldName}`,
                count: { $sum: 1 }
            }
        }
    ]);
};
