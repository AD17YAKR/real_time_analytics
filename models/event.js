const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    ab_test_id: String,
    ab_test_version: String,
    amp_enabled: Boolean,
    campaign_id: String,
    click_tracking: Boolean,
    customer_id: String,
    delv_method: String,
    event_id: String,
    friendly_from: String,
    geo_ip: {
        country: String,
        region: String,
        city: String,
        latitude: Number,
        longitude: Number,
        zip: String,
        postal_code: String
    },
    injection_time: Date,
    initial_pixel: Boolean,
    ip_address: String,
    ip_pool: String,
    mailbox_provider: String,
    mailbox_provider_region: String,
    message_id: String,
    msg_from: String,
    msg_size: String,
    num_retries: String,
    open_tracking: Boolean,
    queue_time: String,
    rcpt_meta: {
        customKey: String
    },
    rcpt_tags: [String],
    rcpt_to: String,
    rcpt_hash: String,
    raw_rcpt_to: String,
    rcpt_type: String,
    recipient_domain: String,
    routing_domain: String,
    scheduled_time: Date,
    sending_ip: String,
    subaccount_id: String,
    subject: String,
    template_id: String,
    template_version: String,
    timestamp: Date,
    transactional: String,
    transmission_id: String,
    type: String,
    user_agent: String,
    user_agent_parsed: {
        agent_family: String,
        device_brand: String,
        device_family: String,
        os_family: String,
        os_version: String,
        is_mobile: Boolean,
        is_proxy: Boolean,
        is_prefetched: Boolean
    }
});

module.exports = mongoose.model('Event', EventSchema);
